import 'server-only'
import { randomUUID } from 'node:crypto'
import { isR2Configured } from '@/lib/env'
import { createServiceSupabase } from '@/lib/supabase/service'
import { extensionForMime, isAllowedImageType, R2_MAX_BYTES, uploadToR2 } from '@/lib/r2'
import { feedKeepIds, shouldPruneInstagram } from '@/lib/instagram-keep'
import { loadSecrets, setApiSecret } from '@/lib/secrets/store'

const GRAPH_HOST = 'https://graph.instagram.com'
const GRAPH_VERSION = /^v\d+\.\d+$/.test(process.env.INSTAGRAM_GRAPH_VERSION ?? '')
  ? process.env.INSTAGRAM_GRAPH_VERSION!
  : 'v22.0'
const FIELDS = 'id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,children{id,media_type,media_url,thumbnail_url}'
const LOCK_MS = 120_000

type GraphChild = { id?: string; media_type?: string; media_url?: string; thumbnail_url?: string }
type GraphMedia = {
  id: string
  caption?: string
  media_type?: string
  media_url?: string
  permalink?: string
  thumbnail_url?: string
  timestamp?: string
  children?: { data?: GraphChild[] }
}
type GraphError = { error?: { code?: number; type?: string; message?: string } }
type Profile = { id?: string; user_id?: string; username?: string; account_type?: string }
type ServiceDb = NonNullable<ReturnType<typeof createServiceSupabase>>
export type InstagramSyncResult = { ok: boolean; count: number; error?: string; skipped?: boolean }

function graphUrl(path: string, params: Record<string, string> = {}): string {
  const url = new URL(`${GRAPH_HOST}/${GRAPH_VERSION}/${path.replace(/^\//, '')}`)
  for (const [key, value] of Object.entries(params)) url.searchParams.set(key, value)
  return url.toString()
}

async function graphGet<T>(path: string, token: string, params: Record<string, string> = {}): Promise<T> {
  for (let attempt = 0; attempt < 3; attempt++) {
    const response = await fetch(graphUrl(path, params), {
      headers: { Accept: 'application/json', Authorization: `Bearer ${token}` },
      cache: 'no-store',
      signal: AbortSignal.timeout(12_000),
    })
    const data = (await response.json()) as T & GraphError
    if (response.ok && !data.error) return data
    if ([429, 500, 502, 503, 504].includes(response.status) && attempt < 2) {
      await new Promise((resolve) => setTimeout(resolve, 300 * 2 ** attempt))
      continue
    }
    const code = data.error?.code
    if (response.status === 401 || response.status === 403 || [190, 200, 10].includes(code ?? -1)) {
      throw new Error('Instagram-Token ungültig oder instagram_business_basic fehlt')
    }
    throw new Error(`Instagram API Fehler (HTTP ${response.status}${code ? `, Code ${code}` : ''})`)
  }
  throw new Error('Instagram API vorübergehend nicht erreichbar')
}

/** Always resolve the account from the token. Never trust a previously stored user id. */
export async function validateInstagramToken(token: string): Promise<{ userId: string; username: string }> {
  const profile = await graphGet<Profile>('me', token, { fields: 'id,user_id,username,account_type' })
  const userId = profile.user_id || profile.id
  if (!userId || !/^\d+$/.test(userId)) throw new Error('Instagram konnte keine gültige Konto-ID liefern')
  if (profile.account_type && !['BUSINESS', 'MEDIA_CREATOR', 'CREATOR'].includes(profile.account_type)) {
    throw new Error('Instagram benötigt ein Business- oder Creator-Konto')
  }
  return { userId, username: profile.username ?? '' }
}

function imageOf(item: GraphMedia): string | undefined {
  if (item.media_type === 'VIDEO') return item.thumbnail_url
  if (item.media_type === 'CAROUSEL_ALBUM') {
    const children = item.children?.data ?? []
    const image = children.find((child) => child.media_type === 'IMAGE')
    const video = children.find((child) => child.media_type === 'VIDEO')
    return image?.media_url || image?.thumbnail_url || video?.thumbnail_url || item.thumbnail_url
  }
  return item.media_url || item.thumbnail_url
}

export function trustedInstagramImageUrl(url: string): boolean {
  try {
    const parsed = new URL(url)
    const hostname = parsed.hostname.toLowerCase()
    return parsed.protocol === 'https:' &&
      ['cdninstagram.com', 'fbcdn.net', 'fbsbx.com', 'instagram.com'].some(
        (domain) => hostname === domain || hostname.endsWith(`.${domain}`)
      )
  } catch {
    return false
  }
}

async function downloadInstagramImage(url: string): Promise<{ bytes: Buffer; mime: string }> {
  let current = url
  for (let redirects = 0; redirects < 4; redirects++) {
    if (!trustedInstagramImageUrl(current)) throw new Error('Nicht erlaubte Instagram-Bildquelle')
    const response = await fetch(current, {
      redirect: 'manual',
      cache: 'no-store',
      signal: AbortSignal.timeout(15_000),
    })
    if ([301, 302, 303, 307, 308].includes(response.status)) {
      const destination = response.headers.get('location')
      if (!destination) throw new Error('Instagram-Bildweiterleitung ungültig')
      current = new URL(destination, current).toString()
      continue
    }
    if (!response.ok || !response.body) throw new Error(`Bilddownload fehlgeschlagen (HTTP ${response.status})`)
    const mime = response.headers.get('content-type')?.split(';')[0]?.toLowerCase() || ''
    if (!isAllowedImageType(mime)) {
      await response.body.cancel()
      throw new Error('Instagram hat kein unterstütztes Bild geliefert')
    }
    const declaredSize = Number(response.headers.get('content-length') || 0)
    if (declaredSize > R2_MAX_BYTES) {
      await response.body.cancel()
      throw new Error('Instagram-Bild überschreitet das Dateilimit')
    }
    const parts: Buffer[] = []
    let length = 0
    const reader = response.body.getReader()
    try {
      while (true) {
        const { value, done } = await reader.read()
        if (done) break
        length += value.byteLength
        if (length > R2_MAX_BYTES) throw new Error('Instagram-Bild überschreitet das Dateilimit')
        parts.push(Buffer.from(value))
      }
    } finally {
      await reader.cancel().catch(() => {})
    }
    return { bytes: Buffer.concat(parts, length), mime }
  }
  throw new Error('Instagram-Bild hat zu viele Weiterleitungen')
}

async function copyStillToR2(source: string, id: string, current?: string): Promise<string> {
  const base = (process.env.R2_PUBLIC_URL ?? '').replace(/\/$/, '')
  if (current?.startsWith(`${base}/instagram/`) && base) return current
  const { bytes, mime } = await downloadInstagramImage(source)
  const ext = extensionForMime(mime)
  return uploadToR2(`instagram/${encodeURIComponent(id)}.${ext}`, bytes, mime)
}

async function loadToken(supabase: ServiceDb): Promise<string | undefined> {
  const { values, sources } = await loadSecrets()
  if (sources.instagram_access_token === 'db') return values.instagram_access_token
  const { data, error } = await supabase.from('instagram_auth').select('access_token').eq('id', true).maybeSingle()
  if (error) throw new Error('Instagram-Authentifizierungsdatenbank nicht erreichbar')
  return (data?.access_token as string | undefined) || values.instagram_access_token
}

async function refreshLongLivedToken(token: string): Promise<{ token: string; expiresIn?: number } | null> {
  try {
    const url = new URL(`${GRAPH_HOST}/refresh_access_token`)
    url.searchParams.set('grant_type', 'ig_refresh_token')
    // This endpoint specifically requires the token as a query parameter.
    url.searchParams.set('access_token', token)
    const response = await fetch(url.toString(), { cache: 'no-store', signal: AbortSignal.timeout(12_000) })
    const body = (await response.json()) as { access_token?: string; expires_in?: number }
    if (!response.ok || !body.access_token) return null
    return { token: body.access_token, expiresIn: body.expires_in }
  } catch {
    return null
  }
}

async function persistAuth(supabase: ServiceDb, token: string, userId: string, username: string) {
  const refreshed = await refreshLongLivedToken(token)
  if (refreshed?.token) {
    const result = await setApiSecret('instagram_access_token', refreshed.token)
    if (!result.ok) throw new Error('Instagram-Token konnte nicht verschlüsselt verlängert werden')
  }
  const payload: Record<string, string | boolean> = {
    id: true,
    access_token: '', // Never write tokens in cleartext to the legacy table.
    user_id: userId,
    username,
    updated_at: new Date().toISOString(),
  }
  if (refreshed?.expiresIn) {
    payload.expires_at = new Date(Date.now() + refreshed.expiresIn * 1000).toISOString()
  }
  const { error } = await supabase.from('instagram_auth').upsert(payload, { onConflict: 'id' })
  if (error) throw new Error('Instagram-Kontometadaten konnten nicht gespeichert werden')
}

async function takeLease(supabase: ServiceDb, owner: string): Promise<boolean> {
  const { error: seedError } = await supabase.from('instagram_sync_state')
    .upsert({ id: true }, { onConflict: 'id', ignoreDuplicates: true })
  if (seedError) throw new Error('Instagram-Synchronisierungsstatus fehlt (Datenbankmigration erforderlich)')
  const now = new Date()
  const { data, error } = await supabase.from('instagram_sync_state')
    .update({
      lock_owner: owner,
      locked_until: new Date(now.getTime() + LOCK_MS).toISOString(),
      last_attempt_at: now.toISOString(),
      last_error: null,
    })
    .eq('id', true)
    .or(`locked_until.is.null,locked_until.lt.${now.toISOString()}`)
    .select('id')
  if (error) throw new Error('Instagram-Sperre konnte nicht gesetzt werden')
  return (data?.length ?? 0) > 0
}

async function releaseLease(supabase: ServiceDb, owner: string, result: InstagramSyncResult) {
  const payload: Record<string, string | number | null> = {
    lock_owner: null,
    locked_until: null,
    last_error: result.ok ? null : (result.error ?? 'Synchronisierung fehlgeschlagen').slice(0, 300),
    imported_count: result.count,
  }
  if (result.ok) payload.last_success_at = new Date().toISOString()
  const { error } = await supabase.from('instagram_sync_state')
    .update(payload).eq('id', true).eq('lock_owner', owner)
  if (error) console.error('[instagram] unable to record sync status', error.message)
}

/** Shared by the admin button, token setup, and the authenticated Vercel cron. */
export async function syncInstagramPosts(): Promise<InstagramSyncResult> {
  const supabase = createServiceSupabase()
  if (!supabase) return { ok: false, count: 0, error: 'Supabase Service Role ist nicht konfiguriert' }
  if (!isR2Configured()) return { ok: false, count: 0, error: 'Cloudflare R2 ist für dauerhafte Instagram-Bilder nicht konfiguriert' }

  const owner = randomUUID()
  let acquired = false
  let result: InstagramSyncResult = { ok: false, count: 0, error: 'Synchronisierung fehlgeschlagen' }
  try {
    acquired = await takeLease(supabase, owner)
    if (!acquired) return { ok: true, count: 0, skipped: true }
    const token = await loadToken(supabase)
    if (!token) throw new Error('Instagram Access Token fehlt')
    const profile = await validateInstagramToken(token)
    const { data: feed } = await (async () => {
      const feed = await graphGet<{ data?: GraphMedia[] }>(`${profile.userId}/media`, token, { fields: FIELDS, limit: '12' })
      return { data: feed.data ?? [] }
    })()
    const items = feed ?? []
    const existingIds = feedKeepIds(items)
    const { data: existing, error: existingError } = existingIds.length
      ? await supabase.from('instagram_posts').select('id,media_url').in('id', existingIds)
      : { data: [], error: null }
    if (existingError) throw new Error('Bestehende Instagram-Bilder konnten nicht geprüft werden')
    const previous = new Map((existing ?? []).map((row) => [row.id as string, row.media_url as string]))
    let count = 0
    const problems: string[] = []
    for (const item of items) {
      if (!item.id || !item.permalink) {
        problems.push('Beitrag ohne ID oder Link')
        continue
      }
      const image = imageOf(item)
      if (!image) {
        problems.push(`Kein Vorschaubild für Beitrag ${item.id}`)
        continue
      }
      try {
        const stored = await copyStillToR2(image, item.id, previous.get(item.id))
        const { error } = await supabase.from('instagram_posts').upsert({
          id: item.id,
          caption: item.caption ?? '',
          media_type: item.media_type ?? 'IMAGE',
          media_url: stored,
          thumbnail_url: stored,
          permalink: item.permalink,
          timestamp: item.timestamp ?? null,
          synced_at: new Date().toISOString(),
        }, { onConflict: 'id' })
        if (error) throw new Error('Datenbank konnte Beitrag nicht speichern')
        count += 1
      } catch (error) {
        console.error('[instagram] post sync failed', item.id, error instanceof Error ? error.message : 'unknown')
        problems.push(`Beitrag ${item.id} konnte nicht gespeichert werden`)
      }
    }
    // Incomplete sync must never remove the existing gallery.
    if (!problems.length && shouldPruneInstagram(count, existingIds)) {
      const { error } = await supabase.from('instagram_posts').delete().notIn('id', existingIds)
      if (error) problems.push('Alte Beiträge konnten nicht bereinigt werden')
    }
    await persistAuth(supabase, token, profile.userId, profile.username)
    result = problems.length
      ? { ok: false, count, error: `Instagram teilweise synchronisiert: ${problems[0]} (${problems.length} Fehler)` }
      : { ok: true, count }
    return result
  } catch (error) {
    result = { ok: false, count: result.count, error: error instanceof Error ? error.message : 'Instagram-Synchronisierung fehlgeschlagen' }
    return result
  } finally {
    if (acquired) await releaseLease(supabase, owner, result)
  }
}

'use server'

import { revalidatePath } from 'next/cache'
import { requireAdmin } from '@/lib/admin-gate'
import { isApiSecretKey } from '@/lib/secrets/catalog'
import { clearApiSecret, setApiSecret, loadSecrets } from '@/lib/secrets/store'
import { syncInstagramPosts, validateInstagramToken } from '@/lib/instagram'

type SecretActionResult = { ok: true; warning?: string; imported?: number } | { ok: false; error: string }

export async function saveSecret(key: string, value: string): Promise<SecretActionResult> {
  const gate = await requireAdmin()
  if (gate.error) return { ok: false, error: gate.error }
  if (gate.demo) return { ok: false, error: gate.t('admin.demoWriteDisabled') }
  if (!isApiSecretKey(key)) return { ok: false, error: 'Unbekannter Schlüssel' }
  if (key === 'instagram_access_token') {
    try {
      await validateInstagramToken(value.trim())
    } catch (error) {
      return { ok: false, error: error instanceof Error ? error.message : 'Instagram-Token ist ungültig' }
    }
  }
  if (key === 'instagram_user_id') {
    const { values } = await loadSecrets()
    if (values.instagram_access_token) {
      try {
        const profile = await validateInstagramToken(values.instagram_access_token)
        if (value.trim() !== profile.userId) {
          return { ok: false, error: 'Die Instagram User-ID passt nicht zum verbundenen Konto' }
        }
      } catch (error) {
        return { ok: false, error: error instanceof Error ? error.message : 'Konto konnte nicht validiert werden' }
      }
    }
  }
  const result = await setApiSecret(key, value)
  if (result.ok) {
    revalidatePath('/admin/secrets')
    revalidatePath('/admin/health')
    if (key === 'instagram_access_token' || key === 'instagram_user_id') {
      const synced = await syncInstagramPosts()
      revalidatePath('/admin/instagram')
      revalidatePath('/')
      return synced.ok
        ? { ok: true, imported: synced.count }
        : { ok: true, warning: 'Wert gespeichert, aber Import fehlgeschlagen: ' + (synced.error ?? 'unbekannter Fehler') }
    }
  }
  return result
}

export async function clearSecret(key: string): Promise<SecretActionResult> {
  const gate = await requireAdmin()
  if (gate.error) return { ok: false, error: gate.error }
  if (gate.demo) return { ok: false, error: gate.t('admin.demoWriteDisabled') }
  if (!isApiSecretKey(key)) return { ok: false, error: 'Unbekannter Schlüssel' }
  const result = await clearApiSecret(key)
  if (result.ok) {
    revalidatePath('/admin/secrets')
    revalidatePath('/admin/health')
    revalidatePath('/admin/instagram')
  }
  return result
}

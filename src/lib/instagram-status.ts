import 'server-only'
import { createServiceSupabase } from '@/lib/supabase/service'
import { isR2Configured } from '@/lib/env'
import { loadSecrets } from '@/lib/secrets/store'

export type InstagramSyncStatus = {
  configured: boolean
  storageReady: boolean
  schedulerReady: boolean
  username: string | null
  userId: string | null
  expiresAt: string | null
  lastAttemptAt: string | null
  lastSuccessAt: string | null
  lastError: string | null
  lastImported: number
  totalPosts: number
  running: boolean
}

export async function getInstagramSyncStatus(): Promise<InstagramSyncStatus> {
  const defaults: InstagramSyncStatus = {
    configured: false, storageReady: isR2Configured(),
    schedulerReady: Boolean(process.env.CRON_SECRET),
    username: null, userId: null, expiresAt: null,
    lastAttemptAt: null, lastSuccessAt: null, lastError: null,
    lastImported: 0, totalPosts: 0, running: false,
  }
  const supabase = createServiceSupabase()
  if (!supabase) return defaults
  const [secrets, auth, state, count] = await Promise.all([
    loadSecrets(),
    supabase.from('instagram_auth').select('user_id,username,expires_at').eq('id', true).maybeSingle(),
    supabase.from('instagram_sync_state')
      .select('last_attempt_at,last_success_at,last_error,imported_count,locked_until')
      .eq('id', true).maybeSingle(),
    supabase.from('instagram_posts').select('id', { count: 'exact', head: true }),
  ])
  return {
    ...defaults,
    configured: Boolean(secrets.values.instagram_access_token || process.env.INSTAGRAM_ACCESS_TOKEN),
    username: auth.data?.username ?? null,
    userId: auth.data?.user_id ?? null,
    expiresAt: auth.data?.expires_at ?? null,
    lastAttemptAt: state.data?.last_attempt_at ?? null,
    lastSuccessAt: state.data?.last_success_at ?? null,
    lastError: state.data?.last_error ?? null,
    lastImported: state.data?.imported_count ?? 0,
    totalPosts: count.count ?? 0,
    running: Boolean(state.data?.locked_until && Date.parse(state.data.locked_until) > Date.now()),
  }
}

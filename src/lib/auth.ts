import { isDemoMode } from '@/lib/env'
import { createServerSupabase } from '@/lib/supabase/server'

export async function getAdminUser() {
  if (isDemoMode()) {
    return { demo: true as const, user: null, isAdmin: false }
  }
  const supabase = await createServerSupabase()
  if (!supabase) {
    return { demo: true as const, user: null, isAdmin: false }
  }
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    return { demo: false as const, user: null, isAdmin: false }
  }
  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .maybeSingle()
  return {
    demo: false as const,
    user,
    isAdmin: profile?.role === 'admin',
  }
}

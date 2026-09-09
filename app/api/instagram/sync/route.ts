import { NextResponse } from 'next/server'
import { getAdminUser } from '@/lib/auth'
import { isDemoMode } from '@/lib/env'
import { syncInstagramPosts } from '@/lib/instagram'

export async function POST() {
  if (isDemoMode()) {
    return NextResponse.json({ error: 'Demo Mode: Sync deaktiviert' }, { status: 400 })
  }
  const session = await getAdminUser()
  if (!session.isAdmin) {
    return NextResponse.json({ error: 'Nicht autorisiert' }, { status: 401 })
  }
  const result = await syncInstagramPosts()
  return NextResponse.json(result, { status: result.ok ? 200 : 500 })
}

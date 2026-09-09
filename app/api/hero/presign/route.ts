import { NextResponse } from 'next/server'
import { getAdminUser } from '@/lib/auth'
import { isDemoMode, isR2Configured } from '@/lib/env'
import {
  extensionForMime,
  isAllowedVideoType,
  presignPut,
  publicObjectUrl,
  R2_VIDEO_MAX_BYTES,
} from '@/lib/r2'

export async function POST(request: Request) {
  if (isDemoMode()) {
    return NextResponse.json({ error: 'Demo Mode: Upload deaktiviert' }, { status: 400 })
  }
  const session = await getAdminUser()
  if (!session.isAdmin) {
    return NextResponse.json({ error: 'Nicht autorisiert' }, { status: 401 })
  }
  if (!isR2Configured()) {
    return NextResponse.json({ error: 'R2 ist nicht konfiguriert' }, { status: 400 })
  }

  const body = (await request.json()) as { contentType?: string; size?: number }
  const contentType = String(body.contentType || '')
  const size = Number(body.size || 0)
  if (!isAllowedVideoType(contentType)) {
    return NextResponse.json({ error: 'Nur MP4, WebM oder MOV' }, { status: 400 })
  }
  if (!size || size > R2_VIDEO_MAX_BYTES) {
    return NextResponse.json({ error: 'Video größer als 80MB' }, { status: 400 })
  }

  const key = `hero/${crypto.randomUUID()}.${extensionForMime(contentType)}`
  const uploadUrl = await presignPut(key, contentType)
  return NextResponse.json({
    uploadUrl,
    key,
    publicUrl: publicObjectUrl(key),
  })
}

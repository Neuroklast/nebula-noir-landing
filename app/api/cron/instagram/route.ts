import { NextResponse } from 'next/server'
import { syncInstagramPosts } from '@/lib/instagram'

function authorized(request: Request): boolean {
  const secret = process.env.CRON_SECRET
  if (!secret) return false
  const header = request.headers.get('authorization')
  if (header === `Bearer ${secret}`) return true
  const vercelCron = request.headers.get('x-vercel-cron')
  return Boolean(vercelCron)
}

export async function GET(request: Request) {
  if (!authorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const result = await syncInstagramPosts()
  const status = result.ok ? 200 : 500
  return NextResponse.json(result, { status })
}

import { InstagramManager } from '@/components/admin/InstagramManager'
import { getInstagramSyncStatus } from '@/lib/instagram-status'

export const dynamic = 'force-dynamic'

export default async function AdminInstagramPage() {
  const status = await getInstagramSyncStatus()
  return <InstagramManager status={status} />
}

import { redirect } from 'next/navigation'
import { getAdminUser } from '@/lib/auth'
import { AdminShell } from '@/components/admin/AdminShell'

export const dynamic = 'force-dynamic'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getAdminUser()
  if (session.demo) {
    return <AdminShell demo>{children}</AdminShell>
  }
  if (!session.user) {
    redirect('/login')
  }
  if (!session.isAdmin) {
    return (
      <div className="min-h-screen text-foreground flex items-center justify-center">
        <p className="uppercase tracking-[0.2em]">403 — Kein Admin</p>
      </div>
    )
  }
  return <AdminShell>{children}</AdminShell>
}

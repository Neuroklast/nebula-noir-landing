'use client'

import { createBrowserSupabase } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { Toaster } from '@/components/ui/sonner'

const links = [
  { href: '/admin', label: 'Übersicht' },
  { href: '/admin/gallery', label: 'Galerie' },
  { href: '/admin/events', label: 'Events' },
  { href: '/admin/info', label: 'Info' },
  { href: '/admin/inquiries', label: 'Anfragen' },
  { href: '/admin/instagram', label: 'Instagram' },
]

export function AdminShell({
  children,
  demo,
}: {
  children: React.ReactNode
  demo?: boolean
}) {
  const router = useRouter()

  const logout = async () => {
    const supabase = createBrowserSupabase()
    await supabase?.auth.signOut()
    router.push('/login')
    router.refresh()
  }

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden max-w-full relative">
      <div className="crt-scanline" />
      <div className="relative z-[20]">
        <header className="border-b-2 border-foreground/20 py-6">
          <div className="container max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h1 className="text-2xl uppercase tracking-[0.2em] bioshock-glow-animated">Admin</h1>
            <nav className="flex flex-wrap gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm uppercase tracking-[0.2em] text-foreground/90 hover:text-foreground transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/"
                className="text-sm uppercase tracking-[0.2em] text-foreground/90 hover:text-foreground transition-all duration-300"
              >
                Site
              </a>
              {!demo ? (
                <button
                  type="button"
                  onClick={logout}
                  className="text-sm uppercase tracking-[0.2em] text-foreground/90 hover:text-foreground transition-all duration-300"
                >
                  Logout
                </button>
              ) : null}
            </nav>
          </div>
        </header>
        {demo ? (
          <div className="border-b border-foreground/20 bg-primary/10">
            <p className="container max-w-6xl mx-auto px-4 md:px-6 py-3 text-xs uppercase tracking-wider text-foreground/80">
              Demo Mode — Writes disabled. Set Supabase keys to enable auth and persistence.
            </p>
          </div>
        ) : null}
        <main className="container max-w-6xl mx-auto px-4 md:px-6 py-12">{children}</main>
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: 'oklch(0.08 0 0)',
              color: 'oklch(0.99 0 0)',
              border: '1px solid oklch(0.45 0.15 300)',
            },
          }}
        />
      </div>
    </div>
  )
}

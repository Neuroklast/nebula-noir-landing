'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { triggerInstagramSync } from '@/lib/actions/admin'

export default function AdminInstagramPage() {
  const [busy, setBusy] = useState(false)
  return (
    <div className="space-y-8">
      <h2 className="text-3xl uppercase tracking-[0.2em] bioshock-glow-animated">Instagram</h2>
      <p className="text-foreground/70 font-light">
        Instagram API with Instagram Login (graph.instagram.com) — nur Lesen der Medien von @nebula_noir.official.
        Kein Facebook Login, kein Messenger.
      </p>
      <ul className="space-y-2 text-sm text-foreground/70 font-light">
        <li>Scope: instagram_business_basic</li>
        <li>Token: INSTAGRAM_ACCESS_TOKEN (long-lived, ~60 Tage)</li>
        <li>User-ID optional — wird sonst über GET /me gelesen</li>
      </ul>
      <Button
        type="button"
        disabled={busy}
        className="bg-transparent border-2 border-foreground text-foreground hover:bg-foreground hover:text-background uppercase tracking-[0.2em] font-semibold px-8 py-4"
        onClick={async () => {
          setBusy(true)
          const result = await triggerInstagramSync()
          setBusy(false)
          if (!result.ok) toast.error(result.error)
          else toast.success(`${result.count ?? 0} Posts synchronisiert`)
        }}
      >
        {busy ? 'Sync…' : 'Jetzt synchronisieren'}
      </Button>
    </div>
  )
}

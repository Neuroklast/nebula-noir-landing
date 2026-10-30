'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { triggerInstagramSync } from '@/lib/actions/admin'
import type { InstagramSyncStatus } from '@/lib/instagram-status'

function dateLabel(value: string | null) {
  return value ? new Date(value).toLocaleString('de-DE') : 'Noch nicht'
}

export function InstagramManager({ status }: { status: InstagramSyncStatus }) {
  const [busy, setBusy] = useState(false)
  const router = useRouter()
  const sync = async () => {
    setBusy(true)
    try {
      const result = await triggerInstagramSync()
      if (result.ok) toast.success(`Instagram synchronisiert: ${result.count} Beiträge`)
      else toast.error(result.error)
      router.refresh()
    } catch {
      toast.error('Instagram-Synchronisierung nicht erreichbar')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl uppercase tracking-[0.2em] bioshock-glow-animated">Instagram</h2>
      <p className="text-sm text-foreground/70">
        Business- oder Creator-Konto verbinden. Benötigt wird ein langlebiger Instagram User Access Token
        mit instagram_business_basic, kein Meta App-Key. Das Speichern des Tokens unter
        <a className="underline ml-1" href="/admin/secrets">Admin → API-Keys</a> startet den ersten Import automatisch.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {([
          ['Verbindung', status.configured ? 'Token hinterlegt' : 'Token fehlt'],
          ['Instagram-Konto', status.username ? '@' + status.username : 'Noch nicht erkannt'],
          ['User-ID', status.userId ?? 'Noch nicht erkannt'],
          ['Bilder gespeichert', String(status.totalPosts)],
          ['Cloudflare R2', status.storageReady ? 'Bereit' : 'Nicht konfiguriert'],
          ['Täglicher Cron', status.schedulerReady ? 'Schlüssel konfiguriert' : 'CRON_SECRET fehlt'],
          ['Letzter Versuch', dateLabel(status.lastAttemptAt)],
          ['Letzter Erfolg', dateLabel(status.lastSuccessAt)],
          ['Zuletzt importiert', String(status.lastImported)],
          ['Token gültig bis', dateLabel(status.expiresAt)],
        ] as const).map(([label, value]) => (
          <div key={label} className="border border-foreground/30 p-4 bg-background/50">
            <p className="text-xs uppercase tracking-wider text-foreground/50 mb-2">{label}</p>
            <p className="text-sm break-words">{value}</p>
          </div>
        ))}
      </div>
      {status.lastError ? (
        <div role="alert" className="border border-foreground/40 p-4">
          <p className="font-semibold mb-1">Letzter Importfehler</p>
          <p className="text-sm break-words">{status.lastError}</p>
        </div>
      ) : null}
      {!status.storageReady ? (
        <p className="text-sm text-foreground/70">
          Für dauerhaft funktionierende Bilder müssen alle Cloudflare-R2-Variablen konfiguriert sein.
          Temporäre Instagram-CDN-Adressen werden nicht mehr gespeichert.
        </p>
      ) : null}
      <Button
        type="button"
        disabled={busy || status.running || !status.configured || !status.storageReady}
        className="bg-transparent border-2 border-foreground text-foreground hover:bg-foreground hover:text-background uppercase tracking-[0.2em] font-semibold px-8 py-4"
        onClick={sync}
      >
        {busy || status.running ? 'Synchronisierung läuft' : 'Jetzt synchronisieren'}
      </Button>
    </div>
  )
}

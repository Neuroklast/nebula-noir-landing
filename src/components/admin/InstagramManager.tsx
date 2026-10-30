'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { triggerInstagramSync } from '@/lib/actions/admin'
import type { InstagramSyncStatus } from '@/lib/instagram-status'
import { useI18n } from '@/i18n/context'

const labels = {
  de: {
    intro: 'Verbinde ein Instagram Business- oder Creator-Konto. Erforderlich ist ein langlebiger Instagram User Access Token mit instagram_business_basic, kein Meta App-Key. Beim Speichern unter Admin → API-Keys startet der erste Import automatisch.',
    connection: 'Verbindung', connected: 'Token hinterlegt', missing: 'Token fehlt',
    account: 'Instagram-Konto', unknown: 'Noch nicht erkannt', userId: 'User-ID',
    stored: 'Bilder gespeichert', ready: 'Bereit', notConfigured: 'Nicht konfiguriert',
    cron: 'Täglicher Cron', cronReady: 'Schlüssel konfiguriert', cronMissing: 'CRON_SECRET fehlt',
    lastAttempt: 'Letzter Versuch', lastSuccess: 'Letzter Erfolg',
    lastImported: 'Zuletzt importiert', expiry: 'Token gültig bis',
    noDate: 'Noch nicht', errorTitle: 'Letzter Importfehler',
    storageNotice: 'Für dauerhaft funktionierende Bilder müssen alle Cloudflare-R2-Variablen konfiguriert sein. Temporäre Instagram-CDN-Adressen werden nicht gespeichert.',
    syncing: 'Synchronisierung läuft', syncNow: 'Jetzt synchronisieren',
    synced: 'Instagram synchronisiert', failed: 'Instagram-Synchronisierung nicht erreichbar',
  },
  en: {
    intro: 'Connect an Instagram Business or Creator account. You need a long-lived Instagram User Access Token with instagram_business_basic, not a Meta App key. Saving it under Admin → API Keys starts the first import automatically.',
    connection: 'Connection', connected: 'Token saved', missing: 'Token missing',
    account: 'Instagram account', unknown: 'Not identified yet', userId: 'User ID',
    stored: 'Images stored', ready: 'Ready', notConfigured: 'Not configured',
    cron: 'Daily cron', cronReady: 'Secret configured', cronMissing: 'CRON_SECRET missing',
    lastAttempt: 'Last attempt', lastSuccess: 'Last success',
    lastImported: 'Last imported', expiry: 'Token valid until',
    noDate: 'Not yet', errorTitle: 'Last import error',
    storageNotice: 'Configure all Cloudflare R2 variables for permanent images. Temporary Instagram CDN URLs are never stored.',
    syncing: 'Sync in progress', syncNow: 'Sync now',
    synced: 'Instagram synced', failed: 'Instagram sync unavailable',
  },
} as const

export function InstagramManager({ status }: { status: InstagramSyncStatus }) {
  const { locale } = useI18n()
  const copy = labels[locale]
  const [busy, setBusy] = useState(false)
  const router = useRouter()
  const dateLabel = (value: string | null) =>
    value ? new Date(value).toLocaleString(locale === 'de' ? 'de-DE' : 'en-US') : copy.noDate

  const sync = async () => {
    setBusy(true)
    try {
      const result = await triggerInstagramSync()
      if (result.ok) toast.success(`${copy.synced}: ${result.count}`)
      else toast.error(result.error)
      router.refresh()
    } catch {
      toast.error(copy.failed)
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl uppercase tracking-[0.2em] bioshock-glow-animated">Instagram</h2>
      <p className="text-sm text-foreground/70">
        {copy.intro}{' '}
        <a className="underline" href="/admin/secrets">Admin → API Keys</a>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {([
          [copy.connection, status.configured ? copy.connected : copy.missing],
          [copy.account, status.username ? '@' + status.username : copy.unknown],
          [copy.userId, status.userId ?? copy.unknown],
          [copy.stored, String(status.totalPosts)],
          ['Cloudflare R2', status.storageReady ? copy.ready : copy.notConfigured],
          [copy.cron, status.schedulerReady ? copy.cronReady : copy.cronMissing],
          [copy.lastAttempt, dateLabel(status.lastAttemptAt)],
          [copy.lastSuccess, dateLabel(status.lastSuccessAt)],
          [copy.lastImported, String(status.lastImported)],
          [copy.expiry, dateLabel(status.expiresAt)],
        ] as const).map(([label, value]) => (
          <div key={label} className="border border-foreground/30 p-4 bg-background/50">
            <p className="text-xs uppercase tracking-wider text-foreground/50 mb-2">{label}</p>
            <p className="text-sm break-words">{value}</p>
          </div>
        ))}
      </div>
      {status.lastError ? (
        <div role="alert" className="border border-foreground/40 p-4">
          <p className="font-semibold mb-1">{copy.errorTitle}</p>
          <p className="text-sm break-words">{status.lastError}</p>
        </div>
      ) : null}
      {!status.storageReady ? (
        <p className="text-sm text-foreground/70">{copy.storageNotice}</p>
      ) : null}
      <Button
        type="button"
        disabled={busy || status.running || !status.configured || !status.storageReady}
        className="bg-transparent border-2 border-foreground text-foreground hover:bg-foreground hover:text-background uppercase tracking-[0.2em] font-semibold px-8 py-4"
        onClick={sync}
      >
        {busy || status.running ? copy.syncing : copy.syncNow}
      </Button>
    </div>
  )
}

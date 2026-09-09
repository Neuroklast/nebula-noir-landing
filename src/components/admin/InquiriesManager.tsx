'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { markInquiryRead } from '@/lib/actions/admin'

type Row = { id: string; name: string; email: string; message: string; read: boolean; created_at: string }

export function InquiriesManager({ rows }: { rows: Row[] }) {
  const router = useRouter()
  if (!rows.length) {
    return <p className="text-foreground/70 font-light">Keine Anfragen.</p>
  }
  return (
    <div className="space-y-4">
      {rows.map((row) => (
        <article key={row.id} className="border-2 border-foreground/30 p-6 space-y-3">
          <p className="uppercase tracking-wider">{row.name} · {row.email}</p>
          <p className="text-sm text-foreground/70 font-light whitespace-pre-wrap">{row.message}</p>
          <p className="text-xs text-foreground/50">{new Date(row.created_at).toLocaleString('de-DE')}</p>
          <Button
            type="button"
            className="bg-transparent border-2 border-foreground text-foreground hover:bg-foreground hover:text-background uppercase tracking-[0.15em] text-xs"
            onClick={async () => {
              const result = await markInquiryRead(row.id, !row.read)
              if (!result.ok) toast.error(result.error)
              else router.refresh()
            }}
          >
            {row.read ? 'Ungelesen' : 'Gelesen'}
          </Button>
        </article>
      ))}
    </div>
  )
}

'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { clearHeroVideo, confirmHeroVideo } from '@/lib/actions/admin'
import { useT } from '@/i18n/context'

export function HeroVideoManager({
  currentUrl,
  demo,
}: {
  currentUrl?: string
  demo?: boolean
}) {
  const t = useT()
  const router = useRouter()
  const [busy, setBusy] = useState(false)

  const onUpload = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (demo) {
      toast.error(t('admin.heroDemo'))
      return
    }
    const form = e.currentTarget
    const file = (form.elements.namedItem('file') as HTMLInputElement)?.files?.[0]
    if (!file) {
      toast.error(t('admin.heroNeedFile'))
      return
    }
    setBusy(true)
    try {
      const presign = await fetch('/api/hero/presign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contentType: file.type || 'video/mp4', size: file.size }),
      })
      const json = await presign.json()
      if (!presign.ok) {
        toast.error(json.error || t('admin.heroFail'))
        return
      }
      const put = await fetch(json.uploadUrl as string, {
        method: 'PUT',
        headers: { 'Content-Type': file.type || 'video/mp4' },
        body: file,
      })
      if (!put.ok) {
        toast.error(t('admin.heroFail'))
        return
      }
      const result = await confirmHeroVideo({
        key: json.key as string,
        publicUrl: json.publicUrl as string,
      })
      if (!result.ok) {
        toast.error(result.error)
        return
      }
      toast.success(t('admin.heroSaved'))
      form.reset()
      router.refresh()
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="space-y-12">
      {currentUrl ? (
        <div className="border-2 border-foreground/30 bg-background/50 p-6 space-y-4">
          <p className="text-xs uppercase tracking-wider text-foreground/60">{t('admin.heroCurrent')}</p>
          <video src={currentUrl} className="w-full max-h-64 object-cover" muted playsInline controls />
          <Button
            type="button"
            disabled={busy || demo}
            className="bg-transparent border-2 border-foreground text-foreground hover:bg-foreground hover:text-background uppercase tracking-[0.15em] text-xs px-6 py-3"
            onClick={async () => {
              const result = await clearHeroVideo()
              if (!result.ok) toast.error(result.error)
              else {
                toast.success(t('admin.heroRemoved'))
                router.refresh()
              }
            }}
          >
            {t('admin.heroRemove')}
          </Button>
        </div>
      ) : (
        <p className="text-foreground/70 font-light">{t('admin.heroEmpty')}</p>
      )}

      <form onSubmit={onUpload} className="relative p-6 md:p-10 space-y-6 border-2 border-foreground/30 bg-background/50">
        <h3 className="text-xl uppercase tracking-[0.2em] bioshock-glow-animated">{t('admin.heroUpload')}</h3>
        <p className="text-sm text-foreground/70 font-light">{t('admin.heroHint')}</p>
        <div className="space-y-3">
          <Label className="text-sm uppercase tracking-[0.2em] text-foreground/90">{t('admin.heroFile')}</Label>
          <Input
            name="file"
            type="file"
            accept="video/mp4,video/webm,video/quicktime"
            required
            className="bg-background border-2 border-foreground/30 rounded-none"
          />
        </div>
        <Button
          type="submit"
          disabled={busy || demo}
          className="w-full bg-transparent border-2 border-foreground text-foreground hover:bg-foreground hover:text-background uppercase tracking-[0.2em] font-semibold py-4 text-sm"
        >
          {busy ? t('admin.heroUploading') : t('admin.heroSave')}
        </Button>
      </form>
    </div>
  )
}

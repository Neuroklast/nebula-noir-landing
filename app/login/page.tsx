'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArtDecoCorner } from '@/components/ArtDecoCorner'
import { createBrowserSupabase } from '@/lib/supabase/client'
import { isDemoMode } from '@/lib/env'
import { toast } from 'sonner'
import { Toaster } from '@/components/ui/sonner'
import { useT } from '@/i18n/context'

export default function LoginPage() {
  const t = useT()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState(false)
  const demo = isDemoMode()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (busy) return
    if (demo) {
      router.push('/admin')
      return
    }
    if (!email || !password) {
      toast.error(t('login.needCredentials'))
      return
    }
    const supabase = createBrowserSupabase()
    if (!supabase) {
      toast.error(t('login.noSupabase'))
      return
    }
    setBusy(true)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setBusy(false)
    if (error) {
      toast.error(error.message)
      return
    }
    router.push('/admin')
    router.refresh()
  }

  return (
    <div className="min-h-screen text-foreground flex items-center justify-center px-4">
      <Toaster position="top-center" />
      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-md p-6 md:p-10 space-y-6 md:space-y-8 border-2 border-foreground/30 bg-background/50"
      >
        <ArtDecoCorner position="top-left" size={50} delay={0.5} />
        <ArtDecoCorner position="bottom-right" size={50} delay={0.6} />
        <h1 className="text-3xl uppercase tracking-[0.2em] bioshock-glow-animated text-center">{t('login.title')}</h1>
        {demo ? (
          <p className="text-sm text-foreground/70 font-light text-center">
            {t('login.demo')}
          </p>
        ) : null}
        <div className="space-y-3">
            <Label htmlFor="email" className="text-sm uppercase tracking-[0.2em] text-foreground/90">
              {t('login.email')}
            </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-background border-0 border-b-2 border-foreground/30 focus:border-foreground rounded-none px-0 text-base transition-all duration-300"
            placeholder="admin@nebula-noir.com"
          />
        </div>
        <div className="space-y-3">
            <Label htmlFor="password" className="text-sm uppercase tracking-[0.2em] text-foreground/90">
              {t('login.password')}
            </Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-background border-0 border-b-2 border-foreground/30 focus:border-foreground rounded-none px-0 text-base transition-all duration-300"
          />
        </div>
        <Button
          type="submit"
          disabled={busy}
          className="w-full bg-transparent border-2 border-foreground text-foreground hover:bg-foreground hover:text-background uppercase tracking-[0.15em] md:tracking-[0.25em] font-semibold py-4 md:py-6 text-sm md:text-base transition-all duration-500"
        >
          {t('login.enter')}
        </Button>
      </form>
    </div>
  )
}

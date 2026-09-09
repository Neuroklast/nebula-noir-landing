import { HeroVideoManager } from '@/components/admin/HeroVideoManager'
import { getHeroVideoUrl } from '@/lib/data'
import { isDemoMode } from '@/lib/env'

export default async function AdminHeroPage() {
  const url = await getHeroVideoUrl()
  return (
    <div className="space-y-8">
      <h2 className="text-3xl uppercase tracking-[0.2em] bioshock-glow-animated">Hero</h2>
      <HeroVideoManager currentUrl={url} demo={isDemoMode()} />
    </div>
  )
}

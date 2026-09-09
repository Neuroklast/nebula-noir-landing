'use client'

import { Toaster } from '@/components/ui/sonner'
import { Navigation } from '@/components/Navigation'
import { FooterSection } from '@/components/FooterSection'
import { ArtDecoFrameAnimation } from '@/components/ArtDecoFrameAnimation'
import { ArtDecoBackground } from '@/components/ArtDecoBackground'

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden max-w-full relative">
      <div className="crt-scanline" />
      <ArtDecoBackground />
      <ArtDecoFrameAnimation />
      <div className="relative z-[20]">
        <Navigation />
        {children}
        <FooterSection />
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

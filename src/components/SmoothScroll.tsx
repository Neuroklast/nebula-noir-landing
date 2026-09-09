'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import Lenis from 'lenis'

function shouldSkip(pathname: string) {
  return pathname.startsWith('/admin') || pathname.startsWith('/login')
}

function isScrollLock() {
  return document.documentElement.classList.contains('nn-intro-lock')
}

export function SmoothScroll() {
  const pathname = usePathname()

  useEffect(() => {
    if (shouldSkip(pathname)) return

    const lenis = new Lenis({
      autoRaf: true,
      autoResize: true,
      anchors: true,
      smoothWheel: true,
      syncTouch: false,
      stopInertiaOnNavigate: true,
      respectReducedMotion: true,
      allowNestedScroll: true,
      prevent: (node) =>
        Boolean(
          node.closest(
            '[data-lenis-prevent], [role="dialog"], [data-slot="dialog-content"], [data-slot="sheet-content"], [data-radix-scroll-area-viewport]'
          )
        ),
    })

    const syncLock = () => {
      if (isScrollLock()) lenis.stop()
      else lenis.start()
    }

    syncLock()
    const observer = new MutationObserver(syncLock)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    return () => {
      observer.disconnect()
      lenis.destroy()
    }
  }, [pathname])

  return null
}

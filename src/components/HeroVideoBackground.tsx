'use client'

import { useEffect, useRef, useState } from 'react'

export function HeroVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const url = process.env.NEXT_PUBLIC_HERO_VIDEO_URL
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    if (!url || failed) return
    const video = videoRef.current
    if (!video) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      video.pause()
      video.currentTime = 0
      return
    }

    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        frame = 0
        if (!video.duration || video.readyState < 2) return
        const hero = video.closest('section')
        if (!hero) return
        const rect = hero.getBoundingClientRect()
        const height = hero.offsetHeight || 1
        const progress = Math.min(1, Math.max(0, -rect.top / height))
        video.currentTime = progress * video.duration
      })
    }

    const onReady = () => {
      video.pause()
      onScroll()
    }

    video.pause()
    video.addEventListener('loadedmetadata', onReady)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      video.removeEventListener('loadedmetadata', onReady)
      window.removeEventListener('scroll', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [url, failed])

  if (!url || failed) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <video
        ref={videoRef}
        src={url}
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        aria-hidden="true"
        onError={() => setFailed(true)}
      />
      <div className="absolute inset-0 bg-background/50" />
    </div>
  )
}

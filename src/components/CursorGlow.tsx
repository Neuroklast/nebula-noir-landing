'use client'

import { useEffect } from 'react'

export function CursorGlow() {
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const cursorGlow = document.createElement('div')
    cursorGlow.id = 'cursor-glow'
    document.body.appendChild(cursorGlow)

    const moveCursor = (e: MouseEvent) => {
      cursorGlow.style.left = `${e.clientX}px`
      cursorGlow.style.top = `${e.clientY}px`
    }

    const showCursor = () => {
      cursorGlow.style.opacity = '1'
    }

    const hideCursor = () => {
      cursorGlow.style.opacity = '0'
    }

    document.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseenter', showCursor)
    document.addEventListener('mouseleave', hideCursor)

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseenter', showCursor)
      document.removeEventListener('mouseleave', hideCursor)
      cursorGlow.remove()
    }
  }, [])

  return null
}

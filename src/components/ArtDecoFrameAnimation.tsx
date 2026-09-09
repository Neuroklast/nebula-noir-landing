'use client'

import { useEffect, useState } from 'react'

export function ArtDecoFrameAnimation() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="art-deco-animated-frame">
      <svg
        className="art-deco-frame-svg"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="frameGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="oklch(0.98 0 0)" stopOpacity="0.8" />
            <stop offset="50%" stopColor="oklch(0.98 0 0)" stopOpacity="1" />
            <stop offset="100%" stopColor="oklch(0.98 0 0)" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        <g className="frame-group">
          <g className="corner top-left-corner">
            <line x1="0" y1="0" x2="0" y2="120" className="frame-line vertical-line-1" />
            <line x1="0" y1="0" x2="120" y2="0" className="frame-line horizontal-line-1" />
            
            <line x1="8" y1="8" x2="8" y2="100" className="frame-line vertical-line-2" />
            <line x1="8" y1="8" x2="100" y2="8" className="frame-line horizontal-line-2" />
            
            <line x1="16" y1="16" x2="16" y2="80" className="frame-line vertical-line-3" />
            <line x1="16" y1="16" x2="80" y2="16" className="frame-line horizontal-line-3" />
            
            <circle cx="0" cy="0" r="3" className="frame-dot dot-1" />
            <circle cx="40" cy="0" r="2" className="frame-dot dot-2" />
            <circle cx="80" cy="0" r="2" className="frame-dot dot-3" />
            <circle cx="0" cy="40" r="2" className="frame-dot dot-4" />
            <circle cx="0" cy="80" r="2" className="frame-dot dot-5" />
          </g>

          <g className="corner top-right-corner">
            <line x1="100%" y1="0" x2="100%" y2="120" className="frame-line vertical-line-1" />
            <line x1="100%" y1="0" x2="calc(100% - 120px)" y2="0" className="frame-line horizontal-line-1" />
            
            <line x1="calc(100% - 8px)" y1="8" x2="calc(100% - 8px)" y2="100" className="frame-line vertical-line-2" />
            <line x1="calc(100% - 8px)" y1="8" x2="calc(100% - 100px)" y2="8" className="frame-line horizontal-line-2" />
            
            <line x1="calc(100% - 16px)" y1="16" x2="calc(100% - 16px)" y2="80" className="frame-line vertical-line-3" />
            <line x1="calc(100% - 16px)" y1="16" x2="calc(100% - 80px)" y2="16" className="frame-line horizontal-line-3" />
            
            <circle cx="100%" cy="0" r="3" className="frame-dot dot-1" />
            <circle cx="calc(100% - 40px)" cy="0" r="2" className="frame-dot dot-2" />
            <circle cx="calc(100% - 80px)" cy="0" r="2" className="frame-dot dot-3" />
            <circle cx="100%" cy="40" r="2" className="frame-dot dot-4" />
            <circle cx="100%" cy="80" r="2" className="frame-dot dot-5" />
          </g>

          <g className="corner bottom-left-corner">
            <line x1="0" y1="100%" x2="0" y2="calc(100% - 120px)" className="frame-line vertical-line-1" />
            <line x1="0" y1="100%" x2="120" y2="100%" className="frame-line horizontal-line-1" />
            
            <line x1="8" y1="calc(100% - 8px)" x2="8" y2="calc(100% - 100px)" className="frame-line vertical-line-2" />
            <line x1="8" y1="calc(100% - 8px)" x2="100" y2="calc(100% - 8px)" className="frame-line horizontal-line-2" />
            
            <line x1="16" y1="calc(100% - 16px)" x2="16" y2="calc(100% - 80px)" className="frame-line vertical-line-3" />
            <line x1="16" y1="calc(100% - 16px)" x2="80" y2="calc(100% - 16px)" className="frame-line horizontal-line-3" />
            
            <circle cx="0" cy="100%" r="3" className="frame-dot dot-1" />
            <circle cx="40" cy="100%" r="2" className="frame-dot dot-2" />
            <circle cx="80" cy="100%" r="2" className="frame-dot dot-3" />
            <circle cx="0" cy="calc(100% - 40px)" r="2" className="frame-dot dot-4" />
            <circle cx="0" cy="calc(100% - 80px)" r="2" className="frame-dot dot-5" />
          </g>

          <g className="corner bottom-right-corner">
            <line x1="100%" y1="100%" x2="100%" y2="calc(100% - 120px)" className="frame-line vertical-line-1" />
            <line x1="100%" y1="100%" x2="calc(100% - 120px)" y2="100%" className="frame-line horizontal-line-1" />
            
            <line x1="calc(100% - 8px)" y1="calc(100% - 8px)" x2="calc(100% - 8px)" y2="calc(100% - 100px)" className="frame-line vertical-line-2" />
            <line x1="calc(100% - 8px)" y1="calc(100% - 8px)" x2="calc(100% - 100px)" y2="calc(100% - 8px)" className="frame-line horizontal-line-2" />
            
            <line x1="calc(100% - 16px)" y1="calc(100% - 16px)" x2="calc(100% - 16px)" y2="calc(100% - 80px)" className="frame-line vertical-line-3" />
            <line x1="calc(100% - 16px)" y1="calc(100% - 16px)" x2="calc(100% - 80px)" y2="calc(100% - 16px)" className="frame-line horizontal-line-3" />
            
            <circle cx="100%" cy="100%" r="3" className="frame-dot dot-1" />
            <circle cx="calc(100% - 40px)" cy="100%" r="2" className="frame-dot dot-2" />
            <circle cx="calc(100% - 80px)" cy="100%" r="2" className="frame-dot dot-3" />
            <circle cx="100%" cy="calc(100% - 40px)" r="2" className="frame-dot dot-4" />
            <circle cx="100%" cy="calc(100% - 80px)" r="2" className="frame-dot dot-5" />
          </g>
        </g>
      </svg>
    </div>
  )
}

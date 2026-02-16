import { useParallax } from '@/hooks/use-parallax'

export function ArtDecoBackground() {
  const { ref: ref1, offset: offset1 } = useParallax(0.15)
  const { ref: ref2, offset: offset2 } = useParallax(0.25)
  const { ref: ref3, offset: offset3 } = useParallax(0.35)

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      <div 
        ref={ref1}
        className="absolute inset-0"
        style={{ 
          transform: `translateY(${offset1 * 0.5}px)`,
          filter: 'blur(1.5px)',
          opacity: 0.18
        }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="deco-lines-1" x="0" y="0" width="180" height="180" patternUnits="userSpaceOnUse">
              <line x1="90" y1="0" x2="90" y2="180" stroke="oklch(0.60 0.25 295)" strokeWidth="3" />
              <line x1="0" y1="90" x2="180" y2="90" stroke="oklch(0.60 0.25 295)" strokeWidth="3" />
              <circle cx="90" cy="90" r="35" stroke="oklch(0.65 0.28 295)" strokeWidth="2.5" fill="none" />
              <path d="M 90,30 Q 90,40 80,50 T 60,50" stroke="oklch(0.70 0.30 295)" strokeWidth="2" fill="none" transform="rotate(0 90 90)" />
              <path d="M 90,30 Q 90,40 80,50 T 60,50" stroke="oklch(0.70 0.30 295)" strokeWidth="2" fill="none" transform="rotate(90 90 90)" />
              <path d="M 90,30 Q 90,40 80,50 T 60,50" stroke="oklch(0.70 0.30 295)" strokeWidth="2" fill="none" transform="rotate(180 90 90)" />
              <path d="M 90,30 Q 90,40 80,50 T 60,50" stroke="oklch(0.70 0.30 295)" strokeWidth="2" fill="none" transform="rotate(270 90 90)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#deco-lines-1)" />
        </svg>
      </div>

      <div 
        ref={ref2}
        className="absolute inset-0"
        style={{ 
          transform: `translateY(${offset2 * 0.3}px)`,
          filter: 'blur(2px)',
          opacity: 0.15
        }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="deco-lines-2" x="0" y="0" width="240" height="240" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="240" y2="240" stroke="oklch(0.60 0.25 295)" strokeWidth="2.5" />
              <line x1="240" y1="0" x2="0" y2="240" stroke="oklch(0.60 0.25 295)" strokeWidth="2.5" />
              <circle cx="120" cy="120" r="60" stroke="oklch(0.65 0.28 295)" strokeWidth="2" fill="none" />
              <path d="M 120,30 A 30,30 0 0,0 120,90" stroke="oklch(0.70 0.30 295)" strokeWidth="2" fill="none" />
              <path d="M 150,120 A 30,30 0 0,0 210,120" stroke="oklch(0.70 0.30 295)" strokeWidth="2" fill="none" />
              <path d="M 120,150 A 30,30 0 0,0 120,210" stroke="oklch(0.70 0.30 295)" strokeWidth="2" fill="none" />
              <path d="M 90,120 A 30,30 0 0,0 30,120" stroke="oklch(0.70 0.30 295)" strokeWidth="2" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#deco-lines-2)" />
        </svg>
      </div>

      <div 
        ref={ref3}
        className="absolute inset-0"
        style={{ 
          transform: `translateY(${offset3 * 0.2}px)`,
          filter: 'blur(2.5px)',
          opacity: 0.12
        }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="deco-lines-3" x="0" y="0" width="320" height="320" patternUnits="userSpaceOnUse">
              <line x1="160" y1="0" x2="160" y2="320" stroke="oklch(0.58 0.23 295)" strokeWidth="2.5" strokeDasharray="8,8" />
              <line x1="0" y1="160" x2="320" y2="160" stroke="oklch(0.58 0.23 295)" strokeWidth="2.5" strokeDasharray="8,8" />
              <circle cx="160" cy="160" r="100" stroke="oklch(0.62 0.26 295)" strokeWidth="2" fill="none" />
              <circle cx="160" cy="160" r="130" stroke="oklch(0.65 0.28 295)" strokeWidth="1.8" fill="none" />
              <path d="M 160,20 A 40,40 0 0,0 160,100" stroke="oklch(0.68 0.29 295)" strokeWidth="2" fill="none" />
              <path d="M 240,160 A 40,40 0 0,0 300,160" stroke="oklch(0.68 0.29 295)" strokeWidth="2" fill="none" />
              <path d="M 160,220 A 40,40 0 0,0 160,300" stroke="oklch(0.68 0.29 295)" strokeWidth="2" fill="none" />
              <path d="M 80,160 A 40,40 0 0,0 20,160" stroke="oklch(0.68 0.29 295)" strokeWidth="2" fill="none" />
              <path d="M 120,80 A 20,20 0 0,0 140,60" stroke="oklch(0.65 0.28 295)" strokeWidth="1.8" fill="none" />
              <path d="M 200,80 A 20,20 0 0,0 180,60" stroke="oklch(0.65 0.28 295)" strokeWidth="1.8" fill="none" />
              <path d="M 200,240 A 20,20 0 0,0 180,260" stroke="oklch(0.65 0.28 295)" strokeWidth="1.8" fill="none" />
              <path d="M 120,240 A 20,20 0 0,0 140,260" stroke="oklch(0.65 0.28 295)" strokeWidth="1.8" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#deco-lines-3)" />
        </svg>
      </div>
    </div>
  )
}

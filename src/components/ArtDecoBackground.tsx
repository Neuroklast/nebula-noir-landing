import { useParallax } from '@/hooks/use-parallax'

export function ArtDecoBackground() {
  const { ref: ref1, offset: offset1 } = useParallax(0.15)
  const { ref: ref2, offset: offset2 } = useParallax(0.25)
  const { ref: ref3, offset: offset3 } = useParallax(0.35)

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div 
        ref={ref1}
        className="absolute inset-0 opacity-[0.03]"
        style={{ 
          transform: `translateY(${offset1 * 0.5}px)`,
          filter: 'blur(1px)'
        }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="deco-lines-1" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <line x1="100" y1="0" x2="100" y2="200" stroke="white" strokeWidth="0.5" />
              <line x1="0" y1="100" x2="200" y2="100" stroke="white" strokeWidth="0.5" />
              <circle cx="100" cy="100" r="40" stroke="white" strokeWidth="0.5" fill="none" />
              <path d="M 100,60 A 20,20 0 0,1 100,80" stroke="white" strokeWidth="0.5" fill="none" />
              <path d="M 80,100 A 20,20 0 0,1 60,100" stroke="white" strokeWidth="0.5" fill="none" />
              <path d="M 100,140 A 20,20 0 0,1 100,120" stroke="white" strokeWidth="0.5" fill="none" />
              <path d="M 120,100 A 20,20 0 0,1 140,100" stroke="white" strokeWidth="0.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#deco-lines-1)" />
        </svg>
      </div>

      <div 
        ref={ref2}
        className="absolute inset-0 opacity-[0.04]"
        style={{ 
          transform: `translateY(${offset2 * 0.3}px)`,
          filter: 'blur(2px)'
        }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="deco-lines-2" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="300" y2="300" stroke="white" strokeWidth="0.3" />
              <line x1="300" y1="0" x2="0" y2="300" stroke="white" strokeWidth="0.3" />
              <path d="M 150,50 A 50,50 0 0,1 200,100" stroke="white" strokeWidth="0.4" fill="none" />
              <path d="M 250,150 A 50,50 0 0,1 200,200" stroke="white" strokeWidth="0.4" fill="none" />
              <path d="M 150,250 A 50,50 0 0,1 100,200" stroke="white" strokeWidth="0.4" fill="none" />
              <path d="M 50,150 A 50,50 0 0,1 100,100" stroke="white" strokeWidth="0.4" fill="none" />
              <circle cx="150" cy="150" r="80" stroke="white" strokeWidth="0.3" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#deco-lines-2)" />
        </svg>
      </div>

      <div 
        ref={ref3}
        className="absolute inset-0 opacity-[0.02]"
        style={{ 
          transform: `translateY(${offset3 * 0.2}px)`,
          filter: 'blur(3px)'
        }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="deco-lines-3" x="0" y="0" width="400" height="400" patternUnits="userSpaceOnUse">
              <line x1="200" y1="0" x2="200" y2="400" stroke="white" strokeWidth="0.4" strokeDasharray="10,10" />
              <line x1="0" y1="200" x2="400" y2="200" stroke="white" strokeWidth="0.4" strokeDasharray="10,10" />
              <circle cx="200" cy="200" r="120" stroke="white" strokeWidth="0.3" fill="none" />
              <circle cx="200" cy="200" r="160" stroke="white" strokeWidth="0.2" fill="none" />
              <path d="M 200,40 L 240,80 L 200,120 L 160,80 Z" stroke="white" strokeWidth="0.3" fill="none" />
              <path d="M 200,280 L 240,320 L 200,360 L 160,320 Z" stroke="white" strokeWidth="0.3" fill="none" />
              <path d="M 40,200 L 80,240 L 120,200 L 80,160 Z" stroke="white" strokeWidth="0.3" fill="none" />
              <path d="M 280,200 L 320,240 L 360,200 L 320,160 Z" stroke="white" strokeWidth="0.3" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#deco-lines-3)" />
        </svg>
      </div>
    </div>
  )
}

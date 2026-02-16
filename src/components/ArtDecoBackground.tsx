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
          opacity: 0.20
        }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="deco-lines-1" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <line x1="100" y1="0" x2="100" y2="200" stroke="oklch(0.60 0.25 295)" strokeWidth="2" />
              <line x1="0" y1="100" x2="200" y2="100" stroke="oklch(0.60 0.25 295)" strokeWidth="2" />
              <line x1="50" y1="0" x2="50" y2="200" stroke="oklch(0.58 0.22 295)" strokeWidth="1.5" strokeDasharray="10,10" />
              <line x1="150" y1="0" x2="150" y2="200" stroke="oklch(0.58 0.22 295)" strokeWidth="1.5" strokeDasharray="10,10" />
              <line x1="0" y1="50" x2="200" y2="50" stroke="oklch(0.58 0.22 295)" strokeWidth="1.5" strokeDasharray="10,10" />
              <line x1="0" y1="150" x2="200" y2="150" stroke="oklch(0.58 0.22 295)" strokeWidth="1.5" strokeDasharray="10,10" />
              <polygon points="100,40 120,80 80,80" stroke="oklch(0.65 0.28 295)" strokeWidth="1.5" fill="none" />
              <polygon points="100,160 120,120 80,120" stroke="oklch(0.65 0.28 295)" strokeWidth="1.5" fill="none" />
              <polygon points="40,100 80,120 80,80" stroke="oklch(0.65 0.28 295)" strokeWidth="1.5" fill="none" />
              <polygon points="160,100 120,80 120,120" stroke="oklch(0.65 0.28 295)" strokeWidth="1.5" fill="none" />
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
          opacity: 0.16
        }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="deco-lines-2" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="300" y2="300" stroke="oklch(0.60 0.25 295)" strokeWidth="2" />
              <line x1="300" y1="0" x2="0" y2="300" stroke="oklch(0.60 0.25 295)" strokeWidth="2" />
              <line x1="150" y1="0" x2="150" y2="300" stroke="oklch(0.62 0.26 295)" strokeWidth="1.8" />
              <line x1="0" y1="150" x2="300" y2="150" stroke="oklch(0.62 0.26 295)" strokeWidth="1.8" />
              <polyline points="150,50 170,80 150,110 130,80 150,50" stroke="oklch(0.68 0.29 295)" strokeWidth="2" fill="none" />
              <polyline points="50,150 80,170 110,150 80,130 50,150" stroke="oklch(0.68 0.29 295)" strokeWidth="2" fill="none" />
              <polyline points="150,190 170,220 150,250 130,220 150,190" stroke="oklch(0.68 0.29 295)" strokeWidth="2" fill="none" />
              <polyline points="190,150 220,170 250,150 220,130 190,150" stroke="oklch(0.68 0.29 295)" strokeWidth="2" fill="none" />
              <polygon points="75,75 90,90 75,105 60,90" stroke="oklch(0.65 0.28 295)" strokeWidth="1.5" fill="none" />
              <polygon points="225,75 240,90 225,105 210,90" stroke="oklch(0.65 0.28 295)" strokeWidth="1.5" fill="none" />
              <polygon points="75,225 90,240 75,255 60,240" stroke="oklch(0.65 0.28 295)" strokeWidth="1.5" fill="none" />
              <polygon points="225,225 240,240 225,255 210,240" stroke="oklch(0.65 0.28 295)" strokeWidth="1.5" fill="none" />
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
          opacity: 0.14
        }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="deco-lines-3" x="0" y="0" width="400" height="400" patternUnits="userSpaceOnUse">
              <line x1="200" y1="0" x2="200" y2="400" stroke="oklch(0.58 0.23 295)" strokeWidth="2.5" strokeDasharray="15,15" />
              <line x1="0" y1="200" x2="400" y2="200" stroke="oklch(0.58 0.23 295)" strokeWidth="2.5" strokeDasharray="15,15" />
              <polyline points="100,100 200,120 300,100" stroke="oklch(0.62 0.26 295)" strokeWidth="2" fill="none" />
              <polyline points="300,100 320,200 300,300" stroke="oklch(0.62 0.26 295)" strokeWidth="2" fill="none" />
              <polyline points="300,300 200,320 100,300" stroke="oklch(0.62 0.26 295)" strokeWidth="2" fill="none" />
              <polyline points="100,300 80,200 100,100" stroke="oklch(0.62 0.26 295)" strokeWidth="2" fill="none" />
              <polygon points="200,80 220,100 200,120 180,100" stroke="oklch(0.68 0.29 295)" strokeWidth="2" fill="none" />
              <polygon points="320,200 300,220 280,200 300,180" stroke="oklch(0.68 0.29 295)" strokeWidth="2" fill="none" />
              <polygon points="200,320 180,300 200,280 220,300" stroke="oklch(0.68 0.29 295)" strokeWidth="2" fill="none" />
              <polygon points="80,200 100,180 120,200 100,220" stroke="oklch(0.68 0.29 295)" strokeWidth="2" fill="none" />
              <line x1="150,150" x2="250,150" stroke="oklch(0.65 0.28 295)" strokeWidth="1.8" strokeDasharray="5,5" />
              <line x1="250,150" x2="250,250" stroke="oklch(0.65 0.28 295)" strokeWidth="1.8" strokeDasharray="5,5" />
              <line x1="250,250" x2="150,250" stroke="oklch(0.65 0.28 295)" strokeWidth="1.8" strokeDasharray="5,5" />
              <line x1="150,250" x2="150,150" stroke="oklch(0.65 0.28 295)" strokeWidth="1.8" strokeDasharray="5,5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#deco-lines-3)" />
        </svg>
      </div>
    </div>
  )
}

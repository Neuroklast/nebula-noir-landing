interface ArtDecoAnimatedDividerProps {
  className?: string
  delay?: number
}

export function ArtDecoAnimatedDivider({ className = '', delay = 0 }: ArtDecoAnimatedDividerProps) {
  return (
    <div 
      className={`relative w-full h-12 flex items-center justify-center my-8 ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="absolute inset-0 flex items-center">
        <div className="w-full relative">
          <div 
            className="h-px bg-gradient-to-r from-transparent via-foreground to-transparent deco-slide-left"
            style={{ 
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.4)',
              animationDelay: `${delay}s`
            }}
          />
        </div>
      </div>
      
      <div className="relative z-10 flex items-center gap-6">
        <div 
          className="geometric-expand"
          style={{ 
            animationDelay: `${delay + 0.3}s`
          }}
        >
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M 15 0 L 20 10 L 30 15 L 20 20 L 15 30 L 10 20 L 0 15 L 10 10 Z" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              fill="none"
              className="text-foreground/70"
              style={{ filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.5))' }}
            />
          </svg>
        </div>
        
        <div 
          className="text-3xl text-primary deco-scale-in"
          style={{ 
            textShadow: '0 0 20px rgba(102, 51, 153, 0.8)',
            animationDelay: `${delay + 0.5}s`
          }}
        >
          <span className="spark-theme-moon-symbol">☾</span>
        </div>
        
        <div 
          className="geometric-expand"
          style={{ 
            animationDelay: `${delay + 0.3}s`
          }}
        >
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M 15 0 L 20 10 L 30 15 L 20 20 L 15 30 L 10 20 L 0 15 L 10 10 Z" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              fill="none"
              className="text-foreground/70"
              style={{ filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.5))' }}
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

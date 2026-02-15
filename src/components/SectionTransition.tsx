import { useParallax } from '@/hooks/use-parallax'

export function SectionTransition() {
  const { ref, offset } = useParallax(0.3)

  return (
    <div 
      ref={ref} 
      className="section-transition bg-background"
      style={{ 
        transform: `translateY(${offset * 0.1}px)`,
        transition: 'transform 0.1s ease-out'
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center gap-8 w-full max-w-4xl px-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-foreground/30 to-foreground/30" />
          <div className="flex gap-4 items-center">
            <div className="w-2 h-2 bg-foreground/50 transform rotate-45" />
            <div className="w-2 h-2 bg-primary transform rotate-45" />
            <div className="w-2 h-2 bg-foreground/50 transform rotate-45" />
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-foreground/30 to-foreground/30" />
        </div>
      </div>
    </div>
  )
}

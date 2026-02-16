import { useParallax } from '@/hooks/use-parallax'

export function SectionTransition() {
  const { ref, offset } = useParallax(0.3)

  return (
    <div 
      ref={ref} 
      className="section-transition bg-background"
      style={{ 
        transform: `translateY(${offset * 0.05}px)`,
        transition: 'transform 0.1s ease-out'
      }}
    />
  )
}

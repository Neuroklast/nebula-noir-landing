import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Card } from '@/components/ui/card'

interface ShowcaseItem {
  id: number
  title: string
  category: string
}

const showcaseItems: ShowcaseItem[] = [
  { id: 1, title: 'Midnight Chains', category: 'Necklaces' },
  { id: 2, title: 'Obsidian Rings', category: 'Rings' },
  { id: 3, title: 'Shadow Earrings', category: 'Earrings' },
  { id: 4, title: 'Eclipse Collection', category: 'Bracelets' },
  { id: 5, title: 'Noir Pendants', category: 'Necklaces' },
  { id: 6, title: 'Gothic Cuffs', category: 'Bracelets' },
]

export function Showcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section ref={ref} className="relative py-32 md:py-40 px-6 overflow-hidden bg-card/20 film-grain">
      <div className="absolute top-0 left-0 w-full h-px" style={{ 
        background: 'linear-gradient(90deg, transparent, oklch(0.75 0.04 65), transparent)',
        boxShadow: '0 0 10px oklch(0.75 0.08 70 / 0.3)'
      }} />
      
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="rapture-pattern absolute inset-0" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center space-y-8 mb-20"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="h-0.5 w-32 mx-auto"
            style={{ 
              background: 'linear-gradient(90deg, transparent, oklch(0.75 0.04 65), transparent)',
              boxShadow: '0 0 8px oklch(0.75 0.08 70 / 0.4)'
            }}
          />
          
          <h2 className="text-5xl md:text-7xl font-bold tracking-wide uppercase glow-text">
            Exquisite Creations
          </h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="h-0.5 w-32 mx-auto"
            style={{ 
              background: 'linear-gradient(90deg, transparent, oklch(0.75 0.04 65), transparent)',
              boxShadow: '0 0 8px oklch(0.75 0.08 70 / 0.4)'
            }}
          />
          
          <p className="text-foreground/70 max-w-2xl mx-auto text-xl font-light">
            Each piece represents a marriage of classical refinement and contemporary vision—art you can wear.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.15 * index, ease: [0.22, 1, 0.36, 1] }}
              onHoverStart={() => setHoveredId(item.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group"
            >
              <Card className="relative aspect-square overflow-hidden bg-secondary/80 border-border/60 transition-all duration-700 hover:border-accent/60 art-deco-border backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-background/10 to-transparent" />
                
                <motion.div
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={hoveredId === item.id ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="underwater-glow absolute inset-0" />
                </motion.div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 300 300" className="w-3/4 h-3/4" style={{ filter: 'drop-shadow(0 0 10px oklch(0.75 0.08 70 / 0.2))' }}>
                    <defs>
                      <linearGradient id={`cardGrad${item.id}`}>
                        <stop offset="0%" stopColor="oklch(0.75 0.04 65)" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="oklch(0.88 0.03 70)" stopOpacity="0.4" />
                      </linearGradient>
                    </defs>
                    
                    <motion.path
                      d="M150,40 L260,150 L150,260 L40,150 Z"
                      fill="none"
                      stroke={`url(#cardGrad${item.id})`}
                      strokeWidth="1.5"
                      initial={{ pathLength: 0 }}
                      animate={hoveredId === item.id ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    />
                    
                    <motion.circle
                      cx="150"
                      cy="150"
                      r="70"
                      fill="none"
                      stroke="oklch(0.75 0.04 65)"
                      strokeWidth="1"
                      opacity="0.4"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={hoveredId === item.id ? { scale: 1, opacity: 0.4 } : { scale: 0, opacity: 0 }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      style={{ transformOrigin: '150px 150px' }}
                    />
                    
                    <motion.rect
                      x="100"
                      y="100"
                      width="100"
                      height="100"
                      fill="none"
                      stroke="oklch(0.88 0.03 70)"
                      strokeWidth="0.5"
                      opacity="0.3"
                      initial={{ rotate: 0 }}
                      animate={hoveredId === item.id ? { rotate: 45 } : { rotate: 0 }}
                      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                      style={{ transformOrigin: '150px 150px' }}
                    />
                  </svg>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={hoveredId === item.id ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent"
                />

                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={hoveredId === item.id ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-3"
                  >
                    <p className="text-sm uppercase tracking-[0.3em] text-accent font-light animate-[flicker_2s_ease-in-out_infinite]">
                      {item.category}
                    </p>
                    <h3 className="text-3xl font-bold tracking-wide glow-text">
                      {item.title}
                    </h3>
                    <div className="h-px w-16 bg-gradient-to-r from-accent to-transparent" style={{ boxShadow: '0 0 8px oklch(0.75 0.08 70 / 0.5)' }} />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={hoveredId !== item.id ? { opacity: 1 } : { opacity: 0 }}
                    className="space-y-3"
                  >
                    <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-light">
                      {item.category}
                    </p>
                    <h3 className="text-3xl font-bold tracking-wide">
                      {item.title}
                    </h3>
                  </motion.div>
                </div>

                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-20"
        >
          <p className="text-foreground/60 text-xl font-light tracking-wide">
            Collection Arriving Soon
          </p>
        </motion.div>
      </div>
    </section>
  )
}
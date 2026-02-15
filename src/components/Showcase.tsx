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
    <section ref={ref} className="relative py-24 md:py-32 px-6 overflow-hidden bg-card/30">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-16"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent"
          />
          
          <h2 className="text-4xl md:text-6xl font-bold tracking-wide uppercase">
            Crafted Elegance
          </h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent"
          />
          
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Each piece is a unique work of art, meticulously handcrafted to embody sophistication and rebellion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              onHoverStart={() => setHoveredId(item.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group"
            >
              <Card className="relative aspect-square overflow-hidden bg-secondary border-border/50 transition-all duration-500 hover:border-accent/50">
                <div className="absolute inset-0 bg-gradient-to-br from-background/20 to-transparent" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 300 300" className="w-2/3 h-2/3 opacity-10">
                    <motion.path
                      d="M150,50 L250,150 L150,250 L50,150 Z"
                      fill="none"
                      stroke="oklch(0.98 0 0)"
                      strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={hoveredId === item.id ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 1.5 }}
                    />
                    <motion.circle
                      cx="150"
                      cy="150"
                      r="60"
                      fill="none"
                      stroke="oklch(0.85 0 0)"
                      strokeWidth="1"
                      initial={{ scale: 0 }}
                      animate={hoveredId === item.id ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.8 }}
                    />
                  </svg>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={hoveredId === item.id ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"
                />

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={hoveredId === item.id ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2"
                  >
                    <p className="text-sm uppercase tracking-widest text-accent">
                      {item.category}
                    </p>
                    <h3 className="text-2xl font-bold tracking-wide">
                      {item.title}
                    </h3>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={hoveredId !== item.id ? { opacity: 1 } : { opacity: 0 }}
                    className="space-y-2"
                  >
                    <p className="text-sm uppercase tracking-widest text-muted-foreground">
                      {item.category}
                    </p>
                    <h3 className="text-2xl font-bold tracking-wide">
                      {item.title}
                    </h3>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                />
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground text-lg">
            Shop Collection Coming Soon
          </p>
        </motion.div>
      </div>
    </section>
  )
}
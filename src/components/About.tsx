import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Gear, Lightning } from '@phosphor-icons/react'

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 md:py-40 px-6 overflow-hidden bg-card/40">
      <div className="absolute top-0 left-0 w-full h-1 brass-trim" style={{ 
        boxShadow: '0 0 15px oklch(0.70 0.15 180 / 0.4)'
      }} />
      
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.2 } : { opacity: 0 }}
          transition={{ duration: 2 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-accent/20 to-transparent"
              style={{ top: `${20 + i * 15}%` }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
              transition={{ duration: 2, delay: i * 0.2 }}
            />
          ))}
        </motion.div>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center space-y-16"
        >
          <div className="space-y-8">
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
              The Art of Elegance
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
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8 text-left"
            >
              <p className="text-xl leading-relaxed text-foreground/80 font-light">
                Deep beneath the surface of ordinary beauty lies something extraordinary. 
                Nebula Noir crafts jewelry that bridges the classical and the contemporary, 
                where Art Deco sophistication meets modern rebellion.
              </p>
              
              <p className="text-xl leading-relaxed text-foreground/80 font-light">
                Each piece is born from darkness and shaped by light—a philosophy reflected in 
                every curve, every angle, every carefully placed detail. We create not mere accessories, 
                but wearable art for those bold enough to stand apart.
              </p>
              
              <p className="text-xl leading-relaxed text-foreground/80 font-light">
                Our atelier combines time-honored techniques with avant-garde vision. 
                Every creation tells a story of craftsmanship, passion, and the courage to embrace 
                one's authentic self.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="aspect-square bg-card relative overflow-hidden art-deco-border">
                <div className="absolute inset-0 underwater-glow" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 400 400" className="w-4/5 h-4/5" style={{ filter: 'drop-shadow(0 0 15px oklch(0.75 0.08 70 / 0.3))' }}>
                    <defs>
                      <linearGradient id="decorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="oklch(0.75 0.04 65)" stopOpacity="0.3" />
                        <stop offset="50%" stopColor="oklch(0.88 0.03 70)" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="oklch(0.75 0.04 65)" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                    
                    <motion.path
                      d="M200,50 L350,200 L200,350 L50,200 Z"
                      fill="none"
                      stroke="url(#decorGradient)"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 2.5, delay: 0.8 }}
                    />
                    
                    <motion.circle
                      cx="200"
                      cy="200"
                      r="120"
                      fill="none"
                      stroke="oklch(0.75 0.04 65)"
                      strokeWidth="1.5"
                      opacity="0.4"
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 2.5, delay: 1.2 }}
                    />
                    
                    <motion.path
                      d="M200,100 L300,200 L200,300 L100,200 Z"
                      fill="none"
                      stroke="oklch(0.88 0.03 70)"
                      strokeWidth="1"
                      opacity="0.5"
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 2.5, delay: 1.5 }}
                    />
                    
                    <motion.line
                      x1="50"
                      y1="50"
                      x2="350"
                      y2="50"
                      stroke="oklch(0.75 0.04 65)"
                      strokeWidth="1"
                      opacity="0.3"
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 1.5, delay: 1.8 }}
                    />
                    
                    <motion.line
                      x1="50"
                      y1="350"
                      x2="350"
                      y2="350"
                      stroke="oklch(0.75 0.04 65)"
                      strokeWidth="1"
                      opacity="0.3"
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 1.5, delay: 1.8 }}
                    />
                  </svg>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/30 to-background/60" />
              </div>
              
              <motion.div 
                className="absolute -bottom-8 -right-8 w-40 h-40 border border-border/40 -z-10"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 1 }}
                style={{ boxShadow: '0 0 20px oklch(0.75 0.08 70 / 0.1)' }}
              />
              <motion.div 
                className="absolute -top-8 -left-8 w-40 h-40 border border-border/40 -z-10"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
                style={{ boxShadow: '0 0 20px oklch(0.75 0.08 70 / 0.1)' }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-12"
        >
          <div className="space-y-6">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent"
            />
            
            <h2 className="text-4xl md:text-6xl font-bold tracking-wide uppercase">
              The Art of Darkness
            </h2>
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6 text-left"
            >
              <p className="text-lg leading-relaxed text-muted-foreground">
                In the shadows, beauty finds its truest form. Nebula Noir emerges from the intersection of 
                classical elegance and contemporary rebellion, where each piece tells a story of individuality.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                Handcrafted with meticulous attention to detail, our jewelry embodies the spirit of those 
                who embrace the unconventional. We believe that true luxury lies not in conformity, but in 
                the courage to express your authentic self.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                Every creation is a testament to artisanal craftsmanship, blending traditional techniques 
                with bold, modern aesthetics. This is jewelry for the dreamers, the artists, the rebels.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              <div className="aspect-square bg-card relative overflow-hidden geometric-border">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 400 400" className="w-3/4 h-3/4 opacity-20">
                    <motion.path
                      d="M200,50 L350,200 L200,350 L50,200 Z"
                      fill="none"
                      stroke="oklch(0.98 0 0)"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 2, delay: 0.8 }}
                    />
                    <motion.circle
                      cx="200"
                      cy="200"
                      r="100"
                      fill="none"
                      stroke="oklch(0.85 0 0)"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                    <motion.path
                      d="M200,100 L300,200 L200,300 L100,200 Z"
                      fill="none"
                      stroke="oklch(0.65 0 0)"
                      strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 2, delay: 1.2 }}
                    />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/50 to-background" />
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-border/30 -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 border border-border/30 -z-10" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
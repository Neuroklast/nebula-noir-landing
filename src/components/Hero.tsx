import { motion } from 'framer-motion'
import { CaretDown } from '@phosphor-icons/react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="art-deco-pattern absolute inset-0 opacity-40" />
      
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px]"
        >
          <svg viewBox="0 0 800 800" className="w-full h-full">
            <motion.path
              d="M400,100 L700,400 L400,700 L100,400 Z"
              fill="none"
              stroke="oklch(0.98 0 0)"
              strokeWidth="1"
              opacity="0.15"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            <motion.path
              d="M400,200 L600,400 L400,600 L200,400 Z"
              fill="none"
              stroke="oklch(0.98 0 0)"
              strokeWidth="1"
              opacity="0.2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.8 }}
            />
            <motion.circle
              cx="400"
              cy="400"
              r="150"
              fill="none"
              stroke="oklch(0.85 0 0)"
              strokeWidth="1"
              opacity="0.1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1 }}
            />
          </svg>
        </motion.div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent"
            />
            
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-[0.1em] uppercase">
              {['N', 'E', 'B', 'U', 'L', 'A'].map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.5 + i * 0.1 }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
            
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-[0.1em] uppercase">
              {['N', 'O', 'I', 'R'].map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2.1 + i * 0.1 }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 2.5 }}
              className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.8 }}
            className="text-lg md:text-xl tracking-widest uppercase text-muted-foreground font-light"
          >
            Handmade Alternative Jewelry
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
            className="text-sm md:text-base tracking-wide text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Crafted for those who dare to be different. Each piece a unique statement of art and individuality.
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.5, repeat: Infinity, repeatType: 'reverse', repeatDelay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <CaretDown className="w-8 h-8 text-accent" weight="thin" />
      </motion.div>
    </section>
  )
}
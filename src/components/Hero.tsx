import { motion } from 'framer-motion'
import { CaretDown } from '@phosphor-icons/react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background film-grain">
      <div className="rapture-pattern absolute inset-0 opacity-30" />
      
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-[pulse-glow_6s_ease-in-out_infinite]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-[pulse-glow_8s_ease-in-out_infinite]" style={{ animationDelay: '2s' }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 3, delay: 0.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px]"
        >
          <svg viewBox="0 0 1000 1000" className="w-full h-full" style={{ filter: 'drop-shadow(0 0 20px oklch(0.75 0.08 70 / 0.3))' }}>
            <defs>
              <radialGradient id="heroGlow">
                <stop offset="0%" stopColor="oklch(0.75 0.08 70)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="oklch(0.75 0.08 70)" stopOpacity="0" />
              </radialGradient>
            </defs>
            
            <motion.path
              d="M500,150 L850,500 L500,850 L150,500 Z"
              fill="none"
              stroke="oklch(0.75 0.04 65)"
              strokeWidth="2"
              opacity="0.4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 3, delay: 1 }}
            />
            
            <motion.rect
              x="300"
              y="300"
              width="400"
              height="400"
              fill="none"
              stroke="oklch(0.75 0.04 65)"
              strokeWidth="1"
              opacity="0.25"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.25 }}
              transition={{ duration: 3, delay: 1.5 }}
            />
            
            <motion.circle
              cx="500"
              cy="500"
              r="200"
              fill="url(#heroGlow)"
              stroke="oklch(0.75 0.04 65)"
              strokeWidth="1"
              opacity="0.3"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.3 }}
              transition={{ duration: 2, delay: 2 }}
            />

            <motion.path
              d="M500,350 L650,500 L500,650 L350,500 Z"
              fill="none"
              stroke="oklch(0.88 0.03 70)"
              strokeWidth="1.5"
              opacity="0.5"
              initial={{ pathLength: 0, rotate: 0 }}
              animate={{ 
                pathLength: 1,
                rotate: 360
              }}
              transition={{ 
                pathLength: { duration: 2.5, delay: 2.5 },
                rotate: { duration: 60, repeat: Infinity, ease: "linear" }
              }}
              style={{ transformOrigin: '500px 500px' }}
            />
          </svg>
        </motion.div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="h-0.5 w-48 mx-auto"
              style={{ 
                background: 'linear-gradient(90deg, transparent, oklch(0.75 0.04 65), transparent)',
                boxShadow: '0 0 10px oklch(0.75 0.08 70 / 0.5)'
              }}
            />
            
            <div className="space-y-2">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-[0.15em] uppercase glow-text">
                {['N', 'E', 'B', 'U', 'L', 'A'].map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 2 + i * 0.1,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </h1>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-[0.15em] uppercase glow-text">
                {['N', 'O', 'I', 'R'].map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 2.6 + i * 0.1,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </h1>
            </div>
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 3, ease: [0.22, 1, 0.36, 1] }}
              className="h-0.5 w-48 mx-auto"
              style={{ 
                background: 'linear-gradient(90deg, transparent, oklch(0.75 0.04 65), transparent)',
                boxShadow: '0 0 10px oklch(0.75 0.08 70 / 0.5)'
              }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 3.5 }}
            className="space-y-6"
          >
            <p className="text-xl md:text-2xl tracking-[0.3em] uppercase text-accent font-light animate-[flicker_3s_ease-in-out_infinite]">
              Handmade Alternative Jewelry
            </p>

            <p className="text-base md:text-lg tracking-wide text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
              From the depths of imagination, exquisite pieces emerge. Crafted for those who seek beauty in darkness.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0] }}
        transition={{ duration: 3, delay: 4, repeat: Infinity, repeatDelay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <CaretDown className="w-10 h-10 text-accent" weight="thin" style={{ filter: 'drop-shadow(0 0 8px oklch(0.75 0.08 70 / 0.6))' }} />
      </motion.div>
    </section>
  )
}
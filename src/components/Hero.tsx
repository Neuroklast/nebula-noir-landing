import { motion } from 'framer-motion'
import { CaretDown, Lightning } from '@phosphor-icons/react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background cyber-scanline">
      <div className="dieselpunk-grid absolute inset-0 opacity-40" />
      
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/15 rounded-full blur-[140px] animate-[voltage-pulse_4s_ease-in-out_infinite]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[140px] animate-[voltage-pulse_6s_ease-in-out_infinite]" style={{ animationDelay: '2s' }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 3, delay: 0.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px]"
        >
          <svg viewBox="0 0 1000 1000" className="w-full h-full" style={{ filter: 'drop-shadow(0 0 20px oklch(0.70 0.15 180 / 0.4))' }}>
            <defs>
              <radialGradient id="heroGlowCyan">
                <stop offset="0%" stopColor="oklch(0.70 0.15 180)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="oklch(0.70 0.15 180)" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="electricGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="oklch(0.70 0.15 180)" stopOpacity="0.6" />
                <stop offset="50%" stopColor="oklch(0.90 0 0)" stopOpacity="0.8" />
                <stop offset="100%" stopColor="oklch(0.70 0.15 180)" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            
            <motion.path
              d="M500,100 L900,500 L500,900 L100,500 Z"
              fill="none"
              stroke="url(#electricGrad)"
              strokeWidth="3"
              opacity="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 2.5, delay: 1 }}
            />
            
            <motion.rect
              x="250"
              y="250"
              width="500"
              height="500"
              fill="none"
              stroke="oklch(0.70 0.15 180)"
              strokeWidth="2"
              opacity="0.3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 2.5, delay: 1.3 }}
            />
            
            <motion.circle
              cx="500"
              cy="500"
              r="220"
              fill="url(#heroGlowCyan)"
              stroke="oklch(0.70 0.15 180)"
              strokeWidth="1.5"
              opacity="0.4"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.4 }}
              transition={{ duration: 1.8, delay: 1.8 }}
            />

            <motion.path
              d="M500,320 L680,500 L500,680 L320,500 Z"
              fill="none"
              stroke="oklch(0.90 0 0)"
              strokeWidth="2"
              opacity="0.6"
              initial={{ pathLength: 0, rotate: 0 }}
              animate={{ 
                pathLength: 1,
                rotate: 360
              }}
              transition={{ 
                pathLength: { duration: 2, delay: 2.2 },
                rotate: { duration: 80, repeat: Infinity, ease: "linear" }
              }}
              style={{ transformOrigin: '500px 500px' }}
            />
            
            <motion.line
              x1="200"
              y1="200"
              x2="800"
              y2="200"
              stroke="oklch(0.70 0.15 180)"
              strokeWidth="1"
              opacity="0.25"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 2.5 }}
            />
            
            <motion.line
              x1="200"
              y1="800"
              x2="800"
              y2="800"
              stroke="oklch(0.70 0.15 180)"
              strokeWidth="1"
              opacity="0.25"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 2.5 }}
            />
            
            <motion.line
              x1="200"
              y1="200"
              x2="200"
              y2="800"
              stroke="oklch(0.70 0.15 180)"
              strokeWidth="1"
              opacity="0.25"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 2.7 }}
            />
            
            <motion.line
              x1="800"
              y1="200"
              x2="800"
              y2="800"
              stroke="oklch(0.70 0.15 180)"
              strokeWidth="1"
              opacity="0.25"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 2.7 }}
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
          <div className="space-y-6">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-1 w-64 mx-auto"
            >
              <div className="absolute inset-0 brass-trim" />
              <motion.div
                className="absolute inset-0"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ 
                  background: 'linear-gradient(90deg, transparent, oklch(0.70 0.15 180), transparent)',
                  boxShadow: '0 0 15px oklch(0.70 0.15 180 / 0.6)'
                }}
              />
            </motion.div>
            
            <div className="relative inline-block">
              <div className="absolute -inset-8 opacity-20">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-accent"
                    style={{
                      top: i < 2 ? 0 : 'auto',
                      bottom: i >= 2 ? 0 : 'auto',
                      left: i % 2 === 0 ? 0 : 'auto',
                      right: i % 2 === 1 ? 0 : 'auto',
                      boxShadow: '0 0 10px oklch(0.70 0.15 180)'
                    }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                  />
                ))}
              </div>
              
              <div className="space-y-2">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-[0.18em] uppercase neon-glow-cyan hologram-flicker">
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
                
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-[0.18em] uppercase neon-glow-cyan hologram-flicker">
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
            </div>
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 3, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-1 w-64 mx-auto"
            >
              <div className="absolute inset-0 brass-trim" />
              <motion.div
                className="absolute inset-0"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                style={{ 
                  background: 'linear-gradient(90deg, transparent, oklch(0.70 0.15 180), transparent)',
                  boxShadow: '0 0 15px oklch(0.70 0.15 180 / 0.6)'
                }}
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 3.5 }}
            className="space-y-6"
          >
            <div className="relative inline-block">
              <Lightning className="absolute -left-8 top-1/2 -translate-y-1/2 w-5 h-5 text-accent opacity-60 animate-[electric-arc_1.5s_ease-in-out_infinite]" weight="fill" />
              <p className="text-xl md:text-2xl tracking-[0.35em] uppercase text-accent font-light animate-[neon-flicker_4s_ease-in-out_infinite]">
                Handmade Alternative Jewelry
              </p>
              <Lightning className="absolute -right-8 top-1/2 -translate-y-1/2 w-5 h-5 text-accent opacity-60 animate-[electric-arc_1.5s_ease-in-out_infinite]" weight="fill" style={{ animationDelay: '0.75s' }} />
            </div>

            <p className="text-base md:text-lg tracking-wide text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
              Where industrial elegance meets rebellious artistry. Forged from vision and darkness, each piece tells a story of power and refinement.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.7, 0] }}
        transition={{ duration: 3, delay: 4, repeat: Infinity, repeatDelay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <CaretDown className="w-10 h-10 text-accent" weight="thin" style={{ filter: 'drop-shadow(0 0 10px oklch(0.70 0.15 180 / 0.8))' }} />
      </motion.div>
    </section>
  )
}
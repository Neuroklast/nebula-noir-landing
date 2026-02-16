import { useScrollTrigger } from '@/hooks/use-parallax'
import { motion } from 'framer-motion'

export function AboutSection() {
  const { ref, isVisible } = useScrollTrigger(0.1)

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden max-w-full" ref={ref}>
      <div className="absolute inset-0 opacity-3">
        <svg className="w-full h-full">
          <defs>
            <pattern id="bioshock-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 60 120 M 0 60 L 120 60" stroke="white" strokeWidth="0.5" fill="none" />
              <circle cx="60" cy="60" r="30" stroke="white" strokeWidth="0.5" fill="none" />
              <circle cx="60" cy="60" r="15" stroke="white" strokeWidth="0.5" fill="none" />
              <path d="M 0,0 L 30,30 M 120,0 L 90,30 M 120,120 L 90,90 M 0,120 L 30,90" stroke="white" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bioshock-pattern)" />
        </svg>
      </div>

      <motion.div 
        className="container max-w-6xl mx-auto px-4 md:px-6 relative z-10"
        initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
        animate={isVisible ? { opacity: 1, clipPath: 'inset(0 0% 0 0)' } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 md:mb-8 bioshock-glow-animated px-4">
            DIE NEBULA NOIR PHILOSOPHIE
          </h2>
          <div className="art-deco-divider max-w-md mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-12 mb-16 md:mb-24 px-4">
          <motion.div 
            className="text-center space-y-4 md:space-y-6 relative p-6 md:p-8 border-2 border-foreground/30 bg-background/50"
            initial={{ opacity: 0, clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }}
            animate={isVisible ? { opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-5xl md:text-7xl mb-4 bioshock-glow-animated" style={{ textShadow: '0 0 30px rgba(255, 255, 255, 0.5)' }}>✦</div>
            <h3 className="text-xl md:text-2xl lg:text-3xl uppercase tracking-[0.15em] md:tracking-[0.2em]">Mission</h3>
            <p className="text-foreground/75 leading-relaxed text-sm md:text-base font-light">
              Wir fertigen okkulte und alternative Accessoires, die die Grenze zwischen Eleganz und Kink überschreiten. 
              Jedes Stück ist ein handgefertigtes Artefakt, das Dunkelheit tragbar und ästhetisch macht.
            </p>
          </motion.div>

          <motion.div 
            className="text-center space-y-4 md:space-y-6 relative p-6 md:p-8 border-2 border-foreground/30 bg-background/50"
            initial={{ opacity: 0, clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)' }}
            animate={isVisible ? { opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-5xl md:text-7xl mb-4 text-primary bioshock-glow-animated transform rotate-180">☾</div>
            <h3 className="text-xl md:text-2xl lg:text-3xl uppercase tracking-[0.15em] md:tracking-[0.2em]">Identität</h3>
            <p className="text-foreground/75 leading-relaxed text-sm md:text-base font-light">
              Cosmic Art Deco Goth. Die Fusion aus der geometrischen Präzision des Art Déco (1920er), 
              der unendlichen Tiefe kosmischer Nebel und der dunklen Ästhetik der Gothic-Subkultur.
            </p>
          </motion.div>

          <motion.div 
            className="text-center space-y-4 md:space-y-6 relative p-6 md:p-8 border-2 border-foreground/30 bg-background/50"
            initial={{ opacity: 0, clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
            animate={isVisible ? { opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' } : {}}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-5xl md:text-7xl mb-4 bioshock-glow-animated transform rotate-180" style={{ textShadow: '0 0 30px rgba(255, 255, 255, 0.5)' }}>☾</div>
            <h3 className="text-xl md:text-2xl lg:text-3xl uppercase tracking-[0.15em] md:tracking-[0.2em]">Handwerk</h3>
            <p className="text-foreground/75 leading-relaxed text-sm md:text-base font-light">
              Jedes Produkt wird mit akribischer Liebe zum Detail von Hand gefertigt, unter Verwendung von Resin, PVC und Edelmetallen. 
              Keine Massenproduktion—nur einzigartige Stücke für nonkonformistische Seelen.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, clipPath: 'inset(50% 50%)' }}
          animate={isVisible ? { opacity: 1, clipPath: 'inset(0% 0%)' } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative p-6 md:p-10 lg:p-16 border-2 border-foreground/30 bg-background/50">
            <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-8 md:mb-12 text-center uppercase tracking-[0.15em] md:tracking-[0.25em] bioshock-glow-animated">Unsere Werte</h3>
            <ul className="space-y-6 md:space-y-8 text-sm md:text-base lg:text-lg">
              <li className="flex items-start gap-3 md:gap-4">
                <span className="text-primary text-xl md:text-2xl mt-1 flex-shrink-0 transform rotate-180">☾</span>
                <span className="text-foreground/80 font-light">
                  <strong className="text-foreground uppercase tracking-wider">Handwerk:</strong> Jedes Produkt ist ein Unikat, akribisch von Hand gefertigt aus hochwertigen Materialien.
                </span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <span className="text-primary text-xl md:text-2xl mt-1 flex-shrink-0 transform rotate-180">☾</span>
                <span className="text-foreground/80 font-light">
                  <strong className="text-foreground uppercase tracking-wider">Dunkle Ästhetik:</strong> Schönheit existiert im Schatten, im Bizarren, im kompromisslos Unkonventionellen.
                </span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <span className="text-primary text-xl md:text-2xl mt-1 flex-shrink-0 transform rotate-180">☾</span>
                <span className="text-foreground/80 font-light">
                  <strong className="text-foreground uppercase tracking-wider">Individualität:</strong> Schmuck als Ausdruck nonkonformistischer Identität und persönlicher Mystik.
                </span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <span className="text-primary text-xl md:text-2xl mt-1 flex-shrink-0 transform rotate-180">☾</span>
                <span className="text-foreground/80 font-light">
                  <strong className="text-foreground uppercase tracking-wider">Inklusivität:</strong> Accessoires für alle Körperformen, Geschlechtsidentitäten und ästhetischen Präferenzen.
                </span>
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="text-center mt-12 md:mt-20 px-4">
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/60 italic font-light tracking-wide leading-relaxed max-w-3xl mx-auto">
            "Für moderne Hexen, Gothic-Seelen und alle, die Eleganz in der Leere finden."
          </p>
        </div>
      </motion.div>
    </section>
  )
}

import { useScrollTrigger } from '@/hooks/use-parallax'
import { motion } from 'framer-motion'

export function AboutSection() {
  const { ref, isVisible } = useScrollTrigger(0.1)

  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden" ref={ref}>
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
        className="container max-w-6xl mx-auto px-6 relative z-10"
        initial={{ opacity: 0, y: 60 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 bioshock-glow-animated">
            DIE NEBULA NOIR PHILOSOPHIE
          </h2>
          <div className="art-deco-divider max-w-md mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-24">
          <motion.div 
            className="text-center space-y-6 relative p-8 metallic-border"
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-7xl mb-4 bioshock-glow-animated" style={{ textShadow: '0 0 30px rgba(255, 255, 255, 0.5)' }}>✦</div>
            <h3 className="text-2xl md:text-3xl uppercase tracking-[0.2em]">Mission</h3>
            <p className="text-foreground/75 leading-relaxed text-base font-light">
              Wir fertigen okkulte und alternative Accessoires, die die Grenze zwischen Eleganz und Kink überschreiten. 
              Jedes Stück ist ein handgefertigtes Artefakt, das Dunkelheit tragbar und ästhetisch macht.
            </p>
          </motion.div>

          <motion.div 
            className="text-center space-y-6 relative p-8 metallic-border"
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-7xl mb-4 text-primary bioshock-glow-animated">◆</div>
            <h3 className="text-2xl md:text-3xl uppercase tracking-[0.2em]">Identität</h3>
            <p className="text-foreground/75 leading-relaxed text-base font-light">
              Cosmic Art Deco Goth. Die Fusion aus der geometrischen Präzision des Art Déco (1920er), 
              der unendlichen Tiefe kosmischer Nebel und der dunklen Ästhetik der Gothic-Subkultur.
            </p>
          </motion.div>

          <motion.div 
            className="text-center space-y-6 relative p-8 metallic-border"
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-7xl mb-4 bioshock-glow-animated" style={{ textShadow: '0 0 30px rgba(255, 255, 255, 0.5)' }}>☽</div>
            <h3 className="text-2xl md:text-3xl uppercase tracking-[0.2em]">Handwerk</h3>
            <p className="text-foreground/75 leading-relaxed text-base font-light">
              Jedes Produkt wird mit akribischer Liebe zum Detail von Hand gefertigt, unter Verwendung von Resin, PVC und Edelmetallen. 
              Keine Massenproduktion—nur einzigartige Stücke für nonkonformistische Seelen.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="relative p-10 md:p-16 metallic-border">
            <div className="art-deco-corner top-left"></div>
            <div className="art-deco-corner top-right"></div>
            <div className="art-deco-corner bottom-left"></div>
            <div className="art-deco-corner bottom-right"></div>
            
            <h3 className="text-3xl md:text-4xl lg:text-5xl mb-12 text-center uppercase tracking-[0.25em] bioshock-glow-animated">Unsere Werte</h3>
            <ul className="space-y-8 text-base md:text-lg">
              <li className="flex items-start gap-4">
                <span className="text-primary text-2xl mt-1 flex-shrink-0">☽</span>
                <span className="text-foreground/80 font-light">
                  <strong className="text-foreground uppercase tracking-wider">Handwerk:</strong> Jedes Produkt ist ein Unikat, akribisch von Hand gefertigt aus hochwertigen Materialien.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary text-2xl mt-1 flex-shrink-0">☽</span>
                <span className="text-foreground/80 font-light">
                  <strong className="text-foreground uppercase tracking-wider">Dunkle Ästhetik:</strong> Schönheit existiert im Schatten, im Bizarren, im kompromisslos Unkonventionellen.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary text-2xl mt-1 flex-shrink-0">☽</span>
                <span className="text-foreground/80 font-light">
                  <strong className="text-foreground uppercase tracking-wider">Individualität:</strong> Schmuck als Ausdruck nonkonformistischer Identität und persönlicher Mystik.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary text-2xl mt-1 flex-shrink-0">☽</span>
                <span className="text-foreground/80 font-light">
                  <strong className="text-foreground uppercase tracking-wider">Inklusivität:</strong> Accessoires für alle Körperformen, Geschlechtsidentitäten und ästhetischen Präferenzen.
                </span>
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="text-center mt-20">
          <p className="text-xl md:text-2xl text-foreground/60 italic font-light tracking-wide leading-relaxed max-w-3xl mx-auto">
            "Für moderne Hexen, Gothic-Seelen und alle, die Eleganz in der Leere finden."
          </p>
        </div>
      </motion.div>
    </section>
  )
}

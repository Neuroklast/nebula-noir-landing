export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative">
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

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 bioshock-glow">
            THE NEBULA NOIR PHILOSOPHY
          </h2>
          <div className="art-deco-divider max-w-md mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-24">
          <div className="text-center space-y-6 fade-in-up stagger-1 relative p-8 metallic-border">
            <div className="text-7xl mb-4 bioshock-glow" style={{ textShadow: '0 0 30px rgba(255, 255, 255, 0.5)' }}>✦</div>
            <h3 className="text-2xl md:text-3xl uppercase tracking-[0.2em]">Mission</h3>
            <p className="text-foreground/75 leading-relaxed text-base font-light">
              We craft occult and alternative accessories that transcend the boundary between elegance and the unconventional. 
              Every piece is a handmade artifact that makes darkness wearable and aesthetically captivating.
            </p>
          </div>

          <div className="text-center space-y-6 fade-in-up stagger-2 relative p-8 metallic-border">
            <div className="text-7xl mb-4 text-primary bioshock-glow">◆</div>
            <h3 className="text-2xl md:text-3xl uppercase tracking-[0.2em]">Identity</h3>
            <p className="text-foreground/75 leading-relaxed text-base font-light">
              Cosmic Art Deco Goth. The fusion of Art Déco's geometric precision (1920s), 
              the infinite depth of cosmic nebulae, and the dark aesthetics of gothic subculture.
            </p>
          </div>

          <div className="text-center space-y-6 fade-in-up stagger-3 relative p-8 metallic-border">
            <div className="text-7xl mb-4 bioshock-glow" style={{ textShadow: '0 0 30px rgba(255, 255, 255, 0.5)' }}>☽</div>
            <h3 className="text-2xl md:text-3xl uppercase tracking-[0.2em]">Craft</h3>
            <p className="text-foreground/75 leading-relaxed text-base font-light">
              Each product is handcrafted with meticulous attention to detail using resin, PVC, and precious metals. 
              No mass production—only unique pieces for nonconformist souls.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative p-10 md:p-16 metallic-border">
            <div className="art-deco-corner top-left"></div>
            <div className="art-deco-corner top-right"></div>
            <div className="art-deco-corner bottom-left"></div>
            <div className="art-deco-corner bottom-right"></div>
            
            <h3 className="text-3xl md:text-4xl lg:text-5xl mb-12 text-center uppercase tracking-[0.25em] bioshock-glow">Our Values</h3>
            <ul className="space-y-8 text-base md:text-lg">
              <li className="flex items-start gap-4">
                <span className="text-primary text-2xl mt-1 flex-shrink-0">☽</span>
                <span className="text-foreground/80 font-light">
                  <strong className="text-foreground uppercase tracking-wider">Handcraft:</strong> Every product is a unique artifact, meticulously handmade with premium materials.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary text-2xl mt-1 flex-shrink-0">☽</span>
                <span className="text-foreground/80 font-light">
                  <strong className="text-foreground uppercase tracking-wider">Dark Aesthetics:</strong> Beauty exists in shadows, in the bizarre, in the unapologetically unconventional.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary text-2xl mt-1 flex-shrink-0">☽</span>
                <span className="text-foreground/80 font-light">
                  <strong className="text-foreground uppercase tracking-wider">Individuality:</strong> Jewelry as an expression of nonconformist identity and personal mysticism.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary text-2xl mt-1 flex-shrink-0">☽</span>
                <span className="text-foreground/80 font-light">
                  <strong className="text-foreground uppercase tracking-wider">Inclusivity:</strong> Accessories designed for all body types, gender identities, and aesthetic preferences.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-20">
          <p className="text-xl md:text-2xl text-foreground/60 italic font-light tracking-wide leading-relaxed max-w-3xl mx-auto">
            "For modern witches, gothic souls, and those who find elegance in the void."
          </p>
        </div>
      </div>
    </section>
  )
}

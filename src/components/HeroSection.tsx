import logoImage from '@/assets/images/IMG_0085_(1).svg'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center cosmic-bg overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="art-deco-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 50,0 L 50,100 M 0,50 L 100,50" stroke="white" strokeWidth="0.5" fill="none"/>
                <circle cx="50" cy="50" r="20" stroke="white" strokeWidth="0.5" fill="none"/>
                <path d="M 0,0 L 25,25 M 100,0 L 75,25 M 100,100 L 75,75 M 0,100 L 25,75" stroke="white" strokeWidth="0.5" fill="none"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#art-deco-pattern)"/>
          </svg>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto px-6 py-24 relative z-10">
        <div className="relative p-8 md:p-16 lg:p-20">
          <div className="art-deco-corner top-left"></div>
          <div className="art-deco-corner top-right"></div>
          <div className="art-deco-corner bottom-left"></div>
          <div className="art-deco-corner bottom-right"></div>
          
          <div className="text-center space-y-12 fade-in-up">
            <div className="flex justify-center mb-12">
              <div className="relative">
                <img 
                  src={logoImage} 
                  alt="Nebula Noir" 
                  className="h-32 w-32 md:h-40 md:w-40 animate-pulse"
                  style={{ 
                    filter: 'drop-shadow(0 0 30px rgba(255, 255, 255, 0.5)) drop-shadow(0 0 60px rgba(102, 51, 153, 0.4))'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-radial from-primary/30 via-primary/10 to-transparent blur-3xl" />
              </div>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-[0.25em] leading-tight">
                NEBULA NOIR
              </h1>
              <div className="flex items-center justify-center gap-4">
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-foreground to-foreground bioshock-glow" />
                <span className="text-lg md:text-xl uppercase tracking-[0.3em] text-foreground/80">◆</span>
                <div className="w-24 h-0.5 bg-gradient-to-l from-transparent via-foreground to-foreground bioshock-glow" />
              </div>
            </div>

            <p className="text-2xl md:text-3xl lg:text-4xl font-light tracking-[0.2em] text-foreground/90 fade-in-up stagger-1 uppercase">
              Cosmic Art Deco Goth
            </p>

            <div className="max-w-3xl mx-auto fade-in-up stagger-2">
              <p className="text-base md:text-lg lg:text-xl text-foreground/75 leading-relaxed font-light tracking-wide">
                Handcrafted occult and alternative accessories that transcend the boundary between elegance and darkness. 
                Each piece is a unique artifact, lovingly created from resin, PVC, and precious metals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-12 fade-in-up stagger-3">
              <a 
                href="#catalog" 
                className="group relative px-10 py-5 bg-transparent border-2 border-foreground text-foreground font-semibold uppercase tracking-[0.25em] transition-all duration-500 overflow-hidden metallic-border hover:text-background"
              >
                <span className="relative z-10">Explore Collection</span>
                <div className="absolute inset-0 bg-foreground transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </a>
              <a 
                href="#about" 
                className="group relative px-10 py-5 bg-transparent border-2 border-primary/50 text-foreground font-semibold uppercase tracking-[0.25em] transition-all duration-500 overflow-hidden hover:border-primary"
                style={{ boxShadow: '0 0 20px rgba(102, 51, 153, 0.2)' }}
              >
                <span className="relative z-10 group-hover:text-primary transition-colors">Our Philosophy</span>
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <div className="w-0.5 h-16 bg-gradient-to-b from-foreground/50 to-transparent" />
          <div className="w-8 h-12 border-2 border-foreground/40 flex justify-center pt-2">
            <div className="w-1 h-3 bg-foreground/40 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}

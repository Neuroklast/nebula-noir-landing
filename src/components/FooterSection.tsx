import logoImage from '@/assets/images/IMG_0085_(1).svg'

export function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t-2 border-foreground/20 py-16">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <img 
                src={logoImage} 
                alt="Nebula Noir" 
                className="h-12 w-12"
                style={{ filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))' }}
              />
              <h3 className="text-2xl uppercase tracking-[0.2em] bioshock-glow-animated">Nebula Noir</h3>
            </div>
            <p className="text-foreground/70 leading-relaxed font-light">
              Handcrafted occult and alternative accessories. Cosmic Art Deco Goth for nonconformist souls.
            </p>
          </div>

          <div>
            <h4 className="text-base uppercase tracking-[0.25em] mb-6 bioshock-glow-animated">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <a href="#catalog" className="text-foreground/70 hover:text-foreground transition-all duration-300 uppercase text-sm tracking-wider">
                  Collection
                </a>
              </li>
              <li>
                <a href="#about" className="text-foreground/70 hover:text-foreground transition-all duration-300 uppercase text-sm tracking-wider">
                  Philosophy
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/70 hover:text-foreground transition-all duration-300 uppercase text-sm tracking-wider">
                  Custom Orders
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base uppercase tracking-[0.25em] mb-6 bioshock-glow-animated">Community</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-all duration-300 uppercase text-sm tracking-wider">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-all duration-300 uppercase text-sm tracking-wider">
                  Etsy Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-all duration-300 uppercase text-sm tracking-wider">
                  Festival Schedule
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-foreground/20 pt-8">
          <div className="text-center space-y-3">
            <p className="text-foreground/60 text-sm uppercase tracking-[0.15em]">
              © {currentYear} Nebula Noir. All artifacts handcrafted with mystical intention.
            </p>
            <p className="text-foreground/50 text-xs tracking-wider">
              www.nebula-noir.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

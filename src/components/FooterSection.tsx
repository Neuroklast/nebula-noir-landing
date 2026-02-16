import logoImage from '@/assets/images/IMG_0085_(1).svg'
import { LegalSection } from '@/lib/legal-content'

interface FooterSectionProps {
  onLegalPageOpen: (section: LegalSection) => void
}

export function FooterSection({ onLegalPageOpen }: FooterSectionProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t-2 border-foreground/20 py-12 md:py-16 overflow-hidden max-w-full">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-3 md:gap-4">
              <img 
                src={logoImage} 
                alt="Nebula Noir" 
                className="h-10 w-10 md:h-12 md:w-12"
                style={{ filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))' }}
              />
              <h3 className="text-lg md:text-2xl uppercase tracking-[0.15em] md:tracking-[0.2em] bioshock-glow-animated">Nebula Noir</h3>
            </div>
            <p className="text-foreground/70 leading-relaxed font-light text-xs md:text-sm">
              Handgefertigter okkulter & alternativer Schmuck. Cosmic Art Deco Goth für nonkonformistische Seelen.
            </p>
          </div>

          <div>
            <h4 className="text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.25em] mb-4 md:mb-6 bioshock-glow-animated">Shop</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a href="#catalog" className="text-foreground/70 hover:text-foreground transition-all duration-300 uppercase text-xs tracking-wider">
                  Kollektion
                </a>
              </li>
              <li>
                <a href="#about" className="text-foreground/70 hover:text-foreground transition-all duration-300 uppercase text-xs tracking-wider">
                  Philosophie
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/70 hover:text-foreground transition-all duration-300 uppercase text-xs tracking-wider">
                  Maßanfertigungen
                </a>
              </li>
              <li>
                <button 
                  onClick={() => onLegalPageOpen('customOrders')}
                  className="text-foreground/70 hover:text-foreground transition-all duration-300 uppercase text-xs tracking-wider text-left"
                >
                  Custom Orders
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.25em] mb-4 md:mb-6 bioshock-glow-animated">Info</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <button 
                  onClick={() => onLegalPageOpen('about')}
                  className="text-foreground/70 hover:text-foreground transition-all duration-300 uppercase text-xs tracking-wider text-left"
                >
                  Über Uns
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onLegalPageOpen('versand')}
                  className="text-foreground/70 hover:text-foreground transition-all duration-300 uppercase text-xs tracking-wider text-left"
                >
                  Versand
                </button>
              </li>
              <li>
                <a 
                  href="https://www.etsy.com/shop/nebulanoirnn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-foreground transition-all duration-300 uppercase text-xs tracking-wider"
                >
                  Etsy Shop
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.25em] mb-4 md:mb-6 bioshock-glow-animated">Rechtliches</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <button 
                  onClick={() => onLegalPageOpen('impressum')}
                  className="text-foreground/70 hover:text-foreground transition-all duration-300 uppercase text-xs tracking-wider text-left"
                >
                  Impressum
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onLegalPageOpen('datenschutz')}
                  className="text-foreground/70 hover:text-foreground transition-all duration-300 uppercase text-xs tracking-wider text-left"
                >
                  Datenschutz
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onLegalPageOpen('agb')}
                  className="text-foreground/70 hover:text-foreground transition-all duration-300 uppercase text-xs tracking-wider text-left"
                >
                  AGB
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onLegalPageOpen('widerruf')}
                  className="text-foreground/70 hover:text-foreground transition-all duration-300 uppercase text-xs tracking-wider text-left"
                >
                  Widerruf
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-foreground/20 pt-6 md:pt-8">
          <div className="text-center space-y-2 md:space-y-3">
            <p className="text-foreground/60 text-xs uppercase tracking-[0.15em]">
              © {currentYear} Nebula Noir. Alle Artefakte handgefertigt mit mystischer Intention.
            </p>
            <p className="text-foreground/50 text-xs tracking-wider">
              Made in Germany · Handcrafted with Dark Elegance
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

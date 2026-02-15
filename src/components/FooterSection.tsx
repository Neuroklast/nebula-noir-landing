import { MoonStars } from '@phosphor-icons/react'

export function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t-2 border-primary/30 py-12">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MoonStars size={32} weight="thin" className="text-primary" />
              <h3 className="text-2xl">Nebula Noir</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Handcrafted occult and alternative accessories. Cosmic Art Deco Goth for nonconformist souls.
            </p>
          </div>

          <div>
            <h4 className="text-lg uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#catalog" className="text-muted-foreground hover:text-primary transition-colors">
                  Collection
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  Philosophy
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Custom Orders
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg uppercase tracking-wider mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Etsy Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Festival Schedule
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Nebula Noir. All artifacts handcrafted with mystical intention.
          </p>
          <p className="text-muted-foreground/60 text-xs mt-2">
            www.nebula-noir.com
          </p>
        </div>
      </div>
    </footer>
  )
}

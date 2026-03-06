import { useState } from 'react'
import { 
  Hero, 
  Navigation, 
  Card, 
  BackgroundEffects, 
  SectionDivider,
  LoadingScreen 
} from '@/themes/nebula-noir-theme'

export function ThemeDemo() {
  const [isLoading, setIsLoading] = useState(true)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Contact', href: '#contact' }
  ]

  const products = [
    { id: 1, name: 'Cosmic Choker', price: '€45', description: 'Handcrafted PVC choker with moon phase details' },
    { id: 2, name: 'Nebula Ring', price: '€32', description: 'Sterling silver ring with purple resin nebula' },
    { id: 3, name: 'Stardust Earrings', price: '€28', description: 'Art Deco inspired geometric earrings' }
  ]

  return (
    <>
      <LoadingScreen 
        onLoadingComplete={() => setIsLoading(false)}
        duration={3000}
      />

      {!isLoading && (
        <div className="min-h-screen bg-background text-foreground">
          <BackgroundEffects />
          
          <div className="relative z-10">
            <Navigation 
              items={navItems}
              cartCount={3}
            />

            <Hero 
              title="NEBULA NOIR"
              subtitle="Cosmic Art Deco Goth"
              ctaText="EXPLORE COLLECTION"
              onCtaClick={() => {
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
              }}
            />

            <SectionDivider symbol="☾" />

            <section id="about" className="py-20 px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl tracking-[0.25em] mb-8 spark-theme-bioshock-glow">
                  ABOUT US
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed tracking-wide">
                  Handgefertigte okkulte und alternative Accessoires. Jedes Stück ist ein Unikat, 
                  das die Grenze zwischen Eleganz und Dunkelheit überschreitet.
                </p>
              </div>
            </section>

            <SectionDivider symbol="☾" />

            <section id="products" className="py-20 px-4">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-6xl tracking-[0.25em] mb-16 text-center spark-theme-bioshock-glow">
                  COLLECTION
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {products.map((product, index) => (
                    <Card key={product.id} delay={index * 0.2}>
                      <div className="space-y-4">
                        <div className="aspect-square bg-muted/20 mb-4 flex items-center justify-center">
                          <span className="text-6xl spark-theme-bioshock-glow">☾</span>
                        </div>
                        
                        <h3 className="text-xl tracking-[0.15em] text-foreground">
                          {product.name}
                        </h3>
                        
                        <p className="text-sm text-muted-foreground tracking-wide">
                          {product.description}
                        </p>
                        
                        <div className="flex items-center justify-between pt-4">
                          <span className="text-2xl text-accent font-medium">
                            {product.price}
                          </span>
                          
                          <button className="px-6 py-2 border border-foreground text-foreground tracking-[0.15em] text-sm spark-theme-art-deco-button hover:bg-foreground hover:text-background transition-colors duration-300">
                            ADD TO CART
                          </button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            <SectionDivider symbol="☾" />

            <section id="contact" className="py-20 px-4">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-6xl tracking-[0.25em] mb-16 text-center spark-theme-bioshock-glow">
                  CONTACT
                </h2>

                <Card hoverable={false}>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm tracking-[0.15em] mb-2 text-muted-foreground">
                        NAME
                      </label>
                      <input 
                        type="text"
                        className="w-full bg-background border border-border px-4 py-3 text-foreground tracking-wide focus:border-accent focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm tracking-[0.15em] mb-2 text-muted-foreground">
                        EMAIL
                      </label>
                      <input 
                        type="email"
                        className="w-full bg-background border border-border px-4 py-3 text-foreground tracking-wide focus:border-accent focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm tracking-[0.15em] mb-2 text-muted-foreground">
                        MESSAGE
                      </label>
                      <textarea 
                        rows={6}
                        className="w-full bg-background border border-border px-4 py-3 text-foreground tracking-wide focus:border-accent focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-4 bg-transparent border-2 border-foreground text-foreground tracking-[0.2em] spark-theme-art-deco-button hover:bg-foreground hover:text-background transition-colors duration-300"
                    >
                      SEND MESSAGE
                    </button>
                  </form>
                </Card>
              </div>
            </section>

            <footer className="py-12 px-4 border-t border-border">
              <div className="max-w-7xl mx-auto text-center">
                <p className="text-sm tracking-[0.2em] text-muted-foreground">
                  © 2024 NEBULA NOIR - COSMIC ART DECO GOTH
                </p>
              </div>
            </footer>
          </div>
        </div>
      )}
    </>
  )
}

export default ThemeDemo

import { useState, useEffect } from 'react'
import { CartItem } from '@/lib/types'
import { CartDrawer } from './CartDrawer'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { List, MoonStars } from '@phosphor-icons/react'

interface NavigationProps {
  cart: CartItem[]
  onUpdateQuantity: (productId: string, newQuantity: number) => void
  onRemoveItem: (productId: string) => void
  onCheckout: () => void
}

export function Navigation({ cart, onUpdateQuantity, onRemoveItem, onCheckout }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#catalog', label: 'Collection' },
    { href: '#about', label: 'Philosophy' },
    { href: '#contact', label: 'Custom Orders' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/95 backdrop-blur-sm border-b border-primary/30 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <MoonStars size={32} weight="thin" className="text-primary group-hover:rotate-12 transition-transform" />
            <span className="text-xl md:text-2xl font-bold uppercase tracking-[0.15em] hidden sm:inline">
              Nebula Noir
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-wider text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <CartDrawer 
              cart={cart} 
              onUpdateQuantity={onUpdateQuantity}
              onRemoveItem={onRemoveItem}
              onCheckout={onCheckout}
            />

            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="outline" size="icon" className="border-2 border-foreground">
                  <List size={24} weight="bold" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-card border-l-2 border-primary/30">
                <nav className="flex flex-col gap-6 mt-8">
                  {navLinks.map(link => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-2xl uppercase tracking-wider hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

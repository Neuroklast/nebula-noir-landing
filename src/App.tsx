import { useState, useEffect } from 'react'
import { useKV } from '@github/spark/hooks'
import { Toaster } from '@/components/ui/sonner'
import { Navigation } from '@/components/Navigation'
import { HeroSection } from '@/components/HeroSection'
import { SectionTransition } from '@/components/SectionTransition'
import { AboutSection } from '@/components/AboutSection'
import { CatalogSection } from '@/components/CatalogSection'
import { ContactSection } from '@/components/ContactSection'
import { FooterSection } from '@/components/FooterSection'
import { CheckoutDialog } from '@/components/CheckoutDialog'
import { LegalPage } from '@/components/LegalPage'
import { ArtDecoFrameAnimation } from '@/components/ArtDecoFrameAnimation'
import { ArtDecoBackground } from '@/components/ArtDecoBackground'
import LoadingScreen from '@/themes/nebula-noir-theme/LoadingScreen'
import { Product, CartItem } from '@/lib/types'
import { LegalSection } from '@/lib/legal-content'
import { toast } from 'sonner'
import '@/themes/nebula-noir-theme/styles.css'

function App() {
  const [cart, setCart] = useKV<CartItem[]>('nebula-noir-cart', [])
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [legalSection, setLegalSection] = useState<LegalSection | null>(null)
  const [legalOpen, setLegalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const cursorGlow = document.createElement('div')
    cursorGlow.id = 'cursor-glow'
    document.body.appendChild(cursorGlow)

    const moveCursor = (e: MouseEvent) => {
      cursorGlow.style.left = `${e.clientX}px`
      cursorGlow.style.top = `${e.clientY}px`
    }

    const showCursor = () => {
      cursorGlow.style.opacity = '1'
    }

    const hideCursor = () => {
      cursorGlow.style.opacity = '0'
    }

    document.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseenter', showCursor)
    document.addEventListener('mouseleave', hideCursor)

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseenter', showCursor)
      document.removeEventListener('mouseleave', hideCursor)
      cursorGlow.remove()
    }
  }, [])

  const handleAddToCart = (product: Product) => {
    setCart((currentCart) => {
      const safeCart = currentCart || []
      const existingItem = safeCart.find(item => item.product.id === product.id)
      
      if (existingItem) {
        toast.success(`Added another ${product.name} to cart`)
        return safeCart.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        toast.success(`${product.name} added to cart`)
        return [...safeCart, { product, quantity: 1 }]
      }
    })
  }

  const handleUpdateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return
    
    setCart((currentCart) => {
      const safeCart = currentCart || []
      return safeCart.map(item =>
        item.product.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    })
  }

  const handleRemoveItem = (productId: string) => {
    setCart((currentCart) => {
      const safeCart = currentCart || []
      return safeCart.filter(item => item.product.id !== productId)
    })
    toast.success('Item removed from cart')
  }

  const handleCheckout = () => {
    if (!cart || cart.length === 0) {
      toast.error('Your cart is empty')
      return
    }
    setCheckoutOpen(true)
  }

  const handleCheckoutComplete = () => {
    setCart([])
  }

  const handleLegalPageOpen = (section: LegalSection) => {
    setLegalSection(section)
    setLegalOpen(true)
  }

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} duration={3500} />
  }

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden max-w-full relative">
      <div className="crt-scanline" />
      <ArtDecoBackground />
      <ArtDecoFrameAnimation />
      
      <div className="relative z-[20]">
        <Navigation 
          cart={cart || []}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onCheckout={handleCheckout}
        />
        
        <HeroSection />
        <SectionTransition />
        <AboutSection />
        <SectionTransition />
        <CatalogSection onAddToCart={handleAddToCart} />
        <SectionTransition />
        <ContactSection />
        <FooterSection onLegalPageOpen={handleLegalPageOpen} />

        <CheckoutDialog 
          open={checkoutOpen}
          onOpenChange={setCheckoutOpen}
          cart={cart || []}
          onCheckoutComplete={handleCheckoutComplete}
        />

        <LegalPage 
          section={legalSection}
          open={legalOpen}
          onOpenChange={setLegalOpen}
        />

        <Toaster 
          position="top-center"
          toastOptions={{
            style: {
              background: 'oklch(0.08 0 0)',
              color: 'oklch(0.99 0 0)',
              border: '1px solid oklch(0.45 0.15 300)',
            },
          }}
        />
      </div>
    </div>
  )
}

export default App

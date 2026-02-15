import { useState } from 'react'
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
import { ArtDecoFrameAnimation } from '@/components/ArtDecoFrameAnimation'
import { Product, CartItem } from '@/lib/types'
import { toast } from 'sonner'

function App() {
  const [cart, setCart] = useKV<CartItem[]>('nebula-noir-cart', [])
  const [checkoutOpen, setCheckoutOpen] = useState(false)

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

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="crt-scanline" />
      <ArtDecoFrameAnimation />
      
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
      <FooterSection />

      <CheckoutDialog 
        open={checkoutOpen}
        onOpenChange={setCheckoutOpen}
        cart={cart || []}
        onCheckoutComplete={handleCheckoutComplete}
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
  )
}

export default App

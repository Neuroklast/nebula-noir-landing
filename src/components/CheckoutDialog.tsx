import { useState } from 'react'
import { CartItem } from '@/lib/types'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'

interface CheckoutDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  cart: CartItem[]
  onCheckoutComplete: () => void
}

export function CheckoutDialog({ open, onOpenChange, cart, onCheckoutComplete }: CheckoutDialogProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postal: '',
    country: ''
  })

  const totalPrice = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const requiredFields = Object.entries(formData)
    const emptyFields = requiredFields.filter(([_, value]) => !value)
    
    if (emptyFields.length > 0) {
      toast.error('Please fill in all fields')
      return
    }

    if (!formData.email.includes('@')) {
      toast.error('Please enter a valid email address')
      return
    }

    toast.success('Order placed successfully! Check your email for confirmation.')
    onCheckoutComplete()
    onOpenChange(false)
    setFormData({
      name: '',
      email: '',
      address: '',
      city: '',
      postal: '',
      country: ''
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[1200px] w-[96vw] bg-card border-2 border-foreground/30 max-h-[90vh] overflow-y-auto flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl uppercase tracking-[0.15em] md:tracking-[0.25em] bioshock-glow">Checkout</DialogTitle>
        </DialogHeader>

        <div className="mt-6 overflow-y-auto flex-1">
          <div className="mb-6 md:mb-8 p-4 md:p-6 relative border-2 border-foreground/30 bg-background/50">
            <h3 className="text-base md:text-lg uppercase tracking-[0.15em] md:tracking-[0.2em] mb-4 md:mb-6 bioshock-glow">Order Summary</h3>
            <div className="space-y-2 md:space-y-3">
              {cart.map(item => (
                <div key={item.product.id} className="flex justify-between text-xs md:text-sm">
                  <span className="text-foreground/80 uppercase tracking-wider">{item.product.name} × {item.quantity}</span>
                  <span className="text-foreground">€{(item.product.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-foreground/30 mt-4 md:mt-6 pt-4 md:pt-6 flex justify-between font-semibold text-lg md:text-xl">
              <span className="uppercase tracking-wider">Total:</span>
              <span className="bioshock-glow">€{totalPrice.toFixed(2)}</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2 md:space-y-3">
                <Label htmlFor="checkout-name" className="text-xs md:text-sm uppercase tracking-[0.15em] md:tracking-[0.2em]">
                  Full Name
                </Label>
                <Input
                  id="checkout-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background border-0 border-b-2 border-foreground/30 focus:border-foreground rounded-none px-0 transition-all duration-300 text-sm md:text-base"
                />
              </div>

              <div className="space-y-2 md:space-y-3">
                <Label htmlFor="checkout-email" className="text-xs md:text-sm uppercase tracking-[0.15em] md:tracking-[0.2em]">
                  Email
                </Label>
                <Input
                  id="checkout-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background border-0 border-b-2 border-foreground/30 focus:border-foreground rounded-none px-0 transition-all duration-300 text-sm md:text-base"
                />
              </div>
            </div>

            <div className="space-y-2 md:space-y-3">
              <Label htmlFor="checkout-address" className="text-xs md:text-sm uppercase tracking-[0.15em] md:tracking-[0.2em]">
                Address
              </Label>
              <Input
                id="checkout-address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="bg-background border-0 border-b-2 border-foreground/30 focus:border-foreground rounded-none px-0 transition-all duration-300 text-sm md:text-base"
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              <div className="space-y-2 md:space-y-3">
                <Label htmlFor="checkout-city" className="text-xs md:text-sm uppercase tracking-[0.15em] md:tracking-[0.2em]">
                  City
                </Label>
                <Input
                  id="checkout-city"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="bg-background border-0 border-b-2 border-foreground/30 focus:border-foreground rounded-none px-0 transition-all duration-300 text-sm md:text-base"
                />
              </div>

              <div className="space-y-2 md:space-y-3">
                <Label htmlFor="checkout-postal" className="text-xs md:text-sm uppercase tracking-[0.15em] md:tracking-[0.2em]">
                  Postal
                </Label>
                <Input
                  id="checkout-postal"
                  value={formData.postal}
                  onChange={(e) => setFormData({ ...formData, postal: e.target.value })}
                  className="bg-background border-0 border-b-2 border-foreground/30 focus:border-foreground rounded-none px-0 transition-all duration-300 text-sm md:text-base"
                />
              </div>

              <div className="space-y-2 md:space-y-3 col-span-2 md:col-span-1">
                <Label htmlFor="checkout-country" className="text-xs md:text-sm uppercase tracking-[0.15em] md:tracking-[0.2em]">
                  Country
                </Label>
                <Input
                  id="checkout-country"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="bg-background border-0 border-b-2 border-foreground/30 focus:border-foreground rounded-none px-0 transition-all duration-300 text-sm md:text-base"
                />
              </div>
            </div>

            <div className="pt-4 md:pt-6">
              <Button
                type="submit"
                className="w-full bg-transparent border-2 border-foreground text-foreground hover:bg-foreground hover:text-background uppercase tracking-[0.15em] md:tracking-[0.25em] font-semibold py-4 md:py-6 text-sm md:text-base transition-all duration-500"
              >
                Complete Order
              </Button>
            </div>

            <p className="text-xs text-foreground/50 text-center mt-4 italic">
              Note: This is a demo checkout. No actual payment processing occurs.
            </p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}

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
      <DialogContent className="max-w-2xl bg-card border-2 border-primary/30 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl uppercase tracking-wider">Checkout</DialogTitle>
        </DialogHeader>

        <div className="mt-6">
          <div className="mb-6 p-4 border border-border">
            <h3 className="text-lg uppercase tracking-wider mb-4">Order Summary</h3>
            <div className="space-y-2">
              {cart.map(item => (
                <div key={item.product.id} className="flex justify-between text-sm">
                  <span>{item.product.name} × {item.quantity}</span>
                  <span>€{(item.product.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-border mt-4 pt-4 flex justify-between font-semibold text-lg">
              <span>Total:</span>
              <span>€{totalPrice.toFixed(2)}</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="checkout-name" className="text-sm uppercase tracking-wider">
                  Full Name
                </Label>
                <Input
                  id="checkout-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background border-0 border-b-2 border-input focus:border-primary rounded-none px-0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="checkout-email" className="text-sm uppercase tracking-wider">
                  Email
                </Label>
                <Input
                  id="checkout-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background border-0 border-b-2 border-input focus:border-primary rounded-none px-0"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="checkout-address" className="text-sm uppercase tracking-wider">
                Address
              </Label>
              <Input
                id="checkout-address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="bg-background border-0 border-b-2 border-input focus:border-primary rounded-none px-0"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="checkout-city" className="text-sm uppercase tracking-wider">
                  City
                </Label>
                <Input
                  id="checkout-city"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="bg-background border-0 border-b-2 border-input focus:border-primary rounded-none px-0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="checkout-postal" className="text-sm uppercase tracking-wider">
                  Postal Code
                </Label>
                <Input
                  id="checkout-postal"
                  value={formData.postal}
                  onChange={(e) => setFormData({ ...formData, postal: e.target.value })}
                  className="bg-background border-0 border-b-2 border-input focus:border-primary rounded-none px-0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="checkout-country" className="text-sm uppercase tracking-wider">
                  Country
                </Label>
                <Input
                  id="checkout-country"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="bg-background border-0 border-b-2 border-input focus:border-primary rounded-none px-0"
                />
              </div>
            </div>

            <div className="pt-6">
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wider font-semibold py-6 text-lg shadow-[0_0_30px_rgba(102,51,153,0.4)]"
              >
                Complete Order
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Note: This is a demo checkout. No actual payment processing occurs.
            </p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}

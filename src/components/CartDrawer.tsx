import { CartItem } from '@/lib/types'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ShoppingCart, X, Plus, Minus } from '@phosphor-icons/react'
import { Badge } from '@/components/ui/badge'

interface CartDrawerProps {
  cart: CartItem[]
  onUpdateQuantity: (productId: string, newQuantity: number) => void
  onRemoveItem: (productId: string) => void
  onCheckout: () => void
}

export function CartDrawer({ cart, onUpdateQuantity, onRemoveItem, onCheckout }: CartDrawerProps) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          size="icon"
          className="relative metallic-border hover:bg-foreground hover:text-background transition-all duration-500"
        >
          <ShoppingCart size={24} weight="bold" />
          {totalItems > 0 && (
            <Badge className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center p-0 bg-primary text-primary-foreground border-2 border-background nebula-glow">
              {totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-xl md:max-w-2xl bg-card border-l-2 border-foreground/30 flex flex-col overflow-hidden">
        <SheetHeader className="flex-shrink-0">
          <SheetTitle className="text-3xl uppercase tracking-[0.25em] bioshock-glow">Your Cart</SheetTitle>
        </SheetHeader>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 space-y-6">
            <ShoppingCart size={80} weight="thin" className="text-foreground/30" />
            <p className="text-lg text-foreground/60 uppercase tracking-wider">Your cart is empty</p>
            <p className="text-sm text-foreground/40 font-light">Add some cosmic artifacts to begin</p>
          </div>
        ) : (
          <div className="flex flex-col flex-1 overflow-hidden mt-6">
            <ScrollArea className="flex-1 pr-4">
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={item.product.id} className="relative p-5 space-y-4 border-2 border-foreground/30 bg-background/50">
                    <div className="flex gap-4">
                      <img 
                        src={item.product.image} 
                        alt={item.product.name}
                        className="w-24 h-24 object-cover filter grayscale contrast-110"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-base uppercase tracking-wider mb-2 truncate bioshock-glow">
                          {item.product.name}
                        </h4>
                        <p className="text-sm text-foreground/70">
                          €{item.product.price.toFixed(2)}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onRemoveItem(item.product.id)}
                        className="h-8 w-8 text-foreground/60 hover:text-destructive hover:bg-destructive/10"
                      >
                        <X size={18} weight="bold" />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="h-8 w-8 border-foreground/30"
                        >
                          <Minus size={16} weight="bold" />
                        </Button>
                        <span className="w-12 text-center font-semibold text-lg">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="h-8 w-8 border-foreground/30"
                        >
                          <Plus size={16} weight="bold" />
                        </Button>
                      </div>
                      <div className="font-semibold text-lg bioshock-glow">
                        €{(item.product.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="border-t-2 border-foreground/30 pt-6 mt-6 space-y-6 flex-shrink-0">
              <div className="flex justify-between items-center text-xl">
                <span className="uppercase tracking-[0.25em] font-semibold">Total:</span>
                <span className="text-3xl font-light bioshock-glow">€{totalPrice.toFixed(2)}</span>
              </div>
              <Button
                onClick={onCheckout}
                className="w-full bg-transparent border-2 border-foreground text-foreground hover:bg-foreground hover:text-background uppercase tracking-[0.25em] font-semibold py-6 text-base transition-all duration-500"
              >
                Proceed to Checkout
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}

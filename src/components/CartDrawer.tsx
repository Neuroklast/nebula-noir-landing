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
          className="relative border-2 border-foreground hover:bg-foreground hover:text-background transition-all"
        >
          <ShoppingCart size={24} weight="bold" />
          {totalItems > 0 && (
            <Badge className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center p-0 bg-primary text-primary-foreground rounded-full">
              {totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg bg-card border-l-2 border-primary/30">
        <SheetHeader>
          <SheetTitle className="text-3xl uppercase tracking-wider">Your Cart</SheetTitle>
        </SheetHeader>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] space-y-4">
            <ShoppingCart size={64} weight="thin" className="text-muted-foreground" />
            <p className="text-lg text-muted-foreground">Your cart is empty</p>
            <p className="text-sm text-muted-foreground/70">Add some cosmic artifacts to begin</p>
          </div>
        ) : (
          <div className="flex flex-col h-[calc(100vh-120px)] mt-6">
            <ScrollArea className="flex-1 pr-4">
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={item.product.id} className="border border-border p-4 space-y-3">
                    <div className="flex gap-4">
                      <img 
                        src={item.product.image} 
                        alt={item.product.name}
                        className="w-20 h-20 object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-lg mb-1 truncate">
                          {item.product.name}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          €{item.product.price.toFixed(2)}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onRemoveItem(item.product.id)}
                        className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
                      >
                        <X size={18} weight="bold" />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="h-8 w-8"
                        >
                          <Minus size={16} weight="bold" />
                        </Button>
                        <span className="w-12 text-center font-semibold">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="h-8 w-8"
                        >
                          <Plus size={16} weight="bold" />
                        </Button>
                      </div>
                      <div className="font-semibold text-lg">
                        €{(item.product.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="border-t-2 border-primary/30 pt-6 mt-6 space-y-4">
              <div className="flex justify-between items-center text-xl">
                <span className="uppercase tracking-wider font-semibold">Total:</span>
                <span className="text-2xl font-bold">€{totalPrice.toFixed(2)}</span>
              </div>
              <Button
                onClick={onCheckout}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wider font-semibold py-6 text-lg shadow-[0_0_30px_rgba(102,51,153,0.4)]"
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

import { Product } from '@/lib/types'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ShoppingCart } from '@phosphor-icons/react'

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="group border border-border bg-card transition-all duration-300 hover:border-primary/50 nebula-glow-hover overflow-hidden">
      <div className="aspect-square overflow-hidden bg-muted relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {product.madeToOrder && (
          <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground uppercase tracking-wide">
            Made to Order
          </Badge>
        )}
      </div>
      
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl md:text-2xl mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed font-light">
            {product.description}
          </p>
        </div>

        {product.madeToOrder && product.estimatedDays && (
          <p className="text-xs text-muted-foreground italic">
            ⏳ Estimated production: {product.estimatedDays} days
          </p>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="text-2xl font-semibold text-foreground">
            €{product.price.toFixed(2)}
          </div>
          <Button
            onClick={() => onAddToCart(product)}
            className="bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wider font-semibold flex items-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(102,51,153,0.4)]"
          >
            <ShoppingCart size={20} weight="bold" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}

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
    <div className="group relative bg-card transition-all duration-500 nebula-glow-hover overflow-hidden metallic-border">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="aspect-square overflow-hidden bg-muted relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
          loading="lazy"
          style={{ filter: 'contrast(1.1) brightness(0.95)' }}
        />
        {product.madeToOrder && (
          <Badge className="absolute top-4 right-4 bg-primary/90 text-primary-foreground uppercase tracking-[0.15em] text-xs nebula-glow">
            Made to Order
          </Badge>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <div className="p-6 space-y-4 relative z-10">
        <div>
          <h3 className="text-xl md:text-2xl mb-3 group-hover:text-foreground transition-colors uppercase tracking-[0.15em] bioshock-glow">
            {product.name}
          </h3>
          <p className="text-sm text-foreground/70 leading-relaxed font-light">
            {product.description}
          </p>
        </div>

        {product.madeToOrder && product.estimatedDays && (
          <p className="text-xs text-foreground/50 italic uppercase tracking-wider">
            ⧗ Estimated production: {product.estimatedDays} days
          </p>
        )}

        <div className="flex items-center justify-between pt-6 border-t border-foreground/20">
          <div className="text-2xl md:text-3xl font-light text-foreground tracking-wider bioshock-glow">
            €{product.price.toFixed(2)}
          </div>
          <Button
            onClick={() => onAddToCart(product)}
            className="bg-transparent border-2 border-foreground text-foreground hover:bg-foreground hover:text-background uppercase tracking-[0.2em] font-semibold flex items-center gap-2 transition-all duration-500 px-6 py-3"
          >
            <ShoppingCart size={20} weight="bold" />
            Add
          </Button>
        </div>
      </div>
    </div>
  )
}

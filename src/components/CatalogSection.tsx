import { useState } from 'react'
import { Product } from '@/lib/types'
import { PRODUCTS, CATEGORIES } from '@/lib/products'
import { ProductCard } from './ProductCard'
import { Button } from '@/components/ui/button'

interface CatalogSectionProps {
  onAddToCart: (product: Product) => void
}

export function CatalogSection({ onAddToCart }: CatalogSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const filteredProducts = selectedCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory)

  return (
    <section id="catalog" className="py-24 md:py-32 bg-card relative overflow-hidden">
      <div className="absolute inset-0 opacity-3">
        <svg className="w-full h-full">
          <defs>
            <pattern id="catalog-pattern" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
              <circle cx="75" cy="75" r="40" stroke="white" strokeWidth="0.5" fill="none" />
              <circle cx="75" cy="75" r="20" stroke="white" strokeWidth="0.5" fill="none" />
              <path d="M 75 0 L 75 150 M 0 75 L 150 75" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#catalog-pattern)" />
        </svg>
      </div>
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8 bioshock-glow uppercase tracking-[0.25em]">
            Artifact Collection
          </h2>
          <div className="art-deco-divider max-w-md mx-auto" />
          <p className="text-base md:text-lg text-foreground/70 mt-10 max-w-2xl mx-auto font-light leading-relaxed">
            Each piece is handcrafted with mystical intention. Browse our collection of cosmic accessories.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {CATEGORIES.map(category => (
            <Button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              variant={selectedCategory === category.value ? 'default' : 'outline'}
              className={`uppercase tracking-[0.2em] transition-all duration-500 px-8 py-3 text-sm font-semibold ${
                selectedCategory === category.value 
                  ? 'bg-foreground text-background border-2 border-foreground bioshock-glow' 
                  : 'border-2 border-foreground/50 bg-transparent text-foreground hover:border-foreground hover:bg-foreground/10'
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <div key={product.id} className={`fade-in-up stagger-${Math.min(index % 6 + 1, 6)}`}>
              <ProductCard product={product} onAddToCart={onAddToCart} />
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-foreground/60 uppercase tracking-wider">No artifacts found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}

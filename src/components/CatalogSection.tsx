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
    <section id="catalog" className="py-24 md:py-32 bg-background relative">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Artifact Collection
          </h2>
          <div className="art-deco-divider max-w-md mx-auto" />
          <p className="text-lg text-muted-foreground mt-8 max-w-2xl mx-auto">
            Each piece is handcrafted with mystical intention. Browse our collection of cosmic accessories.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map(category => (
            <Button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              variant={selectedCategory === category.value ? 'default' : 'outline'}
              className={`uppercase tracking-wider transition-all ${
                selectedCategory === category.value 
                  ? 'bg-primary text-primary-foreground shadow-[0_0_20px_rgba(102,51,153,0.3)]' 
                  : 'border-border hover:border-primary/50'
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
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">No artifacts found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}

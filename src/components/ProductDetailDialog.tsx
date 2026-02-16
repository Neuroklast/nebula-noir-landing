import { Product } from '@/lib/types'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ShoppingCart, X } from '@phosphor-icons/react'
import { motion, AnimatePresence } from 'framer-motion'

interface ProductDetailDialogProps {
  product: Product | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onAddToCart: (product: Product) => void
}

export function ProductDetailDialog({ product, open, onOpenChange, onAddToCart }: ProductDetailDialogProps) {
  if (!product) return null

  const handleAddToCart = () => {
    onAddToCart(product)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[1400px] w-[96vw] max-h-[90vh] p-0 bg-background border-2 border-foreground overflow-hidden flex flex-col">
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, clipPath: 'inset(0 50% 0 50%)' }}
              animate={{ opacity: 1, clipPath: 'inset(0 0% 0 0%)' }}
              exit={{ opacity: 0, clipPath: 'inset(0 50% 0 50%)' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col h-full"
            >
              <button
                onClick={() => onOpenChange(false)}
                className="absolute top-4 right-4 z-50 p-2 bg-background/80 backdrop-blur-sm border border-foreground/30 hover:bg-foreground hover:text-background transition-all duration-300"
              >
                <X size={24} weight="bold" />
              </button>

              <div className="grid md:grid-cols-2 gap-0 overflow-y-auto flex-1">
                <motion.div 
                  className="relative aspect-square md:aspect-auto bg-muted overflow-hidden md:min-h-[400px]"
                  initial={{ opacity: 0, clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
                  animate={{ opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                    style={{ filter: 'contrast(1.1) brightness(0.95)' }}
                  />
                  {product.madeToOrder && (
                    <Badge className="absolute top-6 left-6 bg-primary/90 text-primary-foreground uppercase tracking-[0.15em] text-sm nebula-glow px-4 py-2">
                      Made to Order
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </motion.div>

                <motion.div 
                  className="p-8 md:p-12 flex flex-col justify-between overflow-y-auto"
                  initial={{ opacity: 0, clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
                  animate={{ opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div>
                    <DialogTitle className="sr-only">{product.name}</DialogTitle>
                    <motion.h2 
                      className="text-3xl md:text-4xl lg:text-5xl mb-6 uppercase tracking-[0.2em] bioshock-glow-animated"
                      initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
                      animate={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
                      transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {product.name}
                    </motion.h2>

                    <motion.div 
                      className="art-deco-divider mb-8"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    />

                    <motion.p 
                      className="text-base md:text-lg text-foreground/80 leading-relaxed mb-8 font-light"
                      initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
                      animate={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
                      transition={{ duration: 0.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {product.description}
                    </motion.p>

                    {product.madeToOrder && product.estimatedDays && (
                      <motion.div 
                        className="mb-8 p-4 border-l-2 border-primary bg-primary/5"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="text-sm text-foreground/70 uppercase tracking-wider">
                          ⧗ Geschätzte Produktionszeit: {product.estimatedDays} Tage
                        </p>
                        <p className="text-xs text-foreground/50 mt-2 italic">
                          Jedes Stück wird mit Intention und Sorgfalt von Hand gefertigt
                        </p>
                      </motion.div>
                    )}

                    <motion.div 
                      className="space-y-4 text-sm text-foreground/60 font-light leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="uppercase tracking-wider">
                        <strong className="text-foreground/90">Material:</strong> Hochwertige Resin-, PVC- und Edelmetall-Komponenten
                      </p>
                      <p className="uppercase tracking-wider">
                        <strong className="text-foreground/90">Herkunft:</strong> Handgefertigt in Deutschland
                      </p>
                      <p className="uppercase tracking-wider">
                        <strong className="text-foreground/90">Kategorie:</strong> {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                      </p>
                    </motion.div>
                  </div>

                  <motion.div 
                    className="mt-8 pt-8 border-t-2 border-foreground/20 flex items-center justify-between"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="text-4xl md:text-5xl font-light text-foreground tracking-wider bioshock-glow">
                      €{product.price.toFixed(2)}
                    </div>
                    <Button
                      onClick={handleAddToCart}
                      className="bg-transparent border-2 border-foreground text-foreground hover:bg-foreground hover:text-background uppercase tracking-[0.2em] font-semibold flex items-center gap-3 transition-all duration-500 px-8 py-4 text-base"
                    >
                      <ShoppingCart size={24} weight="bold" />
                      In den Warenkorb
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
}

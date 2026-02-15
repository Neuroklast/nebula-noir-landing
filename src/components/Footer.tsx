import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { InstagramLogo, EnvelopeSimple } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useKV } from '@github/spark/hooks'
import { toast } from 'sonner'

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [email, setEmail] = useState('')
  const [subscribers, setSubscribers] = useKV<string[]>('newsletter-subscribers', [])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address')
      return
    }

    setSubscribers((current = []) => {
      if (current.includes(email)) {
        toast.error('You are already subscribed!')
        return current
      }
      toast.success('Thank you! We will notify you when the shop launches.')
      return [...current, email]
    })
    
    setEmail('')
  }

  return (
    <footer ref={ref} className="relative py-32 px-6 overflow-hidden film-grain">
      <div className="absolute top-0 left-0 w-full h-px" style={{ 
        background: 'linear-gradient(90deg, transparent, oklch(0.75 0.04 65), transparent)',
        boxShadow: '0 0 10px oklch(0.75 0.08 70 / 0.3)'
      }} />
      
      <div className="absolute inset-0 overflow-hidden opacity-15">
        <svg viewBox="0 0 1200 500" className="w-full h-full">
          <defs>
            <linearGradient id="footerGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="oklch(0.75 0.04 65)" stopOpacity="0" />
              <stop offset="50%" stopColor="oklch(0.75 0.04 65)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="oklch(0.75 0.04 65)" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          <motion.path
            d="M0,250 L300,100 L600,250 L900,100 L1200,250"
            fill="none"
            stroke="url(#footerGrad1)"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 3, delay: 0.5 }}
          />
          
          <motion.path
            d="M0,300 L300,150 L600,300 L900,150 L1200,300"
            fill="none"
            stroke="oklch(0.75 0.04 65)"
            strokeWidth="1"
            opacity="0.3"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 3, delay: 0.8 }}
          />
          
          <motion.circle
            cx="300"
            cy="250"
            r="3"
            fill="oklch(0.88 0.03 70)"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 0.6 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            style={{ filter: 'drop-shadow(0 0 6px oklch(0.88 0.03 70))' }}
          />
          
          <motion.circle
            cx="900"
            cy="250"
            r="3"
            fill="oklch(0.88 0.03 70)"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 0.6 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.6, delay: 2 }}
            style={{ filter: 'drop-shadow(0 0 6px oklch(0.88 0.03 70))' }}
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center space-y-16"
        >
          <div className="space-y-8">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="h-0.5 w-32 mx-auto"
              style={{ 
                background: 'linear-gradient(90deg, transparent, oklch(0.75 0.04 65), transparent)',
                boxShadow: '0 0 8px oklch(0.75 0.08 70 / 0.4)'
              }}
            />
            
            <h2 className="text-5xl md:text-6xl font-bold tracking-wide uppercase glow-text">
              Join Our Circle
            </h2>
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="h-0.5 w-32 mx-auto"
              style={{ 
                background: 'linear-gradient(90deg, transparent, oklch(0.75 0.04 65), transparent)',
                boxShadow: '0 0 8px oklch(0.75 0.08 70 / 0.4)'
              }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-10"
          >
            <div className="flex justify-center">
              <a
                href="https://www.instagram.com/nebula_noir.official"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-4 px-10 py-5 border border-border/60 art-deco-border transition-all duration-500 hover:border-accent/70 underwater-glow backdrop-blur-sm"
                >
                  <InstagramLogo className="w-7 h-7 text-accent" weight="fill" style={{ filter: 'drop-shadow(0 0 8px oklch(0.75 0.08 70 / 0.5))' }} />
                  <span className="tracking-[0.3em] uppercase text-base font-light">
                    Follow Our Journey
                  </span>
                </motion.div>
              </a>
            </div>

            <div className="max-w-lg mx-auto space-y-6">
              <p className="text-foreground/70 text-lg font-light">
                Be among the first to discover our collection
              </p>
              
              <form onSubmit={handleSubscribe} className="flex gap-4">
                <Input
                  id="newsletter-email"
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-secondary/60 border-border/60 focus:border-accent/60 transition-all duration-500 backdrop-blur-sm text-base h-12"
                />
                <Button
                  type="submit"
                  variant="outline"
                  className="px-8 h-12 border-border/60 hover:border-accent/70 hover:bg-accent/10 transition-all duration-500 art-deco-border backdrop-blur-sm"
                >
                  <EnvelopeSimple className="w-6 h-6" weight="fill" />
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="pt-16 space-y-6"
          >
            <div className="h-px w-full" style={{ 
              background: 'linear-gradient(90deg, transparent, oklch(0.75 0.04 65 / 0.3), transparent)'
            }} />
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
              <p className="font-light">© 2024 Nebula Noir. All rights reserved.</p>
              <p className="uppercase tracking-[0.3em] font-light">Handcrafted with Devotion</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
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
    <footer ref={ref} className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <svg viewBox="0 0 1000 400" className="w-full h-full">
          <motion.path
            d="M0,200 L250,50 L500,200 L750,50 L1000,200"
            fill="none"
            stroke="oklch(0.98 0 0)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 3, delay: 0.5 }}
          />
          <motion.path
            d="M0,250 L250,100 L500,250 L750,100 L1000,250"
            fill="none"
            stroke="oklch(0.65 0 0)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 3, delay: 0.8 }}
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-12"
        >
          <div className="space-y-6">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent"
            />
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-wide uppercase">
              Stay Connected
            </h2>
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="flex justify-center">
              <a
                href="https://www.instagram.com/nebula_noir.official"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-8 py-4 border border-border/50 transition-all duration-300 hover:border-accent/50"
                >
                  <InstagramLogo className="w-6 h-6" weight="fill" />
                  <span className="tracking-widest uppercase text-sm">
                    Follow Us
                  </span>
                </motion.div>
              </a>
            </div>

            <div className="max-w-md mx-auto space-y-4">
              <p className="text-muted-foreground">
                Be the first to know when our shop launches
              </p>
              
              <form onSubmit={handleSubscribe} className="flex gap-3">
                <Input
                  id="newsletter-email"
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-secondary border-border/50 focus:border-accent/50 transition-colors"
                />
                <Button
                  type="submit"
                  variant="outline"
                  className="px-6 border-border/50 hover:border-accent/50 hover:bg-accent/10 transition-all"
                >
                  <EnvelopeSimple className="w-5 h-5" />
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-12 space-y-4"
          >
            <div className="h-px w-full bg-gradient-to-r from-transparent via-border/30 to-transparent" />
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>© 2024 Nebula Noir. All rights reserved.</p>
              <p className="uppercase tracking-widest">Handcrafted with passion</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
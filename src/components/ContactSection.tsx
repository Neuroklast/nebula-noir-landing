import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { useScrollTrigger } from '@/hooks/use-parallax'
import { motion } from 'framer-motion'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const { ref, isVisible } = useScrollTrigger(0.1)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Bitte fülle alle Felder aus')
      return
    }

    if (!formData.email.includes('@')) {
      toast.error('Bitte gib eine gültige E-Mail-Adresse ein')
      return
    }

    toast.success('Nachricht gesendet! Wir kontaktieren dich durch die kosmische Leere.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative overflow-hidden" ref={ref}>
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="flex justify-center mb-8">
            <div className="text-7xl bioshock-glow-animated">✉</div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 uppercase tracking-[0.25em] bioshock-glow-animated">
            Maßanfertigungen & Anfragen
          </h2>
          <div className="art-deco-divider max-w-md mx-auto" />
          <p className="text-base md:text-lg text-foreground/70 mt-8 font-light">
            Du suchst ein maßgeschneidertes Stück oder hast Fragen zu unseren Artefakten? Kontaktiere uns durch den Äther.
          </p>
        </motion.div>

        <motion.form 
          onSubmit={handleSubmit} 
          className="relative p-10 md:p-14 space-y-8 metallic-border"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="art-deco-corner top-left"></div>
          <div className="art-deco-corner top-right"></div>
          <div className="art-deco-corner bottom-left"></div>
          <div className="art-deco-corner bottom-right"></div>
          
          <div className="space-y-3">
            <Label htmlFor="name" className="text-sm uppercase tracking-[0.2em] text-foreground/90">
              Name
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-background border-0 border-b-2 border-foreground/30 focus:border-foreground rounded-none px-0 text-base transition-all duration-300"
              placeholder="Dein Name"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="email" className="text-sm uppercase tracking-[0.2em] text-foreground/90">
              E-Mail
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-background border-0 border-b-2 border-foreground/30 focus:border-foreground rounded-none px-0 text-base transition-all duration-300"
              placeholder="deine.email@beispiel.de"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="message" className="text-sm uppercase tracking-[0.2em] text-foreground/90">
              Nachricht
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-background border-2 border-foreground/30 focus:border-foreground min-h-[180px] text-base resize-none transition-all duration-300"
              placeholder="Erzähle uns von deiner Vision oder Anfrage..."
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-transparent border-2 border-foreground text-foreground hover:bg-foreground hover:text-background uppercase tracking-[0.25em] font-semibold py-6 text-base transition-all duration-500"
          >
            Nachricht senden
          </Button>
        </motion.form>

        <div className="mt-12 text-center space-y-3">
          <p className="text-foreground/60 text-sm uppercase tracking-wider">
            Maßanfertigungen benötigen in der Regel 2-4 Wochen für die Fertigung.
          </p>
          <p className="text-foreground/50 text-xs italic">
            Alle Stücke werden mit Intention und Sorgfalt von Hand gefertigt.
          </p>
        </div>
      </div>
    </section>
  )
}

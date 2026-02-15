import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields')
      return
    }

    if (!formData.email.includes('@')) {
      toast.error('Please enter a valid email address')
      return
    }

    toast.success('Message sent! We will contact you through the cosmic void.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="text-7xl bioshock-glow">✉</div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 uppercase tracking-[0.25em] bioshock-glow">
            Custom Orders & Inquiries
          </h2>
          <div className="art-deco-divider max-w-md mx-auto" />
          <p className="text-base md:text-lg text-foreground/70 mt-8 font-light">
            Seeking a bespoke piece or have questions about our artifacts? Reach out through the ether.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="relative p-10 md:p-14 space-y-8 metallic-border">
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
              placeholder="Your name"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="email" className="text-sm uppercase tracking-[0.2em] text-foreground/90">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-background border-0 border-b-2 border-foreground/30 focus:border-foreground rounded-none px-0 text-base transition-all duration-300"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="message" className="text-sm uppercase tracking-[0.2em] text-foreground/90">
              Message
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-background border-2 border-foreground/30 focus:border-foreground min-h-[180px] text-base resize-none transition-all duration-300"
              placeholder="Tell us about your vision or inquiry..."
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-transparent border-2 border-foreground text-foreground hover:bg-foreground hover:text-background uppercase tracking-[0.25em] font-semibold py-6 text-base transition-all duration-500"
          >
            Send Message
          </Button>
        </form>

        <div className="mt-12 text-center space-y-3">
          <p className="text-foreground/60 text-sm uppercase tracking-wider">
            Custom orders typically require 2-4 weeks for creation.
          </p>
          <p className="text-foreground/50 text-xs italic">
            All pieces are handcrafted with intention and care.
          </p>
        </div>
      </div>
    </section>
  )
}

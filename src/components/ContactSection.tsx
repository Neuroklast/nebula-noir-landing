import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { EnvelopeSimple } from '@phosphor-icons/react'

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
    <section id="contact" className="py-24 md:py-32 bg-card relative">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <EnvelopeSimple size={64} weight="thin" className="text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Custom Orders & Inquiries
          </h2>
          <div className="art-deco-divider max-w-md mx-auto" />
          <p className="text-lg text-muted-foreground mt-8">
            Seeking a bespoke piece or have questions about our artifacts? Reach out through the ether.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="border-2 border-primary/30 p-8 md:p-12 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-base uppercase tracking-wider">
              Name
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-background border-0 border-b-2 border-input focus:border-primary rounded-none px-0 text-lg transition-colors"
              placeholder="Your name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-base uppercase tracking-wider">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-background border-0 border-b-2 border-input focus:border-primary rounded-none px-0 text-lg transition-colors"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-base uppercase tracking-wider">
              Message
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-background border-2 border-input focus:border-primary min-h-[150px] text-lg resize-none transition-colors"
              placeholder="Tell us about your vision or inquiry..."
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wider font-semibold py-6 text-lg shadow-[0_0_30px_rgba(102,51,153,0.4)]"
          >
            Send Message
          </Button>
        </form>

        <div className="mt-12 text-center space-y-4">
          <p className="text-muted-foreground">
            Custom orders typically require 2-4 weeks for creation.
          </p>
          <p className="text-sm text-muted-foreground/70">
            All pieces are handcrafted with intention and care.
          </p>
        </div>
      </div>
    </section>
  )
}

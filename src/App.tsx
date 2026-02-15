import { Toaster } from '@/components/ui/sonner'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Showcase } from '@/components/Showcase'
import { Footer } from '@/components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <Showcase />
      <Footer />
      <Toaster position="top-center" />
    </div>
  )
}

export default App
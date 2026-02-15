import { MoonStars } from '@phosphor-icons/react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center cosmic-bg overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-2 h-2 bg-starlight-white rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-starlight-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-starlight-white rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-starlight-white rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container max-w-5xl mx-auto px-6 py-24 relative z-10">
        <div className="art-deco-frame p-12 md:p-20">
          <div className="text-center space-y-8 fade-in-up">
            <div className="flex justify-center mb-8">
              <MoonStars size={80} weight="thin" className="text-primary" />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[0.15em]">
                NEBULA NOIR
              </h1>
              <div className="w-32 h-0.5 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>

            <p className="text-xl md:text-2xl font-light text-muted-foreground max-w-2xl mx-auto fade-in-up stagger-1">
              Cosmic Art Deco Goth
            </p>

            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed fade-in-up stagger-2">
              Handcrafted occult and alternative accessories that transcend the boundary between elegance and darkness. 
              Each piece is a unique artifact, lovingly created from resin, PVC, and precious metals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 fade-in-up stagger-3">
              <a 
                href="#catalog" 
                className="px-8 py-4 bg-primary text-primary-foreground font-semibold uppercase tracking-wider hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_rgba(102,51,153,0.5)] hover:scale-105"
              >
                Explore Collection
              </a>
              <a 
                href="#about" 
                className="px-8 py-4 border-2 border-foreground text-foreground font-semibold uppercase tracking-wider hover:bg-foreground hover:text-background transition-all"
              >
                Our Philosophy
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-foreground/30 rounded-full" />
        </div>
      </div>
    </section>
  )
}

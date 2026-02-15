export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-card relative">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern id="art-deco-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 50 100 M 0 50 L 100 50" stroke="currentColor" strokeWidth="0.5" fill="none" />
              <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#art-deco-pattern)" />
        </svg>
      </div>

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            The Nebula Noir Philosophy
          </h2>
          <div className="art-deco-divider max-w-md mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="text-center space-y-4 fade-in-up stagger-1">
            <div className="text-6xl mb-4">✦</div>
            <h3 className="text-2xl">Mission</h3>
            <p className="text-foreground/70 leading-relaxed">
              We craft occult and alternative accessories that transcend the boundary between elegance and the unconventional. 
              Every piece is a handmade artifact that makes darkness wearable and aesthetically captivating.
            </p>
          </div>

          <div className="text-center space-y-4 fade-in-up stagger-2">
            <div className="text-6xl mb-4">◆</div>
            <h3 className="text-2xl">Identity</h3>
            <p className="text-foreground/70 leading-relaxed">
              Cosmic Art Deco Goth. The fusion of Art Déco's geometric precision (1920s), 
              the infinite depth of cosmic nebulae, and the dark aesthetics of gothic subculture.
            </p>
          </div>

          <div className="text-center space-y-4 fade-in-up stagger-3">
            <div className="text-6xl mb-4">☽</div>
            <h3 className="text-2xl">Craft</h3>
            <p className="text-foreground/70 leading-relaxed">
              Each product is handcrafted with meticulous attention to detail using resin, PVC, and precious metals. 
              No mass production—only unique pieces for nonconformist souls.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="border-2 border-primary/30 p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl mb-8 text-center">Our Values</h3>
            <ul className="space-y-6 text-lg">
              <li className="moon-bullet flex items-start">
                <span className="text-foreground/80">
                  <strong className="text-foreground">Handcraft:</strong> Every product is a unique artifact, meticulously handmade with premium materials.
                </span>
              </li>
              <li className="moon-bullet flex items-start">
                <span className="text-foreground/80">
                  <strong className="text-foreground">Dark Aesthetics:</strong> Beauty exists in shadows, in the bizarre, in the unapologetically unconventional.
                </span>
              </li>
              <li className="moon-bullet flex items-start">
                <span className="text-foreground/80">
                  <strong className="text-foreground">Individuality:</strong> Jewelry as an expression of nonconformist identity and personal mysticism.
                </span>
              </li>
              <li className="moon-bullet flex items-start">
                <span className="text-foreground/80">
                  <strong className="text-foreground">Inclusivity:</strong> Accessories designed for all body types, gender identities, and aesthetic preferences.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-16 text-muted-foreground italic text-lg">
          "For modern witches, gothic souls, and those who find elegance in the void."
        </div>
      </div>
    </section>
  )
}

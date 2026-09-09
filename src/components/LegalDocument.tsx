import { LEGAL_CONTENT, LegalSection } from '@/lib/legal-content'
import { SiteChrome } from '@/components/SiteChrome'

export function LegalDocument({ section }: { section: LegalSection }) {
  const content = LEGAL_CONTENT[section]

  return (
    <SiteChrome>
      <section className="pt-36 md:pt-48 pb-16 md:pb-24">
        <div className="container max-w-4xl mx-auto px-4 md:px-6">
          <div className="p-0 bg-background border-2 border-foreground/30 flex flex-col overflow-hidden">
            <div className="p-8 pb-4 border-b border-foreground/20">
              <h1 className="text-3xl md:text-4xl uppercase tracking-[0.2em] bioshock-glow-animated">
                {content.title}
              </h1>
            </div>
            <div className="px-8 pb-8 pt-6">
              <div
                className="legal-content prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: content.content }}
              />
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  )
}

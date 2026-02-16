import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { LEGAL_CONTENT, LegalSection } from '@/lib/legal-content'
import { ScrollArea } from '@/components/ui/scroll-area'
import { X } from '@phosphor-icons/react'

interface LegalPageProps {
  section: LegalSection | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function LegalPage({ section, open, onOpenChange }: LegalPageProps) {
  if (!section) return null

  const content = LEGAL_CONTENT[section]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] w-[95vw] max-h-[90vh] p-0 bg-background border-2 border-foreground/30 flex flex-col overflow-hidden">
        <DialogHeader className="p-8 pb-4 border-b border-foreground/20 flex-shrink-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-3xl md:text-4xl uppercase tracking-[0.2em] bioshock-glow-animated">
              {content.title}
            </DialogTitle>
            <button
              onClick={() => onOpenChange(false)}
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              <X size={28} weight="bold" />
            </button>
          </div>
        </DialogHeader>
        
        <ScrollArea className="flex-1 px-8 pb-8">
          <div 
            className="legal-content prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: content.content }}
          />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

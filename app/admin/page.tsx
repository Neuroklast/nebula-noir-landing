import { isDemoMode, isInstagramConfigured, isR2Configured } from '@/lib/env'

export default function AdminHome() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl uppercase tracking-[0.2em] bioshock-glow-animated">Übersicht</h2>
      <ul className="space-y-4 text-sm uppercase tracking-wider text-foreground/80">
        <li>Demo Mode: {isDemoMode() ? 'an' : 'aus'}</li>
        <li>R2: {isR2Configured() ? 'konfiguriert' : 'fehlt'}</li>
        <li>Instagram: {isInstagramConfigured() ? 'konfiguriert' : 'fehlt'}</li>
      </ul>
      <p className="text-foreground/70 font-light">
        Galerie, Events, Infotexte, Anfragen und Instagram-Sync über die Navigation.
      </p>
    </div>
  )
}

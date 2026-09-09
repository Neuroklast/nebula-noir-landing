import type { Metadata } from 'next'
import { CursorGlow } from '@/components/CursorGlow'
import '@/main.css'
import '@/styles/theme.css'
import '@/index.css'
import '@/themes/nebula-noir-theme/styles.css'

export const metadata: Metadata = {
  title: 'NEBULA NOIR - Handgefertigter Okkulter & Alternativer Schmuck | Cosmic Art Deco Goth',
  description:
    'Handgefertigte okkulte und alternative Accessoires. Cosmic Art Deco Goth Schmuck aus Resin, PVC und Edelmetallen. Made in Germany.',
  keywords:
    'Gothic Schmuck, Alternative Accessoires, Handgefertigter Schmuck, Okkulter Schmuck, Art Deco, Resin Schmuck, PVC Choker, Deutschland',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" style={{ scrollPaddingTop: '7rem' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poiret+One&family=Cinzel:wght@400;600;700;900&family=Montserrat:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CursorGlow />
        {children}
      </body>
    </html>
  )
}

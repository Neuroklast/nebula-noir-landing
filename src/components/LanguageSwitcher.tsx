'use client'

import { useI18n } from '@/i18n/context'

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n()
  const itemClass =
    'text-xs uppercase tracking-[0.2em] text-foreground/90 hover:text-foreground transition-all duration-300'

  return (
    <div className="flex items-center gap-2" role="group" aria-label="Language">
      <button
        type="button"
        className={`${itemClass} ${locale === 'de' ? 'text-foreground' : 'text-foreground/50'}`}
        onClick={() => setLocale('de')}
        aria-pressed={locale === 'de'}
      >
        DE
      </button>
      <span className="text-foreground/30 text-xs">/</span>
      <button
        type="button"
        className={`${itemClass} ${locale === 'en' ? 'text-foreground' : 'text-foreground/50'}`}
        onClick={() => setLocale('en')}
        aria-pressed={locale === 'en'}
      >
        EN
      </button>
    </div>
  )
}

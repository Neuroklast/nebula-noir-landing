'use client'

import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { messages, type Locale } from '@/i18n/messages'

type Dict = Record<string, unknown>

function lookup(tree: Dict, path: string): string {
  const parts = path.split('.')
  let node: unknown = tree
  for (const part of parts) {
    if (!node || typeof node !== 'object') return path
    node = (node as Dict)[part]
  }
  return typeof node === 'string' ? node : path
}

type I18nValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (path: string, vars?: Record<string, string | number>) => string
}

const I18nContext = createContext<I18nValue | null>(null)

export function LocaleProvider({
  children,
  initialLocale,
}: {
  children: React.ReactNode
  initialLocale: Locale
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale)

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    document.documentElement.lang = next
    document.cookie = `nn-locale=${next};path=/;max-age=31536000;samesite=lax`
  }, [])

  const t = useCallback(
    (path: string, vars?: Record<string, string | number>) => {
      let value = lookup(messages[locale] as unknown as Dict, path)
      if (vars) {
        for (const [key, item] of Object.entries(vars)) {
          value = value.replaceAll(`{${key}}`, String(item))
        }
      }
      return value
    },
    [locale]
  )

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t])
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n outside LocaleProvider')
  return ctx
}

export function useT() {
  return useI18n().t
}

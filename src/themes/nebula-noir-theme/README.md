# Nebula Noir visual kit

CSS namespace `spark-theme-*` plus optional slot components. Spark the product is gone; keep the class names.

**Live site:** only `styles.css` (global) and `LoadingScreen.tsx` (intro on `/`) are in the production tree. Other slots are not wired. Design freeze: do not restyle this CSS.

Full map: `THEME_INTEGRATION.md`. Product copy: `src/i18n/messages.ts` (Cybergoth / Industrial — not Art Deco or occult).

## Tokens

Use semantic Tailwind tokens (`bg-background`, `text-foreground`, `bg-primary`). Custom classes stay prefixed `spark-theme-*`.

Fonts on the live site: Poiret One, Cinzel, Montserrat (Google Fonts URL in `app/layout.tsx`).

## Slots (kit only)

| File | Live? |
|---|---|
| `LoadingScreen.tsx` | Yes — `HomePage` |
| `styles.css` | Yes — `app/layout.tsx` |
| `Hero.tsx` | No |
| `Navigation.tsx` | No |
| `Card.tsx` | No |
| `BackgroundEffects.tsx` | No |
| `SectionDivider.tsx` | No |
| `ThemeDemo.tsx` | No |

## Moon

`.spark-theme-moon-symbol` rotates `☾` so the crescent opens upward.

## License

Nebula Noir proprietary software. See root `LICENSE`.

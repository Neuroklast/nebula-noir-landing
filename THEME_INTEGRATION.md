# Theme kit vs live UI

**Last reviewed:** 2026-09-10

The folder `src/themes/nebula-noir-theme/` is a visual kit from the Spark-era theme package. **GitHub Spark is gone.** Class prefix `spark-theme-*` is CSS namespacing, not an SDK.

The live look is frozen. Do not restyle `src/index.css`, `src/styles/theme.css`, or `src/themes/nebula-noir-theme/styles.css`. Do not swap live sections for unused kit slots.

## What is live

| Asset | Used by |
|---|---|
| `styles.css` (`spark-theme-*`) | Imported in `app/layout.tsx` |
| `LoadingScreen.tsx` | `src/components/HomePage.tsx` intro on `/` |
| Aliases `.bioshock-glow`, `.metallic-border`, `.art-deco-*` | Existing landing components |

Live landing tree: `app/page.tsx` → `HomePage` → `HeroSection`, `AboutSection`, `EventsSection`, `CatalogSection`, `InstagramSection`, `ContactSection`, `FooterSection`, `Navigation`, `ArtDecoBackground`, etc.

Fonts: Poiret One, Cinzel, Montserrat via the Google Fonts `<link>` in `app/layout.tsx`. Do not switch to `next/font`. Do not put `class="dark"` on `<html>`.

## What is not live

These kit files exist for reference. They are **not** the production sections. Do not wire them in as replacements:

- `Hero.tsx`, `Navigation.tsx`, `Card.tsx` (theme slot)
- `BackgroundEffects.tsx` (canvas lines; live uses `ArtDecoBackground`)
- `ThemeDemo.tsx`
- Theme `SectionDivider.tsx` (live uses `SectionTransition` / existing dividers)

`sparkTheme` in `index.ts` is a registry leftover. Copy there may still say “Cosmic Art Deco Goth”. **Do not use that copy on the site.** Brand words live in `src/i18n/messages.ts` and `brand_info`.

## Classes you may reuse on new UI

New admin/legal chrome must match existing section language:

- `bioshock-glow`, `bioshock-glow-animated`
- `metallic-border`
- `art-deco-*`
- `spark-theme-*`
- `nebula-glow-hover`

Moon glyph: wrap `☾` with `spark-theme-moon-symbol` so it opens upward (U). Do not put that class on a node that also runs a transform animation.

## Integration anti-patterns

- Importing theme `Hero` / `Navigation` instead of the frozen live components
- Editing Tailwind className strings on existing elements without a confirmed bug
- Reducing Framer Motion
- Pointing new work at `App.tsx` (there is none; this is App Router)

Operator-facing usage: `USER_MANUAL.md`. Agent rules: `AGENTS.md`.

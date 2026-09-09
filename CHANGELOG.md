# Changelog

All notable changes to this project are documented in reverse chronological order.

## [0.3.3] — 2026-09-09

### Added

- Lenis smooth wheel scroll on public pages (`respectReducedMotion`, dialogs/sheets skipped, stopped during intro).

### Fixed

- Loading screen plays on every visit to `/` (sessionStorage skip removed). Body scroll locked for the intro.

## [0.3.2] — 2026-09-09

### Changed

- Brand copy is Cybergoth / Industrial / Cyberpunk / Dark Alternative only. No Art Deco, 1920s, occult, or mystical wording.
- Public copy names materials: Kunstleder, PVC, Ketten, Nieten, große Ringe, Neon. Audience: schwarze Szene, Cosplay, Nerdkultur.
- Crescent moons open upward (U / half-moon), including CSS dividers and loading frame.
- Nav label `Maßanfertigung` → `Anfragen`; desktop links from `xl` so DE/EN no longer collide.
- Product card footer no longer overlaps category + Details.

### Added

- LOYG Festival (Let Out Your Geek), Bochum, 12 Sep 2026, 14–22, Bochumer Eventcenter. Public events list hides past stands.

### Fixed

- Loading SVG no longer uses `calc()` on `<text>`/`<line>` (console length errors).
- Product detail `DialogContent` has a `Description`; mobile nav sheet has title + description.

## [0.3.1] — 2026-09-09

### Added

- Admin **Hero-Video**: scrubbable background uploaded to R2 (presigned PUT), URL in `brand_info.hero_video`.

### Removed

- Bundled `public/hero.mp4`. Without an upload the Art Deco pattern stays.

## [0.3.0] — 2026-09-09

### Added

- DE/EN locale switcher (`nn-locale` cookie). UI chrome is no longer hardcoded.
- Demo gallery/Instagram media from local `Demo images` (converted JPEG) plus hero clip `public/hero.mp4`.
- Favicon from the Nebula Noir logo (`app/icon.svg`, `public/favicon.svg`).

### Fixed

- Headings no longer split mid-word (`MASSANFERTIGUNGE / N`); long titles wrap on `\n`.
- Mobile: smaller heading tracking, native cursor on touch, hamburger until `lg`, form `overflow-hidden`.

## [0.2.3] — 2026-09-09

### Fixed

- Contact and login forms block double submit; Demo Mode contact toast is honest.
- Mobile nav closes on link tap; Instagram control is a single interactive element.
- Hash links clear the fixed nav (`scroll-padding` / `scroll-margin`).
- Intro loading screen plays once per session.
- Hero video waits for `loadedmetadata`, scrubs on rAF, hides on error.
- Card grayscale hover no longer overridden by inline `filter`.
- Event `datetime-local` values stored as ISO; admin lists `router.refresh` instead of full reload.
- Gallery upload revalidates `/` and `/admin/gallery`.
- Cursor glow skipped on coarse pointers.

### Removed

- Unused shop/alternate components (`CartDrawer`, `CheckoutDialog`, `LegalPage`, `Hero`, `About`, `Footer`, `Showcase`, `ErrorFallback`).

## [0.2.2] — 2026-09-09

### Added

- Gallery seed in `reset.sql` (same 12 artifacts as fixtures).
- `profiles` insert trigger on `auth.users`.
- `instagram_auth` row for refreshed Instagram Login tokens.

### Fixed

- Empty Events/Instagram no longer insert extra section dividers.
- Live Supabase reads no longer fall back to Instagram/gallery fixtures when tables are empty.

## [0.2.1] — 2026-09-09

### Changed

- Instagram sync uses Instagram API with Instagram Login only (`graph.instagram.com/v22.0/{user-id}/media`).
- Token-only config: `INSTAGRAM_USER_ID` optional (`GET /me`).
- Carousel and video posts store a still (thumbnail / first image), copied to R2 when configured.

## [0.2.0] — 2026-09-09

### Added

- Next.js App Router application shell (`app/`).
- Supabase schema (`supabase/reset.sql`) for gallery, categories, contact, brand info, events, Instagram cache, admin profiles.
- Cloudflare R2 upload path for gallery images (server-only).
- Demo Mode when Supabase public env vars are missing.
- Dynamic gallery (former catalog UI without shop chrome).
- Instagram section + cron sync for `@nebula_noir.official`.
- Contact form persistence to `contact_inquiries`.
- CMS-backed brand info + events list.
- Static legal routes (Impressum, Datenschutz, AGB, Widerruf, Versand, Custom Orders, Über uns).
- Scrubbable hero video layer behind the existing hero content.
- Supabase Auth admin (`/login`, `/admin/*`).
- Root documentation set: `AGENTS.md`, `QA_CHECKLIST.md`, `SECURITY.md`, `DEPLOYMENT.md`, `INTEGRATION-SUMMARY.md`, `LESSONS_LEARNED.md`.
- `.env.example` with Supabase, R2, Instagram, cron, and hero variables.

### Changed

- Cart, checkout, and prices removed from the live UI (gallery, not shop). Etsy remains commerce.
- Footer legal entries are static pages instead of dialogs.
- `useKV` cart persistence replaced; no client Spark KV.

### Removed

- GitHub Spark runtime (`@github/spark`, Spark Vite plugins, `spark.meta.json`, `runtime.config.json`).
- Vite dev/build pipeline.

### Fixed

- Spark error-boundary copy no longer refers to “this spark”.

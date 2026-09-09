# AGENTS.md — Nebula Noir Landing

Read this file at the start of every session. Follow it before writing code.

## Product

Nebula Noir is a Cosmic Art Deco Goth jewelry brand site. The live frontend was a GitHub Spark + Vite SPA. It is now a Next.js App Router app with Supabase (data + auth) and Cloudflare R2 (gallery media). Etsy remains the shop. This site is a gallery, brand, events, Instagram, and contact surface.

## Design Freeze (absolute)

The existing frontend look is sacred.

- Do not change colors, fonts, animations, or layouts of existing components.
- Do not reduce Framer Motion animations.
- Do not edit Tailwind className strings on existing elements unless a confirmed bug requires it.
- Do not restyle `src/index.css`, `src/styles/theme.css`, or `src/themes/nebula-noir-theme/styles.css`.
- Fonts stay Poiret One, Cinzel, and Montserrat via the existing Google Fonts URL. Do not switch to `next/font`.
- Do not add `class="dark"` or `data-appearance="dark"` on `<html>`. Token overrides live in `src/index.css` `:root`.
- New UI must reuse existing classes: `bioshock-glow`, `bioshock-glow-animated`, `metallic-border`, `art-deco-*`, `spark-theme-*`, `nebula-glow-hover`.
- `spark-theme-*` CSS class names are styling, not GitHub Spark. Keep them.

Allowed exceptions (product decisions):

- Shopping cart, checkout, and prices are removed from the live UI (gallery, not shop).
- Legal content moved from dialogs to static routes. Footer link classes stay the same.
- New sections (Events, Instagram, Admin, Hero video layer) must match existing section language.

## Architecture

- Next.js App Router at `app/`. Shared UI and libs at `src/`.
- Path alias `@/*` → `src/*`.
- Client island: `src/components/HomePage.tsx` owns the landing experience (loading screen, cursor glow consumers, motion sections).
- Server components fetch in `app/page.tsx` via `src/lib/data.ts`.
- Demo Mode: if `NEXT_PUBLIC_SUPABASE_URL` or `NEXT_PUBLIC_SUPABASE_ANON_KEY` is missing, all reads use `src/lib/fixtures/`. Mutations no-op with a user-visible toast.
- R2 uploads only on the server. Never expose R2 secrets to the client.
- Instagram: **Instagram API with Instagram Login** only (`graph.instagram.com`, scope `instagram_business_basic`). No Facebook Login, no Messenger. Syncs media into `instagram_posts`. Handle: `@nebula_noir.official`.
- i18n: German default, English via `LocaleProvider` + `src/i18n/messages.ts`. Cookie `nn-locale`. Do not hardcode user-facing UI strings.
- Admin: Supabase Auth email/password + `profiles.role = 'admin'` + RLS.

## Spark is gone

Do not reintroduce `@github/spark`, `useKV`, Spark Vite plugins, `spark.meta.json`, or `runtime.config.json`.

## Session workflow (mandatory)

1. Read this file.
2. Implement only the requested work. Preserve design freeze.
3. Before declaring a task done, update every relevant root markdown file:
   - `AGENTS.md` (this file, if rules changed)
   - `QA_CHECKLIST.md`
   - `CHANGELOG.md`
   - `LESSONS_LEARNED.md`
   - `SECURITY.md`
   - `DEPLOYMENT.md`
   - `INTEGRATION-SUMMARY.md`
4. Run lint and typecheck.
5. Do not wait for the user to ask for documentation updates.

## Key paths

| Path | Role |
|---|---|
| `app/` | Routes, API, cron |
| `src/components/` | Live UI (freeze) |
| `src/lib/data.ts` | Demo-aware data access |
| `src/lib/env.ts` | Env + demo flags |
| `src/lib/supabase/` | Browser, server, service clients |
| `src/lib/r2.ts` | R2 uploads |
| `supabase/reset.sql` | Schema, RLS, seed |
| `.env.example` | All required variables |

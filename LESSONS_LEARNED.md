# Lessons Learned

## Design freeze vs. product change

Removing cart/price is a product decision, not a restyle. Keep className strings on remaining nodes. Replace only the text/node that represented price or cart. Do not collapse surrounding flex rows.

## Never put `class="dark"` on `<html>`

`src/main.css` defines a `.dark` token set that differs from `src/index.css` `:root`. The live site does not use the dark-mode selector. ThemeProvider must not set `class="dark"` or `data-appearance="dark"`.

## Spark leftovers that look like branding

`spark-theme-*` classes are CSS namespaces from the theme kit. They are not the Spark SDK. Deleting them would change the look.

## Framer Motion + App Router

Motion components and `useScrollTrigger` require a client island. Keep the landing tree under `HomePage` (`'use client'`) so existing animation props stay untouched. Do not convert those sections to Server Components.

## Instagram: Login API vs Facebook Login

Use **Instagram API with Instagram Login** on `graph.instagram.com`. Facebook Login for Business needs a linked Page and `graph.facebook.com` — out of scope. Scope is only `instagram_business_basic` (read media). Do not add Messenger or publishing.

`GET /me` returns `user_id` (and sometimes `id`). Prefer `{user-id}/media` over `/me/media`.

VIDEO has `thumbnail_url`; CAROUSEL_ALBUM needs `children{media_url,media_type}`. Never upload `video/*` to R2 as a gallery still.

## Inline `filter` vs Tailwind grayscale

`style={{ filter: 'contrast(...)' }}` on the same `img` as `filter grayscale` wins and kills hover. Put contrast/brightness on the wrapping `aspect-square` div; leave grayscale classes on the image.

## Intro screen vs App Router

The original SPA ran the loading screen once. In App Router, visiting `/` again remounts `HomePage`. Gate with `sessionStorage` after the first completion or every internal navigation replays 3.5s.

## Empty CMS vs fixtures

Fixtures are Demo Mode only. If Supabase is configured and `instagram_posts` / `gallery_images` are empty, show empty UI — do not paint Unsplash as live Instagram. Extra `SectionTransition` nodes must not render when the following section is empty, or the original About→Catalog divider doubles.

## Instagram CDN URLs expire

Graph `media_url` is short-lived. Sync must copy bytes to R2 (or re-sync often). Persist the R2 public URL on `instagram_posts.media_url`.

## Hero video scrubbing

`video.currentTime = progress * duration` needs frequent keyframes (0.5–1s). iOS requires `muted` + `playsInline`. If `readyState` is too low, skip scrub. `prefers-reduced-motion`: do not bind scroll.

## Tailwind 4 pipeline

Vite used `@tailwindcss/vite`. Next uses `@tailwindcss/postcss`. Do not rewrite `index.css` imports (`@import 'tailwindcss'`, `@config`). Only change the bundler plugin.

## Demo Mode is a first-class path

Local clones without secrets must still render. Every data function in `src/lib/data.ts` must branch on `isDemoMode()` before creating a Supabase client.

## SVG in Next

Vite returned a URL string for SVG imports. Prefer `/images/...` from `public/` for the logo so Turbopack and webpack stay consistent.

## Tailwind raw screens vs. container

`tailwind.config.js` defines `screens.coarse/fine/pwa` as `{ raw: "(pointer: coarse)" }`. Tailwind 4 may emit invalid `@media (width >= (pointer: coarse))` on `.container`. Do not “fix” those screen keys — they are part of the frozen theme config. The live layout does not rely on those container breakpoints.

## RLS vs. contact form

Public INSERT on `contact_inquiries` without SELECT keeps spam readable only by admins. Do not enable anon SELECT.

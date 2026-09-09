# Deployment

## 1. Vercel (Next.js)

1. Push this repo to GitHub.
2. New Vercel project → Framework Preset: Next.js.
3. Set environment variables from `.env.example`.
4. Deploy. Output: default Next.js (no `dist`).

Local:

```bash
npm install
cp .env.example .env.local
npm run dev
```

Demo Mode: skip filling Supabase/R2 keys; `npm run dev` still serves the landing page.

## 2. Supabase

1. Create a project.
2. SQL Editor → paste and run `supabase/reset.sql` (drops public tables in that script, then recreates).
3. Authentication → enable Email provider.
4. Create the first admin:

```sql
-- After the user signs up (or invite via Dashboard):
insert into public.profiles (id, role)
values ('<auth.users uuid>', 'admin')
on conflict (id) do update set role = 'admin';
```

5. Copy Project URL and anon key into `NEXT_PUBLIC_SUPABASE_*`.
6. Copy service role key into `SUPABASE_SERVICE_ROLE_KEY` (Vercel encrypted env).

## 3. Cloudflare R2

1. R2 → Create bucket (e.g. `nebula-noir-gallery`).
2. Manage API tokens → S3-compatible access key.
3. Optional: custom domain or `r2.dev` public development URL → `R2_PUBLIC_URL` (no trailing slash).
4. Endpoint: `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`
5. CORS (bucket settings) for the Vercel origin:

```json
[
  {
    "AllowedOrigins": ["https://your-domain.vercel.app", "http://localhost:3000"],
    "AllowedMethods": ["GET", "HEAD"],
    "AllowedHeaders": ["*"],
    "ExposeHeaders": ["ETag"],
    "MaxAgeSeconds": 3600
  }
]
```

Uploads go through the Next.js server, so browser CORS for PUT is not required. GET CORS is required if the bucket is private and you later switch to signed reads. Public `R2_PUBLIC_URL` is simpler for gallery `<img>`.

## 4. Instagram (`@nebula_noir.official`) — Instagram Login only

We use the **Instagram API with Instagram Login** (`graph.instagram.com`). No Facebook Page, no Facebook Login, no Messenger, no publishing.

Account must be Instagram **Business** or **Creator** (Professional).

### Meta app

1. [Meta for Developers](https://developers.facebook.com/) → create an app → add product **Instagram**.
2. Use **Instagram API with Instagram Login** (not Facebook Login for Business).
3. Valid OAuth redirect URI (Graph Explorer / app settings), e.g. `https://localhost/` for token generation.
4. Permission / scope: **`instagram_business_basic`** (profile + media read).

### Long-lived token

1. In Graph API Explorer, switch to the Instagram app, generate a user token with `instagram_business_basic`.
2. Short-lived token (~1h) → long-lived (~60 days):

```
GET https://graph.instagram.com/access_token
  ?grant_type=ig_exchange_token
  &client_secret={INSTAGRAM_APP_SECRET}
  &access_token={SHORT_LIVED_TOKEN}
```

3. Optional user id:

```
GET https://graph.instagram.com/v22.0/me?fields=user_id,username,account_type&access_token={LONG_LIVED_TOKEN}
```

4. Env:

- `INSTAGRAM_ACCESS_TOKEN` — required (long-lived)
- `INSTAGRAM_USER_ID` — optional (`/me` fills it)
- `INSTAGRAM_APP_SECRET` — only for the exchange above, not needed at runtime
- `INSTAGRAM_GRAPH_VERSION` — default `v22.0`

Do **not** put the token in `NEXT_PUBLIC_*`.

### Sync

- Daily: Vercel Cron `GET /api/cron/instagram` (`vercel.json`), header `Authorization: Bearer $CRON_SECRET` or Vercel Cron.
- Manual: `/admin/instagram` or `POST /api/instagram/sync` (admin session).
- Still images are copied to R2 when R2 is configured (CDN URLs expire). Videos/carousels use thumbnail or first image.
- Without `INSTAGRAM_ACCESS_TOKEN`, the section uses fixtures.

Cron/admin sync refreshes the long-lived token and stores it in `instagram_auth` (service role only). Env `INSTAGRAM_ACCESS_TOKEN` is the bootstrap if that table is empty. Re-run `reset.sql` (or add the `instagram_auth` table) if an older schema is already applied.

Signup creates `profiles` with role `user` via trigger. Promote the operator:

```sql
update public.profiles set role = 'admin' where id = '<auth.users uuid>';
```

## 5. Hero video

1. Encode H.264 + AAC, `faststart`, keyframes every 0.5–1s (for scrub).
2. Host on R2 or `public/hero.mp4`.
3. Set `NEXT_PUBLIC_HERO_VIDEO_URL` to the public URL.
4. Poster is optional; reduced-motion users see frame 0.

## 6. Post-deploy smoke

Follow `QA_CHECKLIST.md`: Demo Mode locally, then production with secrets.

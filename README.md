# MVP Starter (Next.js + Supabase)

Product‑agnostic starter for a marketing site and gated app. Australian English spelling. Zero‑local: GitHub + Vercel + Supabase.

## Stack
- Next.js 14 (App Router), TypeScript, pnpm
- Supabase (Auth + Postgres + Storage, RLS)
- Tailwind CSS + shadcn‑style primitives (copy‑in)
- React Hook Form + Zod
- Resend + React Email
- Plausible (optional)
- Biome (formatter/linter), Playwright (smoke tests)
- GitHub Actions (lint, e2e, migrate), Dev Container

## Quick start
1. Create a Supabase project.
2. In Supabase **SQL Editor**, run `sql/0001_init.sql`.
3. Create a GitHub repo and push this code.
4. Add GitHub Secret `SUPABASE_DB_URL` (Direct Connection string).
5. Import the repo into Vercel. Set env vars:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `RESEND_API_KEY` (optional for emails)
   - `EMAIL_FROM` (e.g., `Brand <hello@your-domain.com>`)
   - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` (optional)
6. Open the Preview URL. `/waitlist` works without auth. `/app/dashboard` redirects to `/login`.

## Development without local machine
- Use GitHub Web Editor or Codespaces. Commits create Vercel Previews.
- CI: `lint` on PRs; `e2e` on PRs; `migrate` applies SQL on `main`.

## Theming
- Edit HSL tokens in `styles/globals.css` (`--primary`, etc.).
- All components reference variables, so palette swaps are trivial.

## Auth
- Magic link (`/login`) sends an email via Supabase. Callback handled at `/auth/callback`.
- `requireUser()` protects `(app)` routes. Secrets never exposed to client.

## Emails
- `emails/welcome.tsx` and server action `sendWelcome`. Requires `RESEND_API_KEY` and `EMAIL_FROM`.

## Analytics
- If `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` is set, marketing layout loads the Plausible script and you can send events via `window.plausible?.()`.

## Tests
- `pnpm dlx playwright install --with-deps`
- `pnpm test:e2e`

## Environment variables
See `.env.example`.

## Licence
MIT. Replace as needed.

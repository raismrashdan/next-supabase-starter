# 🚀 Next + Supabase MVP Starter

> *“Because reinventing boilerplate is so 2020.”*  

A product-agnostic starter kit to ship your **landing page + webapp MVP** in record time.  
No local setup. No yak-shaving. Just vibes, commits, and deploys. ✨  

---

## 🧩 What’s Inside

- **Next.js 14** (App Router, Server Components, Server Actions)
- **Supabase** (Postgres + Auth + Storage + RLS)
- **Tailwind CSS** + shadcn-style UI primitives
- **Forms** with React Hook Form + Zod ✅
- **Emails** via Resend + React Email 📧
- **Analytics** with Plausible (optional)
- **Zero-local workflow**: GitHub → Vercel → Supabase
- **Developer QoL**:  
  - Biome (formatter/linter)  
  - Playwright (smoke tests)  
  - GitHub Actions (lint, e2e, migrate)  
  - Dev Container for Codespaces 🐳  

---

## ⚡ Quick Start

1. 🍳 **Supabase**: create a project, run [`sql/0001_init.sql`](./sql/0001_init.sql) in the SQL Editor.
2. 🐙 **GitHub**: create a repo, push this code, add secret `SUPABASE_DB_URL`.
3. ▲ **Vercel**: import the repo, add env vars:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `RESEND_API_KEY` *(optional for emails)*
   - `EMAIL_FROM` *(e.g., `Brand <hello@domain.com>`)*
   - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` *(optional)*
4. 🎉 Visit your shiny new Preview URL.  
   - `/waitlist` works for anyone.  
   - `/app/dashboard` sends freeloaders to `/login`.  

---

## 🎨 Theming

- Edit `styles/globals.css` → HSL tokens like `--primary`.
- Change one colour and boom 💥 → instant rebrand.  

---

## 🔐 Auth

- `/login` → enter email → get magic link. 🪄
- `/auth/callback` handles the rest.
- `(app)` routes protected by `requireUser()` → freeloaders get punted.

---

## 📬 Emails

- Template at `emails/welcome.tsx`.
- `sendWelcome(to)` server action uses Resend + React Email.  
- Works best when you actually *set* `RESEND_API_KEY`.  

---

## 📊 Analytics

- Add `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` → Plausible script auto-loads.  
- Track vibes with `window.plausible?.("JoinWaitlistClicked")`.

---

## 🧪 Tests

```bash
pnpm dlx playwright install --with-deps
pnpm test:e2e
```

Checks:
- Landing page actually lands.
- Dashboard actually dashboards (for logged-in users).  

---

## ⚙️ Environment Variables

See [`.env.example`](./.env.example). Copy, fill, profit.  

---

## 📝 Licence

MIT.  
Steal it, remix it, break it, ship it. Just don’t blame us when your waitlist form fills up with your mum’s email.  

---

## ✨ Final Words

If you:
- Love building MVPs 💡  
- Hate boilerplate 😤  
- Want to *vibe-code* your way into production 💃  

…this repo is your new best mate. Cheers! 🍻
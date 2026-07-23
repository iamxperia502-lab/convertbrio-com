# ConvertBrio

File conversion, compression, and enhancement tools. Astro (server output) + Tailwind v4, deployed on Vercel, with Supabase for auth/database/storage and Razorpay for billing.

## Commands

| Command           | Action                                       |
| :----------------- | :-------------------------------------------- |
| `npm install`       | Install dependencies                          |
| `npm run dev`       | Start local dev server at `localhost:4321`    |
| `npm run build`     | Build the production site to `./dist/`        |
| `npm run preview`   | Preview the build locally before deploying    |

## Auth setup (Supabase)

Sign in/sign up won't work until a Supabase project is connected:

1. Create a project at [supabase.com](https://supabase.com) (free tier is fine).
2. In the Supabase SQL editor, run `supabase/migrations/20260711000000_init_schema.sql` — this creates the `profiles`, `conversion_jobs`, and `subscriptions` tables plus the trigger that auto-creates a profile on signup.
3. In **Project Settings → API**, copy the Project URL, `anon` public key, and `service_role` secret key.
4. Copy `.env.example` to `.env` and fill in those three values.
5. Restart `npm run dev`.

Until this is done, the site still builds and runs — the Sign In/Sign Up pages just show a "not configured" notice instead of erroring.

## Deployment

Deploys to Vercel via `@astrojs/vercel` (already configured in `astro.config.mjs`). Set the same three env vars in the Vercel project's Environment Variables settings.

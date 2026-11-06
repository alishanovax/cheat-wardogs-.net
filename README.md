# cheatwardogs.net

Astro storefront and content site for **War Dogs Cheats** at cheatwardogs.net, based on the [levoredirect](https://github.com/Stellarhamza/levoredirect) Astro template.

## Quick start

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:4322](http://127.0.0.1:4322).

## Build & deploy

Use **Node.js 22.12+** (see `engines` in `package.json`) so local builds match CI and Cloudflare.

```bash
npm run build       # same command Cloudflare runs ([build] in wrangler.toml)
npm run check       # Astro type/content check (@astrojs/check)
npm run ci          # check + build — use before push or deploy
npm run preview     # local preview of dist/
npm run deploy      # ci + wrangler deploy (Workers + ./dist assets)
```

Do **not** rely on `npx tsc --noEmit` for this project: plain `tsc` does not understand `.astro` imports; use `npm run check` instead.

### Cloudflare / Wrangler

- **Build command** is `npm run build` (see `wrangler.toml`). A successful `npm run ci` locally matches what GitHub Actions runs.
- **Deploy** (`npm run deploy`) needs Wrangler authenticated (e.g. `wrangler login` on your machine, or **`CLOUDFLARE_API_TOKEN`** in CI with Workers deploy permissions).
- **Optional env:** `INDEXNOW_KEY` — if unset, the build logs IndexNow as skipped (not a failure).
- **`CANONICAL_SITE_ORIGIN`** — set in the Workers dashboard for preview/staging if the default in `wrangler.toml` should not apply.

### GitHub Actions

On push/PR to `main` or `master`, [.github/workflows/ci.yml](.github/workflows/ci.yml) runs `npm ci` and `npm run ci`.

## Site config

| File | Purpose |
|------|---------|
| `src/config/site.ts` | Domain, product base path, Discord, support email |
| `src/config/checkout-redirects.mjs` | External checkout URLs for `/go/*/` redirects |
| `src/config/pageSeo.ts` | Per-route titles and meta descriptions |
| `src/i18n/en.ts` | Homepage copy, nav, product UI strings |

# Changes made to the upstream templates

## Accumulators / Digits / Rise-Fall (Next.js, App Builder templates)
- `.env.production`: your App ID (350K1vjYSPxXbn8jLnfYN), app name, scopes `trade,account_manage`,
  `NEXT_PUBLIC_BASE_PATH=/t/<name>`; referral link left empty. Redirect URI left unset (templates then use
  `window.location.origin`, so the build works on any domain).
- `next.config.js`: `output: 'export'`, `basePath`, `trailingSlash`, `images.unoptimized` (static hosting).
- `packages/core/src/auth/oauth.ts`: Log in / Sign up navigate `window.top` (Deriv's auth page can't be framed).
- Owner-specific `public/app-config.json`, `netlify.toml`, `_headers` removed.

## Bot (deriv-com/trading-bot-template)
- Sub-path hosting: `rsbuild.config.ts` (assetPrefix + BASE_PATH), router `basename`, `getUrlBase()`,
  `initWorkspace()` public path, tour video URLs, relative favicon.
- `isProduction()` always true (upstream picks staging unless the hostname matches brand.config.json).
- Login / sign-up redirects use `window.top`; OAuth-callback fallback URL keeps the base path.
- `utils/version-check.ts`: no longer calls `localStorage.clear()` / deletes cookies — upstream wiped the whole
  origin (it would have logged you out of every other tab).
- `BrandLogo.tsx`: "JAHIM TRADER" wordmark instead of the placeholder.
- `index.html`: Deriv's Google Tag Manager container removed.

## Shell (new)
`index.html`, `shell.js`, `shell.css` — loader + single full-screen Bot iframe. Other templates and the menu were removed.

## Tutorials removed (Bot)
- Tutorials tab and its lazy-loaded chunk (`207`) deleted; the quick-strategy search shortcut that jumped to it removed.
- Onboarding tour and the dashboard info panel (both linked to Tutorials) switched off; tour videos/images deleted.
- `setActiveTab` maps the old Tutorials index (3) to Dashboard, so old saved tab state can't break the page.
- Dashboard intersection observers now skip missing elements. The Tutorials tab was removed, but the dashboard still observed `#id-tutorials`, which threw during React mount and showed the generic “Sorry for the interruption” screen.
- The shell opens `/t/bot/#bot_builder` by default and keeps OAuth callback query parameters intact.
- Optional Google Drive OAuth initialization is skipped when no Google `client_id` is configured, preventing an unhandled startup error.

## Tab strip
`t/bot/index.html` has a small `<style id="jahim-tabs-blue">` block making the tab strip deep blue (#0a2463). Change the color there.

## ROBOTS removed -> FREE BOTS tab
The old ROBOTS tab, its "Robot tools" blocks and the "Trade all markets" checkbox are gone (`robots.js` deleted;
`jhCall`/`__jahimCall`/`__jahimDBot` hooks removed from `index*.js`; `jh_*` blocks removed from the Tick and candle
analysis flyout in `async/476*.js`; the extra checkbox removed from the Restart-on-error block in `async/341*.js`).

The tab in the same slot is now **FREE BOTS** (`id-free-bots`):
- `t/bot/freebots.js` (loaded by `t/bot/index.html`): search box, category chips (Rise/Fall, Higher/Lower, Digits,
  Touch, In/Out, Runs), favourites, light/dark toggle, per-bot **Select** and **Download XML**. It also keeps the Jahim
  logo next to the wordmark (that code used to live in `robots.js`).
- `t/bot/free-bots/*.xml`: the 88 strategies from the Free-Dbots collection, renamed to clean slugs (content untouched).
- **Select** switches to Bot Builder and loads the XML through Deriv's own loader (exposed as `window.__jahimLoad` in
  `index*.js`) - the same path as Bot Builder > Open > My computer, so older Binary Bot files get converted.
- Add a bot: drop the `.xml` in `t/bot/free-bots/` and add an entry to the `BOTS` list at the top of `freebots.js`.
- Changed bundles were renamed with new hashes (`index.f4b1e07a.js`, `341.d92c61b8.js`, `476.7e30a5c4.js`) so browsers
  can't serve a stale cached copy next to the new ones.

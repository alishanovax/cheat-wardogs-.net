/**
 * Cloudflare Workers: optional 301 redirects + rewrite SEO URLs to one canonical origin.
 *
 * Set in wrangler.toml (or dashboard):
 *   CANONICAL_SITE_ORIGIN = "https://cheatwardogs.net"
 * On preview workers.dev, omit it so canonical/sitemap follow the request host (no prod domain on staging).
 */
import { ALL_SEO_REDIRECTS } from '../src/config/all-redirects.mjs';

function trailingSlashPath(pathname) {
  if (!pathname || pathname === '/') return '/';
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

/** @param {string} html @param {string} origin @param {string} pathname */
function rewriteHtmlSeoUrls(html, origin, pathname) {
  const canonical = `${origin}${trailingSlashPath(pathname)}`;
  let next = html
    .replace(/<link rel="canonical" href="[^"]*"/g, `<link rel="canonical" href="${canonical}"`)
    .replace(
      /<link rel="alternate" hreflang="(en|en-US|x-default)" href="[^"]*"/g,
      (_match, lang) => `<link rel="alternate" hreflang="${lang}" href="${canonical}"`,
    )
    .replace(/<meta property="og:url" content="[^"]*"/g, `<meta property="og:url" content="${canonical}"`);

  return next;
}

function isSitemapOrFeedPath(pathname) {
  return pathname === '/rss.xml' || /^\/sitemap(-[\w-]+)?\.xml$/i.test(pathname);
}

function hasFileExtension(pathname) {
  return /\.[a-z0-9]+$/i.test(pathname);
}

function indexHtmlCandidates(pathname) {
  if (hasFileExtension(pathname)) return [];
  if (!pathname || pathname === '/') return ['/index.html'];
  if (pathname.endsWith('/')) return [`${pathname}index.html`];
  return [`${pathname}/index.html`, `${pathname}.html`];
}

const FROM_TRAILING = new Map();
const FROM_NO_TRAILING = new Map();
for (const [from, to] of Object.entries(ALL_SEO_REDIRECTS)) {
  const dest = to.startsWith('/') ? to : `/${to}`;
  const withSlash = from.endsWith('/') ? from : `${from}/`;
  const noSlash = withSlash.replace(/\/$/, '') || '/';
  FROM_TRAILING.set(withSlash, dest.endsWith('/') ? dest : `${dest}/`);
  if (noSlash !== '/') FROM_NO_TRAILING.set(noSlash, dest.endsWith('/') ? dest : `${dest}/`);
}

/**
 * @param {URL} url
 * @returns {string | null} destination pathname with trailing slash
 */
function resolveRedirect(url) {
  const pathname = decodeURIComponent(url.pathname);
  const withSlash = pathname.endsWith('/') || pathname === '/' ? pathname : `${pathname}/`;
  if (FROM_TRAILING.has(withSlash)) return FROM_TRAILING.get(withSlash);
  const noTrail = withSlash.replace(/\/$/, '');
  if (noTrail && FROM_NO_TRAILING.has(noTrail)) return FROM_NO_TRAILING.get(noTrail);
  return null;
}

/**
 * @param {string} body
 * @param {string} requestOrigin
 * @param {string} canonicalOrigin
 */
function rewriteSitemapRssHosts(body, requestOrigin, canonicalOrigin) {
  if (!canonicalOrigin || canonicalOrigin === requestOrigin) return body;
  const req = requestOrigin.replace(/\/$/, '');
  const can = canonicalOrigin.replace(/\/$/, '');
  return body.split(req).join(can);
}

async function fetchAsset(request, env) {
  const { pathname } = new URL(request.url);
  let response = await env.ASSETS.fetch(request);
  if (response.status === 200) return response;

  if (isSitemapOrFeedPath(pathname)) return response;

  for (const candidate of indexHtmlCandidates(pathname)) {
    const indexUrl = new URL(request.url);
    indexUrl.pathname = candidate;
    const indexResponse = await env.ASSETS.fetch(new Request(indexUrl, request));
    if (indexResponse.status === 200) return indexResponse;
  }
  return response;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const redirectTo = resolveRedirect(url);
    if (redirectTo) {
      const dest = new URL(redirectTo, url.origin);
      return Response.redirect(dest.toString(), 301);
    }

    const canonicalOrigin = env.CANONICAL_SITE_ORIGIN?.trim() || '';
    const effectiveOrigin = canonicalOrigin || url.origin;
    const response = await fetchAsset(request, env);

    if (response.status === 200 && isSitemapOrFeedPath(url.pathname)) {
      const headers = new Headers(response.headers);
      headers.set(
        'content-type',
        url.pathname.endsWith('.xml') ? 'application/xml; charset=utf-8' : 'application/rss+xml; charset=utf-8',
      );
      headers.delete('content-length');
      let body = await response.text();
      if (canonicalOrigin) body = rewriteSitemapRssHosts(body, url.origin, canonicalOrigin);
      return new Response(body, { status: response.status, headers });
    }

    const contentType = response.headers.get('content-type') ?? '';
    if (response.status !== 200 || !contentType.includes('text/html')) {
      return response;
    }

    const html = await response.text();
    let body = rewriteHtmlSeoUrls(html, effectiveOrigin, url.pathname);
    if (canonicalOrigin) {
      body = rewriteSitemapRssHosts(body, url.origin, canonicalOrigin);
    }
    const headers = new Headers(response.headers);
    headers.delete('content-length');
    return new Response(body, { status: response.status, headers });
  },
};

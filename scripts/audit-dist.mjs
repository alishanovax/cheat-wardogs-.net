/**
 * Post-build SEO/static audit of dist/ (no browser).
 * Run: node scripts/audit-dist.mjs
 *
 * Skips redirect stub HTML (meta refresh to canonical) for title/H1/sitemap parity.
 * Parses minified HTML (meta description may omit whitespace between attributes).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const SITE = 'https://cheatwardogs.net';

const EXPECTED_CHECKOUT =
  'https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fwardogs';

/** Visible copy only — avoid false positives from input placeholder="" attributes */
const PLACEHOLDER_RE =
  /\b(lorem\s+ipsum|todo:|tbd\b|coming\s+soon\s*\.\.\.)\b/i;

function walkHtmlFiles(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, name.name);
    if (name.isDirectory()) walkHtmlFiles(p, acc);
    else if (name.isFile() && name.name.endsWith('.html')) acc.push(p);
  }
  return acc;
}

/** Stable https URL with trailing slash (matches site trailingSlash: 'always') */
function fileToUrl(filePath) {
  const rel = path.relative(DIST, filePath).replace(/\\/g, '/');
  if (rel === '404.html') return `${SITE}/404/`;
  if (rel === 'index.html') return `${SITE}/`;
  if (rel.endsWith('/index.html')) {
    const segment = rel.slice(0, -'/index.html'.length);
    return `${SITE}/${segment}/`;
  }
  return `${SITE}/${rel}`;
}

function isRedirectStub(html) {
  return /http-equiv\s*=\s*["']refresh["']/i.test(html);
}

function extractMetaContentFromTag(tag) {
  const contentM = tag.match(/\bcontent\s*=\s*["']([^"']*)["']/i);
  return contentM ? contentM[1].trim() : '';
}

function extractMetaByName(html, name) {
  // Lookahead so attribute order (name before content vs content before name) works on minified HTML
  const re = new RegExp(
    `<meta(?=[^>]*\\bname\\s*=\\s*["']${name}["'])[^>]*>`,
    'gi',
  );
  let best = '';
  let m;
  while ((m = re.exec(html)) !== null) {
    const v = extractMetaContentFromTag(m[0]);
    if (v) best = v;
  }
  return best;
}

function extractOgProperty(html, prop) {
  const escaped = prop.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(
    `<meta(?=[^>]*\\bproperty\\s*=\\s*["']${escaped}["'])[^>]*>`,
    'gi',
  );
  const m = re.exec(html);
  return m ? extractMetaContentFromTag(m[0]) : '';
}

function stripScriptsAndStyles(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '');
}

function parseHtml(html, filePath) {
  const redirect = isRedirectStub(html);

  const titleM = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = titleM ? titleM[1].replace(/\s+/g, ' ').trim() : '';

  let description =
    extractMetaByName(html, 'description') || extractOgProperty(html, 'og:description');

  const h1Matches = html.match(/<h1\b[^>]*>/gi) ?? [];
  const imgs = [...html.matchAll(/<img\b[^>]*>/gi)].map((m) => m[0]);
  const missingAlt = [];
  const emptyAlt = [];
  for (const tag of imgs) {
    const altM = tag.match(/\balt\s*=\s*["']([^"']*)["']/i);
    if (!altM) missingAlt.push(tag.slice(0, 120));
    else if (altM[1].trim() === '') emptyAlt.push(tag.slice(0, 120));
  }

  const placeholderHits = [];
  if (!redirect) {
    const visible = stripScriptsAndStyles(html);
    if (PLACEHOLDER_RE.test(visible)) {
      const lines = visible.split(/[\n\r]+/);
      lines.forEach((line, i) => {
        if (PLACEHOLDER_RE.test(line)) {
          placeholderHits.push({ line: i + 1, snippet: line.trim().slice(0, 120) });
        }
      });
    }
  }

  return {
    filePath,
    url: fileToUrl(filePath),
    redirect,
    title,
    description,
    h1Count: h1Matches.length,
    imgCount: imgs.length,
    missingAlt,
    emptyAlt,
    placeholderHits,
  };
}

function normalizeLoc(loc) {
  try {
    const u = new URL(loc.trim());
    let p = u.pathname;
    if (p !== '/' && !p.endsWith('/')) p += '/';
    return `${u.origin}${p}`;
  } catch {
    return loc.trim();
  }
}

function extractSitemapLocs(xml) {
  const locs = [];
  for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/gi)) {
    locs.push(normalizeLoc(m[1].trim()));
  }
  return [...new Set(locs)];
}

function extractLinks(html) {
  const hrefs = [];
  for (const m of html.matchAll(/\bhref\s*=\s*["']([^"']+)["']/gi)) {
    hrefs.push(m[1].trim());
  }
  return hrefs;
}

function main() {
  if (!fs.existsSync(DIST)) {
    console.error('dist/ missing — run npm run build first.');
    process.exit(1);
  }

  const htmlFiles = walkHtmlFiles(DIST).sort();
  const rows = htmlFiles.map((f) => parseHtml(fs.readFileSync(f, 'utf8'), f));

  const contentRows = rows.filter((r) => !r.redirect);

  const issues = {
    noTitle: [],
    noDescription: [],
    notExactlyOneH1: [],
    missingAlt: [],
    emptyAlt: [],
    placeholders: [],
  };

  for (const r of contentRows) {
    if (!r.title) issues.noTitle.push(r.url);
    if (!r.description) issues.noDescription.push(r.url);
    if (r.h1Count !== 1) issues.notExactlyOneH1.push({ url: r.url, h1Count: r.h1Count });
    if (r.missingAlt.length) issues.missingAlt.push({ url: r.url, n: r.missingAlt.length });
    if (r.emptyAlt.length) issues.emptyAlt.push({ url: r.url, n: r.emptyAlt.length });
    if (r.placeholderHits.length) issues.placeholders.push({ url: r.url, hits: r.placeholderHits.length });
  }

  const robotsPath = path.join(DIST, 'robots.txt');
  const robotsOk = fs.existsSync(robotsPath);
  const robotsText = robotsOk ? fs.readFileSync(robotsPath, 'utf8') : '';
  const robotsHasSitemap = /Sitemap:\s*https?:\/\//i.test(robotsText);

  const sitemapAll = path.join(DIST, 'sitemap-all.xml');
  let sitemapLocs = [];
  if (fs.existsSync(sitemapAll)) {
    sitemapLocs = extractSitemapLocs(fs.readFileSync(sitemapAll, 'utf8'));
  }

  const sitemapSet = new Set(sitemapLocs);
  const builtContentUrls = new Set(contentRows.map((r) => normalizeLoc(r.url)));

  const inSitemapNotBuilt = sitemapLocs.filter(
    (u) => !builtContentUrls.has(normalizeLoc(u)) && normalizeLoc(u) !== normalizeLoc(SITE),
  );

  const builtNotInSitemap = [...builtContentUrls].filter((u) => {
    const nu = normalizeLoc(u);
    if (nu.includes('/404')) return false;
    return !sitemapSet.has(nu);
  });

  const badCheckout = [];
  for (const r of contentRows) {
    const html = fs.readFileSync(r.filePath, 'utf8');
    for (const href of extractLinks(html)) {
      if (href.startsWith('/go/')) continue;
      if (href.includes('zadeyo.com')) {
        const norm = href.replace(/&amp;/g, '&');
        if (!norm.includes('zadeyo.com/go/ALISHA')) {
          badCheckout.push({ url: r.url, href });
        }
      }
    }
  }

  const report = {
    summary: {
      htmlFiles: rows.length,
      contentHtmlPages: contentRows.length,
      redirectStubs: rows.length - contentRows.length,
      robotsTxtPresent: robotsOk,
      robotsListsSitemap: robotsHasSitemap,
      sitemapUrlCount: sitemapLocs.length,
      pagesWithTitle: contentRows.length - issues.noTitle.length,
      pagesWithMetaDescription: contentRows.length - issues.noDescription.length,
      pagesWithExactlyOneH1: contentRows.filter((r) => r.h1Count === 1).length,
      totalImages: contentRows.reduce((s, r) => s + r.imgCount, 0),
      imgsMissingAlt: issues.missingAlt.reduce((s, x) => s + x.n, 0),
      imgsEmptyAlt: issues.emptyAlt.reduce((s, x) => s + x.n, 0),
    },
    issues,
    sitemap: {
      inSitemapNotBuiltCount: inSitemapNotBuilt.length,
      inSitemapNotBuiltSample: inSitemapNotBuilt.slice(0, 15),
      builtNotInSitemapCount: builtNotInSitemap.length,
      builtNotInSitemapSample: builtNotInSitemap.slice(0, 25),
    },
    checkout: {
      unexpectedZadeyoLinkSamples: badCheckout.slice(0, 20),
    },
  };

  console.log(JSON.stringify(report, null, 2));

  const fail =
    issues.noTitle.length ||
    issues.noDescription.length ||
    issues.notExactlyOneH1.length ||
    issues.missingAlt.length ||
    issues.emptyAlt.length ||
    issues.placeholders.length ||
    badCheckout.length ||
    !robotsOk ||
    !robotsHasSitemap ||
    inSitemapNotBuilt.length > 0 ||
    builtNotInSitemap.length > 0;

  if (fail) process.exitCode = 1;
}

main();

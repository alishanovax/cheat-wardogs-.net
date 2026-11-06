/**
 * Central titles/descriptions for high-traffic routes.
 * After Search Console shows impressions, edit the matching path here and redeploy.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
  /** Optional on-page H1 override (SEO-only routes). */
  h1?: string;
  /** Optional second H1 line (homepage hero accent). */
  h1Accent?: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'War Dogs Cheats PC | Features, Guides & Checkout',
    description:
      'War Dogs cheats and War Dogs hacks for PC — tier pages, installation guides, and FAQ on cheatwardogs.net. See checkout for current modules and price.',
    h1: 'War Dogs Cheats',
  },
  '/pd/wd/': {
    title: 'Buy War Dogs Cheats — Lite, Pro & Elite PC tiers',
    description:
      'War Dogs cheats PC shop: Lite, Pro, Elite tiers and utilities. Compare tiers here; see checkout for the live module list and price.',
    h1: 'War Dogs cheats for PC — product hub',
  },
  '/pd/wd/lite/': {
    title: 'War Dogs Lite Cheats | Awareness ESP & Radar',
    description:
      'War Dogs Lite cheats focus on awareness overlays — confirm ESP, radar, and timers on the live listing before buying.',
  },
  '/pd/wd/pro/': {
    title: 'War Dogs Pro Cheats | Combat assists + ESP',
    description:
      'War Dogs Pro cheats add combat assists on top of Lite-style overlays — confirm aim, recoil, and ESP details on the live listing.',
  },
  '/pd/wd/elite/': {
    title: 'War Dogs Elite Cheats | Full bundle when listed',
    description:
      'War Dogs Elite cheats may bundle the widest module set — check availability, slots, and perks on the live listing before checkout.',
  },
  '/pd/wd/hwid-spoofer/': {
    title: 'War Dogs HWID utility | Hardware workflows (seller-guided)',
    description:
      'War Dogs HWID-related utility page — follow seller documentation only. Not every ban benefits from hardware changes.',
  },
  '/pd/wd/ugc/': {
    title: 'War Dogs UGC tools | Appeals & case tracking (if listed)',
    description:
      'UGC-style tools for War Dogs players when the seller lists them — outcomes are not guaranteed.',
  },
  '/pd/wd/unlock-all/': {
    title: 'War Dogs loadout preview | Cosmetic utilities (if listed)',
    description:
      'Loadout or cosmetic preview utilities for War Dogs — read the seller listing for multiplayer visibility rules.',
  },
  '/pd/wd/utilities/': {
    title: 'War Dogs cheat utilities — compare HWID, UGC & previews',
    description:
      'Compare optional War Dogs utilities before checkout — each seller listing may differ.',
  },
  '/blog/': {
    title: 'War Dogs Cheats Blog | Setup, hacks & installation guides',
    description:
      'War Dogs cheats guides: how to install War Dogs cheats, patch discipline, ESP setup, and how to read product listings.',
    h1: 'War Dogs cheats guides — installation, hacks & FAQs',
  },
  '/forum/': {
    title: 'War Dogs Cheats Forum | Setup and tier questions',
    description:
      'Forum threads sourced from War Dogs guides — loader questions, tier picks, and update notes.',
    h1: 'Forum — War Dogs cheats discussions and guide Q&A',
  },
  '/faq/': {
    title: 'War Dogs Cheats FAQ | Access, risk & checkout',
    description:
      'FAQ for War Dogs cheats and War Dogs hacks: tiers, bans, checkout link, and support paths on cheatwardogs.net.',
    h1: 'FAQ — War Dogs cheats access, risk, checkout and compatibility',
  },
  '/terms/': {
    title: 'Terms | War Dogs Cheats on cheatwardogs.net',
    description:
      'Terms for using cheatwardogs.net and linking to external checkout for War Dogs cheat purchases.',
  },
  '/privacy/': {
    title: 'Privacy Policy | cheatwardogs.net analytics & referrals',
    description:
      'Privacy for cheatwardogs.net — analytics cookies, support email, and checkout referral flow.',
    h1: 'Privacy Policy — cheatwardogs.net analytics, cookies and checkout referrals',
  },
  '/about/': {
    title: 'About War Dogs Cheats | cheatwardogs.net',
    description:
      'What cheatwardogs.net publishes about War Dogs cheats, hacks, and navigation versus the external seller checkout.',
  },
  '/support/': {
    title: 'Support | War Dogs Cheats navigation & FAQ',
    description:
      'Support for cheatwardogs.net — site help before you contact the War Dogs seller with your order details.',
  },
  '/war-dogs-cheats/': {
    title: 'War Dogs Cheats & War Dogs Hacks — PC overview',
    description:
      'Keyword overview for War Dogs cheats PC buyers — module terms, risk notes, and link to War Dogs checkout.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}

/** Blog post `<title>` / meta description overrides (exact audit phrases). */
export const BLOG_POST_SEO: Record<string, Partial<PageSeoEntry>> = {
  'war-dogs-game-cheats-explained': {
    title: 'War Dogs Cheats Explained | PC ESP, Radar & Setup',
    description:
      'War Dogs cheats explained for PC — ESP, radar, aim assists, patch-day risk, and links to product hub and checkout on cheatwardogs.net.',
  },
  'war-dogs-training-tips': {
    title: 'War Dogs Training Tips — Overlays Before Ranked',
    description:
      'Train in low-risk War Dogs sessions first: ESP readability, radar distance, aim presets, keybinds, and patch-day checks before ranked — cheatwardogs.net.',
  },
  'buy-war-dogs-cheats': {
    title: 'How to Buy War Dogs Cheats (2026) — Hub & Checkout',
    description:
      'Step-by-step: compare War Dogs tiers on the product hub, verify modules on the live listing, checkout securely, then delivery, setup, and patch-day habits.',
  },
  'war-dogs-radar': {
    title: 'War Dogs radar cheats — distance and FOV tips',
    description:
      'War Dogs cheats guide: radar overlays depend on your build—verify distance caps and filters on the live listing.',
  },
  'war-dogs-stream-proof': {
    title: 'Stream capture tests for War Dogs overlays',
    description:
      'Test OBS or other capture with War Dogs overlays yourself — never assume invisibility.',
  },
  'war-dogs-aimbot-ranked': {
    title: 'Ranked aim settings — War Dogs cheats',
  },
  'war-dogs-anti-cheat-troubleshooting': {
    title: 'Anti-cheat errors — War Dogs PC troubleshooting',
    description:
      'Start with verification steps, then involve seller support for War Dogs loader-specific errors.',
  },
};

/** Optional on-page H1 overrides (blog posts). */
export const BLOG_POST_PAGE_H1: Record<string, string> = {
  'war-dogs-anti-cheat-troubleshooting':
    'Anti-cheat verification errors — troubleshooting for War Dogs PC players',
  'war-dogs-stream-proof': 'Stream capture checklist — War Dogs overlay tests',
  'war-dogs-training-practice': 'Training mode practice before War Dogs cheat sessions',
  'war-dogs-radar': 'War Dogs radar-style overlays — read the listing before enabling',
  'war-dogs-game-cheats-explained': 'War Dogs cheats explained — settings, risks, and checkout links',
  'war-dogs-training-tips': 'War Dogs training tips — tune overlays and aim before ranked play',
};

export function getBlogPostSeo(slug: string, fallback: PageSeoEntry): PageSeoEntry {
  const override = BLOG_POST_SEO[slug];
  if (!override) return fallback;
  return {
    title: override.title ?? fallback.title,
    description: override.description ?? fallback.description,
  };
}

export function blogPostPageH1(slug: string, postTitle: string): string {
  return BLOG_POST_PAGE_H1[slug] ?? postTitle;
}

/** Layout `<title>` for blog posts; ranked override is used verbatim when under 60 chars. */
export function blogPostLayoutTitle(slug: string, postTitle: string, brand = 'War Dogs Cheats'): string {
  const override = BLOG_POST_SEO[slug]?.title;
  if (override && override.length <= 60) return override;
  if (override) return `${override.slice(0, 57).trim()}…`;
  const suffix = ` | ${brand}`;
  const max = 60;
  if (`${postTitle}${suffix}`.length <= max) return `${postTitle}${suffix}`;
  const trimmed = postTitle.slice(0, Math.max(20, max - suffix.length - 1)).trim();
  return `${trimmed}${suffix}`;
}

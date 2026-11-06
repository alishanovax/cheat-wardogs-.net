import type { Translations } from './types';
import { DISCORD_URL, PRODUCT_BASE } from '../config/site';
import { cheatImageForSlug } from '../config/siteImages';

const productBase = PRODUCT_BASE;

export const en: Translations = {
  site: {
    name: 'War Dogs Cheats',
    domain: 'cheatwardogs.net',
    title: 'War Dogs Cheats | PC software & guides',
    description:
      'War Dogs cheats and hacks for PC — compare Lite, Pro, and Elite on cheatwardogs.net, read installation and FAQ, then confirm features and price at checkout before you pay.',
    discord: DISCORD_URL,
  },
  nav: [
    { href: `${productBase}`, label: 'Products' },
    { href: '/blog/', label: 'Blog' },
    { href: '/forum/', label: 'Forum' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Support' },
  ],
  hero: {
    status: 'War Dogs · PC',
    eyebrow: 'War Dogs cheats for PC',
    h1: 'War Dogs Cheats',
    h1Accent: '',
    subtitle:
      'Explore War Dogs cheat software for PC — tiers for awareness and combat assists, utilities, and setup content on cheatwardogs.net. Exact modules and pricing are on the seller listing; third-party tools carry real account risk.',
    ctaPrimary: 'Buy War Dogs cheats',
    ctaDiscord: 'Join Discord',
    modesLabel: 'Play styles',
    modes: ['Ranked', 'Casual', 'Custom', 'Practice'],
    metrics: [
      { label: 'Scope', strong: 'War Dogs only' },
      { label: 'Checkout', strong: 'Seller' },
      { label: 'Guides', strong: 'Blog + FAQ' },
      { label: 'Support', strong: 'Discord' },
    ],
  },
  features: {
    eyebrow: 'Product areas',
    title: 'War Dogs cheat modules (see checkout for current list)',
    subtitle:
      'Below is typical cheat vocabulary for PC products—ESP, aim assists, radar, configs. Your build may differ; open the live War Dogs listing before you buy.',
    items: [
      {
        title: 'Aim assists',
        subtitle: 'FOV, smoothness, bones',
        desc: 'Many War Dogs builds expose aim tuning such as FOV, smoothing, and bone priority. Use conservative defaults and confirm options on the live listing.',
        bullets: ['Tune FOV before smoothness', 'Test in practice first', 'Avoid max settings on day one', 'Match profiles to your sensitivity'],
        tags: ['War Dogs aimbot', 'aim assist', 'FOV'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Player ESP',
        subtitle: 'Boxes, skeletons, info',
        desc: 'Overlays that highlight players and distance are common in cheat suites. Keep layouts readable so you can still see the match.',
        bullets: ['Lower max distance first', 'Simplify colors', 'Turn off clutter', 'Pair with radar if included'],
        tags: ['War Dogs ESP', 'player ESP', 'wall ESP'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Loot & world ESP',
        subtitle: 'Items and objectives',
        desc: 'Some tiers add world or loot callouts. Availability depends on the seller—verify bullets on the product page, not guesswork.',
        bullets: ['Enable one layer at a time', 'Avoid flooding the HUD', 'Match filters to your role', 'Disable unused channels'],
        tags: ['War Dogs loot ESP', 'objectives', 'HUD'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
      {
        title: 'Configs',
        subtitle: 'Save and load',
        desc: 'Profiles let you separate casual and ranked settings. Cloud backup depends on the seller’s portal.',
        bullets: ['Name presets clearly', 'Export before big changes', 'Duplicate before experiments', 'Document hotkeys'],
        tags: ['War Dogs cheat config', 'profiles', 'setup'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'Recoil & weapon layers',
        subtitle: 'Per-weapon tuning',
        desc: 'Higher tiers sometimes bundle recoil or weapon-specific assists. Check whether your license lists them explicitly.',
        bullets: ['Split AR vs SMG profiles', 'Tune vertical separately', 'Avoid stacking unstable mods', 'Re-test after patches'],
        tags: ['War Dogs recoil', 'weapons', 'combat'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'Compatibility',
        subtitle: 'Windows PC focus',
        desc: 'Most listings target Windows 10/11 64-bit. Requirements on the seller page override any summary here.',
        bullets: ['Confirm OS build support', 'Update GPU drivers cleanly', 'Note anti-cheat constraints', 'Read seller downtime notes'],
        tags: ['War Dogs compatibility', 'Windows', 'PC'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:row-span-2 lg:col-start-1 lg:row-start-4',
      },
      {
        title: 'Playlists',
        subtitle: 'Matchmaking context',
        desc: 'Cheats interact differently with ranked, casual, or custom lobbies. Respect match rules and accept enforcement risk.',
        bullets: ['Start in low-stakes modes', 'Avoid obvious automation', 'Watch patch notes', 'Pause if status is unclear'],
        tags: ['War Dogs multiplayer', 'ranked', 'casual'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-4',
      },
      {
        title: 'Pricing',
        subtitle: 'Set at checkout',
        desc: 'Access length and renewals are defined at checkout. This site uses one checkout URL for War Dogs—open it for current price.',
        bullets: ['Review plan length', 'Check refund rules at checkout', 'Same checkout site-wide', 'Keep order email safe'],
        tags: ['War Dogs cheats price', 'buy War Dogs cheats', 'access'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-6',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why this shop',
    title: 'War Dogs cheats with a single checkout link',
    subtitle:
      'We keep cheatwardogs.net focused on War Dogs: structure for SEO, honest risk copy, and one checkout link. Delivery and module truth live with the seller.',
    usLabel: 'cheatwardogs.net',
    otherLabel: 'Vague resellers',
    rows: [
      {
        title: 'One War Dogs checkout URL',
        desc: 'Every CTA uses the same checkout hand-off so you always land on the current War Dogs listing.',
      },
      {
        title: 'Tier pages without invented specs',
        desc: 'We describe Lite, Pro, Elite in plain language and tell you to verify bullets on the live listing before paying.',
      },
      {
        title: 'Discord for operational help',
        desc: 'Loader, portal, and config questions go through Discord when the seller routes support there.',
      },
      {
        title: 'External delivery model',
        desc: 'Payment and license delivery are completed off-site; cheatwardogs.net explains navigation and policy.',
      },
      {
        title: 'Patch-day content',
        desc: 'Blog and FAQ emphasize checking status after game or anti-cheat updates instead of blind queues.',
      },
      {
        title: 'Honest risk language',
        desc: 'We do not promise stealth, rank results, or ban protection—those claims would be unverified.',
      },
    ],
    metrics: [
      {
        value: '1 URL',
        title: 'Checkout',
        desc: 'One War Dogs checkout link shared across CTAs.',
      },
      {
        value: '24/7',
        title: 'Discord',
        desc: 'Join when the seller lists coverage; response times vary.',
      },
      {
        value: 'FAQ',
        title: 'Pre-buy',
        desc: 'Tier, risk, and setup answers before you leave cheatwardogs.net.',
      },
    ],
  },
  setup: {
    eyebrow: 'Setup',
    titleLead: 'Buy access. Install in',
    titleHighlight: 'three steps',
    intro:
      'Purchase through checkout, download from the seller portal, load a conservative preset, then launch War Dogs only after status checks.',
    ctaPrimary: 'Buy War Dogs cheats',
    ctaSecondary: 'Setup FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Complete checkout',
        desc: 'Use the War Dogs listing, save your receipt, and join Discord if instructions say so.',
      },
      {
        step: 'Step 2',
        title: 'Install from the portal',
        desc: 'Download only what your order unlocks; run installs as administrator when required.',
      },
      {
        step: 'Step 3',
        title: 'Test, then play',
        desc: 'Validate overlays in practice, then queue live matches only when the seller shows online.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform',
    title: 'Windows PC',
    subtitle: 'Confirm supported builds for War Dogs on the seller page before you launch.',
    items: [
      'Windows 10 & 11 (64-bit)',
      'War Dogs PC client',
      'Current GPU drivers',
      'Seller portal access',
      'Discord (optional)',
      'Admin rights when required',
      'Stable internet',
      'Documentation from purchase',
    ],
  },
  cheats: {
    eyebrow: 'Cheats',
    title: 'War Dogs cheat tiers',
    subtitle:
      'Lite focuses on awareness; Pro adds stronger assists; Elite bundles extras when listed. Names map to template cards—modules must match the live listing.',
    viewAll: 'View Elite details',
    explore: 'Explore',
    items: [
      {
        badge: 'Available',
        tier: 'Starter',
        name: 'Lite',
        title: 'Lite — awareness-first War Dogs cheats',
        desc: 'Shortlist Lite when you want map-style information layers without maxed combat automation—exact modules on the listing.',
        features: ['Player ESP & boxes', 'World/loot callouts (if listed)', 'Mini-radar when included', 'Simpler overlay stack'],
        more: 6,
        href: `${productBase}lite/`,
        variant: 'essential',
      },
      {
        badge: 'Popular',
        tier: 'Standard',
        name: 'Pro',
        title: 'Pro — War Dogs cheats with combat assists',
        desc: 'Pro tier adds aim-related tooling on many builds. Compare bullets with Lite on the live listing before checkout.',
        features: ['Lite-style awareness stack', 'Aim assists when listed', 'Weapon or recoil layers if shown', 'Hotkey-driven profiles'],
        more: 8,
        href: `${productBase}pro/`,
        variant: 'popular',
      },
      {
        badge: 'Limited slots',
        tier: 'Premium',
        name: 'Elite',
        title: 'Elite — full War Dogs suite when offered',
        desc: 'Elite may add automation, priority support, or bundled utilities—confirm slot limits and modules at checkout.',
        features: ['Broadest module set (per listing)', 'Possible priority updates', 'Bundled utilities sometimes', 'Direct support path if advertised'],
        more: 10,
        href: `${productBase}elite/`,
        variant: 'limited',
      },
    ],
  },
  products: {
    eyebrow: 'Shop',
    title: 'War Dogs PC cheats & utilities',
    subtitle:
      'Tier pages cover gameplay software; utilities below are optional add-ons when the seller lists them—always read the full utility descriptions.',
    viewAll: 'View all products',
    get: 'Buy',
    explore: 'Explore',
    items: [
      {
        badge: 'Utility',
        category: 'Hardware',
        title: 'War Dogs HWID Spoofer — hardware workflows',
        subtitle: 'Sensitive system tools',
        desc: 'Hardware-focused utilities may help when documentation says so—not every ban type. Follow seller steps only.',
        features: ['Disk and MAC workflows if listed', 'Restore-point style safety steps', 'Compatibility scan when provided', 'Portal-led instructions'],
        more: 6,
        href: `${productBase}hwid-spoofer/`,
      },
      {
        badge: 'Utility',
        category: 'Account',
        title: 'UGC tools — appeals and case tracking',
        subtitle: 'Documentation helpers',
        desc: 'UGC-style tools organize evidence for appeals when the listing includes them—outcomes depend on platform review.',
        features: ['Templated appeals when offered', 'Case notes', 'Status tracking if included', 'Discord escalation paths'],
        more: 5,
        href: `${productBase}ugc/`,
      },
      {
        badge: 'Utility',
        category: 'Cosmetic',
        title: 'Loadout preview / unlock utilities',
        subtitle: 'Client-side previews',
        desc: 'Cosmetic preview packs may only affect your client. Read visibility rules before streaming or matchmaking.',
        features: ['Local preview when applicable', 'Loadout experiments', 'Export favorites if listed', 'Separate from combat tier'],
        more: 5,
        href: `${productBase}unlock-all/`,
      },
    ],
  },
  blog: {
    eyebrow: 'Guides',
    title: 'War Dogs cheat guides',
    subtitle: 'Installation ideas, patch discipline, and how to read product listings—no substitute for the live page.',
    latestTitle: 'Latest War Dogs cheat articles',
    latestSubtitle: 'Sort or filter to find setup, pricing context, and troubleshooting topics.',
    filterAll: 'All articles',
    sortLabel: 'Sort by',
    sortNewest: 'Newest first',
    sortOldest: 'Oldest first',
    sortShortRead: 'Shortest read',
    sortLongRead: 'Longest read',
    emptyFilter: 'No articles match this filter.',
    viewAll: 'View all articles',
    read: 'Read',
    items: [
      {
        tag: 'Guides',
        title: 'War Dogs cheats explained',
        slug: 'war-dogs-game-cheats-explained',
        image: cheatImageForSlug('war-dogs-game-cheats-explained'),
        desc:
          'War Dogs cheats explained for PC: ESP, radar, aim assists, and utilities in plain language. Learn patch-day risk and listing vocabulary on cheatwardogs.net before you open checkout.',
        date: 'Nov 6, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Guides',
        title: 'Training mode practice: aim drills before ranked',
        slug: 'war-dogs-training-practice',
        image: cheatImageForSlug('war-dogs-training-practice'),
        desc:
          'Use War Dogs training and practice modes to build aim and movement first, then layer overlays with the same discipline. Confirm any third-party tool on the live listing.',
        date: 'Oct 24, 2026',
        readTime: '10 min read',
      },
      {
        tag: 'Guides',
        title: 'War Dogs cheats: training tips before live matches',
        slug: 'war-dogs-training-tips',
        image: cheatImageForSlug('war-dogs-training-tips'),
        desc:
          'Train in low-risk War Dogs sessions before ranked: ESP readability, radar distance, aim presets, and keybinds — confirm modules on the live listing.',
        date: 'Oct 10, 2026',
        readTime: '9 min read',
      },
      {
        tag: 'Setup',
        title: 'How to approach War Dogs cheat setup safely',
        slug: 'war-dogs-cheat-setup',
        image: cheatImageForSlug('war-dogs-cheat-setup'),
        desc:
          'Safe War Dogs cheat setup: match your PC build to the listing, follow seller docs step by step, install only official packages, and test in a casual queue before ranked.',
        date: 'Sep 25, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Features',
        title: 'War Dogs cheats: how to read the feature list',
        slug: 'war-dogs-cheat-features',
        image: cheatImageForSlug('war-dogs-cheat-features'),
        desc: 'Treat the seller listing as the source of truth for ESP, aim, or radar naming.',
        date: 'Sep 8, 2026',
        readTime: '9 min read',
      },
      {
        tag: 'Guides',
        title: 'Practice settings vs ranked War Dogs sessions',
        slug: 'war-dogs-practice-settings',
        image: cheatImageForSlug('war-dogs-practice-settings'),
        desc: 'Why safe modes differ from matchmaking enforcement.',
        date: 'Aug 22, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Guides',
        title: 'War Dogs Lite vs Pro: which tier to shortlist',
        slug: 'war-dogs-lite-vs-pro',
        image: cheatImageForSlug('war-dogs-lite-vs-pro'),
        desc: 'Awareness-heavy vs automation-heavy—confirm on the live listing.',
        date: 'Aug 5, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Guides',
        title: 'Elite War Dogs access: when it is worth reviewing',
        slug: 'war-dogs-elite-tier',
        image: cheatImageForSlug('war-dogs-elite-tier'),
        desc: 'Understand what “Elite” means on the listing before paying.',
        date: 'Jul 19, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Setup',
        title: 'Aim settings for ranked War Dogs play',
        slug: 'war-dogs-aimbot-ranked',
        image: cheatImageForSlug('war-dogs-aimbot-ranked'),
        desc: 'Prefer smooth, readable tuning over extreme profiles.',
        date: 'Jun 30, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Setup',
        title: 'War Dogs wall ESP: readability and clutter',
        slug: 'war-dogs-esp-setup',
        image: cheatImageForSlug('war-dogs-esp-setup'),
        desc: 'Reduce HUD noise before you rely on overlays in fights.',
        date: 'Jun 12, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Guides',
        title: 'Radar-style overlays for War Dogs',
        slug: 'war-dogs-radar',
        image: cheatImageForSlug('war-dogs-radar'),
        desc:
          'War Dogs radar and mini-map overlays: distance caps, FOV, teammate filters, and loot hints vary by build — verify every line on the seller listing.',
        date: 'May 24, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Guides',
        title: 'Loadout preview tools and cosmetic clients',
        slug: 'war-dogs-loadouts',
        image: cheatImageForSlug('war-dogs-loadouts'),
        desc: 'Local previews may not match what others see.',
        date: 'May 6, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Updates',
        title: 'Patch day checklist for War Dogs cheat users',
        slug: 'war-dogs-patch-day',
        image: cheatImageForSlug('war-dogs-patch-day'),
        desc:
          'After a War Dogs or anti-cheat update: check seller status, download only from your portal, delay ranked until compatibility is explicit.',
        date: 'Apr 18, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Guides',
        title: 'Hardware flags and new accounts: high-level paths',
        slug: 'war-dogs-hwid-ban',
        image: cheatImageForSlug('war-dogs-hwid-ban'),
        desc: 'Understand when HWID workflows apply—follow seller docs.',
        date: 'Mar 29, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Guides',
        title: 'How to buy War Dogs cheats in 2026',
        slug: 'buy-war-dogs-cheats',
        image: cheatImageForSlug('buy-war-dogs-cheats'),
        desc:
          'How to buy War Dogs cheats: compare tiers on the product hub, confirm modules on the live listing, pay securely, then follow the seller email for loader access and support.',
        date: 'Mar 8, 2026',
        readTime: '8 min read',
      },
      {
        tag: 'Setup',
        title: 'Weapon profiles and aim tuning (general)',
        slug: 'war-dogs-aimbot-combat',
        image: cheatImageForSlug('war-dogs-aimbot-combat'),
        desc: 'Separate weapon classes to avoid conflicting sliders.',
        date: 'Feb 17, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Troubleshooting',
        title: 'Anti-cheat errors and verification failures',
        slug: 'war-dogs-anti-cheat-troubleshooting',
        image: cheatImageForSlug('war-dogs-anti-cheat-troubleshooting'),
        desc: 'Start with verification steps; involve seller support for loader errors.',
        date: 'Jan 26, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Guides',
        title: 'External loaders vs injection (conceptual)',
        slug: 'war-dogs-external-loader',
        image: cheatImageForSlug('war-dogs-external-loader'),
        desc: 'Architecture affects compatibility—read seller technical notes.',
        date: 'Dec 14, 2025',
        readTime: '7 min read',
      },
      {
        tag: 'Setup',
        title: 'Stream-friendly overlay checks',
        slug: 'war-dogs-stream-proof',
        image: cheatImageForSlug('war-dogs-stream-proof'),
        desc: 'Test capture yourself; do not assume invisibility.',
        date: 'Nov 19, 2025',
        readTime: '5 min read',
      },
    ],
  },
  toolkit: {
    eyebrow: 'Menu groups',
    title: 'War Dogs cheat menu layout',
    subtitle: 'Typical groupings so you can tune combat and ESP without hunting for sliders.',
    items: [
      { num: '01', label: 'Aim', title: 'Combat assists', desc: 'FOV, smoothing, and bone priority when included in your build.' },
      { num: '02', label: 'ESP', title: 'World overlays', desc: 'Boxes, skeletons, distances, and filters per team.' },
      { num: '03', label: 'Radar', title: 'Map aids', desc: 'Mini-map or radar overlays if the listing includes them.' },
      { num: '04', label: 'Weapons', title: 'Per-weapon stacks', desc: 'Save AR, SMG, and shotgun profiles separately.' },
      { num: '05', label: 'World', title: 'Loot and objectives', desc: 'Enable only the channels you can parse mid-fight.' },
      { num: '06', label: 'Profiles', title: 'Configs', desc: 'Ranked vs casual presets with backup before edits.' },
    ],
  },
  workflow: {
    eyebrow: 'Flow',
    badge: '4 steps',
    titleBefore: 'From checkout to',
    titleHighlight: 'War Dogs sessions',
    subtitle: 'Buy through checkout, install from the portal, validate overlays, then keep configs synced after patches.',
    ctaLabel: 'Buy War Dogs cheats',
    ctaHref: productBase,
    ctaSecondary: 'Setup FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Research',
        title: 'Read the listing',
        desc: 'Confirm modules, OS support, and refund stance on the War Dogs product page.',
      },
      {
        num: '02',
        phase: 'Purchase',
        title: 'Single checkout URL',
        desc: 'Use the checkout link from cheatwardogs.net so you always see current price.',
      },
      {
        num: '03',
        phase: 'Install',
        title: 'Portal download',
        desc: 'Install only seller-provided packages; keep AV exceptions minimal and documented.',
      },
      {
        num: '04',
        phase: 'Play',
        title: 'Status first',
        desc: 'Check seller status after patches; delay queues if compatibility is uncertain.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Notes',
    title: 'Quick tips',
    items: [
      { num: '01', title: 'After patches', desc: 'Re-read seller status before War Dogs queues when the game or anti-cheat updates.' },
      { num: '02', title: 'Start simple', desc: 'Enable the smallest useful set of overlays, then add complexity.' },
      { num: '03', title: 'Keep proof', desc: 'Save receipts, portal logins, and Discord ticket IDs for support.' },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'Loader, checkout, and account help',
    subtitle: 'Discord and email per seller instructions after you purchase.',
    channels: [
      {
        icon: 'users',
        title: 'Before you buy',
        desc: 'Compare tiers on cheatwardogs.net, then confirm details on the live listing.',
        linkLabel: 'View products',
        href: productBase,
      },
      {
        icon: 'navFaq',
        title: 'FAQ',
        desc: 'Risk, tiers, and setup answers.',
        linkLabel: 'View FAQ',
        href: '/faq/',
      },
      {
        icon: 'clock',
        title: 'Discord',
        desc: 'Join when your order or the seller directs you.',
        linkLabel: 'Join Discord',
        href: DISCORD_URL,
      },
    ],
    ticketTitle: 'Include in your ticket',
    ticketItems: [
      { title: 'Order email', desc: 'The email tied to your checkout receipt.' },
      { title: 'Platform', desc: 'Windows build, War Dogs client version, and GPU driver note.' },
      { title: 'Error detail', desc: 'Exact loader text or screenshot from the portal tool.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'War Dogs cheats FAQ',
    subtitle: 'Access, risk, tiers, and setup before you leave for checkout.',
    items: [
      {
        num: '01',
        q: 'Where is the authoritative feature list?',
        a: 'The War Dogs product page at checkout lists current modules and compatibility. cheatwardogs.net summarizes navigation only.',
      },
      {
        num: '02',
        q: 'What happens after I buy?',
        a: 'Checkout and the seller provide digital delivery instructions—portal download, keys, or Discord onboarding per their email.',
      },
      {
        num: '03',
        q: 'Can I get banned using War Dogs cheats?',
        a: 'Yes. Third-party tools can violate game terms and trigger anti-cheat or manual action. There is no ban-proof guarantee.',
      },
      {
        num: '04',
        q: 'Which platform is supported?',
        a: 'Confirm supported Windows builds on the seller listing. This site targets PC War Dogs players; consoles are out of scope here.',
      },
      {
        num: '05',
        q: 'Can I move my license?',
        a: 'Hardware moves follow seller rules—some tiers allow HWID resets through Discord or the portal.',
      },
      {
        num: '06',
        q: 'Where are tiers and utilities listed?',
        a: `Browse cheatwardogs.net${productBase} for hub pages, then verify every bullet on the live listing before checkout.`,
      },
    ],
  },
  footer: {
    tagline: 'War Dogs cheats for PC — guides on cheatwardogs.net, checkout on Zadeyo.',
    explore: 'Explore',
    exploreLinks: [
      { href: '/', label: 'Feature overview', ariaLabel: 'Features', scrollTarget: 'features' },
      { href: `${productBase}elite/`, label: 'Elite War Dogs cheats', ariaLabel: 'Elite cheats' },
      { href: productBase, label: 'All products & utilities', ariaLabel: 'Products' },
      { href: '/blog/', label: 'Read guides', ariaLabel: 'Blog' },
      { href: '/faq/', label: 'Pre-purchase FAQ', ariaLabel: 'FAQ' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About War Dogs Cheats — cheatwardogs.net',
      description:
        'Who runs cheatwardogs.net, how we publish War Dogs guides, and how checkout works with Zadeyo.',
      sections: [
        {
          heading: 'Who we are',
          paragraphs: [
            'cheatwardogs.net is a War Dogs–focused marketing and documentation site. We keep navigation, FAQ, and tier comparisons up to date so you can reach the correct Zadeyo listing quickly.',
            'We are independent of game publishers. Checkout, payment, and delivery happen on Zadeyo and the seller systems linked from your receipt.',
          ],
        },
        {
          heading: 'What we publish',
          paragraphs: [
            'Blog posts explain setup discipline, patch-day caution, and how to read product tables without over-claiming features.',
            'Forum threads summarize questions that appear across guides—always defer to Zadeyo if wording disagrees.',
          ],
        },
        {
          heading: 'Support boundaries',
          paragraphs: [
            'We answer site navigation and policy questions through Support. Loader bugs and license issues go to the seller channels referenced in your purchase.',
            'We do not guarantee rankings, undetected status, or refunds—those depend on seller policies and platform enforcement.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy | War Dogs Cheats (cheatwardogs.net)',
      description:
        'How cheatwardogs.net handles analytics, cookies, and referrals when you browse War Dogs guides.',
      sections: [
        {
          heading: 'Information we collect',
          paragraphs: [
            'We may log basic analytics (page views, device type, browser) when Google Analytics or similar tools are enabled. Checkout data is processed by Zadeyo—we do not store card numbers on cheatwardogs.net.',
            'Support requests include the email and text you send until the conversation closes.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Analytics tells us which guides break after deploys so we can fix internal links. Support mail helps answer site navigation problems.',
            'We do not sell personal data. Aggregated stats may guide which articles need refreshes after major War Dogs patches.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'Analytics cookies may be set on cheatwardogs.net. You can block cookies; some measurement features will be less accurate.',
          ],
        },
        {
          heading: 'Third-party checkout',
          paragraphs: [
            'Zadeyo hosts payments for War Dogs products. Their privacy policy governs card data, receipts, and buyer accounts once you leave cheatwardogs.net.',
          ],
        },
        {
          heading: 'Contact',
          paragraphs: [
            'Privacy questions go through the Support page. Purchase disputes follow the seller’s Terms on Zadeyo.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms | War Dogs Cheats on cheatwardogs.net',
      description:
        'Using cheatwardogs.net, linking to Zadeyo, and limitations of liability for third-party War Dogs software.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Last updated: November 2026. By using cheatwardogs.net you accept these Terms and the Privacy Policy.',
          ],
        },
        {
          heading: 'Site role',
          paragraphs: [
            'cheatwardogs.net provides informational content and outbound links. It is not the merchant of record for War Dogs cheat software.',
            'Product execution, eligibility, and enforcement risk are between you, the seller, and applicable platform rules.',
          ],
        },
        {
          heading: 'Checkout',
          paragraphs: [
            'Purchases route to https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fwardogs (exact URL). Pricing and refunds follow Zadeyo and the seller.',
          ],
        },
        {
          heading: 'Prohibited use',
          paragraphs: [
            'Do not use this site to harass others, break laws, or attempt to compromise game services. We may block abusive traffic.',
          ],
        },
        {
          heading: 'Disclaimer',
          paragraphs: [
            'Guides are informational. Features change; we are not responsible if a module differs from the live listing.',
            'Ban risk is real—using third-party War Dogs cheats is entirely at your own discretion.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'We may update these terms. Continued use after edits constitutes acceptance.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Questions about site policies go to Support. Order-specific questions go to the seller with your receipt.',
          ],
        },
      ],
    },
    support: {
      title: 'War Dogs Cheats Support | cheatwardogs.net',
      description:
        'Help navigating cheatwardogs.net and FAQs before you open a seller ticket for War Dogs software.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Buy now',
    browseCheatsMobile: 'Start checkout',
    homeAria: 'War Dogs Cheats home',
    checkoutAria: 'Start War Dogs checkout',
    discordAria: 'Join War Dogs Cheats Discord',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
  },
};

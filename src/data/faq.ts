import type { IconName } from '../components/icons/types';
import { normalizeInternalPath, productPath, ROUTES } from '../utils/path';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'esp'
  | 'scripts'
  | 'safety'
  | 'products'
  | 'blog'
  | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function a(text: string): string {
  return text;
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

function expandFaqAnswer(answer: string, faqId: string): string {
  if (!answer.includes('{{')) return answer;
  const slots: Record<string, string> = {
    ELITE: link(`Elite tier (${faqId})`, productPath('elite')),
    LITE: link(`Lite tier (${faqId})`, productPath('lite')),
    PRO: link(`Pro tier (${faqId})`, productPath('pro')),
    PRODUCTS_HUB: link(`War Dogs product hub (${faqId})`, ROUTES.products),
    HWID: link(`HWID utility (${faqId})`, productPath('hwid-spoofer')),
    UGC: link(`UGC tools (${faqId})`, productPath('ugc')),
    SKIN: link(`Loadout preview utility (${faqId})`, productPath('unlock-all')),
    FAQ_PAGE: link(`Full FAQ (${faqId})`, ROUTES.faq),
    BLOG: link(`War Dogs guides (${faqId})`, ROUTES.blog),
    ZADEYO: `<a href="https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fwardogs">Zadeyo War Dogs checkout (${faqId})</a>`,
  };
  return Object.entries(slots).reduce(
    (text, [key, html]) => text.replaceAll(`{{${key}}}`, html),
    answer,
  );
}

function withExpandedAnswers(items: SiteFaqItem[]): SiteFaqItem[] {
  return items.map((item) => ({ ...item, a: expandFaqAnswer(item.a, item.id) }));
}

const rawSiteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Where do I confirm current War Dogs cheat status?',
    a: a('Use the seller Discord or portal notices linked from your purchase. cheatwardogs.net publishes guides only—the live listing on Zadeyo describes availability.'),
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What happens after I pay on Zadeyo?',
    a: a('Zadeyo emails a receipt and the seller provides portal, Discord, or download steps. Keep that thread for support.'),
  },
  {
    id: 'pricing',
    topic: 'plans',
    icon: 'faqComparePlans',
    q: 'How much do War Dogs cheats cost?',
    a: `Open {{ZADEYO}} for current price, duration, and plan names. This site intentionally avoids hard-coded amounts so we never disagree with checkout.`,
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Can I get banned using War Dogs cheats?',
    a: a('Yes. Third-party tools can break publisher rules and trigger anti-cheat or manual reports. No provider can honestly promise permanent safety.'),
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which platforms are supported?',
    a: a('Most listings target Windows 10/11 64-bit. Confirm exact builds on Zadeyo—console support is out of scope for cheatwardogs.net.'),
  },
  {
    id: 'license-move',
    topic: 'setup',
    icon: 'faqLicenseMove',
    q: 'Can I move access to a new PC?',
    a: a('Only if the seller allows HWID resets or device changes. Ask through their support channel with your order email.'),
  },
  {
    id: 'products-page',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Where are tiers and utilities listed?',
    a: `{{PRODUCTS_HUB}} summarizes Lite, Pro, Elite, and utilities. Every bullet should match {{ZADEYO}} before you buy.`,
  },
  {
    id: 'what-is-esp',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What is wall ESP / ESP in War Dogs cheats?',
    a: `ESP-style overlays highlight players or world info when the listing includes them. Compare tiers on {{LITE}}, {{PRO}}, and {{ELITE}} after reading Zadeyo.`,
    scopes: ['lite', 'pro', 'elite'],
  },
  {
    id: 'esp-vs-aim',
    topic: 'esp',
    icon: 'faqEspVsScripts',
    q: 'What is the difference between ESP and aim assists?',
    a: `ESP layers show information. Aim assists automate reticle movement when the seller lists those modules—often starting at {{PRO}}.`,
  },
  {
    id: 'which-tier-esp',
    topic: 'plans',
    icon: 'faqWhichTierEsp',
    q: 'Which tier is for awareness-only buyers?',
    a: `{{LITE}} is the usual shortlist for map-style information. Confirm the exact overlay list on Zadeyo before checkout.`,
    scopes: ['lite'],
  },
  {
    id: 'which-tier-aim',
    topic: 'scripts',
    icon: 'faqWhichTierScripts',
    q: 'Where do aim assists show up?',
    a: `Many builds add combat assists to {{PRO}} or {{ELITE}}. Read the comparison table on Zadeyo rather than guessing.`,
    scopes: ['pro'],
  },
  {
    id: 'rank-lite-vs-pro',
    topic: 'plans',
    icon: 'faqRankTiers',
    q: 'How do Lite, Pro, and Elite differ?',
    a: `Generally: Lite → situational overlays, Pro → adds combat assists, Elite → fullest bundle when listed. Use {{PRODUCTS_HUB}} plus {{ZADEYO}} for proof.`,
  },
  {
    id: 'stream-proof',
    topic: 'esp',
    icon: 'faqStreamProof',
    q: 'Will my stream hide overlays?',
    a: a('Depends on GPU, capture mode, and seller options. Record a test clip every driver update—never assume invisibility.'),
  },
  {
    id: 'undetected',
    topic: 'safety',
    icon: 'faqUndetected',
    q: 'Are War Dogs cheats undetected forever?',
    a: a('No. “Undetected” is a moment-in-time claim. Stop using tools immediately if status changes or updates land.'),
  },
  {
    id: 'hwid-when',
    topic: 'products',
    icon: 'faqHwidWhen',
    q: 'When would I use the HWID utility?',
    a: `Only when {{HWID}} documentation matches your case—hardware flags differ from pure account bans.`,
    scopes: ['hwid-spoofer'],
  },
  {
    id: 'ugc-what',
    topic: 'products',
    icon: 'faqUgcWhat',
    q: 'What is the UGC utility?',
    a: `{{UGC}} helps organize appeals or disputes when included. It is not a guaranteed unban service.`,
    scopes: ['ugc'],
  },
  {
    id: 'skin-changer',
    topic: 'products',
    icon: 'faqSkinChanger',
    q: 'Do loadout preview tools change server inventory?',
    a: `{{SKIN}} utilities typically affect your local client only—rivals still see your real unlock state.`,
    scopes: ['unlock-all'],
  },
  {
    id: 'external-loader',
    topic: 'products',
    icon: 'faqExternalLoader',
    q: 'How does delivery work technically?',
    a: a('Sellers document whether tools run externally, inject, or hybrid-launch. Follow their instructions—do not mix conflicting tools.'),
  },
  {
    id: 'patch-day',
    topic: 'safety',
    icon: 'faqEacUpdate',
    q: 'What should I do after a War Dogs or anti-cheat update?',
    a: a('Pause play, read seller status, redownload official builds, and retest presets before ranked queues.'),
  },
  {
    id: 'discord-help',
    topic: 'setup',
    icon: 'faqDiscordHelp',
    q: 'Where do I get install help?',
    a: a('Discord linked from your order or the seller site. Include receipt email, Windows build, and error text.'),
  },
  {
    id: 'faq-more',
    topic: 'all',
    icon: 'faqMore',
    q: 'Where is the full FAQ?',
    a: `You are reading it. For long-form guides see {{BLOG}}; for purchases continue to {{ZADEYO}} after comparing {{PRODUCTS_HUB}}.`,
  },
];

export const siteFaqs: SiteFaqItem[] = withExpandedAnswers(rawSiteFaqs);

export function getLandingFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) =>
    ['status', 'after-buy', 'ban-risk', 'platforms', 'license-move', 'products-page'].includes(f.id),
  );
}

export function getAllFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) => f.topic !== 'all');
}

export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'All topics',
  title: 'War Dogs cheats FAQ',
  subtitle: 'Plans, ESP, aim assists, utilities, setup and safety.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = ['all', 'plans', 'esp', 'safety', 'products', 'blog', 'setup'];

export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'Cheat FAQ',
  title: 'War Dogs cheats questions',
  subtitle: 'Risk, tiers, and checkout — expand answers on the full FAQ page.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export function getProductFaqs(slug: string, kind: 'tier' | 'utility'): SiteFaqItem[] {
  const general = siteFaqs.filter(
    (f) => !f.scopes && ['setup', 'safety', 'plans', 'esp', 'scripts'].includes(f.topic),
  );
  const scoped = siteFaqs.filter((f) => f.scopes?.includes(slug));
  const tierCompare = siteFaqs.filter((f) => ['rank-lite-vs-pro', 'patch-day', 'undetected'].includes(f.id));

  const combined =
    kind === 'tier' ? [...scoped, ...tierCompare, ...general.slice(0, 8)] : [...scoped, ...general.slice(0, 6)];

  const seen = new Set<string>();
  return combined.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

const blogTopicFaqs: Record<string, SiteFaqItem[]> = {
  Guides: [
    {
      id: 'blog-guide-ranked',
      topic: 'blog',
      icon: 'faqBlogGuideStart',
      q: 'Are guides a substitute for the Zadeyo listing?',
      a: a('No. Guides explain process; Zadeyo lists the live module table and price.'),
    },
    {
      id: 'blog-guide-tier',
      topic: 'blog',
      icon: 'faqBlogGuideTier',
      q: 'How do I pick a tier after reading?',
      a: `Match goals to {{LITE}}, {{PRO}}, or {{ELITE}}, then confirm bullets on {{ZADEYO}}.`,
    },
  ],
  Setup: [
    {
      id: 'blog-setup-loader',
      topic: 'blog',
      icon: 'faqBlogSetupLoader',
      q: 'Where do I download software?',
      a: a('Only through the portal referenced in your order—never random links in comments.'),
    },
  ],
};

const defaultBlogFaqs: SiteFaqItem[] = [
  {
    id: 'blog-default-1',
    topic: 'blog',
    icon: 'faqBlogDefault1',
    q: 'Do articles include hidden features?',
    a: a('No hidden features—if something is not on Zadeyo, we do not promise it here.'),
  },
  {
    id: 'blog-default-2',
    topic: 'blog',
    icon: 'faqBlogDefault2',
    q: 'Need help with a guide step?',
    a: a('Reply in Discord with the article URL and your Windows build.'),
  },
];

export function getBlogFaqs(tag: string, slug: string): SiteFaqItem[] {
  const topicFaqs = blogTopicFaqs[tag] ?? [];
  const slugHints: SiteFaqItem[] = [];

  if (slug.includes('esp') || slug.includes('radar')) {
    slugHints.push({
      id: 'blog-slug-esp',
      topic: 'esp',
      icon: 'faqBlogSlugEsp',
      q: 'Which tier covers overlays in this article?',
      a: `Start with {{LITE}} for awareness-heavy setups; confirm combat assists on {{PRO}} via Zadeyo.`,
    });
  }
  if (slug.includes('aimbot') || slug.includes('aim')) {
    slugHints.push({
      id: 'blog-slug-aim',
      topic: 'scripts',
      icon: 'faqBlogSlugScripts',
      q: 'Does this article require aim modules?',
      a: `Combat assists typically appear on {{PRO}} or {{ELITE}}—verify names on {{ZADEYO}}.`,
    });
  }
  if (slug.includes('hwid') || slug.includes('ban')) {
    slugHints.push({
      id: 'blog-slug-hwid',
      topic: 'products',
      icon: 'faqBlogSlugHwid',
      q: 'Is HWID or UGC required?',
      a: `Read {{HWID}} and {{UGC}} only if your ban type matches seller documentation.`,
    });
  }

  return withExpandedAnswers([...slugHints, ...topicFaqs, ...defaultBlogFaqs].slice(0, 8));
}

export const compareRows = [
  { feature: 'Player ESP (if listed)', icon: 'comparePlayerEsp' as const, lite: true, pro: true, elite: true },
  { feature: 'World / loot ESP (if listed)', icon: 'compareWardLocator' as const, lite: true, pro: true, elite: true },
  { feature: 'Mini-radar / map aids (if listed)', icon: 'compareRadarHack' as const, lite: true, pro: true, elite: true },
  { feature: 'Stream/capture considerations', icon: 'compareStreamproof' as const, lite: true, pro: true, elite: true },
  { feature: 'Aim assists (if listed)', icon: 'compareAutoCombo' as const, lite: false, pro: true, elite: true },
  { feature: 'Smoothing / FOV tuning (if listed)', icon: 'compareSmoothAim' as const, lite: false, pro: true, elite: true },
  { feature: 'Recoil layers (if listed)', icon: 'compareAutoShieldBreak' as const, lite: false, pro: true, elite: true },
  { feature: 'Loot/automation extras (if listed)', icon: 'compareAutoFarm' as const, lite: false, pro: false, elite: true },
  { feature: 'Priority support (if listed)', icon: 'comparePriorityPatch' as const, lite: false, pro: false, elite: true },
  { feature: 'Cloud config backup (if listed)', icon: 'compareCloudBackup' as const, lite: true, pro: true, elite: true },
];

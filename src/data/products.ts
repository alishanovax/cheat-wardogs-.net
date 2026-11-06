import { t } from '../i18n';
import { checkoutForSlug, checkoutPath } from '../config/checkout';
import { PRODUCT_GALLERY_IMAGES, SITE_CHEAT_IMAGES } from '../config/siteImages';
import type { IconName } from '../components/icons/types';
import { PRODUCT_BASE } from '../config/site';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
}

export const productRelatedBlogSlugs: Record<string, string[]> = {
  lite: ['war-dogs-esp-setup', 'war-dogs-lite-vs-pro', 'war-dogs-radar', 'war-dogs-patch-day'],
  pro: ['war-dogs-aimbot-ranked', 'war-dogs-aimbot-combat', 'war-dogs-lite-vs-pro', 'war-dogs-stream-proof'],
  elite: [
    'war-dogs-elite-tier',
    'war-dogs-cheat-features',
    'war-dogs-esp-setup',
    'war-dogs-patch-day',
    'buy-war-dogs-cheats',
  ],
  'hwid-spoofer': ['war-dogs-hwid-ban', 'war-dogs-anti-cheat-troubleshooting', 'war-dogs-patch-day', 'war-dogs-external-loader'],
  ugc: ['war-dogs-anti-cheat-troubleshooting', 'war-dogs-hwid-ban', 'buy-war-dogs-cheats'],
  'unlock-all': ['war-dogs-loadouts', 'war-dogs-cheat-features', 'war-dogs-stream-proof'],
};

const productBase = PRODUCT_BASE;

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Read the listing first',
    desc: 'Open checkout for the live module table, Windows requirements, and renewal rules.',
  },
  {
    num: '02',
    title: 'Choose a tier',
    desc: 'Match Lite, Pro, or Elite to the goals you verified on the listing—avoid assuming features we do not duplicate here.',
  },
  {
    num: '03',
    title: 'Checkout and save proof',
    desc: 'Complete payment through checkout, store the receipt, and join Discord if onboarding emails instruct you to.',
  },
  {
    num: '04',
    title: 'Install and test',
    desc: 'Download only from your seller portal, test in practice, then queue live matches when status looks healthy.',
  },
];

function acquisitionFor(productName: string): ProductAcquisition {
  return {
    title: `How to get ${productName}`,
    steps: defaultAcquisitionSteps,
  };
}

const sharedGoodToKnow =
  'War Dogs and anti-cheat systems change often. Confirm module availability with the seller before every session. Overlay behavior can differ between menus, replays, and live play.';

const sharedLimitations =
  'Third-party software for War Dogs can violate publisher terms and trigger enforcement. We do not claim undetected or ban-proof status. Compatibility can change after game or OS updates without notice.';

const pcRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Windows 10 or Windows 11 (64-bit) unless the seller listing says otherwise.' },
  { icon: 'reqEpic', text: 'Current War Dogs PC client with patches installed.' },
  { icon: 'reqSettings', text: 'Administrator rights only when the seller’s guide requires them.' },
  { icon: 'reqWifi', text: 'Stable internet for portal access and updates.' },
  { icon: 'reqCpu', text: 'Hardware that meets the seller’s published minimums.' },
];

type GalleryKey = keyof typeof galleryRaw;

const galleryRaw = {
  gpAimbotEsp: {
    src: SITE_CHEAT_IMAGES[0]!.src,
    alt: SITE_CHEAT_IMAGES[0]!.alt,
    caption: 'Overlay example',
    captionDesc: 'Seller-provided War Dogs product imagery — confirm behavior on the listing.',
  },
  gpEspWallhack: {
    src: SITE_CHEAT_IMAGES[1]!.src,
    alt: SITE_CHEAT_IMAGES[1]!.alt,
    caption: 'ESP layout',
    captionDesc: 'Readable overlays depend on your settings and tier.',
  },
  gpGameplay: {
    src: SITE_CHEAT_IMAGES[2]!.src,
    alt: SITE_CHEAT_IMAGES[2]!.alt,
    caption: 'Gameplay context',
    captionDesc: 'Match UI varies by mode — test yours in practice.',
  },
  gpEspIndoor: {
    src: SITE_CHEAT_IMAGES[3]!.src,
    alt: SITE_CHEAT_IMAGES[3]!.alt,
    caption: 'Menu inspection',
    captionDesc: 'Verify each module against the listing before relying on it.',
  },
};

function slide(...keys: GalleryKey[]): ProductSlide[] {
  return keys.map((k) => {
    const item = galleryRaw[k];
    return {
      src: item.src,
      alt: item.alt,
      caption: item.caption,
      captionDesc: item.captionDesc,
    };
  });
}

const productDetailGalleryCaptions = [
  { caption: 'Updates & anti-cheat', captionDesc: 'Follow seller status after War Dogs or security updates.' },
  { caption: 'Multiplayer context', captionDesc: 'HUD layout during a live PC session.' },
  { caption: 'Fast combat', captionDesc: 'Keep overlays minimal so callouts stay readable.' },
] as const;

function productDetailGallery(): ProductSlide[] {
  return PRODUCT_GALLERY_IMAGES.map((img, i) => {
    const meta = productDetailGalleryCaptions[i] ?? productDetailGalleryCaptions[0]!;
    return {
      src: img.src,
      alt: img.alt,
      caption: meta.caption,
      captionDesc: meta.captionDesc,
    };
  });
}

function slugFromHref(href: string): string {
  const segment = href.replace(productBase, '').replace(/^\//, '').replace(/\/$/, '');
  return segment || 'wardogs';
}

const tierAbout: Record<string, ProductPage['about']> = {
  lite: [
    {
      type: 'p',
      text: 'Lite is for players who want situational awareness without stacking every combat module. Confirm exactly which ESP, radar, or information layers ship with Lite on the live listing before buying.',
    },
    { type: 'h2', text: 'Start with minimal overlays' },
    {
      type: 'p',
      text: 'Enable the smallest useful set of callouts, then expand once you can read fights. Stream or capture tests may need separate seller guidance.',
    },
  ],
  pro: [
    {
      type: 'p',
      text: 'Pro usually layers combat assists on top of Lite-style awareness. The specific aim or recoil modules must match the listing—not this paragraph.',
    },
    { type: 'h2', text: 'Pair assists with discipline' },
    {
      type: 'p',
      text: 'Aggressive profiles increase visibility to other players and automated systems. Keep backup presets and pause if status looks uncertain.',
    },
  ],
  elite: [
    {
      type: 'p',
      text: 'Elite often bundles the broadest module set plus seller perks such as priority support or expanded utilities. Slot caps or pricing are defined at checkout.',
    },
    { type: 'h2', text: 'Use the full suite carefully' },
    {
      type: 'p',
      text: 'Document every change, test outside ranked first, and lean on Discord guidance when the seller offers it.',
    },
  ],
};

const tierBodies: Record<string, ProductPage['body']> = {
  lite: [
    { type: 'h2', text: 'Typical Lite coverage' },
    {
      type: 'p',
      text: 'Expect map-style overlays such as player boxes, distance readouts, and simplified radar when the listing includes them. Lite often skips the strongest aim automation—see checkout for the current module list.',
    },
    { type: 'h2', text: 'Upgrade path' },
    {
      type: 'p',
      text: 'Need stronger assists? Compare Pro or Elite bullets on the live listing and use the same checkout URL when you are ready.',
    },
  ],
  pro: [
    { type: 'h2', text: 'Typical Pro additions' },
    {
      type: 'p',
      text: 'Pro tiers regularly add aim assists, recoil helpers, or expanded ESP channels. Cross-check names and limits against the live listing before assuming parity with other games.',
    },
    { type: 'h2', text: 'Documentation' },
    {
      type: 'p',
      text: 'Read [feature guide](/blog/war-dogs-cheat-features/) for how to parse marketing language, then return to the listing for ground truth.',
    },
  ],
  elite: [
    { type: 'h2', text: 'Why buyers pick Elite' },
    {
      type: 'p',
      text: 'Elite is for players who need the fullest bundle or seller-supported workflows. If slots are limited, the listing or Discord will say so.',
    },
    { type: 'h2', text: 'Availability' },
    {
      type: 'p',
      text: 'Pause checkout if Elite is gated—ask the seller before forcing a purchase.',
    },
  ],
};

const utilityBodies: Record<string, ProductPage['body']> = {
  'hwid-spoofer': [
    { type: 'h2', text: 'Sensitive tooling' },
    {
      type: 'p',
      text: `Use only when seller docs say it fits your situation. Pair with [UGC-style tools](${productBase}ugc/) only if both appear in your workflow.`,
    },
    { type: 'h2', text: 'Safety basics' },
    {
      type: 'p',
      text: 'Back up data, follow the portal checklist, and avoid mixing unrelated spoof utilities.',
    },
  ],
  ugc: [
    { type: 'h2', text: 'What UGC-style tools do' },
    {
      type: 'p',
      text: 'They help organize appeals or disputes when included in your purchase. They do not guarantee account recovery.',
    },
    { type: 'h2', text: 'Expectations' },
    {
      type: 'p',
      text: 'Some sanctions cannot be reversed. Document everything and follow seller timelines.',
    },
  ],
  'unlock-all': [
    { type: 'h2', text: 'Cosmetic preview scope' },
    {
      type: 'p',
      text: 'Local previews may not replicate what opponents see. Read the listing for multiplayer implications.',
    },
    { type: 'h2', text: 'Bundling' },
    {
      type: 'p',
      text: 'Elite may already include preview utilities—compare bullets before buying twice.',
    },
  ],
};

const productContent: Record<
  string,
  Pick<ProductPage, 'overview' | 'images' | 'fullFeatures' | 'goodToKnow' | 'limitations' | 'systemRequirements'>
> = {
  lite: {
    images: productDetailGallery(),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: pcRequirements,
    fullFeatures: [
      'Player ESP (if listed)',
      'Distance / name tags (if listed)',
      'World or loot overlays (if listed)',
      'Mini-radar (if listed)',
      'Stream or capture considerations (per seller)',
      'Config save/load (if listed)',
      'Patch-aware updates (per seller)',
    ],
    overview: {
      title: 'Lite: awareness-first War Dogs cheats',
      paragraphs: [
        'Shortlist Lite when you need situational overlays without assuming every combat module. Open checkout to confirm the exact bullets for this tier.',
        'Best when you prioritize minimap reads, pacing, and callouts. Re-check availability after major War Dogs patches.',
      ],
    },
  },
  pro: {
    images: productDetailGallery(),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: pcRequirements,
    fullFeatures: [
      'Everything Lite lists on the seller page (when applicable)',
      'Aim assists (if listed)',
      'Recoil or weapon layers (if listed)',
      'Hotkey macros or triggers (if listed)',
      'Additional ESP channels (if listed)',
      'Ranked-focused presets (if provided)',
      'Portal updates (per seller)',
    ],
    overview: {
      title: 'Pro: War Dogs cheats with combat assists',
      paragraphs: [
        'Pro is the common mid tier—awareness tools plus stronger assists when the listing includes them.',
        'Compare Pro vs Lite directly on the live listing; do not infer feature parity from other games.',
      ],
    },
  },
  elite: {
    images: productDetailGallery(),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: pcRequirements,
    fullFeatures: [
      'Broadest module mix (per listing)',
      'Possible automation extras (per listing)',
      'Utilities such as previews when bundled',
      'Priority updates if advertised',
      'Dedicated support channel if advertised',
      'Limited slot messaging (if applicable)',
    ],
    overview: {
      title: 'Elite: fullest War Dogs package when offered',
      paragraphs: [
        'Elite is for buyers who need every module the seller bundles, plus optional perks such as priority responses.',
        'Confirm slot availability and pricing at checkout—this site does not gate purchase.',
      ],
    },
  },
  'hwid-spoofer': {
    images: slide('gpEspIndoor', 'gpEspWallhack', 'gpGameplay'),
    goodToKnow:
      'Follow the seller checklist before altering hardware identifiers. Incorrect use can destabilize Windows—back up first.',
    limitations:
      'Not every ban or flag benefits from spoofing. Never run two competing tools. You accept all risk from system-level changes.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows 10/11 64-bit with administrator rights when instructed.' },
      { icon: 'reqRestorePoint', text: 'Ability to snapshot or back up before changes.' },
      { icon: 'reqShieldGuide', text: 'Portal documentation from your purchase.' },
      { icon: 'reqWifi', text: 'Internet for verification steps required by the seller.' },
    ],
    fullFeatures: [
      'Disk / MAC workflows (if listed)',
      'Verification scans (if listed)',
      'Restore instructions (if listed)',
      'Portal reporting (if listed)',
    ],
    overview: {
      title: 'HWID utilities for War Dogs players',
      paragraphs: [
        'Use only when documentation ties the utility to your situation.',
        'Pair with appeal tooling only if both are part of your approved workflow.',
      ],
    },
  },
  ugc: {
    images: slide('gpEspWallhack', 'gpAimbotEsp', 'gpEspIndoor').map((img, index) =>
      index === 0 ? { ...img, alt: `UGC – ${img.alt}` } : img,
    ),
    goodToKnow: 'Keep every notice, ticket ID, and screenshot the seller expects for appeals.',
    limitations: 'Outcomes depend on publishers and platforms—this is not a guaranteed unban service.',
    systemRequirements: [
      { icon: 'reqMailOrder', text: 'Order email used at checkout.' },
      { icon: 'reqShieldAccount', text: 'Account identifiers referenced in bans or holds.' },
      { icon: 'reqWifiPortal', text: 'Internet access for uploads and Discord updates.' },
    ],
    fullFeatures: [
      'Appeal templates (if listed)',
      'Case tracking (if listed)',
      'Evidence packaging (if listed)',
      'Follow-up reminders (if listed)',
    ],
    overview: {
      title: 'UGC-style appeal tooling',
      paragraphs: [
        'Organizes paperwork for restrictions when the seller lists that capability.',
        'Use HWID utilities only when the same portal recommends them.',
      ],
    },
  },
  'unlock-all': {
    images: slide('gpGameplay', 'gpEspWallhack', 'gpAimbotEsp'),
    goodToKnow:
      'Understand what is local-only versus server-visible. Streaming may need capture tests.',
    limitations:
      'May not change actual inventory. Other players generally see your real unlock state.',
    systemRequirements: pcRequirements,
    fullFeatures: [
      'Local outfit preview (if listed)',
      'Weapon wrap preview (if listed)',
      'Loadout favorites (if listed)',
      'Export or share tools (if listed)',
    ],
    overview: {
      title: 'Loadout preview utilities',
      paragraphs: [
        'Helpful when you need client-side experiments without buying every cosmetic.',
        'Bundled differently than combat tiers—read the utility listing carefully.',
      ],
    },
  },
};

function buildTierPages(): ProductPage[] {
  return t.cheats.items.map((cheat) => {
    const slug = slugFromHref(cheat.href);
    const content = productContent[slug]!;
    const displayName =
      cheat.name === 'Lite' ? 'War Dogs Lite' : cheat.name === 'Pro' ? 'War Dogs Pro' : 'War Dogs Elite';
    return {
      slug,
      kind: 'tier',
      badge: cheat.badge,
      tier: cheat.tier,
      name: cheat.name,
      title: cheat.title,
      subtitle: cheat.desc,
      desc: cheat.desc,
      features: cheat.features,
      more: cheat.more,
      variant: cheat.variant,
      buyUrl: checkoutForSlug(slug),
      images: content.images,
      overview: content.overview,
      acquisition: acquisitionFor(displayName),
      goodToKnow: content.goodToKnow,
      limitations: content.limitations,
      fullFeatures: content.fullFeatures,
      systemRequirements: content.systemRequirements,
      about: tierAbout[slug],
      body: tierBodies[slug] ?? [],
      relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
    };
  });
}

function buildUtilityPages(): ProductPage[] {
  return t.products.items.map((product) => {
    const slug = slugFromHref(product.href);
    const content = productContent[slug]!;
    return {
      slug,
      kind: 'utility',
      badge: product.badge,
      category: product.category,
      name: product.title,
      title: product.title,
      subtitle: product.subtitle,
      desc: product.desc,
      features: product.features,
      more: product.more,
      buyUrl: checkoutForSlug(slug),
      images: content.images,
      overview: content.overview,
      acquisition: acquisitionFor(product.title),
      goodToKnow: content.goodToKnow,
      limitations: content.limitations,
      fullFeatures: content.fullFeatures,
      systemRequirements: content.systemRequirements,
      body: utilityBodies[slug] ?? [],
      relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
    };
  });
}

export const productPages: ProductPage[] = [...buildTierPages(), ...buildUtilityPages()];

export const cheatPages = productPages.filter((p) => p.kind === 'tier');

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug);
}

export function getCheatPage(slug: string) {
  return cheatPages.find((p) => p.slug === slug);
}

export function getAllProductSlugs() {
  return productPages.map((p) => p.slug);
}

export function getAllCheatSlugs() {
  return cheatPages.map((p) => p.slug);
}

/** Home hero — one slide per approved War Dogs asset (four URLs total). */
export const heroSlides = slide('gpAimbotEsp', 'gpEspWallhack', 'gpGameplay', 'gpEspIndoor');

export const productHub = {
  path: productBase,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description: 'War Dogs cheat tiers and utilities — confirm modules at checkout before you pay.',
  buyUrl: checkoutPath('warDogs'),
};

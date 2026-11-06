/**
 * SSR copy for /go/war-dogs/ — mirrors the Zadeyo War Dogs listing.
 * Apply matching fields in Zadeyo admin (this repo does not deploy zadeyo.com).
 */
export const ZADEYO_WAR_DOGS_CHECKOUT_URL =
  'https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fwardogs';

export const ZADEYO_WAR_DOGS_PRODUCT_SEO = {
  title: 'War Dogs Cheats — PC product checkout via Zadeyo',
  description:
    'War Dogs cheats for PC — compare tiers on cheatwardogs.net, confirm the module list on Zadeyo, and complete checkout when status shows online.',
  h1: 'War Dogs cheats — PC software (Zadeyo checkout)',
  h2ProductDetails: 'Product details',
  h2Features: 'Features',
  h2SystemRequirements: 'System requirements',
  h2Checkout: 'Checkout and delivery',
  h2Plans: 'Plans and access',
  h2Loader: 'Loader, configs, and updates',
  h2Safety: 'Risk and status checks',
  logoAlt: 'War Dogs cheats — Zadeyo checkout',
  intro:
    'This page summarizes how checkout works for the War Dogs PC product on Zadeyo. Open the live listing for the current feature list, compatibility notes, and price before you pay.',
  sections: [
    {
      heading: 'What to verify first',
      level: 'h3' as const,
      paragraphs: [
        'Use the Zadeyo product page as the source of truth for supported modules, system requirements, and pricing. This site does not replace that listing.',
      ],
    },
    {
      heading: 'Delivery model',
      level: 'h3' as const,
      paragraphs: [
        'After payment, Zadeyo and the seller provide digital access (typically a portal or loader). Follow only the instructions included with your purchase.',
      ],
    },
  ],
  bodySections: [
    {
      id: 'checkout',
      headingKey: 'h2Checkout' as const,
      paragraphs: [
        'Payment and license delivery run on Zadeyo after you choose a plan. You receive digital access—no physical shipment.',
        'Use cheatwardogs.net for guides, FAQ, and pre-purchase questions; rely on the Zadeyo listing for definitive product scope.',
      ],
    },
    {
      id: 'plans',
      headingKey: 'h2Plans' as const,
      paragraphs: [
        'Plan length and price appear on the Zadeyo checkout screen and can change. Confirm what you are buying on that page before completing payment.',
      ],
    },
    {
      id: 'loader',
      headingKey: 'h2Loader' as const,
      paragraphs: [
        'The seller provides setup steps through their portal or documentation. Reload software after major game or anti-cheat updates, and confirm status before each session.',
      ],
    },
    {
      id: 'safety',
      headingKey: 'h2Safety' as const,
      paragraphs: [
        'Third-party tools can violate game terms and risk account action. There is no safe or ban-proof guarantee—read the FAQ and Terms before you buy.',
        'Check Discord or the seller status channel on patch days. Do not play live matches while modules show offline or misaligned.',
      ],
    },
  ],
  screenshotAlts: [
    'War Dogs cheat software interface screenshot 1',
    'War Dogs cheat software interface screenshot 2',
    'War Dogs cheat software interface screenshot 3',
  ],
} as const;

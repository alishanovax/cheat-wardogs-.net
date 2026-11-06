export type ProductPlanId = 'monthly' | 'lifetime';

export interface ProductPlan {
  id: ProductPlanId;
  label: string;
  duration: string;
  priceUsd: number;
  priceNote: string;
  popular?: boolean;
}

/**
 * Display-only USD amounts for the checkout panel (same external checkout URL for both).
 * Override with PUBLIC_MONTHLY_PRICE_USD and PUBLIC_LIFETIME_PRICE_USD at build time.
 */
const DEFAULT_MONTHLY = 35;
const DEFAULT_LIFETIME = 150;

function envUsd(key: string, fallback: number): number {
  const raw = import.meta.env[key] as string | undefined;
  if (raw == null || String(raw).trim() === '') return fallback;
  const n = Number.parseFloat(String(raw));
  return Number.isFinite(n) && n > 0 ? n : fallback;
}

const monthlyPrice = envUsd('PUBLIC_MONTHLY_PRICE_USD', DEFAULT_MONTHLY);
const lifetimePrice = envUsd('PUBLIC_LIFETIME_PRICE_USD', DEFAULT_LIFETIME);

const plans: ProductPlan[] = [
  {
    id: 'monthly',
    label: 'Monthly',
    duration: '31 days of access',
    priceUsd: monthlyPrice,
    priceNote: 'Shown for planning; final price at checkout',
  },
  {
    id: 'lifetime',
    label: 'Lifetime',
    duration: 'Unlimited access',
    priceUsd: lifetimePrice,
    priceNote: 'Confirm duration on the listing',
  },
];

export function getProductPlans(_productSlug?: string): ProductPlan[] {
  return plans;
}

export function getDefaultPlan(productSlug?: string): ProductPlan {
  const list = getProductPlans(productSlug);
  return list.find((plan) => plan.popular) ?? list[0]!;
}

export function formatPlanPrice(usd: number): string {
  if (usd <= 0) return 'See checkout';
  return Number.isInteger(usd) ? `$${usd}` : `$${usd.toFixed(2)}`;
}

/** Checkout uses a single URL; plan selection updates displayed price only. */
export function checkoutUrlWithPlan(baseUrl: string, _planId: ProductPlanId): string {
  return baseUrl;
}

import { SLUG_REDIRECTS } from './slug-redirects.mjs';
import { TEMPLATE_REDIRECTS } from './template-redirects.mjs';
import { PRODUCT_WAR_DOGS_TO_SHORT } from './product-path-redirects.mjs';

/** Single map for Astro `redirects` and Cloudflare Worker 301s (production parity). */
export const ALL_SEO_REDIRECTS = {
  ...PRODUCT_WAR_DOGS_TO_SHORT,
  ...TEMPLATE_REDIRECTS,
  ...SLUG_REDIRECTS,
};

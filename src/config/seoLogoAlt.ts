import { normalizeSeoPath } from './pageSeo';

/** Footer logo alt text matched to each route. */
const LOGO_ALT_BY_PATH: Record<string, string> = {
  '/pd/wd/': 'War Dogs — cheatwardogs.net shop logo',
  '/about/': 'War Dogs Cheats — logo',
  '/blog/': 'War Dogs guides — logo',
  '/faq/': 'FAQ — logo',
  '/forum/': 'Forum — logo',
  '/privacy/': 'Privacy — logo',
  '/support/': 'Support — logo',
  '/terms/': 'Terms — logo',
  '/pd/wd/utilities/': 'Utilities — War Dogs Cheats logo',
  '/war-dogs-cheats/': 'War Dogs Cheats logo',
};

export function footerLogoAltForPath(pathname: string): string {
  const path = normalizeSeoPath(pathname);
  return LOGO_ALT_BY_PATH[path] ?? 'War Dogs Cheats logo';
}

/** Primary Zadeyo affiliate checkout (go link + product path). */
export const WAR_DOGS_CHECKOUT_URL =
  'https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fwardogs';

export const CHECKOUT_URLS = {
  warDogs: WAR_DOGS_CHECKOUT_URL,
  skinChanger: WAR_DOGS_CHECKOUT_URL,
  hwidSpoofer: WAR_DOGS_CHECKOUT_URL,
  ugc: WAR_DOGS_CHECKOUT_URL,
};

/** Checkout paths → external product URLs (used by Node serve + Astro middleware). */
export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/war-dogs', CHECKOUT_URLS.warDogs],
  ['/go/war-dogs/', CHECKOUT_URLS.warDogs],
  ['/go/apex', CHECKOUT_URLS.warDogs],
  ['/go/apex/', CHECKOUT_URLS.warDogs],
  ['/go/skin-changer', CHECKOUT_URLS.skinChanger],
  ['/go/skin-changer/', CHECKOUT_URLS.skinChanger],
  ['/go/hwid-spoofer', CHECKOUT_URLS.hwidSpoofer],
  ['/go/hwid-spoofer/', CHECKOUT_URLS.hwidSpoofer],
  ['/go/ugc', CHECKOUT_URLS.ugc],
  ['/go/ugc/', CHECKOUT_URLS.ugc],
]);

export function resolveCheckoutPathRedirect(pathname) {
  const direct = CHECKOUT_PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(`${pathname}/`) ?? null;
  }

  return null;
}

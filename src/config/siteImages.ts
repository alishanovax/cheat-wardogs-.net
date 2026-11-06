/** Approved War Dogs media — only these remote URLs are used for cheat/product imagery site-wide. */
export interface SiteCheatImage {
  src: string;
  alt: string;
}

const WAR_DOGS_MEDIA = [
  /** Folder segment must be `...e4e797bccc2c...` (public object); `...bcc2c...` returns HTTP 400. */
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/wardogs/b15955c0-41e9-482d-a072-e4e797bccc2c/1793709821192-2d9lsa-hbs-forces-wardogs-wardogs-cheats-destroying-everyone-with-the-best-wardogs-chea.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/wardogs/b15955c0-41e9-482d-a072-e4e797bccc2c/1793709783737-r6o4o3-hbs-forces-wardogs-wardogs-cheats-destroying-everyone-with-the-best-wardogs-chea.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/wardogs/f8fb1df6-697d-4d9b-b239-91326d061bf8/1793915876659-1unvo7-mr-fitness-wardogs-cheats-are-way-too-powerful-vhfysrbttj8-1058x595-0m21s.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/wardogs/f8fb1df6-697d-4d9b-b239-91326d061bf8/1793915888555-awmn29-mr-fitness-wardogs-cheats-are-way-too-powerful-vhfysrbttj8-1058x595-0m26s.webp',
] as const;

export const SITE_CHEAT_IMAGES: SiteCheatImage[] = [
  {
    src: WAR_DOGS_MEDIA[0],
    alt: 'War Dogs PC gameplay view through weapon optics in a forest map',
  },
  {
    src: WAR_DOGS_MEDIA[1],
    alt: 'War Dogs PC combat scene with tactical HUD and zone objective',
  },
  {
    src: WAR_DOGS_MEDIA[2],
    alt: 'War Dogs PC match UI with mini-map and on-screen game stats',
  },
  {
    src: WAR_DOGS_MEDIA[3],
    alt: 'War Dogs PC gameplay with compass, radar, and kill feed visible',
  },
];

/** Product detail screenshot carousel (three slides) — uses three of the four approved assets. */
export const PRODUCT_GALLERY_IMAGES: SiteCheatImage[] = [
  SITE_CHEAT_IMAGES[0]!,
  SITE_CHEAT_IMAGES[1]!,
  SITE_CHEAT_IMAGES[2]!,
];

export const PRIMARY_CHEAT_IMAGE = SITE_CHEAT_IMAGES[0]!.src;

export function cheatImageForSlug(slug: string): string {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash + slug.charCodeAt(i) * (i + 1)) % SITE_CHEAT_IMAGES.length;
  }
  return SITE_CHEAT_IMAGES[hash]!.src;
}

export function cheatImageAltForSrc(src: string): string {
  return SITE_CHEAT_IMAGES.find((img) => img.src === src)?.alt ?? SITE_CHEAT_IMAGES[0]!.alt;
}

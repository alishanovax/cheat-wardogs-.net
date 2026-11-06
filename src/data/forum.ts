export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  sourceTitle?: string;
  sourcePath?: string;
}

export const forumCategories = [
  { name: 'General', tone: 'purple', icon: 'users' },
  { name: 'Guides & Builds', tone: 'blue', icon: 'navBlog' },
  { name: 'Patch Talk', tone: 'orange', icon: 'refresh' },
  { name: 'Community', tone: 'green', icon: 'messageCircle' },
] as const;

function guideDiscussion(input: {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryTone: ForumPost['categoryTone'];
  sourceTitle: string;
  sourcePath: string;
  upvotes: number;
  answer: string;
  detail: string;
  tip: string;
}): ForumPost {
  const { answer, detail, tip, ...post } = input;
  return {
    ...post,
    author: 'guide_team',
    age: '2 days ago',
    commentsCount: 1,
    upvotes: 14,
    flair: 'Guide Q&A',
    body: [answer, detail],
    comments: [{ author: 'guide_team', age: 'From the guide', score: 0, body: tip }],
  };
}

const additionalGuidePosts: ForumPost[] = [
  guideDiscussion({
    slug: 'war-dogs-map-awareness',
    title: 'What does map awareness include in the guides?',
    upvotes: 62,
    excerpt: 'Player info, objectives, and loot callouts when your tier lists them.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'War Dogs wall ESP setup',
    sourcePath: '/blog/war-dogs-esp-setup/',
    answer:
      'Guides refer to overlays that show players, distances, and optional world hints. Exact toggles depend on your Zadeyo listing—not every tier ships the same package.',
    detail: 'Start with fewer indicators and increase gradually so the HUD stays readable mid-fight.',
    tip: 'Screenshot your minimal layout; it helps support tickets if something resets after a patch.',
  }),
  guideDiscussion({
    slug: 'map-overlay-setup',
    title: 'How do I set up overlays for the first time?',
    upvotes: 55,
    excerpt: 'Enable basics, confirm in practice, then tune one slider at a time.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'War Dogs training tips',
    sourcePath: '/blog/war-dogs-training-tips/',
    answer:
      'Follow seller docs: launch the loader, pick a conservative preset, and verify capture/stream settings if you broadcast.',
    detail: 'Test in offline or low-stakes queues before trusting the same preset in ranked.',
    tip: 'If text overlaps, reduce distance caps before resizing fonts.',
  }),
];

export const forumPosts: ForumPost[] = [
  {
    slug: 'war-dogs-ranked-tools',
    category: 'General',
    categoryTone: 'purple',
    title: 'Can I use third-party War Dogs tools in ranked?',
    excerpt: 'Ranked modes enforce publisher rules — cheats violate terms and risk enforcement.',
    author: 'guide_team',
    age: '3 hours ago',
    commentsCount: 2,
    upvotes: 84,
    flair: 'Guide Q&A',
    sourceTitle: 'Training mode practice guide',
    sourcePath: '/blog/war-dogs-training-practice/',
    body: [
      'Practice modes help you aim; third-party software is separate and may be prohibited in ranked ladders.',
      'Read the FAQ risk section and Zadeyo disclosures before queueing with any overlay enabled.',
    ],
    comments: [
      { author: 'duo_queuer', age: '2h ago', score: 12, body: 'I treat ranked as “documentation only” until status shows green after patches.' },
      { author: 'lurker_pc', age: '1h ago', score: 6, body: 'Assume everything is reportable — overlays are obvious in replays.' },
    ],
  },
  {
    slug: 'war-dogs-practice-settings-forum',
    category: 'General',
    categoryTone: 'purple',
    title: 'Where should I test new presets safely?',
    excerpt: 'Use training or custom flows before competitive queues.',
    author: 'guide_team',
    age: '5 hours ago',
    commentsCount: 2,
    upvotes: 71,
    flair: 'Guide Q&A',
    sourceTitle: 'War Dogs cheat setup',
    sourcePath: '/blog/war-dogs-cheat-setup/',
    body: [
      'Install exactly what your order unlocks, then rehearse keybinds and graphics settings offline.',
      'Never stack experimental tweaks right before a ranked session.',
    ],
    comments: [
      { author: 'flex_laner', age: '4h ago', score: 9, body: 'I keep a “lab” profile separate from my ranked profile.' },
      { author: 'view_only', age: '3h ago', score: 4, body: 'Also verify OBS if you stream — blur isn’t automatic.' },
    ],
  },
  {
    slug: 'war-dogs-high-ground',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'How do I read vertical fights without crowding the HUD?',
    excerpt: 'Limit vertical indicators until you can process them quickly.',
    author: 'guide_team',
    age: '7 hours ago',
    commentsCount: 2,
    upvotes: 58,
    flair: 'Guide Q&A',
    sourceTitle: 'War Dogs training tips',
    sourcePath: '/blog/war-dogs-training-tips/',
    body: [
      'Focus on player boxes and one distance readout; add height hints only after those feel automatic.',
      'Replay clips to see whether your overlay obscures critical UI.',
    ],
    comments: [
      { author: 'anchor_main', age: '6h ago', score: 8, body: 'Thin lines + low opacity solved clutter for me.' },
      { author: 'scout_two', age: '5h ago', score: 5, body: 'If vertical fights choke FPS, drop particle-heavy options first.' },
    ],
  },
  {
    slug: 'after-war-dogs-patch',
    category: 'Patch Talk',
    categoryTone: 'orange',
    title: 'What should I verify after a War Dogs patch?',
    excerpt: 'Status, loader build, and preset compatibility.',
    author: 'guide_team',
    age: '10 hours ago',
    commentsCount: 2,
    upvotes: 46,
    flair: 'Guide Q&A',
    sourceTitle: 'Patch-day checklist',
    sourcePath: '/blog/war-dogs-patch-day/',
    body: [
      'Read seller announcements before launching overlays.',
      'Re-download from the portal if hashes change; avoid third-party mirrors.',
    ],
    comments: [
      { author: 'patch_watcher', age: '9h ago', score: 11, body: 'Discord #status first, ranked second.' },
      { author: 'solo_q', age: '8h ago', score: 6, body: 'I keep last-known-good presets exported before patching.' },
    ],
  },
  {
    slug: 'lite-vs-pro',
    category: 'Community',
    categoryTone: 'green',
    title: 'Lite vs Pro — how do I choose?',
    excerpt: 'Lite leans informational; Pro may bundle combat assists — confirm on Zadeyo.',
    author: 'guide_team',
    age: '14 hours ago',
    commentsCount: 1,
    upvotes: 39,
    flair: 'Guide Q&A',
    sourceTitle: 'Lite vs Pro explainer',
    sourcePath: '/blog/war-dogs-lite-vs-pro/',
    body: [
      'Shortlist Lite if you want situational awareness without extra automation.',
      'Move to Pro only when the listing explicitly includes the assists you need.',
    ],
    comments: [
      { author: 'cost_sensitive', age: '12h ago', score: 7, body: 'I screenshot Zadeyo bullets side-by-side before paying.' },
    ],
  },
  {
    slug: 'choose-war-dogs-tier',
    category: 'Community',
    categoryTone: 'green',
    title: 'What questions should I ask before checkout?',
    excerpt: 'OS build, module list, refund stance, support hours.',
    author: 'guide_team',
    age: '1 day ago',
    commentsCount: 1,
    upvotes: 33,
    flair: 'Guide Q&A',
    sourceTitle: 'How to buy War Dogs cheats',
    sourcePath: '/blog/buy-war-dogs-cheats/',
    body: [
      'Write down Windows version, GPU driver date, and antivirus stack.',
      'Ask how delivery works (portal link, Discord role, email).',
    ],
    comments: [
      { author: 'first_buyer', age: '20h ago', score: 5, body: 'Saved me from buying during downtime — seller replied with ETA.' },
    ],
  },
  {
    slug: 'war-dogs-aim-practice',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'How can I practice aim settings without a full lobby?',
    excerpt: 'Use training drills, then mirror sensitivity in the loader.',
    author: 'guide_team',
    age: '1 day ago',
    commentsCount: 2,
    upvotes: 29,
    flair: 'Guide Q&A',
    sourceTitle: 'Aim settings for ranked play',
    sourcePath: '/blog/war-dogs-aimbot-ranked/',
    body: [
      'Warm up with native training tools, then align third-party smoothing to the same sensitivity.',
      'Never copy random configs — tune gradually.',
    ],
    comments: [
      { author: 'adc_main', age: '18h ago', score: 6, body: '10 minutes training + 5 minutes overlay rehearsal works for me.' },
      { author: 'flex_pick', age: '16h ago', score: 3, body: 'If aim feels floaty, revert one notch instead of all sliders.' },
    ],
  },
  ...additionalGuidePosts,
];

export function getForumPost(slug: string): ForumPost | undefined {
  return forumPosts.find((post) => post.slug === slug);
}

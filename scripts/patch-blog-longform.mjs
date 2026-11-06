import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const p = path.join(path.dirname(fileURLToPath(import.meta.url)), '../src/data/blog/posts.ts');
let s = fs.readFileSync(p, 'utf8');

function replacePostBlock(slug, nextSlug, blockInner) {
  const slugNeedle = `    slug: '${slug}',`;
  const nextNeedle = `    slug: '${nextSlug}',`;
  const iSlug = s.indexOf(slugNeedle);
  const iNext = s.indexOf(nextNeedle, iSlug + 1);
  if (iSlug === -1 || iNext === -1) {
    throw new Error(`replacePostBlock: ${slug} -> ${nextSlug} markers not found`);
  }
  const blockStart = s.lastIndexOf('  {', iSlug);
  const blockEnd = s.lastIndexOf('  },', iNext);
  if (blockStart === -1 || blockEnd === -1 || blockEnd < blockStart) {
    throw new Error(`replacePostBlock: braces for ${slug}`);
  }
  const insertion = `  {\n${blockInner}  },\n`;
  s = s.slice(0, blockStart) + insertion + s.slice(blockEnd + 4);
}

const LAST_NEXT = '__EOF__';

function replaceLastBlock(slug, blockInner) {
  const slugNeedle = `    slug: '${slug}',`;
  const exportNeedle = 'export const blogPosts';
  const iSlug = s.indexOf(slugNeedle);
  const iExport = s.indexOf(exportNeedle);
  if (iSlug === -1 || iExport === -1) throw new Error('replaceLastBlock: markers');
  const blockStart = s.lastIndexOf('  {', iSlug);
  const blockEnd = s.lastIndexOf('  },', iExport);
  if (blockStart === -1 || blockEnd === -1) throw new Error('replaceLastBlock: braces');
  const insertion = `  {\n${blockInner}  },\n\n`;
  s = s.slice(0, blockStart) + insertion + s.slice(blockEnd + 4);
}

void LAST_NEXT;

replacePostBlock(
  'war-dogs-aimbot-ranked',
  'war-dogs-esp-setup',
  `    tag: 'Setup',
    title: 'Aim settings for ranked War Dogs play',
    slug: 'war-dogs-aimbot-ranked',
    image: cheatImageForSlug('war-dogs-aimbot-ranked'),
    desc:
      'War Dogs ranked aim settings: smooth smoothing, per-weapon profiles, and why extreme sliders spike reports more than they raise skill.',
    date: 'Jun 30, 2026',
    readTime: '8 min read',
    author: 'War Dogs Cheats',
    body: [
      {
        type: 'p',
        text:
          'If aim assistance is offered for your tier, treat seller defaults as a baseline only. Aggressive profiles do not remove ban risk and often feel worse under stress than readable [ESP](/blog/war-dogs-esp-setup/) plus clean mechanics.',
      },
      {
        type: 'h2',
        text: 'Principles that age well',
      },
      {
        type: 'ul',
        items: [
          'Change one axis at a time (smoothing, FOV, or max snap) so you can revert after a bad session.',
          'Prefer human pacing over maximum lock strength; ranked fights punish robotic flicks.',
          'Separate long-range and close-range sens inside the menu if the build allows multiple columns.',
        ],
      },
      {
        type: 'h2',
        text: 'Pair aim with awareness',
      },
      {
        type: 'p',
        text:
          'Good duels come from knowing where to pre-aim. Stack [radar](/blog/war-dogs-radar/) distance with ESP caps so you are not correcting aim and clutter at once. After [patch day](/blog/war-dogs-patch-day/), re-test aim defaults because recoil or view models can shift.',
      },
      {
        type: 'h2',
        text: 'Related reading',
      },
      {
        type: 'p',
        text:
          '[Weapon profile ideas](/blog/war-dogs-aimbot-combat/), [training tips](/blog/war-dogs-training-tips/), and [ESP readability](/blog/war-dogs-esp-setup/).',
      },
    ],
`,
);

replacePostBlock(
  'war-dogs-esp-setup',
  'war-dogs-radar',
  `    tag: 'Setup',
    title: 'War Dogs wall ESP: readability and clutter',
    slug: 'war-dogs-esp-setup',
    image: cheatImageForSlug('war-dogs-esp-setup'),
    desc:
      'War Dogs ESP setup: distance caps, skeleton vs box, team colors, and clutter control so walls stay readable in chaotic fights.',
    date: 'Jun 12, 2026',
    readTime: '8 min read',
    author: 'War Dogs Cheats',
    body: [
      {
        type: 'p',
        text:
          'ESP is only useful when you can parse it in half a second. Start with fewer labels than you want; add loot, gadgets, or tracers only after core player indicators feel automatic. Always match what the [live listing](/go/war-dogs/) says is included.',
      },
      {
        type: 'h2',
        text: 'Distance and density',
      },
      {
        type: 'ul',
        items: [
          'Lower distance caps until boxes stay readable; raise gradually for open maps.',
          'Use thin lines or skeleton mode if the build offers both; thick boxes stack faster in vertical fights.',
          'Turn off optional labels (loot, gadgets) until you stop staring at the HUD.',
        ],
      },
      {
        type: 'h2',
        text: 'Color and teams',
      },
      {
        type: 'p',
        text:
          'Use distinct team colors and test on night maps. If friendlies look like enemies, fix filters before you enable more combat layers.',
      },
      {
        type: 'h2',
        text: 'Pair with radar',
      },
      {
        type: 'p',
        text:
          'Pair with [radar overview](/blog/war-dogs-radar/) if your tier includes map-style aids; align max distance so ESP and radar agree.',
      },
    ],
`,
);

replacePostBlock(
  'war-dogs-loadouts',
  'war-dogs-patch-day',
  `    tag: 'Guides',
    title: 'Loadout preview tools and cosmetic clients',
    slug: 'war-dogs-loadouts',
    image: cheatImageForSlug('war-dogs-loadouts'),
    desc:
      'War Dogs loadout preview and cosmetic utilities: local client display, server truth, and when unlock or preview tools appear on the listing.',
    date: 'May 6, 2026',
    readTime: '8 min read',
    author: 'War Dogs Cheats',
    body: [
      {
        type: 'p',
        text:
          'Some utilities only change how your client renders weapons or cosmetics. Other players and the server may still see default items. Multiplayer fairness rules still apply. Read the [feature list](/blog/war-dogs-cheat-features/) line by line; if unlock is not printed, do not assume it.',
      },
      {
        type: 'h2',
        text: 'Questions before enabling',
      },
      {
        type: 'ul',
        items: [
          'Does the tool require offline-only use or is it documented for live servers?',
          'Does the seller label stream or capture behavior? Pair with [stream checks](/blog/war-dogs-stream-proof/).',
          'Will this conflict with your loader after [patch day](/blog/war-dogs-patch-day/)?',
        ],
      },
      {
        type: 'h2',
        text: 'Product links',
      },
      {
        type: 'p',
        text: 'When listed: [loadout preview / unlock-all product](/pd/wd/unlock-all/).',
      },
    ],
`,
);

replacePostBlock(
  'war-dogs-patch-day',
  'war-dogs-hwid-ban',
  `    tag: 'Updates',
    title: 'Patch day checklist for War Dogs cheat users',
    slug: 'war-dogs-patch-day',
    image: cheatImageForSlug('war-dogs-patch-day'),
    desc:
      'After a War Dogs or anti-cheat update: check seller status, download only from your portal, delay ranked until compatibility is explicit.',
    date: 'Apr 18, 2026',
    readTime: '9 min read',
    author: 'War Dogs Cheats',
    body: [
      {
        type: 'p',
        text:
          'Game and anti-cheat updates can invalidate offsets, break loaders, or change detection. The first hours after a patch are the highest-risk window for bans and crashes. Assume it worked yesterday is false until the seller posts an explicit status for your license and Windows build.',
      },
      {
        type: 'h2',
        text: 'Do this in order',
      },
      {
        type: 'ul',
        items: [
          'Read Discord or the seller status channel, not random forum fixes.',
          'Download the latest build from your portal only; never mirrors or chat attachments.',
          'Delay ranked queues until compatibility is confirmed for your tier.',
          'Export or screenshot your last known-good config before updating.',
        ],
      },
      {
        type: 'h2',
        text: 'If you already launched and something fails',
      },
      {
        type: 'p',
        text:
          'Stop stacking random fixes. Note the exact error, capture a screenshot, and open one ticket with the seller. For generic verification errors, start with [anti-cheat troubleshooting](/blog/war-dogs-anti-cheat-troubleshooting/).',
      },
      {
        type: 'h2',
        text: 'After status is green',
      },
      {
        type: 'p',
        text:
          'Re-validate [ESP](/blog/war-dogs-esp-setup/) and [radar](/blog/war-dogs-radar/) distances before ranked; APIs can shift slightly even when the loader runs.',
      },
    ],
`,
);

replacePostBlock(
  'war-dogs-hwid-ban',
  'buy-war-dogs-cheats',
  `    tag: 'Guides',
    title: 'Hardware flags and new accounts: high-level paths',
    slug: 'war-dogs-hwid-ban',
    image: cheatImageForSlug('war-dogs-hwid-ban'),
    desc:
      'War Dogs HWID flags and appeals: when hardware identity tooling appears on the listing, risks, and why it is never a guaranteed unban.',
    date: 'Mar 29, 2026',
    readTime: '9 min read',
    author: 'War Dogs Cheats',
    body: [
      {
        type: 'p',
        text:
          'Hardware identity tools belong in documented seller workflows only. Anti-cheat vendors update detection continuously; anything that tampers with identity or boot data can brick boot order if done blindly. Not every ban is reversible; appeals depend on publisher policy, not forum confidence.',
      },
      {
        type: 'h2',
        text: 'Before you consider tooling',
      },
      {
        type: 'ul',
        items: [
          'Read the current [seller listing](/go/war-dogs/); if HWID or appeal utilities are not listed, stop.',
          'Pair only with seller-written steps; do not mix three tutorials in one afternoon.',
          'Understand permanent platform bans may ignore hardware workarounds entirely.',
        ],
      },
      {
        type: 'h2',
        text: 'Related products on cheatwardogs.net',
      },
      {
        type: 'p',
        text:
          'When the listing documents them: [HWID utility](/pd/wd/hwid-spoofer/) and [UGC / appeal utilities](/pd/wd/ugc/).',
      },
    ],
`,
);

replacePostBlock(
  'war-dogs-aimbot-combat',
  'war-dogs-anti-cheat-troubleshooting',
  `    tag: 'Setup',
    title: 'Weapon profiles and aim tuning (general)',
    slug: 'war-dogs-aimbot-combat',
    image: cheatImageForSlug('war-dogs-aimbot-combat'),
    desc:
      'War Dogs weapon profiles: split rifles, SMGs, and CQB, tune recoil before max snap, and avoid pasted configs from strangers.',
    date: 'Feb 17, 2026',
    readTime: '8 min read',
    author: 'War Dogs Cheats',
    body: [
      {
        type: 'p',
        text:
          'Separate profiles for rifles, SMGs, and close-range weapons so sliders stop fighting each other. Match recommendations to whatever knobs exist in your build; names differ and the listing is authoritative.',
      },
      {
        type: 'h2',
        text: 'Per-class baseline',
      },
      {
        type: 'ul',
        items: [
          'Rifles: prioritize vertical recoil control smoothing over horizontal twitch assists.',
          'SMGs: shorter engagement distance; lower FOV assists if you tunnel vision corners.',
          'Shotguns or pistols: keep a separate hipfire column when the menu exposes it.',
        ],
      },
      {
        type: 'h2',
        text: 'Iteration loop',
      },
      {
        type: 'p',
        text:
          'Tune in [training](/blog/war-dogs-training-practice/) before [ranked aim settings](/blog/war-dogs-aimbot-ranked/). Export the profile string after each good session so you can roll back one step.',
      },
    ],
`,
);

replacePostBlock(
  'war-dogs-anti-cheat-troubleshooting',
  'war-dogs-external-loader',
  `    tag: 'Troubleshooting',
    title: 'Anti-cheat errors and verification failures',
    slug: 'war-dogs-anti-cheat-troubleshooting',
    image: cheatImageForSlug('war-dogs-anti-cheat-troubleshooting'),
    desc:
      'War Dogs anti-cheat errors on PC: verify game files, drivers, clean boot, then seller loader support; avoid stacked random bypasses.',
    date: 'Jan 26, 2026',
    readTime: '9 min read',
    author: 'War Dogs Cheats',
    body: [
      {
        type: 'p',
        text:
          'Mixed issues come from corrupted game files, GPU drivers, virtualization conflicts, or third-party tools. Stacking multiple bypass tutorials increases crash and flag risk; follow one support thread at a time.',
      },
      {
        type: 'h2',
        text: 'Baseline order',
      },
      {
        type: 'ul',
        items: [
          'Official game repair or verify integrity for the branch you play.',
          'Update or cleanly reinstall GPU and chipset drivers if the error mentions kernel or DXGI.',
          'Close overlay and capture tools temporarily to isolate conflicts.',
        ],
      },
      {
        type: 'h2',
        text: 'When to involve the seller',
      },
      {
        type: 'p',
        text:
          'Loader-specific code, injection timing, or license binding belongs in the seller portal. Bring Windows build, game version, and the exact error string. Mention whether [patch day](/blog/war-dogs-patch-day/) landed the same week.',
      },
    ],
`,
);

replacePostBlock(
  'war-dogs-external-loader',
  'war-dogs-stream-proof',
  `    tag: 'Guides',
    title: 'External loaders vs injection (conceptual)',
    slug: 'war-dogs-external-loader',
    image: cheatImageForSlug('war-dogs-external-loader'),
    desc:
      'External loaders vs injection for War Dogs: compatibility, update cadence, and why only the seller doc defines your build.',
    date: 'Dec 14, 2025',
    readTime: '8 min read',
    author: 'War Dogs Cheats',
    body: [
      {
        type: 'p',
        text:
          'Some products run as external overlays; others inject into the game process. Marketing labels blur; use the seller technical summary instead of YouTube titles.',
      },
      {
        type: 'h2',
        text: 'What to ask support',
      },
      {
        type: 'ul',
        items: [
          'Does the build require a specific Windows build or vulnerable driver list?',
          'How do updates ship after [patch day](/blog/war-dogs-patch-day/), manual download or auto?',
          'Are multiple instances or VMs blocked by license policy?',
        ],
      },
      {
        type: 'h2',
        text: 'Pair with setup',
      },
      {
        type: 'p',
        text: '[Safe setup](/blog/war-dogs-cheat-setup/) and [anti-cheat troubleshooting](/blog/war-dogs-anti-cheat-troubleshooting/) cover the human side of errors.',
      },
    ],
`,
);

replaceLastBlock(
  'war-dogs-stream-proof',
  `    tag: 'Setup',
    title: 'Stream-friendly overlay checks',
    slug: 'war-dogs-stream-proof',
    image: cheatImageForSlug('war-dogs-stream-proof'),
    desc:
      'War Dogs stream capture tests: OBS, GPU capture, and seller stream-safe labels; verify leak yourself every driver update.',
    date: 'Nov 19, 2025',
    readTime: '7 min read',
    author: 'War Dogs Cheats',
    body: [
      {
        type: 'p',
        text:
          'Capture pipelines differ: Game Capture vs Display Capture vs vendor hooks. A seller checkbox is not proof; viewers or VOD archives can still leak overlays.',
      },
      {
        type: 'h2',
        text: 'Practical checklist',
      },
      {
        type: 'ul',
        items: [
          'Record 30 to 60 seconds with OBS or your usual stack; pause and inspect frames for HUD bleed.',
          'Confirm whether the seller labels a stream safe or similar mode and what it actually disables.',
          'Never promise chat that overlays are invisible; verify after every GPU driver update.',
        ],
      },
      {
        type: 'h2',
        text: 'Related',
      },
      {
        type: 'p',
        text: '[Training tips](/blog/war-dogs-training-tips/) and [feature list](/blog/war-dogs-cheat-features/) for anything tied to capture toggles.',
      },
    ],
`,
);

fs.writeFileSync(p, s);
console.log('patched longform blocks');

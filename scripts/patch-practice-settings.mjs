import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const p = path.join(path.dirname(fileURLToPath(import.meta.url)), '../src/data/blog/posts.ts');
let s = fs.readFileSync(p, 'utf8');

const startMarker =
  "  {\n    tag: 'Guides',\n    title: 'Practice settings vs ranked War Dogs sessions',";
const endMarker =
  "  {\n    tag: 'Guides',\n    title: 'War Dogs Lite vs Pro: which tier to shortlist',";
const i0 = s.indexOf(startMarker);
const i1 = s.indexOf(endMarker);
if (i0 === -1 || i1 === -1) throw new Error('markers not found');

const replacement = `  {
    tag: 'Guides',
    title: 'Practice settings vs ranked War Dogs sessions',
    slug: 'war-dogs-practice-settings',
    image: cheatImageForSlug('war-dogs-practice-settings'),
    desc:
      'War Dogs practice vs ranked: lower pressure, different pacing, and why overlays that feel fine offline can fail under matchmaking stress.',
    date: 'Aug 22, 2026',
    readTime: '8 min read',
    author: 'War Dogs Cheats',
    body: [
      {
        type: 'p',
        text:
          'Practice environments help you learn motion, recoil, and map flow. Ranked matchmaking adds voice comms, ego stakes, and faster punishment for hesitation. Third-party tools can violate platform terms and risk sanctions in any queue — there is no "safe" guarantee.',
      },
      {
        type: 'h2',
        text: 'What practice hides',
      },
      {
        type: 'ul',
        items: [
          'Bots and casual lobbies rarely punish the same rotations or trades as a coordinated stack.',
          'You may peek slower when nothing is on the line — ranked exposes lazy crosshair placement quickly.',
          'Audio and comms load ranked with extra information your HUD does not replace.',
        ],
      },
      {
        type: 'h2',
        text: 'Before you queue',
      },
      {
        type: 'p',
        text:
          'Align presets with what you can read under pressure. If overlays feel cluttered in practice, simplify before using similar profiles online. Run one session with [training tips](/blog/war-dogs-training-tips/), then compare [Lite vs Pro](/blog/war-dogs-lite-vs-pro/) on the hub before trusting marketing names.',
      },
      {
        type: 'h2',
        text: 'Checklist for moving settings across modes',
      },
      {
        type: 'ul',
        items: [
          'Cap [ESP distance](/blog/war-dogs-esp-setup/) for busy sites — ranked vertical fights clutter faster than flat drills.',
          'Match [radar FOV](/blog/war-dogs-radar/) to the ranges you actually take fights, not infinite scan width.',
          'After [patch day](/blog/war-dogs-patch-day/), re-validate in practice before ranked even if status says "compatible."',
        ],
      },
    ],
  },
`;

s = s.slice(0, i0) + replacement + s.slice(i1);
fs.writeFileSync(p, s);
console.log('patched war-dogs-practice-settings');

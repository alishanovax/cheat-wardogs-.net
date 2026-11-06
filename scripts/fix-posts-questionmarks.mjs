import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const p = path.join(path.dirname(fileURLToPath(import.meta.url)), '../src/data/blog/posts.ts');
let s = fs.readFileSync(p, 'utf8');

const UQ = '\u201c';
const UQ2 = '\u201d';

const reps = [
  [/says \?compatible,\?/g, `says ${UQ}compatible${UQ2}`],
  [/\?safe\?/g, `${UQ}safe${UQ2}`],
  [/\?Lite\?/g, `${UQ}Lite${UQ2}`],
  [/\?Pro\?/g, `${UQ}Pro${UQ2}`],
  [/\?priority\?/g, `${UQ}priority${UQ2}`],
  [/yesterday\?s/g, "yesterday's"],
  [/from Lite \? Pro/g, 'from Lite to Pro'],
  [/\? copy-paste/g, ' — copy-paste'],
  [/builds \? every/g, 'builds — every'],
  [/industry-wide \? only/g, 'industry-wide — only'],
  [/tiers \? read/g, 'tiers — read'],
  [/\[Checkout\].*?\? /g, (m) => m.replace(' ? ', ' — ')], // fallback
  [/\(\/pd\/wd\/\) \? \[/g, '(/pd/wd/) — ['],
];

for (const [a, b] of reps) s = s.replace(a, b);

// Remaining " ? " that are clearly mojibake em dashes (not "? " at end of questions)
s = s.replace(/ \? (?=fewer|the seller|only the|not yesterday|means business|true 24)/g, ' — ');

fs.writeFileSync(p, s);
console.log('fixed question-mark artifacts in', p);

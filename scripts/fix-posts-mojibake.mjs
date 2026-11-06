import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const p = path.join(__dirname, '../src/data/blog/posts.ts');
let s = fs.readFileSync(p, 'utf8');

const reps = [
  [/ \? /g, ' — '],
  [/\?good in firing range\?/g, '\u201cgood in firing range\u201d'],
  [/\?safe in ranked\.\?/g, '\u201csafe in ranked.\u201d'],
  [/\?strength\.\?/g, '\u201cstrength.\u201d'],
  [/\?max\?/g, '\u201cmax\u201d'],
  [/\?compatible\?/g, '\u201ccompatible\u201d'],
  [/\?legit\?/g, '\u201clegit\u201d'],
  [/last month\?s/g, "last month's"],
  [/\(5\?10 min\)/g, '(5–10 min)'],
  [/\(10\?15 min\)/g, '(10–15 min)'],
  [/\?game boosters,\?/g, '\u201cgame boosters,\u201d'],
  [/listing \? line/g, 'listing — line'],
  [/documented \? see/g, 'documented — see'],
  [/War Dogs \? note/g, 'War Dogs — note'],
  [/packages \? never/g, 'packages — never'],
  [/time \? screenshots/g, 'time — screenshots'],
];

for (const [a, b] of reps) s = s.replace(a, b);

// Fix wrong internal link: Lite vs Pro should not point at elite-tier
s = s.replace(
  /Read \[Lite vs Pro\]\(\/blog\/war-dogs-elite-tier\/\) when Elite bundles extras/g,
  'Read [Lite vs Pro](/blog/war-dogs-lite-vs-pro/) and [Elite tier](/blog/war-dogs-elite-tier/) when comparing bundles',
);

// Remove accidental markdown bold in plain blog strings (renderer may not parse **)
s = s.replace(/\*\*current\*\*/g, 'current');
s = s.replace(/\*\*limits\*\*/g, 'limits');

fs.writeFileSync(p, s);
console.log('patched', p);

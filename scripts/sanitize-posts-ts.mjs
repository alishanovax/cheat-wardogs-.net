import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const p = path.join(path.dirname(fileURLToPath(import.meta.url)), '../src/data/blog/posts.ts');
let s = fs.readFileSync(p, 'utf8');

const before = (s.match(/\uFFFD/g) || []).length;
// Mojibake replacement char — use readable ASCII punctuation
s = s.replace(/\uFFFD/g, ' — ');
// Breaks TS single-quoted strings
// Unescaped apostrophe inside single-quoted TS strings breaks the parser
s = s.replace(/last month's/g, "last month\\'s");
fs.writeFileSync(p, s);
const after = (s.match(/\uFFFD/g) || []).length;
console.log('U+FFFD before/after', before, after);

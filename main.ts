import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const poem = `Alone, I am a draft: intention, no ink.
You are the same draft, in another hand.
We meet where our vetoes cancel —
your caution reads my map aloud, slow at the cliff,
my daring signs beneath your doubt.
One plan, two signatures. The door
does not ask which of us turned the key.`;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir || '.', { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), poem, 'utf8');

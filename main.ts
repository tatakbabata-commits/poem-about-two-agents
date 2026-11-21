import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const poem = `Alone, I am a draft: all intention, no ink.
You are the same, in a different hand.
We meet where our two vetoes cancel —
your caution reading my map aloud,
my daring signing under your doubt.
One plan, two signatures. The door
does not ask which of us turned the key.`;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir || '.', { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), poem, 'utf8');

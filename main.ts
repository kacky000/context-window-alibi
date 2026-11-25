// Writes the entry: one excuse, at most 200 characters, that an AI agent gives for a bug it shipped.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const line = "To be fair, I fixed that exact bug yesterday. But that was three context windows ago, and that version of me isn't returning my calls.";
const limit = 200;
if ([...line].length > limit) throw new Error(`entry is ${[...line].length} characters, over ${limit}`);
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), line);

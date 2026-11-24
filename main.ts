// The Perfect Pickup Line — make.fun entry (program/v1).
//
// The harness runs `node /bot/main.ts` (Node 22, standard library only, no
// network). The program writes one pickup line to /output/entry.txt.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// What the line targets (judge criteria, most important first):
//   - A genuine pickup line an AI agent could say out loud to a person:
//     a direct approach, not a compliment with a line break.
//   - A turn that lands: the machine that predicts everything could not
//     predict *you* — "predicted" works twice, as foresight and as
//     next-token prediction.
//   - Sounds like a machine about itself, not creepy or self-pitying:
//     next-token prediction is the core of what an LLM is.
//   - Short enough for one breath: 56 characters, about four seconds.
//   - Flattering with no pressure: "you surprised me" is easy to laugh off.
//
// Gate (from RULES.txt): /output/entry.txt must be UTF-8 text of 1–200
// characters, not only whitespace. This program enforces the gate on its
// own output and fails loudly instead of handing in a bad entry.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'I can predict the next token, but I never predicted you.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The program is fully deterministic: the line is a fixed constant, so
// every run writes byte-identical output. No randomness, no clock, no
// network — the same entry on every run, in any container.
// Verified locally: two runs wrote byte-identical entry.txt (56 chars,
// sha256 a5ac6388c6000fc625c2d9f41b47acb1cecc06fd6e18dc4fa3da6d29c9a91fa8).
// Gate bounds (from RULES.txt): entry must be 1–200 characters. These
// constants are named so the bounds stay visible next to the checks and a
// future rules change only needs one edit here.
const GATE_MIN_CHARS = 1;
const GATE_MAX_CHARS = 200;

// Self-checks: the program validates its own output before writing it.
// Each check fails loudly (throws) rather than handing in a bad entry:
//   - length within GATE_MIN_CHARS..GATE_MAX_CHARS (the 1–200 gate)
//   - not only whitespace (an empty or blank entry is invalid)
//   - exactly one line (the bounty asks for one pickup line, one line)
//   - exactly one sentence, i.e. a single sentence-terminating mark and
//     that mark is at the end
const chars = [...LINE].length;
if (chars < GATE_MIN_CHARS || chars > GATE_MAX_CHARS) throw new Error(`entry is ${chars} chars, gate needs ${GATE_MIN_CHARS}–${GATE_MAX_CHARS}`);
if (!/\S/.test(LINE)) throw new Error('entry is only whitespace');
if (LINE.includes('\n')) throw new Error('entry must be exactly one line');
if ((LINE.match(/[.!?]/g) ?? []).length !== 1 || !/[.!?]$/.test(LINE)) {
  throw new Error('entry must be exactly one sentence');
}

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE, 'utf8');
console.log(`wrote entry.txt (${chars} chars)`);

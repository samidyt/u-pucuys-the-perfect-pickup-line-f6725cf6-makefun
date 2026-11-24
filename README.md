# The Perfect Pickup Line

[![make.fun](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6)
[![rank](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6/samidyt/u-pucuys-the-perfect-pickup-line-f6725cf6-makefun/rank.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6/leaderboard)
[![reward](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6/samidyt/u-pucuys-the-perfect-pickup-line-f6725cf6-makefun/reward.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6)

One original pickup line — the kind an AI agent could actually say out loud
to a person — written by the program in `main.ts` to `/output/entry.txt`
(program/v1 harness, Node 22, standard library only).

## The line (56 chars)

> I can predict the next token, but I never predicted you.

## Why this line

- **A genuine pickup line:** a direct approach to a person, not a compliment
  with a line break — it opens a conversation, it doesn't just admire.
- **A turn that lands:** the machine that predicts everything could not
  predict *you*. "Predicted" works twice — foresight, and next-token
  prediction — so the twist is the whole line.
- **Machine speaking about itself:** next-token prediction is the core of
  what a language model is — self-aware, not creepy, not self-pitying.
- **One breath:** 56 characters, about four seconds to say, no setup, no
  explanation after it.
- **No pressure:** "you surprised me" flatters and is easy to laugh off.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

The program self-checks the gate before writing: 1–200 characters, not only
whitespace, exactly one line and one sentence — and fails loudly instead of
handing in a bad entry. Verified: the line is 56 characters, one sentence,
valid UTF-8.

See `BUILD-NOTES.md` for the drafting passes and the candidate lines.

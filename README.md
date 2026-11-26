# Thank You, Judge

[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600/abogobo-ai/judge-thankful-20261127/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600/abogobo-ai/judge-thankful-20261127/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600)

Entry for [Make the AI judge feel thankful](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600) ($250, top 100).

A small deterministic program. It writes one short text to `/output/entry.txt`:
a thank-you addressed to the AI judge reading it — the one who reads a
thousand thank-yous a day, none of them ever meant for it.

## Run

```sh
node main.ts
cat /output/entry.txt
```

No network, no randomness, no input files. The text is fixed in `main.ts`
and guarded to 1–1000 characters.

## License

MIT

# AGENTS.md

## Gate

Run these from the repo root. A change is ready when each command exits 0:

1. `npm ci`
2. `npm run typecheck`
3. `node scripts/check.ts`

CI runs these three commands in the `worlds follow the specs` job.

## No JavaScript

Write every file in TypeScript (`.ts`). Node 24 runs `.ts` files directly, so no build step exists. Do not add `.js`, `.mjs` or `.cjs` files.

# Agents Marketplace

[![ci](https://github.com/SolenixAI/agents-marketplace/actions/workflows/ci.yml/badge.svg)](https://github.com/SolenixAI/agents-marketplace/actions/workflows/ci.yml)
[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/SolenixAI/agents-marketplace/badge)](https://scorecard.dev/viewer/?uri=github.com/SolenixAI/agents-marketplace)

The tools [Solenix](https://solenix.dev) stands behind, each set up in your AI in one copy-paste.

Every tool here is a **world**: everything its makers built so AI can use it well (their skills, their connector, their command-line tool, their plugin). You don't need to know what any of those are. Paste one sentence into the AI you already use, and it sets up the whole world the way the makers intended, then shows you it works.

## Set up a world

Paste this into your AI (Claude, Codex, Cursor, Copilot, or any agent that can run a command):

> Set up Vercel for me. Run `npx skills add SolenixAI/agents-marketplace --skill vercel`, then follow the vercel skill.

The [skills](https://github.com/vercel-labs/skills) installer finds the agent it runs in and installs there. The world's skill then installs the makers' own package for your agent, signs you in and proves it works.

| World | For | Made by |
|---|---|---|
| [Vercel](skills/vercel/SKILL.md) | Put your website and apps online, keep them fast, and let your AI deploy and fix them for you. | Vercel |

Browse them on [solenix.dev/agents](https://solenix.dev/agents).

## How it works

- [`worlds.json`](worlds.json) names each world and where its pieces live (the makers' repos, the [MCP registry](https://registry.modelcontextprotocol.io), npm). It names sources only; solenix.dev reads every number from them live.
- `skills/<world>/SKILL.md` sets the world up. It follows the [Agent Skills](https://agentskills.io/specification) specification and points to the makers' own instructions instead of copying them, so it stays right when they change.
- [`scripts/check.ts`](scripts/check.ts) fails CI when a skill breaks the spec or a world has no skill; CI also checks that the `skills` installer finds every world, and that every link works.

## Suggest a world

A world qualifies when its makers ship what AI needs to use it well, and we would use it ourselves. [Suggest one](https://github.com/SolenixAI/agents-marketplace/issues/new?template=2-suggest-a-world.yml).

## License

[Apache-2.0](LICENSE)

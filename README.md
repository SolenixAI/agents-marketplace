# Agents Marketplace

[![ci](https://github.com/SolenixAI/agents-marketplace/actions/workflows/ci.yml/badge.svg)](https://github.com/SolenixAI/agents-marketplace/actions/workflows/ci.yml)
[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/SolenixAI/agents-marketplace/badge)](https://scorecard.dev/viewer/?uri=github.com/SolenixAI/agents-marketplace)

The tools [Solenix](https://solenix.dev) stands behind, each set up in your AI in one copy-paste.

It has two parts, and each sets up with one sentence pasted into any AI agent. You don't need to know what a skill, connector or CLI is.

## Core toolkit

The tools every AI needs to succeed.

> Set up the Solenix core toolkit for me. Run `npx skills add SolenixAI/agents-marketplace --skill toolkit`, then follow the toolkit skill.

| Tool | For | Made by |
|---|---|---|
| [Skills](https://skills.sh) | Your AI finds and installs the right skill for anything you ask, from the open skills ecosystem. | Vercel Labs |

## Worlds

A tool's whole world: everything its makers built so AI can use it well (their skills, connector, command-line tool, plugin), set up the way they intended, then proven to work.

> Set up Vercel for me. Run `npx skills add SolenixAI/agents-marketplace --skill vercel`, then follow the vercel skill.

| World | For | Made by |
|---|---|---|
| [Vercel](skills/vercel/SKILL.md) | Put your website and apps online, keep them fast, and let your AI deploy and fix them for you. | Vercel |

The [skills](https://github.com/vercel-labs/skills) installer finds the agent it runs in and installs there. Browse everything on [solenix.dev/agents](https://solenix.dev/agents).

## How it works

- [`worlds.json`](worlds.json) lists the toolkit and the worlds, and where each piece lives (the makers' repos, the [MCP registry](https://registry.modelcontextprotocol.io), npm). It names sources only; solenix.dev reads every number from them live.
- `skills/toolkit/SKILL.md` sets up every toolkit tool listed in `worlds.json`; `skills/<world>/SKILL.md` sets a world up. Each follows the [Agent Skills](https://agentskills.io/specification) specification and points to the makers' own instructions instead of copying them, so it stays right when they change.
- [`scripts/check.ts`](scripts/check.ts) fails CI when a skill breaks the spec or a world has no skill; CI also checks that the `skills` installer finds every world, and that every link works.

## Suggest a world

A world qualifies when its makers ship what AI needs to use it well, and we would use it ourselves. [Suggest one](https://github.com/SolenixAI/agents-marketplace/issues/new?template=2-suggest-a-world.yml).

## License

[Apache-2.0](LICENSE)

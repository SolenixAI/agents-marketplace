# Agents Marketplace

[![ci](https://github.com/SolenixAI/agents-marketplace/actions/workflows/ci.yml/badge.svg)](https://github.com/SolenixAI/agents-marketplace/actions/workflows/ci.yml)
[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/SolenixAI/agents-marketplace/badge)](https://scorecard.dev/viewer/?uri=github.com/SolenixAI/agents-marketplace)

Hand-picked tools for AI agents from [SolenixAI](https://solenix.dev): our own, plus the best of open source.

Each tool installs into your agent with **one line**, and one line removes it. No installer, no background process, nothing left behind.

> **Status:** v0 — the marketplace works and is empty. The first tools are on the way.

## Add the marketplace

| Agent | Add | Remove |
|---|---|---|
| [Claude Code](https://code.claude.com/docs/en/plugin-marketplaces) | `/plugin marketplace add SolenixAI/agents-marketplace` | `/plugin marketplace remove solenix` |
| [Codex](https://developers.openai.com/plugins/build/plugins) | `codex plugin marketplace add SolenixAI/agents-marketplace` | `codex plugin marketplace remove solenix` |
| [Cursor](https://cursor.com/docs/plugins) | Add this repo as a plugin marketplace | Remove it from the same list |

The Claude Code commands also work outside a session, as `claude plugin marketplace add|remove …`.

Using another MCP client? Each tool's entry lists the matching [`npx skills`](https://github.com/vercel-labs/skills) or [`npx add-mcp`](https://add-mcp.com/docs) line.

## What's inside

[`catalog.json`](catalog.json) is the single list of tools. Everything else reads from it: the plugin manifests for [Claude Code](.claude-plugin/marketplace.json), [Codex](.agents/plugins/marketplace.json) and [Cursor](.cursor-plugin/marketplace.json), and the page at [solenix.dev/agents](https://solenix.dev/agents).

Each entry follows [`catalog.schema.json`](catalog.schema.json):

```json
{
  "name": "example-tool",
  "by": "curated",
  "kind": "mcp",
  "repo": "https://github.com/owner/example-tool",
  "description": "What it does, in one sentence.",
  "license": "MIT",
  "install": { "mcp": "npx add-mcp https://example.com/mcp" }
}
```

`by` is `solenix` for tools we build and `curated` for other people's open-source tools we recommend.

## Suggest a tool

Open an issue with the tool's name, repo, what it does, and why it's good. We only list open-source tools that install and uninstall cleanly.

## License

The code is open source under the [Apache License 2.0](LICENSE). Curated tools keep their own licenses.

The SolenixAI name and logo are **not** covered by the license. Please don't use them to suggest your project is made or endorsed by SolenixAI.

## Contributing

See the [contributing guide](https://github.com/SolenixAI/.github/blob/main/CONTRIBUTING.md). Report security problems privately: see the [security policy](https://github.com/SolenixAI/.github/blob/main/SECURITY.md).

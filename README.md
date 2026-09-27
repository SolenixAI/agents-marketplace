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

The Claude Code commands also work outside a session, as `claude plugin marketplace add|remove …`.

## What's inside

[`.agents/plugins/marketplace.json`](.agents/plugins/marketplace.json) is the one list of tools, in the open [Agent Plugins](https://agent-plugins.org/specification) format. `.claude-plugin/marketplace.json` is a symlink to it, and [solenix.dev/agents](https://solenix.dev/agents) renders it.

Each entry points at a plugin that already exists, usually the vendor's own:

```json
{
  "name": "example-tool",
  "description": "What it does, in one sentence.",
  "source": { "source": "url", "url": "https://github.com/owner/example-plugin.git" },
  "policy": { "installation": "AVAILABLE", "authentication": "ON_INSTALL" },
  "category": "Development"
}
```

Use `"source": "git-subdir"` with a `path` when the plugin sits in a subfolder of the repo. Adding a tool means adding one entry.

## Suggest a tool

Open an issue with the tool's name, its plugin repo, what it does, and why it's good.

## License

The code is open source under the [Apache License 2.0](LICENSE). Curated tools keep their own licenses.

The SolenixAI name and logo are **not** covered by the license. Please don't use them to suggest your project is made or endorsed by SolenixAI.

## Contributing

See the [contributing guide](https://github.com/SolenixAI/.github/blob/main/CONTRIBUTING.md). Report security problems privately: see the [security policy](https://github.com/SolenixAI/.github/blob/main/SECURITY.md).

# Set up the Solenix toolkit

You are an agent. Your human wants the Solenix toolkit installed and working in this environment. Follow these steps in order. Do not skip the checks.

The toolkit is every plugin in [`.agents/plugins/marketplace.json`](.agents/plugins/marketplace.json) (the `solenix` marketplace). Read that file for the current list. Do not rely on a list anywhere else.

## 1. Install

Find which of these CLIs exist (`command -v claude codex`) and run the matching line. Each line adds the marketplace, then installs every plugin in it.

**Claude Code / Claude Desktop**

```sh
claude plugin marketplace add SolenixAI/agents-marketplace && curl -fsSL https://raw.githubusercontent.com/SolenixAI/agents-marketplace/main/.agents/plugins/marketplace.json | jq -r '.plugins[].name' | xargs -I{} claude plugin install {}@solenix
```

**Codex / ChatGPT app**

```sh
codex plugin marketplace add SolenixAI/agents-marketplace && curl -fsSL https://raw.githubusercontent.com/SolenixAI/agents-marketplace/main/.agents/plugins/marketplace.json | jq -r '.plugins[].name' | xargs -I{} codex plugin add {}@solenix
```

**Any other agent:** add the marketplace `SolenixAI/agents-marketplace` with your own plugin system, then install every plugin listed in the marketplace file. If your plugin system cannot read a marketplace, install each plugin from the repo in its `source` field.

Plugins load when a session starts. Tell the human to start a new session after the install.

## 2. Remove duplicates

If a tool is already installed from somewhere else (another marketplace, a hand-added MCP server, or an app connector), it can load twice or hide the plugin. List what is installed (`claude plugin list`, `claude mcp list`, `codex plugin list`, `codex mcp list`), and ask the human before removing any duplicate.

## 3. Sign in

Most tools need the human to sign in once. You start each sign-in; the human approves it in the browser. Never ask for, read, or type a password, key, or token.

- **Claude:** for each server that `claude mcp list` shows as needing authentication, run `claude mcp login <server>` in an interactive terminal the human can see (or tell them to run `/mcp` in a session).
- **Codex:** for each server that `codex mcp list` shows without auth, run `codex mcp login <server>`.
- **App connectors:** if the app has its own connector for the same service (for example Stripe in claude.ai Settings → Connectors) and it is not connected, it hides the plugin. Ask the human to connect it or remove it.

Tools with an extra step:

- **GitHub:** the plugin reads `GITHUB_PERSONAL_ACCESS_TOKEN` from the environment. If the human uses the `gh` CLI, ask them to add `export GITHUB_PERSONAL_ACCESS_TOKEN="$(gh auth token)"` to their shell profile, then restart the app.
- **Open Design:** needs its local app running. Start it with `od --no-open` and keep it running. If `od` is missing, follow the [Open Design quickstart](https://github.com/nexu-io/open-design).
- **Stripe:** an account that is not activated works in test mode.

## 4. Prove it works

In a new session, make one read-only call with each installed plugin (for example: list teams, list projects, look up docs). Report a table to the human: tool, the call you made, OK or the exact error. Anything that fails goes back to step 3.

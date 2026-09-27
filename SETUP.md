# Solenix toolkit

**Purpose:** the tools SolenixAI agents work with, and how any agent gets each one installed and signed in.
**Value:** a human pastes one sentence into any agent, and the agent sets itself up. Nobody teaches it anything.
**Impact:** a fresh agent in Claude Desktop, the ChatGPT app or Hermes Desktop ends with every tool below working, proven by one real call each.

## You are the agent. Do this.

For each tool in the table, in order:

1. **Skip it if you already have it.** If you can already call the tool (an app connector, a plugin or an MCP server), go to step 4. Never install a second copy.
2. **Add it the first way your environment supports:**
   - **App connector:** your app has a built-in connector for it (for example Settings → Connectors in Claude, or Apps in ChatGPT). Tell the human which one to turn on.
   - **Plugin:** your harness installs plugins from a marketplace. Add ours once: `claude plugin marketplace add SolenixAI/agents-marketplace` (Codex: `codex plugin marketplace add SolenixAI/agents-marketplace`). Then install the plugin named in the table, for example `claude plugin install linear@solenix` or `codex plugin add linear@solenix`.
   - **MCP server:** add the MCP URL from the table to your MCP settings.
3. **Sign in.** Start the sign-in, and the human approves it in the browser. Never ask for, read or type a password, key or token.
4. **Prove it.** Make the proof call. If it fails, fix it and try again. If you still can't fix it, tell the human exactly what's blocking.

Plugins and MCP servers load when a session starts. If you install something, tell the human to start a new session, then finish from step 3.

At the end, report one table to the human: tool, how you added it, and the proof call's result or the exact error.

## The toolkit

| Tool | What we use it for | Plugin | MCP server | Sign in | Proof call |
|---|---|---|---|---|---|
| [Linear](https://linear.app) | Plans, issues, projects | `linear@solenix` | `https://mcp.linear.app/mcp` | OAuth | List teams |
| [GitHub](https://github.com) | Repos, pull requests, Actions | `github@solenix` | `https://api.githubcopilot.com/mcp/` | See below | Get the signed-in user |
| [Google Workspace](https://github.com/googleworkspace/cli) | Gmail, Calendar, Drive | none | none | See below | List today's calendar events |
| [Vercel](https://vercel.com) | Deploys, logs, env vars | `vercel@solenix` | `https://mcp.vercel.com` | OAuth | List teams |
| [Supabase](https://supabase.com) | Database, auth, storage | `supabase@solenix` | `https://mcp.supabase.com/mcp` | OAuth | List organizations |
| [Stripe](https://stripe.com) | Payments | `stripe@solenix` | `https://mcp.stripe.com` | OAuth (test mode is fine) | Get the balance |
| [PostHog](https://posthog.com) | Analytics, feature flags, errors | `posthog@solenix` | `https://mcp.posthog.com/mcp` | OAuth | List projects |
| [Context7](https://context7.com) | Current library docs | `context7@solenix` | `https://mcp.context7.com/mcp` | None | Resolve the library "react" |
| [Matt Pocock skills](https://github.com/mattpocock/skills) | Grilling, specs, TDD, code review | `mattpocock-skills@solenix` | none | None | Confirm the `grill-me` skill is loaded |
| [Open Design](https://open-design.ai) | Design before we build | `open-design@solenix` | local, see below | None | List projects |

### Tools with an extra step

- **GitHub:** the app's GitHub connector signs in with OAuth. The plugin and the MCP server read `GITHUB_PERSONAL_ACCESS_TOKEN` from the environment instead. If the human uses the `gh` CLI, ask them to add `export GITHUB_PERSONAL_ACCESS_TOKEN="$(gh auth token)"` to their shell profile and restart the app.
- **Google Workspace:** use the app's Gmail, Google Calendar and Google Drive connectors. If your app has none and you can run commands, install Google's CLI (`npm i -g @googleworkspace/cli`) and have the human run `gws auth login`.
- **Supabase:** our Supabase projects are created through [Vercel's Supabase integration](https://vercel.com/marketplace/supabase). Sign in to the Supabase account those projects belong to.
- **Open Design:** it runs on the human's machine. Ask the human to install the desktop app from [open-design.ai](https://open-design.ai) and keep it open. If you don't use the plugin, run `od mcp install <your agent>` (for example `claude`, `claude-desktop`, `codex` or `hermes`). If your app only accepts remote connectors, tell the human Open Design needs a desktop agent.

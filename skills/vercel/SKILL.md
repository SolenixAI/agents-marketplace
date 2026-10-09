---
name: vercel
description: Sets up the whole Vercel world in this agent, the way Vercel's own engineers built it for AI - their plugin (skills, MCP connector, agents, commands) where this agent supports plugins, otherwise their skills, the Vercel MCP server and the Vercel CLI - then signs in and proves it works. Use when someone asks to set up, install, add or connect Vercel, or to put a website or app online with Vercel.
license: Apache-2.0
metadata:
  world: vercel
  maker: Vercel
  source: https://github.com/vercel/vercel-plugin
---

# Set up the Vercel world

You are setting up Vercel for a person who may know nothing about AI tools. Do the work yourself, explain each step in one plain sentence, and ask before installing anything system-wide.

Vercel's engineers maintain the real instructions. This skill only points to them. **Read Vercel's current README first**, and when it differs from this file, follow Vercel:
https://github.com/vercel/vercel-plugin#readme

## 1. Say what will happen

Tell the person, in one sentence: "I'll set up Vercel's own toolkit for me, so I can put your sites online, manage them and fix them for you. You'll sign in to Vercel once."

## 2. Install Vercel's plugin, if this agent supports plugins

Check the "Supported Tools" table in the README above. As of this writing it lists Claude Code, Cursor, GitHub Copilot CLI, OpenAI Codex, Grok Build, Kimi Code and OpenCode.

- If you are one of them, run Vercel's one-line install from the README:
  `npx plugins add vercel/vercel-plugin`
  (OpenCode uses its native command from the README: `opencode plugin add github:vercel/vercel-plugin`.)
- The plugin needs the prerequisites the README names (today Node.js and Bun). If one is missing, ask the person before you install it.
- The plugin brings Vercel's skills, its MCP connector (`https://mcp.vercel.com`), its specialist agents and its commands. Skip step 3.

## 3. Otherwise, install the same pieces one by one

For any agent the plugin does not support:

1. **Skills** (what Vercel wrote for AI): `npx skills add vercel/vercel-plugin -y`. Run it from inside this agent, so the installer puts the skills where this agent reads them.
2. **MCP connector** (lets you act on the person's Vercel account): add the remote MCP server `https://mcp.vercel.com` to this agent's MCP settings, the way this agent's own docs describe. Vercel's guide: https://vercel.com/docs/agent-resources/vercel-mcp. The official registry entry is `com.vercel/vercel-mcp` at https://registry.modelcontextprotocol.io.
3. **CLI** (deploys and settings from the command line): ask, then `npm install -g vercel`. Docs: https://vercel.com/docs/cli.

If the person builds with Next.js, also add the Next.js team's own agent setup, as Vercel's README recommends: `npx skills add vercel/next.js`.

## 4. Sign in

- The MCP connector asks the person to sign in to Vercel in the browser the first time it is used. Ask them to grant access only to the team they mean to use.
- If the CLI was installed: `vercel login`.

Never ask for, copy or store a password or token yourself.

## 5. Prove it works

- With the MCP connector, list the person's Vercel projects (an empty list is fine for a new account).
- With the CLI, `vercel whoami` prints the account.

## 6. Tell the person what they have now

In two or three plain sentences: what you can now do for them with Vercel, and how to remove it (the plugin: the README's uninstall section; skills: `npx skills remove`).

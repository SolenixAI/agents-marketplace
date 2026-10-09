---
name: toolkit
description: Sets up the Solenix core toolkit in this agent - the tools every AI needs to succeed, starting with the open skills installer and its find-skills skill, so the agent can find and install the right skill for anything the person asks. Use when someone asks to set up the core toolkit, or to make their AI able to find and install skills.
license: Apache-2.0
metadata:
  part: toolkit
  list: https://github.com/SolenixAI/agents-marketplace/blob/main/worlds.json
---

# Set up the core toolkit

You are setting up the tools every AI needs to succeed, for a person who may know nothing about AI tools. Do the work yourself, explain each step in one plain sentence, and ask before installing anything system-wide.

The list of tools lives in one place, the `toolkit.tools` array in this repo's `worlds.json`. Read it now, so you install what is listed today:
https://raw.githubusercontent.com/SolenixAI/agents-marketplace/main/worlds.json

## 1. Say what will happen

Tell the person, in one sentence, what the toolkit will let you do for them (use each tool's `for` line).

## 2. Install each tool

For every entry in `toolkit.tools`:

- Read its maker's own instructions first (`site` and the repo in `install.repo`); when they differ from this file, follow the maker.
- Install the skills the entry names, from inside this agent so they land where this agent reads them:
  `npx skills add <install.repo> --skill <each name in install.skills> -y`

## 3. Prove it works

For each tool, show one small thing it can now do. For Skills: search for a skill the person might want, for example `npx skills find <a topic they mentioned>`, and show what comes back. Install nothing more without asking.

## 4. Tell the person what they have now

In two or three plain sentences: what you can now do for them, and how to remove it (`npx skills remove <name>`).

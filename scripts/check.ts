// Checks the marketplace against the specs it builds on, so a world can't be added wrong.
//   node scripts/check.ts
// - Every skills/<name>/SKILL.md follows the Agent Skills specification (https://agentskills.io/specification):
//   name 1-64 chars of a-z0-9 and single hyphens, equal to its folder; description 1-1024 chars.
// - Every world in worlds.json has its skill, a unique id, and https links only.
import { existsSync, readdirSync, readFileSync } from "node:fs"

type World = { id: string; name: string; maker: string; for: string; site: string; starsRepo: string; pieces: Record<string, Record<string, string>> }

const problems: string[] = []
const bad = (msg: string) => problems.push(msg)

function frontmatter(text: string): Record<string, string> {
  const m = /^---\n([\s\S]*?)\n---\n/.exec(text)
  if (!m?.[1]) return {}
  const out: Record<string, string> = {}
  for (const line of m[1].split("\n")) {
    const kv = /^([a-z-]+):\s*(.*)$/.exec(line)
    if (kv?.[1]) out[kv[1]] = (kv[2] ?? "").replace(/^["']|["']$/g, "")
  }
  return out
}

const skills = existsSync("skills") ? readdirSync("skills", { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name) : []
for (const dir of skills) {
  const file = `skills/${dir}/SKILL.md`
  if (!existsSync(file)) { bad(`${file} is missing`); continue }
  const fm = frontmatter(readFileSync(file, "utf8"))
  const name = fm.name ?? ""
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(name) || name.length > 64) bad(`${file}: name "${name}" must be 1-64 chars of a-z, 0-9 and single hyphens`)
  if (name !== dir) bad(`${file}: name "${name}" must equal its folder "${dir}"`)
  const desc = fm.description ?? ""
  if (desc.length < 1 || desc.length > 1024) bad(`${file}: description must be 1-1024 chars (it has ${desc.length})`)
}

const { worlds } = JSON.parse(readFileSync("worlds.json", "utf8")) as { worlds: World[] }
const seen = new Set<string>()
for (const w of worlds) {
  if (seen.has(w.id)) bad(`worlds.json: "${w.id}" is listed twice`)
  seen.add(w.id)
  if (!skills.includes(w.id)) bad(`worlds.json: "${w.id}" has no skills/${w.id}/SKILL.md to set it up`)
  for (const field of ["name", "maker", "for", "site", "starsRepo"] as const) if (!w[field]) bad(`worlds.json: "${w.id}" has no ${field}`)
  for (const url of JSON.stringify(w).match(/"(?:site|docs)":"([^"]+)"/g) ?? []) if (!url.includes('"https://')) bad(`worlds.json: "${w.id}" link is not https: ${url}`)
}
for (const dir of skills) if (!seen.has(dir)) bad(`skills/${dir} is not a world in worlds.json`)

for (const p of problems) console.log(`check: ${p}`)
if (problems.length) process.exit(1)
console.log(`check: ${skills.length} world skill(s) follow the Agent Skills spec; worlds.json is consistent`)

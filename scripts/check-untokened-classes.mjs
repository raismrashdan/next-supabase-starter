// Fails if raw Tailwind colour classes slip in (e.g., bg-blue-500).
// Adjust allowlist if needed.
import { readFileSync, readdirSync, statSync } from "node:fs"
import { join } from "node:path"

const roots = ["app", "components"]
const disallowed = /\b(bg|text|border|from|to|via|fill|stroke)-(black|white|slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-\d{2,3}\b/

const findings = []

function scan(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    const s = statSync(p)
    if (s.isDirectory()) scan(p)
    else if (/\.(tsx|ts|jsx|js)$/.test(name)) {
      const src = readFileSync(p, "utf8")
      if (disallowed.test(src)) {
        findings.push(p)
      }
    }
  }
}

roots.forEach((r) => scan(r))

if (findings.length) {
  console.error(
    `Found raw Tailwind colour classes in:\n${findings.map((f) => " - " + f).join("\n")}\n` +
      "Use tokenised classes (e.g., bg-primary, text-muted-foreground) instead."
  )
  process.exit(1)
}


export type Project = "heorth" | "kithledger"

export type Quarter = {
  id: string
  label: string
  range: string
}

export type Milestone = {
  project: Project
  version: string
  title: string
  start: number // 1-indexed quarter column
  end: number // exclusive
  tier: "beta" | "release" | "ga"
  description: string
  bullets: string[]
}

export type Band = {
  project: Project
  label: string
  start: number
  end: number
  note: string
}

export const QUARTERS: Quarter[] = [
  { id: "q2-2026", label: "Q2 2026", range: "Apr — Jun" },
  { id: "q3-2026", label: "Q3 2026", range: "Jul — Sep" },
  { id: "q4-2026", label: "Q4 2026", range: "Oct — Dec" },
  { id: "q1-2027", label: "Q1 2027", range: "Jan — Mar" },
  { id: "q2-2027", label: "Q2 2027", range: "Apr — Jun" },
  { id: "q3-2027", label: "Q3 2027", range: "Jul — Sep" },
]

// "today" is April 30, 2026 — roughly one third of the way through Q2 2026.
export const TODAY = {
  column: 1, // 1-indexed; Q2 2026
  pct: 0.33,
  label: "Today · Apr 2026",
}

export const BANDS: Band[] = [
  {
    project: "heorth",
    label: "Public testing & open feedback",
    start: 1,
    end: 7,
    note: "Open issues, weekly notes on the journal, contributors welcome.",
  },
  {
    project: "kithledger",
    label: "API stability commitments",
    start: 1,
    end: 7,
    note: "Versioned endpoints, deprecation windows, no surprise breaks.",
  },
]

export const MILESTONES: Milestone[] = [
  // ───────────────────────────── Heorth
  {
    project: "heorth",
    version: "0.1",
    title: "Beta launch",
    start: 2,
    end: 3,
    tier: "beta",
    description:
      "First public beta. Core hearth is in place: family, calendar, chores, meal plan, and the kitchen-wall layout. API + MCP endpoints reachable from day one.",
    bullets: [
      "Households, members, and roles",
      "Shared calendar with iCal sync",
      "Chore rotations & gentle reminders",
      "Meal plan + grocery list",
      "Self-host with Docker Compose",
    ],
  },
  {
    project: "heorth",
    version: "0.2",
    title: "Calendar & chores hardening",
    start: 3,
    end: 4,
    tier: "release",
    description:
      "Bringing the everyday surfaces to a polish good enough for daily family use, based on beta-tester logs and journal feedback.",
    bullets: [
      "Recurring events & exceptions",
      "Per-member chore weighting",
      "Reminders by email and webhook",
      "Family timezone & locale",
    ],
  },
  {
    project: "heorth",
    version: "0.3",
    title: "Pantry & meal planning",
    start: 4,
    end: 5,
    tier: "release",
    description:
      "The kitchen layer becomes a small, opinionated system: what is in the pantry, what is in the freezer, what to cook this week.",
    bullets: [
      "Pantry & freezer inventory",
      "Recipe library with portions",
      "Auto-generated grocery lists",
      "Agent-friendly meal suggestions over MCP",
    ],
  },
  {
    project: "heorth",
    version: "0.4",
    title: "Budgets & home library",
    start: 5,
    end: 6,
    tier: "release",
    description:
      "Money and books — two slow surfaces a household uses without rush. Both work offline; both export to plain text.",
    bullets: [
      "Envelope budgeting",
      "Recurring bills & subscriptions",
      "Home library (books, manuals, warranties)",
      "Annual review export",
    ],
  },
  {
    project: "heorth",
    version: "1.0",
    title: "General availability",
    start: 6,
    end: 7,
    tier: "ga",
    description:
      "Heorth becomes a stable, documented, long-term project. Public API frozen, schema migrations promised, and a hosted option for households that prefer not to run their own.",
    bullets: [
      "Frozen v1 public API",
      "Long-term support window",
      "Hosted plan (optional)",
      "Plugin SDK preview",
    ],
  },

  // ───────────────────────────── KithLedger
  {
    project: "kithledger",
    version: "0.1",
    title: "Beta launch",
    start: 2,
    end: 3,
    tier: "beta",
    description:
      "First public beta of the relationships service. REST + MCP from day one, single-binary install, SQLite by default.",
    bullets: [
      "People, groups, and threads",
      "Touchpoints & timelines",
      "REST API + OpenAPI 3.1",
      "MCP server for AI agents",
    ],
  },
  {
    project: "kithledger",
    version: "0.2",
    title: "Touchpoints & timelines",
    start: 3,
    end: 4,
    tier: "release",
    description:
      "Touchpoints become first-class: any small thing that maintains a relationship — a call, a coffee, a card — captured cleanly and queryable.",
    bullets: [
      "Touchpoint kinds & emoji-free tagging",
      "Per-relationship cadences",
      "ICS calendar of birthdays & rituals",
      "Gentle 'last met' reminders",
    ],
  },
  {
    project: "kithledger",
    version: "0.3",
    title: "MCP agent surface",
    start: 4,
    end: 5,
    tier: "release",
    description:
      "Promote the MCP server to a fully scoped, audited surface. Agents read and write the ledger with the same trust boundary as a human user.",
    bullets: [
      "Scoped tokens & per-tool capabilities",
      "Append-only audit log",
      "Reference clients for Claude & Codex",
      "Reasoning hints in OpenAPI extensions",
    ],
  },
  {
    project: "kithledger",
    version: "0.4",
    title: "gRPC & webhooks",
    start: 5,
    end: 6,
    tier: "release",
    description:
      "For tools that need streaming: a gRPC mirror of the REST API and outbound webhooks for journals, calendars, and home dashboards.",
    bullets: [
      "gRPC service definitions",
      "Outbound webhook subscriptions",
      "Bulk import from contacts",
      "CLI sync tooling",
    ],
  },
  {
    project: "kithledger",
    version: "1.0",
    title: "Federation & sync",
    start: 6,
    end: 7,
    tier: "ga",
    description:
      "KithLedger v1 stabilises and learns to talk to itself: many small private ledgers can share entries with mutual consent. Replaces ad-hoc spreadsheets between siblings, partners, and care-givers.",
    bullets: [
      "Frozen v1 public API",
      "Cross-instance shared entries",
      "Encrypted sync between households",
      "Hosted plan (optional)",
    ],
  },
]

export const BEYOND: { project: Project; items: string[] }[] = [
  {
    project: "heorth",
    items: [
      "Native iOS & Android companions",
      "Garden & seasonal planning",
      "Plugin SDK for community modules",
      "Localisation: DE, FR, ES, NB, NL",
    ],
  },
  {
    project: "kithledger",
    items: [
      "Federated address book (CardDAV)",
      "Importers for Google, Apple, ProtonMail",
      "Journal entries with encrypted attachments",
      "Public read-only profiles (opt-in)",
    ],
  },
]

export type Project = "heorth" | "kithledger" | "feoh"

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

// "today" is July 13, 2026 — early in Q3 2026.
export const TODAY = {
  column: 2, // 1-indexed; Q3 2026
  pct: 0.14,
  label: "Today · Jul 2026",
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
  {
    project: "feoh",
    label: "Heorth's finance module · scaffolding & feedback",
    start: 3,
    end: 7,
    note: "Built atop Heorth's API; no work begins until the kitchen is settled.",
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
    title: "Budgets & extended library",
    start: 5,
    end: 6,
    tier: "release",
    description:
      "Money and household memory — two slow surfaces a family uses without rush. The Heorth side keeps budgets light, expands the library into books, manuals, warranties, recipes, and receipts, and hands the deeper finance work over to Feoh, which lands the same quarter.",
    bullets: [
      "Envelope budgeting",
      "Recurring bills & subscriptions",
      "Extended library (books, manuals, warranties, recipes, receipts)",
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
      "First public beta of the relationships service. REST + MCP from day one, one-command install, PostgreSQL beneath.",
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
      "Reference clients for popular MCP-aware editors",
      "Reasoning hints in OpenAPI extensions",
    ],
  },
  {
    project: "kithledger",
    version: "0.4",
    title: "Webhooks & sync tooling",
    start: 5,
    end: 6,
    tier: "release",
    description:
      "For tools that need to react as things change: outbound webhooks for journals, calendars, and home dashboards, plus the tooling to keep contacts in sync.",
    bullets: [
      "Outbound webhook subscriptions",
      "Signed delivery & retries",
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

  // ───────────────────────────── Feoh
  {
    project: "feoh",
    version: "0.1",
    title: "Beta launch",
    start: 4,
    end: 5,
    tier: "beta",
    description:
      "First public beta of the finance module. Attaches to a running Heorth, brings double-entry under the hood, envelopes on top, and the same self-hosted promises. Ships the same quarter as Heorth's budgets layer so the two settle together.",
    bullets: [
      "Attach-to-Heorth handshake",
      "Envelopes & double-entry ledger",
      "Recurring bills & subscriptions",
      "REST API + MCP server",
      "CSV import & ledger-format export",
    ],
  },
  {
    project: "feoh",
    version: "0.2",
    title: "Shared expenses & savings",
    start: 5,
    end: 6,
    tier: "release",
    description:
      "Money between people who live together becomes its own first-class surface: joint accounts, fair splits, and savings goals that flex with the season.",
    bullets: [
      "Per-member shares & fair splits",
      "Savings goals with envelopes",
      "Joint vs. solo account scoping",
      "Reconciliation helpers",
    ],
  },
  {
    project: "feoh",
    version: "0.3",
    title: "Imports & quiet forecasting",
    start: 6,
    end: 7,
    tier: "release",
    description:
      "Bringing in the wider world without giving it a microphone: bank-statement and broker imports, plus a small, honest forecast of the months ahead.",
    bullets: [
      "Bank statement importers (CAMT.053, CSV)",
      "Honest 6-month forecast",
      "Tax-year envelope rollovers",
      "Plain-text annual review export",
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
  {
    project: "feoh",
    items: [
      "Feoh 1.0 — frozen v1 API alongside Heorth 1.0",
      "Multi-currency household books (EUR · GBP · USD)",
      "Investment & pension envelopes (read-only)",
      "Receipts: photo capture & OCR (offline)",
    ],
  },
]

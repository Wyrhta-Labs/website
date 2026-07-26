// Downstream rendering of the meta repo's strategy.md, via docs/website-brief.md
// (snapshot 2026-07-26). strategy.md is the source of truth: if this file and it
// ever disagree, this file is the one that is wrong. Do not add dates, versions,
// or features here that are not in the brief.

export type Service = "core" | "heorth" | "kithledger" | "feoh"

/** Where a phase actually stands. Deliberately not "shipped" — nothing is deployed. */
export type PhaseState =
  | "done"
  | "code-complete"
  | "next"
  | "planned"
  | "unordered"

export type Phase = {
  id: string
  n: string
  title: string
  state: PhaseState
  /** Short factual qualifier shown beside the state chip. */
  stateNote: string
  summary: string
  items: string[]
  /** The condition that closes the phase, where one is defined. */
  exit?: string
  services: Service[]
}

export type ServiceEntry = {
  id: Service
  name: string
  version: string
  visibility: "public" | "private" | "not yet public"
  role: string
  state: string
}

export const STATE_LABEL: Record<PhaseState, string> = {
  done: "Done",
  "code-complete": "Code-complete",
  next: "Next",
  planned: "Planned",
  unordered: "Unordered",
}

/** The four services, with the versions they are actually at. */
export const SERVICES: ServiceEntry[] = [
  {
    id: "core",
    name: "@wyrhta/core",
    version: "v0.1.2",
    visibility: "public",
    role: "Shared foundation: identity, auth, HTTP kit, household model, MCP scaffold, DB conventions.",
    state:
      "The only public repository. Consumed by every service as a pinned GitHub-tag dependency, so each one upgrades deliberately by bumping the pin.",
  },
  {
    id: "heorth",
    name: "Heorth",
    version: "v0.3.0",
    visibility: "not yet public",
    role: "The household hub, and the only human-facing surface for now.",
    state:
      "Phase 2 is code-complete. Awaiting a real-tenant smoke test, the kitchen hardware, and household acceptance. Not deployed.",
  },
  {
    id: "kithledger",
    name: "KithLedger",
    version: "v0.2.0",
    visibility: "not yet public",
    role: "API-first relationship manager — the people a household keeps track of.",
    state:
      "Web UI and security hardening are tagged. Service-key only; its MCP server is stdio and moves to HTTP before it deploys as a satellite.",
  },
  {
    id: "feoh",
    name: "Feoh",
    version: "v0.1.0",
    visibility: "private",
    role: "Independent personal-finance service, extracted from Heorth.",
    state:
      "Its own repo, API, MCP server, and database. Heorth's finance screens now proxy to it over a service key — the template for how every satellite gets consumed.",
  },
]

export const PHASES: Phase[] = [
  {
    id: "phase-0",
    n: "0",
    title: "Housekeeping",
    state: "done",
    stateNote: "July 2026",
    summary:
      "Clearing the desk before the interesting work: version drift fixed, the foundation library documented, and the pieces already written verified rather than assumed.",
    items: [
      "@wyrhta/core v0.1.2 — README and changelog in place, version drift resolved",
      "KithLedger v0.2.0 — web UI and security hardening tagged",
      "Heorth Library verification",
    ],
    services: ["core", "kithledger", "heorth"],
  },
  {
    id: "phase-1",
    n: "1",
    title: "The Feoh extraction",
    state: "done",
    stateNote: "July 2026",
    summary:
      "Finance left Heorth and became its own service — repo, API, MCP server, and database. Done deliberately before deployment: no data to migrate, Feoh at its smallest, and the proxy client Heorth now uses to reach it becomes the template for every satellite that follows.",
    items: [
      "Feoh v0.1.0 — independent service extracted from Heorth",
      "Heorth v0.2.0 — explicitly no functional change",
      "FeohClient — the first service-key proxy, and the pattern for the rest",
    ],
    exit: "The household cannot tell it happened.",
    services: ["feoh", "heorth"],
  },
  {
    id: "phase-2",
    n: "2",
    title: "The acceptance release",
    state: "code-complete",
    stateNote: "Heorth v0.3.0 · not deployed",
    summary:
      "The smallest set of things that would get this adopted at home. The code is written and tested; what remains is a real-tenant smoke test, the screen on the kitchen wall, and the only gate that counts.",
    items: [
      "Hearth View — the week's meals beside the family calendar and current items, wall-first",
      "Calendar mirror — read-only, Microsoft 365 behind a CalendarProvider",
      "Task sync — Microsoft To Do behind a TaskProvider",
      "An installable iOS PWA as the phone companion",
    ],
    exit: "Household acceptance. Not a passing test suite.",
    services: ["heorth"],
  },
  {
    id: "phase-3",
    n: "3",
    title: "Deployment",
    state: "next",
    stateNote: "Not started",
    summary:
      "Onto the homelab, and then lived with. Feature work does not resume until this is done — everything below gets reprioritised by what real use turns out to teach.",
    items: [
      "Homelab deploy — an FQDN in front of the containers, Feoh among them",
      "PostgreSQL with backups",
      "Seed the real household",
      "Live with it",
    ],
    services: ["heorth", "feoh"],
  },
  {
    id: "phase-4",
    n: "4",
    title: "Ethel v1 — the physical property",
    state: "planned",
    stateNote: "After Phase 3",
    summary:
      "Ethel (ᛟ, ēðel — the estate, immovable wealth) is the domain of the things a household owns and has to look after. It is also the first real cross-service integration: its service contacts are backed by KithLedger rather than a second address book.",
    items: [
      "Assets and appliances, vehicles included",
      "Rooms",
      "Maintenance Plans that project due work outward into the task provider",
      "Service contacts backed by KithLedger",
    ],
    exit:
      "Prerequisite: KithLedger's MCP server moves from stdio to HTTP so it can deploy as a satellite first.",
    services: ["heorth", "kithledger"],
  },
  {
    id: "phase-5",
    n: "5+",
    title: "Toward 2.0",
    state: "unordered",
    stateNote: "Order set by Phase 3 learnings",
    summary:
      "Everything here is genuinely unordered. It stays that way until the system has been lived with, because guessing the sequence now would only produce a list to be embarrassed by later.",
    items: [
      "Feoh growth — checking accounts, investments, retirement projections",
      "Wyrtgeard, the Garden module, with the Ger grow-your-own subfeature",
      "A WeatherProvider — the first external reference feed",
      "Calendar write-back",
      "The multi-provider matrix — Google, CalDAV, Google Tasks, a partner task project",
      "An Office document module",
      "Identity Phase B and satellite UIs",
      "Hearth View device tokens",
      "Android PWA and German localisation",
      "A website correction pass",
    ],
    services: ["heorth", "kithledger", "feoh"],
  },
]

/** Explicitly ruled out. Listed because a roadmap is as much what it refuses. */
export const OUT_OF_SCOPE: { label: string; note: string }[] = [
  {
    label: "Kids'-chores features",
    note: "Not the problem this is being built to solve.",
  },
  {
    label: "Multi-household",
    note: "One household is the whole design target for now.",
  },
  {
    label: "A plugin runtime",
    note: "No extension surface to keep stable while the core is still moving.",
  },
  {
    label: "A hosted offering",
    note: "Self-hosted is the point. There is no service to sign up for.",
  },
  {
    label: "Federation",
    note: "Instances talking to each other is a problem for a project that has users.",
  },
]

export type Adr = {
  n: string
  title: string
  status: "accepted" | "proposed"
  summary: string
}

export const ADRS: Adr[] = [
  {
    n: "0001",
    title: "External systems of record, behind providers",
    status: "accepted",
    summary:
      "Microsoft 365 keeps owning the calendars; Microsoft To Do keeps owning everyday tasks. Heorth is a synced client that mirrors and enriches, never a replacement you have to migrate to. All sync goes through provider interfaces from day one — Graph is just the first implementation. Heorth stays the system of record only for what no external service models: the home, maintenance, meals, finance, the library.",
  },
  {
    n: "0002",
    title: "Cross-service identity: A-then-B",
    status: "accepted",
    summary:
      "Phase A, where things are today: satellites hold an admin user and API keys only, Heorth calls them with service keys, and members exist exactly once — in Heorth. Phase B, once a satellite grows a UI of its own: it also accepts Heorth-issued member tokens, so one login works everywhere. No external identity provider, in either phase.",
  },
  {
    n: "0003",
    title: "External reference feeds, behind providers",
    status: "proposed",
    summary:
      "A second, read-only provider category for world data nobody authors — weather first. Never written back, no tenant coupling, and a keyless first provider by preference. Persistence splits: forecasts are a cache to be thrown away, observed past conditions are kept, so a crop's history outlives whichever provider recorded it.",
  },
  {
    n: "0004",
    title: "Per-member access control in the KithLedger graph",
    status: "proposed",
    summary:
      "Privacy as a property of the data and the query rather than of the UI. Three visibility states on both nodes and edges, three caller principals with separate least-privilege credentials, and traversal rules strict enough that the shape of the graph — its edges, paths, and counts — cannot leak what it is hiding. Depends entirely on ADR 0002 Phase B: schema-present but inert until member tokens reach KithLedger.",
  },
]

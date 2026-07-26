// Notes are written by one person, in the first person, about work that has
// actually happened. No personas, no bylines, no composite "we". If an entry
// cannot be traced to something in the strategy record, it does not belong here.

export type JournalTag =
  | "Heorth"
  | "Feoh"
  | "KithLedger"
  | "Architecture"
  | "Engineering"

export type JournalEntry = {
  slug: string
  date: string // ISO yyyy-mm-dd
  display: string // "July 2026"
  issue: string // "№ 004"
  tag: JournalTag
  title: string
  dek: string
  body: string
  read: string
}

export const FEATURED_ENTRY: JournalEntry = {
  slug: "code-complete-is-not-shipped",
  date: "2026-07-26",
  display: "July 2026",
  issue: "№ 004",
  tag: "Heorth",
  title: "Code-complete is not shipped.",
  dek: "Heorth v0.3.0 is written and tested. It is also not running anywhere, and I would rather say so plainly than let the distinction blur.",
  body:
    "The acceptance release is done in the only sense I can honestly claim: the code exists and the tests pass. It has a read-only mirror of the family calendar, task sync against the list the household already uses, an installable phone companion, and the Hearth View — the week's meals beside the calendar and whatever is currently outstanding, laid out for a screen on a kitchen wall rather than a laptop. That was the whole point of the release. Not the most features; the smallest set that might actually get used. What it does not have is a deployment. There is no container running on the homelab, no Postgres with a backup schedule behind it, no real tenant, and no screen on the wall. Those are Phase 3, and feature work does not resume until they are done — partly for discipline, mostly because I expect living with the thing for a month to rearrange my priorities more usefully than any planning session would. And past deployment there is a gate I cannot engineer my way through. A release here is ready when the other people in this house would rather use it than not. Test suites are not evidence of that. They are evidence that I have not broken what I already wrote.",
  read: "4 min read",
}

export const JOURNAL_ENTRIES: JournalEntry[] = [
  {
    slug: "mirroring-not-replacing",
    date: "2026-07-26",
    display: "July 2026",
    issue: "№ 003",
    tag: "Architecture",
    title: "Why Heorth mirrors your calendar instead of replacing it.",
    dek: "The tempting design is to own everything. The accepted decision is to own almost nothing, and to be a very good client of what a household already runs.",
    body:
      "Every household system wants to become the household's system of record. It is the obvious move and I think it is the wrong one. The calendar this house runs on is in Microsoft 365, and the everyday to-do list is in Microsoft To Do, and both of those already work — on phones, on watches, in the places people actually look. Replacing them would mean asking the household to migrate to my hobby project, which is the fastest way I know to have it rejected. So Heorth mirrors them instead. It reads the calendar and enriches it; it syncs everyday tasks rather than hosting a competing inbox. Where Heorth is a system of record is precisely where nothing else models the domain: the home itself, maintenance, meals, finance, the library. The important part is what sits between Heorth and Microsoft. Every bit of this goes through a provider interface — a CalendarProvider, a TaskProvider — from day one, with Graph as merely the first implementation rather than the assumed one. That has a cost today and buys something specific later: when a second calendar or task backend is worth supporting, it is a new implementation rather than an excavation. Two further consequences fall out of it. Calendar writes are deliberately absent for now — a read-only mirror is much harder to get catastrophically wrong than a two-way sync, and a mirror that quietly corrupts a shared family calendar would end this project on the spot. And Heorth's own maintenance work does not sit in a separate list waiting to be forgotten; it projects outward into the task provider, so all the doing lands in one inbox even though the knowledge lives here.",
    read: "6 min read",
  },
  {
    slug: "extracting-feoh",
    date: "2026-07-24",
    display: "July 2026",
    issue: "№ 002",
    tag: "Feoh",
    title: "Taking finance out of Heorth before anything depended on it.",
    dek: "Feoh v0.1.0 is now its own repository, API, and database. The best moment to split a service is while the split is still boring.",
    body:
      "Finance used to be a module inside Heorth. As of this week it is Feoh — an independent service with its own repository, its own API, its own MCP server, and its own database. Heorth's finance screens now proxy across to it over a service key. The timing was the whole decision. Doing this after deployment would have meant a data migration, a larger surface to carve up, and a household noticing the seams. Doing it now meant none of those: there is no production data to move, Feoh is at its smallest it will ever be, and the extraction was mechanical rather than delicate. The acceptance test I set myself was deliberately unglamorous — the household cannot tell it happened — and the Heorth release that accompanied it, v0.2.0, is explicitly labelled as no functional change. What I actually wanted out of it was the client. Heorth now reaches Feoh the way it will eventually reach every satellite: over a real API, with a service key, across a process boundary that cannot be quietly cheated around. That proxy is the template. It is much easier to establish that pattern once, against a service I have just written and fully understand, than to retrofit it later against three of them. The naming, since someone will ask: feoh is the first rune of the Anglo-Saxon futhorc, meaning cattle, and by extension wealth — the movable kind. Its counterpart ēðel is the immovable kind, the estate, which is what the property domain will be called when it arrives.",
    read: "5 min read",
  },
  {
    slug: "housekeeping-before-the-interesting-part",
    date: "2026-07-23",
    display: "July 2026",
    issue: "№ 001",
    tag: "Engineering",
    title: "Housekeeping before the interesting part.",
    dek: "A version-drift fix, a changelog, and a verification pass. None of it is exciting, and skipping it is how the next three months get expensive.",
    body:
      "The first phase of this plan contains nothing anyone would demo. The foundation library, @wyrhta/core, went to v0.1.2 with a README and a changelog that actually describes what changed, and a version drift between what it claimed to be and what it was got resolved. KithLedger went to v0.2.0, taking its web UI and a round of security hardening with it. And Heorth's Library feature got verified rather than assumed to work — which is a distinction I have learned to take seriously about code I wrote months ago and have not run since. The reason to do this first is that the core is consumed by pinned GitHub tag rather than a workspace link. These are three independent repositories that share a library by version, not a monorepo pretending otherwise. That has a real consequence: a change in the foundation does not reach a consumer until a tag is cut and that consumer's dependency is deliberately bumped. It is slower, and it is the point — nobody gets a foundation change they did not ask for. But it only works if the tags are honest and the changelog is real. A pinned dependency pointing at a version whose contents are a guess is worse than no pinning at all. So: housekeeping. The interesting part is easier to reach from a tidy desk.",
    read: "4 min read",
  },
]

export function tagColor(tag: JournalTag) {
  switch (tag) {
    case "Heorth":
      return "text-primary border-primary/40 bg-primary/5"
    case "Feoh":
      return "text-foreground border-foreground/30 bg-foreground/5"
    case "KithLedger":
      return "text-foreground border-foreground/30 bg-foreground/5"
    case "Architecture":
      return "text-muted-foreground border-border bg-secondary"
    case "Engineering":
      return "text-muted-foreground border-border bg-card"
  }
}

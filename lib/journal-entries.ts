export type JournalTag = "Heorth" | "KithLedger" | "Studio" | "Engineering"

export type JournalEntry = {
  slug: string
  date: string // ISO yyyy-mm-dd
  display: string // "April 2026"
  issue: string // "№ 014"
  tag: JournalTag
  title: string
  dek: string
  body: string
  read: string
  author: string
}

export const FEATURED_ENTRY: JournalEntry = {
  slug: "on-meal-planning-without-streaks",
  date: "2026-04-12",
  display: "April 2026",
  issue: "№ 014",
  tag: "Heorth",
  title: "On building Heorth's meal planner without 'streaks'.",
  dek: "Why we removed the gamification we had quietly built, and what replaced it on Sunday evenings.",
  body:
    "We shipped the first meal planner in March with a small calendar streak in the corner — the kind of thing every productivity tool grows by default. Two beta households told us, in almost identical words, that the streak made cooking feel like an obligation to the software rather than to the people at the table. We took it out the next week. In its place is a quiet weekly ledger: what you cooked, what was leftover, who set the table. No badges. No green squares. Just a record you can read like a diary, and ignore for a month without consequence.",
  read: "6 min read",
  author: "Ingrid",
}

export const JOURNAL_ENTRIES: JournalEntry[] = [
  {
    slug: "kithledger-v0-4-touchpoints",
    date: "2026-03-21",
    display: "March 2026",
    issue: "№ 013",
    tag: "KithLedger",
    title: "KithLedger v0.4 — touchpoints, tides, and a smaller schema.",
    dek: "We cut the schema in half and finally landed on a shape we can live with for a year.",
    body:
      "The v0.4 release shrinks KithLedger to four tables: people, touchpoints, tides, and tags. Touchpoints are anything that happens between you and someone — a call, a letter, a shared meal. Tides are the slow rhythm we want to keep with each person; the API answers, in plain English, who you're drifting from. Migration notes, breaking changes, and the new /tides endpoint are below.",
    read: "9 min read",
    author: "Olu",
  },
  {
    slug: "roadmap-as-a-sunday-letter",
    date: "2026-02-18",
    display: "February 2026",
    issue: "№ 012",
    tag: "Studio",
    title: "Why our roadmap is a Sunday letter, not a Gantt chart.",
    dek: "On planning slowly, in prose, and what we learned from a year of refusing to estimate.",
    body:
      "We don't keep a public roadmap in the usual sense — no tickets in a swimlane, no quarters with confident dates. Once a month, one of us writes a letter to the other two, in plain prose, about what we believe should come next and why. The letters are dull, careful, and occasionally wrong, which is roughly the right ratio. This month's is appended in full.",
    read: "5 min read",
    author: "Tomás",
  },
  {
    slug: "self-hosting-on-a-pi",
    date: "2026-01-09",
    display: "January 2026",
    issue: "№ 011",
    tag: "Heorth",
    title: "Self-hosting Heorth on a Raspberry Pi, three families later.",
    dek: "Notes from a winter spent watching three households install a single binary on a shelf.",
    body:
      "Three families ran the holiday-season build of Heorth on a Pi 5 under the stairs, behind the boiler, and on top of a fridge respectively. The one-command install — Node service, PostgreSQL alongside, all in a single Compose file — held. We learned that the hardest step is not the install: it's the moment a family realises their photos and their grocery list now live on a small computer they own, not on someone else's. We have notes on backups, on the Tailscale path, and on what to tell a partner who is, reasonably, sceptical.",
    read: "8 min read",
    author: "Ingrid",
  },
  {
    slug: "naming-things-in-old-english",
    date: "2025-12-15",
    display: "December 2025",
    issue: "№ 010",
    tag: "Studio",
    title: "Notes on naming things in Old English.",
    dek: "Wyrhta, heorth, kith — where the names come from, and why we keep choosing them.",
    body:
      "A wyrhta is a maker, a wright. A heorth is the hearth — both the literal stone and the household around it. Kith is the older half of 'kith and kin', meaning the people you know well enough to be at ease with. We did not pick these names to be quaint. We picked them because each one already does the work of a paragraph, and English, given a thousand years, tends to know what it is talking about.",
    read: "4 min read",
    author: "Tomás",
  },
  {
    slug: "choosing-sqlite-for-the-household",
    date: "2025-11-04",
    display: "November 2025",
    issue: "№ 009",
    tag: "Engineering",
    title: "Choosing PostgreSQL for the household.",
    dek: "On the boring database — and the operational calm that follows when one of the oldest things in computing runs your kitchen.",
    body:
      "Heorth, KithLedger, and Feoh all ship with PostgreSQL as the canonical store. We tried SQLite first — a family of four generates roughly twenty megabytes of data a year, after all — and it almost won. What changed our minds was the second device. The moment a partner opens Heorth on a phone while a tablet shows the meal plan in the kitchen, we want the same numbers everywhere, in the same second. A modern Postgres on a Pi handles a household's lifetime of data without breaking a sweat, restores cleanly from a single dump file on a Sunday afternoon, and gives us logical replication for free when a family decides their data should also live at a grandparent's house. It is, in the end, the boring choice — and the boring choice is the property we optimise for.",
    read: "7 min read",
    author: "Olu",
  },
]

export function tagColor(tag: JournalTag) {
  switch (tag) {
    case "Heorth":
      return "text-primary border-primary/40 bg-primary/5"
    case "KithLedger":
      return "text-foreground border-foreground/30 bg-foreground/5"
    case "Studio":
      return "text-muted-foreground border-border bg-secondary"
    case "Engineering":
      return "text-muted-foreground border-border bg-card"
  }
}

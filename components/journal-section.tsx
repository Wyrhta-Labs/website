"use client"

import { Reveal } from "./reveal"
import { ArrowUpRight, Rss, BookMarked } from "lucide-react"

type Entry = {
  slug: string
  date: string // ISO yyyy-mm-dd
  display: string // "April 2026"
  issue: string // "№ 014"
  tag: "Heorth" | "KithLedger" | "Studio" | "Engineering"
  title: string
  dek: string
  body: string
  read: string
  author: string
}

const FEATURED: Entry = {
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

const ENTRIES: Entry[] = [
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
      "Three families ran the holiday-season build of Heorth on a Pi 5 under the stairs, behind the boiler, and on top of a fridge respectively. The single-binary path held. We learned that the hardest step is not the install — it's the moment a family realises their photos and their grocery list now live on a small computer they own, not on someone else's. We have notes on backups, on the Tailscale path, and on what to tell a partner who is, reasonably, sceptical.",
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
    title: "Choosing SQLite for the household.",
    dek: "On databases that fit on a thumb drive, and the operational calm that follows.",
    body:
      "Heorth and KithLedger both ship with SQLite as the default store. There is a Postgres path for households that need it, but we suspect most do not. A family of four generates roughly twenty megabytes of data a year, including photos of school lunches. A database that fits on a thumb drive is a database a person can understand, back up, and restore on a Sunday afternoon — and that, increasingly, is the property we optimise for.",
    read: "7 min read",
    author: "Olu",
  },
]

function tagColor(tag: Entry["tag"]) {
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

export function JournalSection() {
  return (
    <section
      id="journal"
      className="relative py-20 md:py-32 border-t border-border"
    >
      <div className="container-custom">
        {/* Section head */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-14 md:mb-20">
          <div className="md:col-span-7">
            <Reveal>
              <div className="text-eyebrow text-primary mb-4">§ 06 — Journal</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-serif text-4xl md:text-6xl tracking-tight leading-[1.02] text-balance">
                A monthly note,{" "}
                <span className="italic font-light text-muted-foreground">
                  written by hand.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
                One letter a month, posted on the first Sunday. It&apos;s where
                we work out loud — design dilemmas, code we&apos;re proud of,
                code we&apos;ve since deleted, and what the families using
                Heorth and KithLedger have taught us.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-4 md:col-start-9 flex md:items-end md:justify-end">
            <Reveal delay={0.15}>
              <div className="flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2">
                <span className="text-eyebrow text-muted-foreground">Read at</span>
                <span className="font-mono text-sm text-foreground">
                  wyrhta.dev/journal
                </span>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Featured note */}
        <Reveal>
          <a
            href={`#journal/${FEATURED.slug}`}
            className="group block rounded-lg border border-border bg-card overflow-hidden hover:border-foreground/60 transition-colors"
          >
            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* Date rail */}
              <div className="md:col-span-3 flex md:flex-col justify-between md:justify-start gap-4 p-6 md:p-8 border-b md:border-b-0 md:border-r border-border bg-secondary/40">
                <div>
                  <div className="text-eyebrow text-primary mb-2">Latest note</div>
                  <div className="font-serif text-3xl md:text-4xl leading-none tracking-tight">
                    {FEATURED.display.split(" ")[0]}
                  </div>
                  <div className="font-mono text-xs text-muted-foreground mt-1">
                    {FEATURED.display.split(" ")[1]}
                  </div>
                </div>
                <div className="flex md:flex-col items-start gap-2 md:gap-3 md:mt-auto">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {FEATURED.issue}
                  </span>
                  <span
                    className={`font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full border ${tagColor(
                      FEATURED.tag,
                    )}`}
                  >
                    {FEATURED.tag}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="md:col-span-9 p-6 md:p-10">
                <div className="flex items-start justify-between gap-6">
                  <div className="font-mono text-xs text-muted-foreground">
                    <time dateTime={FEATURED.date}>{FEATURED.date}</time>
                    <span className="mx-2">·</span>
                    {FEATURED.read}
                    <span className="mx-2">·</span>
                    by {FEATURED.author}
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-muted-foreground transition-all group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>

                <h3 className="mt-5 font-serif text-3xl md:text-4xl tracking-tight leading-[1.05] text-balance">
                  {FEATURED.title}
                </h3>
                <p className="mt-3 font-serif italic text-lg md:text-xl text-muted-foreground leading-snug text-pretty max-w-2xl">
                  {FEATURED.dek}
                </p>

                <p className="mt-6 max-w-2xl text-base md:text-[17px] text-foreground/85 leading-relaxed text-pretty">
                  {FEATURED.body}
                </p>

                <div className="mt-8 inline-flex items-center gap-2 text-eyebrow text-foreground">
                  Read the full note
                  <span className="block w-8 h-px bg-foreground transition-all group-hover:w-12" />
                </div>
              </div>
            </div>
          </a>
        </Reveal>

        {/* Archive list */}
        <div className="mt-16 md:mt-20">
          <Reveal>
            <div className="flex items-end justify-between mb-8">
              <h3 className="font-serif text-2xl md:text-3xl tracking-tight">
                Earlier notes
              </h3>
              <a
                href="#journal/archive"
                className="hidden sm:inline-flex items-center gap-2 text-eyebrow text-muted-foreground hover:text-foreground transition-colors"
              >
                Full archive
                <ArrowUpRight size={12} />
              </a>
            </div>
          </Reveal>

          <ol className="border-t border-border">
            {ENTRIES.map((e, i) => (
              <Reveal key={e.slug} delay={0.04 * i}>
                <li>
                  <a
                    href={`#journal/${e.slug}`}
                    className="group grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-x-8 py-8 md:py-10 border-b border-border hover:bg-card/60 transition-colors -mx-4 px-4 md:-mx-6 md:px-6 rounded-sm"
                  >
                    {/* Date / issue / tag */}
                    <div className="md:col-span-3 flex md:flex-col gap-3 md:gap-1.5 items-baseline md:items-start">
                      <div className="font-serif text-2xl md:text-3xl leading-none tracking-tight">
                        {e.display.split(" ")[0]}
                        <span className="text-muted-foreground font-light italic">
                          {" "}
                          {e.display.split(" ")[1].slice(2)}
                        </span>
                      </div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {e.issue}
                      </div>
                      <span
                        className={`hidden md:inline-flex font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full border self-start mt-2 ${tagColor(
                          e.tag,
                        )}`}
                      >
                        {e.tag}
                      </span>
                    </div>

                    {/* Title + dek */}
                    <div className="md:col-span-7">
                      <span
                        className={`md:hidden inline-flex font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full border mb-3 ${tagColor(
                          e.tag,
                        )}`}
                      >
                        {e.tag}
                      </span>
                      <h4 className="font-serif text-2xl md:text-[28px] leading-[1.15] tracking-tight text-balance group-hover:text-primary transition-colors">
                        {e.title}
                      </h4>
                      <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed text-pretty max-w-xl">
                        {e.dek}
                      </p>
                      <div className="mt-4 font-mono text-xs text-muted-foreground">
                        <time dateTime={e.date}>{e.date}</time>
                        <span className="mx-2">·</span>
                        {e.read}
                        <span className="mx-2">·</span>
                        by {e.author}
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="md:col-span-2 hidden md:flex items-start justify-end pt-2">
                      <ArrowUpRight
                        size={18}
                        className="text-muted-foreground transition-all group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </div>
                  </a>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Footer rail */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7">
            <Reveal>
              <p className="font-mono text-xs text-muted-foreground">
                <span className="text-foreground">wyrhta.dev/journal</span>
                <span className="mx-2">·</span>
                Plain HTML, no analytics, no popups. Subscribe by RSS, by email,
                or simply by remembering.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-5 flex flex-wrap items-center justify-start md:justify-end gap-3">
            <Reveal delay={0.05}>
              <a
                href="#journal/archive"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:border-foreground transition-colors"
              >
                <BookMarked size={14} />
                Read the archive
              </a>
            </Reveal>
            <Reveal delay={0.1}>
              <a
                href="#rss"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:border-foreground transition-colors"
              >
                <Rss size={14} />
                RSS feed
              </a>
            </Reveal>
            <Reveal delay={0.15}>
              <a
                href="#subscribe"
                className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-primary transition-colors"
              >
                Subscribe by email
                <ArrowUpRight size={14} />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

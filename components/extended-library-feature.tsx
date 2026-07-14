"use client"

import { Reveal } from "./reveal"
import {
  Archive,
  BookOpen,
  FileSearch,
  ShieldCheck,
  Tags,
  Wrench,
  ArrowRight,
} from "lucide-react"

const COLLECTIONS = [
  { label: "Books", count: "418", detail: "owned, lent, wishlisted" },
  { label: "Manuals", count: "72", detail: "appliances, tools, repairs" },
  { label: "Warranties", count: "31", detail: "expiry and receipt trail" },
  { label: "Recipes", count: "126", detail: "linked to meal planning" },
]

const POINTS = [
  {
    icon: FileSearch,
    title: "Search the things a household forgets.",
    body:
      "Books, manuals, warranties, receipts, recipes, and notes share one catalogue, with shelf, room, owner, loan, and expiry metadata kept close at hand.",
  },
  {
    icon: Tags,
    title: "A library that connects to chores and meals.",
    body:
      "A mixer manual can sit beside a warranty, a recipe can feed the meal planner, and a borrowed book can appear as a quiet reminder on the weekly board.",
  },
  {
    icon: ShieldCheck,
    title: "Private by default, exportable by habit.",
    body:
      "The catalogue stays in the same self-hosted Heorth store, reachable over REST and MCP, with CSV and plain-file exports for audits and house moves.",
  },
]

const ITEMS = [
  {
    type: "Manual",
    title: "Viessmann Vitodens 100-W",
    meta: "Basement shelf · warranty until Oct 2028",
    status: "service due",
  },
  {
    type: "Book",
    title: "The Complete Book of Self-Sufficiency",
    meta: "Kitchen bookcase · lent to Grete",
    status: "return nudge",
  },
  {
    type: "Recipe",
    title: "Rye sourdough, winter bake",
    meta: "Meal planner · feeds 5",
    status: "pinned",
  },
]

export function ExtendedLibraryFeature() {
  return (
    <section
      id="library"
      className="relative py-20 md:py-32 border-t border-border bg-background"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-14 md:mb-20">
          <div className="md:col-span-5">
            <Reveal>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <div className="text-eyebrow text-primary">
                  § 02a — Extended Library
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground border border-border rounded-full px-2 py-0.5">
                  Heorth module
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-serif text-4xl md:text-6xl tracking-tight leading-[1] text-balance">
                The house catalogue, finally worth keeping.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7 md:pt-6">
            <Reveal delay={0.1}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
                Heorth&apos;s extended library turns the household&apos;s slow
                memory into a searchable catalogue: books, manuals, warranties,
                recipes, receipts, and borrowed things. It is not another
                reading app; it is the place you look before repairing the
                boiler, lending a book, or planning next week&apos;s meals.
              </p>
              <a
                href="https://github.com/wyrhta-labs/wyrhta-core"
                className="mt-6 inline-flex items-center gap-2 text-foreground border-b border-foreground/30 hover:border-foreground pb-0.5 text-sm font-medium"
              >
                Follow the source
                <ArrowRight size={14} />
              </a>
              <dl className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4 pt-6 border-t border-border">
                <div>
                  <dt className="text-eyebrow text-muted-foreground mb-1.5">Release</dt>
                  <dd className="font-mono text-xs text-foreground">Heorth 0.4 · Q2 2027</dd>
                </div>
                <div>
                  <dt className="text-eyebrow text-muted-foreground mb-1.5">Scope</dt>
                  <dd className="font-mono text-xs text-foreground">Books · manuals · recipes</dd>
                </div>
                <div>
                  <dt className="text-eyebrow text-muted-foreground mb-1.5">Surface</dt>
                  <dd className="font-mono text-xs text-foreground">REST · MCP · CSV</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <Reveal delay={0.1} className="lg:col-span-7">
            <LibraryMockup />
          </Reveal>
          <div className="lg:col-span-5 flex flex-col gap-3 md:gap-4">
            {POINTS.map((p, i) => (
              <Reveal key={p.title} delay={0.15 + i * 0.06}>
                <div className="rounded-md border border-border bg-card p-5 md:p-6 transition-colors hover:border-foreground/40">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center size-9 rounded-md bg-secondary border border-border text-foreground shrink-0">
                      <p.icon size={16} />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl">{p.title}</h3>
                      <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function LibraryMockup() {
  return (
    <div className="rounded-md border border-border bg-card overflow-hidden h-full shadow-[0_30px_60px_-30px_rgba(31,27,23,0.18)]">
      <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-background/60">
        <div className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
          <span className="size-2 rounded-full bg-primary" />
          heorth · library
        </div>
        <div className="font-mono text-[10px] text-muted-foreground hidden sm:block">
          prototype · q2 2027 target · mcp planned
        </div>
      </div>

      <div className="p-6 md:p-7">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
          <div>
            <div className="text-eyebrow text-muted-foreground">House catalogue</div>
            <h4 className="font-serif text-2xl md:text-3xl tracking-tight">
              Rowan House Library
            </h4>
          </div>
          <div className="rounded border border-border bg-background/50 px-3 py-2 min-w-0">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <FileSearch size={14} className="shrink-0" />
              <span className="truncate">manual: boiler warranty</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {COLLECTIONS.map((c, i) => (
            <div
              key={c.label}
              className="rounded border border-border bg-background/40 p-4 transition-colors hover:border-foreground/40"
            >
              <div className="flex items-center gap-2 text-muted-foreground mb-3">
                {i === 0 ? <BookOpen size={15} /> : i === 1 ? <Wrench size={15} /> : <Archive size={15} />}
                <span className="text-eyebrow">{c.label}</span>
              </div>
              <div className="font-mono text-2xl text-foreground">{c.count}</div>
              <div className="mt-1 text-xs text-muted-foreground leading-snug">{c.detail}</div>
            </div>
          ))}
        </div>

        <div className="rounded border border-border bg-background/40 overflow-hidden">
          <div className="grid grid-cols-[90px_1fr_96px] gap-3 px-4 py-2.5 border-b border-border text-eyebrow text-muted-foreground">
            <span>Kind</span>
            <span>Item</span>
            <span className="text-right">State</span>
          </div>
          <ul className="divide-y divide-border">
            {ITEMS.map((item) => (
              <li
                key={item.title}
                className="grid grid-cols-1 sm:grid-cols-[90px_1fr_96px] gap-2 sm:gap-3 px-4 py-3.5 text-sm transition-colors hover:bg-card"
              >
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {item.type}
                </span>
                <span>
                  <span className="block font-serif text-base tracking-tight text-foreground">
                    {item.title}
                  </span>
                  <span className="block mt-0.5 text-xs text-muted-foreground">
                    {item.meta}
                  </span>
                </span>
                <span className="sm:text-right font-mono text-[10px] uppercase tracking-wider text-primary">
                  {item.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

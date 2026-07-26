"use client"

import { Reveal } from "./reveal"
import {
  Calendar,
  CheckSquare,
  Home,
  Utensils,
  Wrench,
  BookOpen,
  Wallet,
  ArrowRight,
} from "lucide-react"
import { cn } from "@/lib/utils"

type Domain = {
  icon: typeof Calendar
  name: string
  note: string
  /** Where this domain actually is. Never blank — an unmarked card reads as shipped. */
  state: string
  tone: "built" | "mirrored" | "planned"
}

const DOMAINS: Domain[] = [
  {
    icon: Utensils,
    name: "Meals",
    note: "The week's plan, and what it means for the shopping list.",
    state: "In the acceptance release",
    tone: "built",
  },
  {
    icon: Calendar,
    name: "Calendar",
    note: "Mirrored from Microsoft 365, read-only. Heorth enriches it; it does not own it.",
    state: "Mirrored · read-only",
    tone: "mirrored",
  },
  {
    icon: CheckSquare,
    name: "Tasks",
    note: "Synced with Microsoft To Do, so all the doing stays in one inbox.",
    state: "Mirrored · two-way",
    tone: "mirrored",
  },
  {
    icon: BookOpen,
    name: "Library",
    note: "The house catalogue — books, manuals, warranties, recipes, receipts.",
    state: "Built · verified",
    tone: "built",
  },
  {
    icon: Wallet,
    name: "Finance",
    note: "Now a separate service. Heorth's screens proxy across to Feoh.",
    state: "Proxied to Feoh",
    tone: "built",
  },
  {
    icon: Home,
    name: "Ethel — the property",
    note: "Assets, appliances, vehicles, rooms, and maintenance plans that project work outward.",
    state: "Planned · Phase 4",
    tone: "planned",
  },
]

const TONE: Record<Domain["tone"], string> = {
  built: "border-primary/40 bg-primary/10 text-primary",
  mirrored: "border-border bg-secondary text-muted-foreground",
  planned: "border-dashed border-border bg-transparent text-muted-foreground",
}

export function HeorthFeature() {
  return (
    <section
      id="heorth"
      className="relative py-20 md:py-32 border-t border-border bg-secondary/40"
    >
      <div className="container-custom">
        {/* Section header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-14 md:mb-20">
          <div className="md:col-span-5">
            <Reveal>
              <div className="text-eyebrow text-primary mb-4">§ 02 — Heorth, the hub</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-serif text-4xl md:text-6xl tracking-tight leading-[1] text-balance">
                A screen on the kitchen wall that tells the truth.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7 md:pt-6">
            <Reveal delay={0.1}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
                Heorth is the household hub: the domains no external service
                models — the home and its upkeep, meals, the library — held in
                one place, with the calendar and task list a household already
                uses mirrored alongside them rather than replaced. It is also
                the household&apos;s identity provider. Members exist here,
                once, and the satellites are reached with service keys on their
                behalf.
              </p>
              <a
                href="/roadmap"
                className="mt-6 inline-flex items-center gap-2 text-foreground border-b border-foreground/30 hover:border-foreground pb-0.5 text-sm font-medium"
              >
                What is built and what is not
                <ArrowRight size={14} />
              </a>
              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 pt-6 border-t border-border">
                <div>
                  <dt className="text-eyebrow text-muted-foreground mb-1.5">Surface</dt>
                  <dd className="font-mono text-xs text-foreground">Wall · PWA · REST · MCP</dd>
                </div>
                <div>
                  <dt className="text-eyebrow text-muted-foreground mb-1.5">Status</dt>
                  <dd className="font-mono text-xs text-foreground">v0.3.0 · not deployed</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>

        {/* Hearth View */}
        <div id="hearth-view" className="scroll-mt-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
              <div>
                <div className="text-eyebrow text-primary mb-2">
                  The headline surface
                </div>
                <h3 className="font-serif text-2xl md:text-3xl tracking-tight">
                  The Hearth View
                </h3>
                <p className="mt-2 max-w-xl text-sm md:text-base text-muted-foreground leading-relaxed">
                  The week&apos;s meals beside the family calendar and whatever
                  is currently outstanding, laid out for a touchscreen on the
                  kitchen wall. This is the adoption hook — the calendar and
                  task sync underneath exist mostly to keep it honest.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-lg border border-border bg-card overflow-hidden shadow-[0_30px_60px_-30px_rgba(31,27,23,0.18)]">
              <HearthViewMockup />
            </div>
          </Reveal>
        </div>

        {/* Domains grid */}
        <div className="mt-14 md:mt-20">
          <Reveal>
            <div className="text-eyebrow text-muted-foreground mb-6">
              What Heorth holds — and what it only borrows
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {DOMAINS.map((m, i) => (
              <Reveal key={m.name} delay={0.05 * i}>
                <div className="rounded-md border border-border bg-card p-6 h-full transition-colors hover:border-foreground/40">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center size-9 rounded-md bg-secondary border border-border text-foreground shrink-0">
                      <m.icon size={16} />
                    </div>
                    <h4 className="font-serif text-xl leading-tight">{m.name}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.note}</p>
                  <div
                    className={cn(
                      "mt-4 inline-flex items-center rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider",
                      TONE[m.tone],
                    )}
                  >
                    {m.state}
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

function HearthViewMockup() {
  return (
    <div>
      {/* Title bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-background/60">
        <div className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
          <span className="size-2 rounded-full bg-primary" />
          heorth · hearth view
        </div>
        <div className="font-mono text-[10px] text-muted-foreground hidden sm:block">
          illustration · v0.3.0 · not yet running
        </div>
      </div>

      <div className="p-5 md:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
          <div>
            <div className="text-eyebrow text-muted-foreground">Tuesday</div>
            <h4 className="font-serif text-2xl md:text-3xl tracking-tight">
              This week at home
            </h4>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-eyebrow px-3 py-1.5 rounded-full border border-border text-muted-foreground">
              Month
            </span>
            <span className="text-eyebrow px-3 py-1.5 rounded-full bg-foreground text-background">
              Week
            </span>
          </div>
        </div>

        {/* Week strip — meals across the top, wall-first */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-6">
          {[
            ["Mon", "20", "Barley pottage"],
            ["Tue", "21", "Leek & potato"],
            ["Wed", "22", "Roast chicken"],
            ["Thu", "23", "Leftovers"],
            ["Fri", "24", "Fish, greens"],
            ["Sat", "25", "Sourdough pizza"],
            ["Sun", "26", "Slow lamb"],
          ].map(([d, n, meal], i) => (
            <div
              key={d}
              className={cn(
                "rounded border p-3",
                i === 1
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border",
              )}
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wider opacity-70">
                  {d}
                </span>
                <span className="font-serif text-lg">{n}</span>
              </div>
              <div
                className={cn(
                  "mt-2 text-xs leading-snug",
                  i === 1 ? "opacity-90" : "text-muted-foreground",
                )}
              >
                {meal}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Calendar — mirrored */}
          <div className="rounded border border-border bg-card p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="text-eyebrow text-muted-foreground">Today&apos;s calendar</div>
              <span className="font-mono text-[10px] text-muted-foreground border border-border rounded-full px-2 py-0.5">
                mirrored · read-only
              </span>
            </div>
            <ul className="space-y-3">
              {[
                ["08:30", "School run", "Mara"],
                ["13:00", "Boiler service — Vitodens", "Household"],
                ["18:15", "Choir practice", "Ines"],
              ].map(([time, what, who]) => (
                <li key={what} className="flex items-start gap-3 text-sm">
                  <span className="font-mono text-[11px] text-primary w-11 shrink-0 pt-0.5">
                    {time}
                  </span>
                  <span className="flex-1 text-foreground leading-snug">{what}</span>
                  <span className="font-mono text-[10px] text-muted-foreground shrink-0 pt-0.5">
                    {who}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Current items — synced with the task provider */}
          <div className="rounded border border-border bg-card p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="text-eyebrow text-muted-foreground">Currently outstanding</div>
              <span className="font-mono text-[10px] text-muted-foreground border border-border rounded-full px-2 py-0.5">
                synced · to do
              </span>
            </div>
            <ul className="space-y-2.5">
              {[
                ["Order boiler filter", true, "maintenance"],
                ["Return library books", false, "library"],
                ["Milk, flour, leeks", false, "meals"],
                ["Renew appliance warranty", false, "maintenance"],
              ].map(([task, done, origin]) => (
                <li key={task as string} className="flex items-center gap-3">
                  <span
                    className={cn(
                      "size-4 rounded border flex items-center justify-center shrink-0",
                      done ? "bg-foreground border-foreground" : "bg-card border-border",
                    )}
                  >
                    {done && (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path
                          d="M2 5l2 2 4-4"
                          stroke="var(--background)"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                  <span
                    className={cn(
                      "text-sm flex-1 leading-snug",
                      done ? "line-through text-muted-foreground" : "text-foreground",
                    )}
                  >
                    {task as string}
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground shrink-0">
                    {origin as string}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 pt-3 border-t border-border text-xs text-muted-foreground leading-relaxed">
              Maintenance work originates in Heorth and is pushed outward into
              the household&apos;s existing task list — so nothing lives in a
              second inbox nobody checks.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { Reveal } from "./reveal"
import { ArrowRight, KeyRound, RefreshCw, CloudSun, Boxes } from "lucide-react"
import { cn } from "@/lib/utils"

const CATEGORIES = [
  {
    icon: RefreshCw,
    kind: "Category one · accepted",
    accepted: true,
    title: "Systems of record",
    body: "Data a household already owns somewhere else. Microsoft 365 keeps the calendars; Microsoft To Do keeps the everyday tasks. Heorth mirrors them and enriches them, and its own maintenance work is pushed outward into that same task list rather than into a competing one. Calendar writes stay off for now — a read-only mirror is much harder to get catastrophically wrong than a two-way sync on a shared family calendar.",
    note: "Graph is the first implementation, not the assumed one.",
  },
  {
    icon: CloudSun,
    kind: "Category two · proposed",
    accepted: false,
    title: "External reference feeds",
    body: "Read-only world data nobody in the household authors — weather first. Never written back, never coupled to a tenant, and keyless where possible. The persistence splits in an interesting way: forecasts are a cache to be thrown away, while observed past conditions get kept, so a crop's history outlives whichever provider happened to record it.",
    note: "Design direction. Nothing is built for this until its phase arrives.",
  },
]

export function ProvidersSection() {
  return (
    <section
      id="how-it-works"
      className="relative py-20 md:py-32 border-t border-border"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-14 md:mb-20">
          <div className="md:col-span-5">
            <Reveal>
              <div className="text-eyebrow text-primary mb-4">§ 03 — How it works</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-serif text-4xl md:text-6xl tracking-tight leading-[1] text-balance">
                It doesn&apos;t ask your household to migrate.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7 md:pt-6">
            <Reveal delay={0.1}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
                Every household system wants to become the household&apos;s
                system of record. That is the obvious move, and it is the
                fastest way to get rejected — because it means asking everyone
                to abandon the calendar that already works on their phone.
                Heorth does the opposite: it is a very good client of what a
                home already runs, and a system of record only where nothing
                else models the domain.
              </p>
              <a
                href="/roadmap#decisions"
                className="mt-6 inline-flex items-center gap-2 text-foreground border-b border-foreground/30 hover:border-foreground pb-0.5 text-sm font-medium"
              >
                Read the decisions behind this
                <ArrowRight size={14} />
              </a>
            </Reveal>
          </div>
        </div>

        {/* Two provider categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.title} delay={0.1 + i * 0.08}>
              <div
                className={cn(
                  "h-full rounded-md border bg-card p-6 md:p-8",
                  c.accepted ? "border-border" : "border-dashed border-border",
                )}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex items-center justify-center size-9 rounded-md bg-secondary border border-border text-foreground shrink-0">
                    <c.icon size={16} />
                  </div>
                  <span
                    className={cn(
                      "font-mono text-[10px] uppercase tracking-wider rounded-full border px-2 py-0.5",
                      c.accepted
                        ? "border-foreground/25 bg-foreground/[0.06] text-foreground/70"
                        : "border-dashed border-primary/50 text-primary",
                    )}
                  >
                    {c.kind}
                  </span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl tracking-tight">
                  {c.title}
                </h3>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed text-pretty">
                  {c.body}
                </p>
                <p className="mt-5 pt-4 border-t border-border font-mono text-[11px] text-muted-foreground leading-relaxed">
                  {c.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* The portability argument + identity */}
        <div className="mt-4 md:mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <Reveal delay={0.2}>
            <div className="h-full rounded-md border border-border bg-card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center size-9 rounded-md bg-secondary border border-border text-foreground shrink-0">
                  <Boxes size={16} />
                </div>
                <span className="text-eyebrow text-muted-foreground">
                  Why the indirection
                </span>
              </div>
              <h3 className="font-serif text-2xl tracking-tight">
                Providers are what keep it portable.
              </h3>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed text-pretty">
                Nothing talks to Microsoft directly. Sync goes through a{" "}
                <span className="font-mono text-xs text-foreground">
                  CalendarProvider
                </span>{" "}
                and a{" "}
                <span className="font-mono text-xs text-foreground">
                  TaskProvider
                </span>{" "}
                from day one. That costs something today and buys something
                specific later: supporting Google, CalDAV, or a partner&apos;s
                task project becomes a new implementation rather than an
                excavation. The full multi-provider matrix is a 2.0
                commitment — the seam it needs is already there.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="h-full rounded-md border border-border bg-card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center size-9 rounded-md bg-secondary border border-border text-foreground shrink-0">
                  <KeyRound size={16} />
                </div>
                <span className="text-eyebrow text-muted-foreground">
                  Identity · A-then-B
                </span>
              </div>
              <h3 className="font-serif text-2xl tracking-tight">
                You exist once, in the hub.
              </h3>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed text-pretty">
                Today the satellites hold no member accounts at all — just an
                admin user and API keys — and Heorth calls them with service
                keys on your behalf. When a satellite eventually grows a UI of
                its own, it starts accepting tokens Heorth issues, so one login
                still works everywhere. No external identity provider is
                involved in either phase, and nothing about your household
                needs an account somewhere else.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

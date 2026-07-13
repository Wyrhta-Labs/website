"use client"

import { Reveal } from "./reveal"
import { Calendar, Home, Utensils, Wallet, BookOpen, Sprout, ArrowRight } from "lucide-react"

const MODULES = [
  { icon: Calendar, name: "Calendar", note: "Shared rhythms, school terms, seasons." },
  { icon: Utensils, name: "Meals", note: "Recipes, weekly plans, the shopping list." },
  { icon: Home, name: "Chores", note: "Rotations that flex with the week." },
  { icon: Wallet, name: "Finances", note: "Envelopes, bills, household budgets." },
  { icon: BookOpen, name: "Library", note: "Books, manuals, recipes — searchable." },
  { icon: Sprout, name: "Garden", note: "Planting calendars and harvest notes." },
]

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
              <div className="text-eyebrow text-primary mb-4">§ 02 — Heorth</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-serif text-4xl md:text-6xl tracking-tight leading-[1] text-balance">
                The household, gathered around one quiet system.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7 md:pt-6">
            <Reveal delay={0.1}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
                Heorth replaces the dozen apps and shared docs that quietly run a
                family. Calendars, meal plans, chores, budgets, the children&apos;s
                appointments, the manuals for the boiler — pulled into a single
                home-shaped place. Designed API-first: a UI for human hands and
                tired evenings, an MCP server for AI agents that help you plan,
                balance, and remember. Self-hosted, end-to-end encrypted, and
                built in the open.
              </p>
              <a
                href="https://github.com/wyrhta-labs/heorth"
                className="mt-6 inline-flex items-center gap-2 text-foreground border-b border-foreground/30 hover:border-foreground pb-0.5 text-sm font-medium"
              >
                Read the README
                <ArrowRight size={14} />
              </a>
              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 pt-6 border-t border-border">
                <div>
                  <dt className="text-eyebrow text-muted-foreground mb-1.5">Surface</dt>
                  <dd className="font-mono text-xs text-foreground">REST · MCP</dd>
                </div>
                <div>
                  <dt className="text-eyebrow text-muted-foreground mb-1.5">Clients</dt>
                  <dd className="font-mono text-xs text-foreground">Web · CLI · Agents</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>

        {/* Mock UI */}
        <Reveal delay={0.15}>
          <div className="rounded-lg border border-border bg-card overflow-hidden shadow-[0_30px_60px_-30px_rgba(31,27,23,0.18)]">
            <HeorthMockup />
          </div>
        </Reveal>

        {/* Modules grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-14 md:mt-20">
          {MODULES.map((m, i) => (
            <Reveal key={m.name} delay={0.05 * i}>
              <div className="rounded-md border border-border bg-card p-6 h-full transition-colors hover:border-foreground/40">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center size-9 rounded-md bg-secondary border border-border text-foreground">
                    <m.icon size={16} />
                  </div>
                  <h3 className="font-serif text-xl">{m.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function HeorthMockup() {
  return (
    <div>
      {/* Title bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-background/60">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
        </div>
        <div className="text-eyebrow text-muted-foreground">heorth · the rowan house</div>
        <div className="font-mono text-[10px] text-muted-foreground hidden sm:block">
          self-hosted · v0.4.2 · mcp on
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
        {/* Sidebar */}
        <aside className="lg:col-span-3 border-b lg:border-b-0 lg:border-r border-border p-5 bg-secondary/30">
          <div className="text-eyebrow text-muted-foreground mb-3">Household</div>
          <div className="space-y-1.5 mb-6">
            {["Dashboard", "Calendar", "Meals", "Chores", "Finances", "Garden"].map((it, i) => (
              <div
                key={it}
                className={`flex items-center justify-between px-2.5 py-1.5 rounded text-sm ${
                  i === 0 ? "bg-foreground text-background" : "text-foreground/80 hover:bg-card"
                }`}
              >
                <span>{it}</span>
                {i === 2 && (
                  <span className="font-mono text-[10px] text-muted-foreground">3</span>
                )}
              </div>
            ))}
          </div>

          <div className="text-eyebrow text-muted-foreground mb-3">People</div>
          <div className="space-y-2">
            {[
              ["Mara", "ember"],
              ["Ælric", "taupe"],
              ["Ines", "sage"],
              ["Tomás", "sky"],
            ].map(([n], i) => (
              <div key={n as string} className="flex items-center gap-2.5 text-sm">
                <span
                  className="size-6 rounded-full grid place-items-center font-mono text-[10px] text-background"
                  style={{
                    background: ["var(--primary)", "var(--foreground)", "#7a8b6f", "#6b7e8c"][i],
                  }}
                >
                  {(n as string)[0]}
                </span>
                <span className="text-foreground/90">{n}</span>
              </div>
            ))}
          </div>
        </aside>

        {/* Main */}
        <div className="lg:col-span-9 p-6 md:p-8">
          <div className="flex items-end justify-between mb-6">
            <div>
              <div className="text-eyebrow text-muted-foreground">Tuesday</div>
              <h4 className="font-serif text-2xl md:text-3xl tracking-tight">This week at home</h4>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <button className="text-eyebrow px-3 py-1.5 rounded-full border border-border text-muted-foreground">
                Week
              </button>
              <button className="text-eyebrow px-3 py-1.5 rounded-full bg-foreground text-background">
                Today
              </button>
            </div>
          </div>

          {/* Day strip */}
          <div className="grid grid-cols-7 gap-2 mb-6">
            {[
              ["Mon", "21"],
              ["Tue", "22"],
              ["Wed", "23"],
              ["Thu", "24"],
              ["Fri", "25"],
              ["Sat", "26"],
              ["Sun", "27"],
            ].map(([d, n], i) => (
              <div
                key={d}
                className={`rounded border border-border p-3 text-center ${
                  i === 1 ? "bg-primary text-primary-foreground border-primary" : "bg-card"
                }`}
              >
                <div className="font-mono text-[10px] uppercase tracking-wider opacity-70">{d}</div>
                <div className="font-serif text-lg md:text-xl">{n}</div>
              </div>
            ))}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Meal card */}
            <div className="rounded border border-border bg-card p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="text-eyebrow text-muted-foreground">Tonight&apos;s supper</div>
                <span className="font-mono text-[10px] text-primary">in 2h</span>
              </div>
              <div className="font-serif text-xl mb-1">Lentil &amp; barley pottage</div>
              <div className="text-sm text-muted-foreground mb-4">Mara cooks · Ines lays the table</div>
              <div className="flex flex-wrap gap-1.5">
                {["lentils", "barley", "leek", "thyme", "celery"].map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] px-2 py-1 rounded-full bg-secondary text-foreground/70 border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Chores card */}
            <div className="rounded border border-border bg-card p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="text-eyebrow text-muted-foreground">Today&apos;s chores</div>
                <span className="font-mono text-[10px] text-muted-foreground">2 of 5 done</span>
              </div>
              <div className="space-y-2.5">
                {[
                  ["Compost out", "Ælric", true],
                  ["Sourdough fed", "Mara", true],
                  ["Hens — water", "Ines", false],
                  ["Mend the gate latch", "Ælric", false],
                  ["Library books due", "Tomás", false],
                ].map(([task, who, done]) => (
                  <div key={task as string} className="flex items-center gap-3">
                    <span
                      className={`size-4 rounded border border-border flex items-center justify-center ${
                        done ? "bg-foreground border-foreground" : "bg-card"
                      }`}
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
                      className={`text-sm flex-1 ${
                        done ? "line-through text-muted-foreground" : "text-foreground"
                      }`}
                    >
                      {task as string}
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground">{who as string}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

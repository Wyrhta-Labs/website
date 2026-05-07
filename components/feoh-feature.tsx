"use client"

import { Reveal } from "./reveal"
import { Plug, Wallet, FileText, ArrowRight } from "lucide-react"

const POINTS = [
  {
    icon: Plug,
    title: "Attaches to Heorth.",
    body:
      "Feoh runs as a first-class module beside the hearth — same household, same auth, same MCP surface. Heorth keeps the calendar; Feoh keeps the books. Either can be self-hosted alone, but together they read like one quiet system.",
  },
  {
    icon: Wallet,
    title: "Envelopes, bills, and fair splits.",
    body:
      "Double-entry under the hood, envelopes on top. Recurring bills, joint accounts split fairly between the people who live there, savings goals that breathe with the season. None of it leaving your home.",
  },
  {
    icon: FileText,
    title: "Plain text in, plain text out.",
    body:
      "Every transaction round-trips through CSV and a simple, readable ledger format. No proprietary export, no annual lock-in — your books stay yours when the software is closed for the night.",
  },
]

const ENVELOPES: { name: string; spent: number; budget: number; tone: "primary" | "amber" | "sage" | "ink" }[] = [
  { name: "Groceries", spent: 412, budget: 600, tone: "primary" },
  { name: "Heating oil", spent: 318, budget: 350, tone: "amber" },
  { name: "Children", spent: 145, budget: 200, tone: "sage" },
  { name: "Garden", spent: 22, budget: 80, tone: "ink" },
]

const BILLS = [
  { name: "Stadtwerke Castrop", date: "May 14", amount: "€78,40" },
  { name: "Kreissparkasse — mortgage", date: "May 28", amount: "€612,00" },
  { name: "Rundfunkbeitrag", date: "May 30", amount: "€55,08" },
]

export function FeohFeature() {
  return (
    <section
      id="feoh"
      className="relative py-20 md:py-32 border-t border-border"
    >
      <div className="container-custom">
        {/* Section header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-14 md:mb-20">
          <div className="md:col-span-5">
            <Reveal>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <div className="text-eyebrow text-primary">§ 04 — Feoh</div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground border border-border rounded-full px-2 py-0.5">
                  Module · attaches to Heorth
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-serif text-4xl md:text-6xl tracking-tight leading-[1] text-balance">
                A small set of books for the household.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7 md:pt-6">
            <Reveal delay={0.1}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
                Feoh is the finance module that attaches to Heorth — envelopes
                on the kitchen wall, double-entry behind the cupboard.
                Recurring bills, joint expenses split fairly between the people
                you live with, savings goals that breathe with the seasons. It
                is API-first like Heorth, ships its own MCP surface, and
                quietly inherits the household&apos;s auth and self-hosted
                setup. Built in the open.
              </p>
              <a
                href="https://github.com/wyrhta-labs/feoh"
                className="mt-6 inline-flex items-center gap-2 text-foreground border-b border-foreground/30 hover:border-foreground pb-0.5 text-sm font-medium"
              >
                Read the README
                <ArrowRight size={14} />
              </a>
              <dl className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4 pt-6 border-t border-border">
                <div>
                  <dt className="text-eyebrow text-muted-foreground mb-1.5">Etymology</dt>
                  <dd className="font-mono text-xs text-foreground">
                    feoh · OE wealth, cattle
                  </dd>
                </div>
                <div>
                  <dt className="text-eyebrow text-muted-foreground mb-1.5">Surface</dt>
                  <dd className="font-mono text-xs text-foreground">REST · MCP · CSV</dd>
                </div>
                <div>
                  <dt className="text-eyebrow text-muted-foreground mb-1.5">First beta</dt>
                  <dd className="font-mono text-xs text-foreground">0.1 · Q1 2027</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>

        {/* Mockup + points */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <Reveal delay={0.1} className="lg:col-span-7">
            <FeohMockup />
          </Reveal>
          <div className="lg:col-span-5 flex flex-col gap-3 md:gap-4">
            {POINTS.map((p, i) => (
              <Reveal key={p.title} delay={0.15 + i * 0.06}>
                <div className="rounded-md border border-border bg-card p-5 md:p-6">
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

function FeohMockup() {
  // Tone color per envelope — within the existing palette tokens, with one
  // warm amber sibling to Ember to give the four cards distinct progress hues.
  const TONE_BG: Record<string, string> = {
    primary: "var(--primary)",
    amber: "#a07535",
    sage: "#7a8b6f",
    ink: "var(--foreground)",
  }

  return (
    <div className="rounded-md border border-border bg-card overflow-hidden h-full shadow-[0_30px_60px_-30px_rgba(31,27,23,0.18)]">
      {/* Title bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-background/60">
        <div className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
          <span className="size-2 rounded-full bg-primary" />
          feoh · attached to heorth
        </div>
        <div className="font-mono text-[10px] text-muted-foreground hidden sm:block">
          self-hosted · v0.2.1 · mcp on
        </div>
      </div>

      {/* Body */}
      <div className="p-6 md:p-7">
        {/* Month summary */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <div className="text-eyebrow text-muted-foreground">Household ledger</div>
            <h4 className="font-serif text-2xl md:text-3xl tracking-tight">
              May 2026
            </h4>
          </div>
          <div className="text-right">
            <div className="font-mono text-[10px] text-muted-foreground tracking-wider">
              spent · budget
            </div>
            <div className="mt-1 font-serif text-2xl">
              <span className="text-foreground">€897</span>
              <span className="font-light text-muted-foreground"> · €1,230</span>
            </div>
          </div>
        </div>

        {/* Envelopes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {ENVELOPES.map((e) => {
            const pct = Math.min(100, Math.round((e.spent / e.budget) * 100))
            return (
              <div
                key={e.name}
                className="rounded border border-border bg-background/40 p-4"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <div className="font-serif text-base">{e.name}</div>
                  <div className="font-mono text-[10px] text-muted-foreground">
                    €{e.spent} / €{e.budget}
                  </div>
                </div>
                <div
                  className="h-1.5 rounded-full bg-secondary overflow-hidden"
                  role="progressbar"
                  aria-valuenow={pct}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${e.name} envelope, ${pct}% spent`}
                >
                  <div
                    className="h-full"
                    style={{ width: `${pct}%`, background: TONE_BG[e.tone] }}
                  />
                </div>
              </div>
            )
          })}
        </div>

        {/* Recurring bills */}
        <div className="rounded border border-border bg-background/40 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="text-eyebrow text-muted-foreground">
              Recurring · this month
            </div>
            <span className="font-mono text-[10px] text-muted-foreground">
              3 bills
            </span>
          </div>
          <ul className="divide-y divide-border">
            {BILLS.map((b) => (
              <li
                key={b.name}
                className="flex items-center justify-between py-2.5 text-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-muted-foreground tracking-wider w-14">
                    {b.date}
                  </span>
                  <span className="text-foreground">{b.name}</span>
                </div>
                <span className="font-mono text-xs text-foreground">
                  {b.amount}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

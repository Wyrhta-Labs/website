"use client"

import { Reveal } from "./reveal"
import { Database, Zap, Lock, ArrowRight } from "lucide-react"

const POINTS = [
  {
    icon: Database,
    title: "API-first by design",
    body: "Every relationship, touchpoint, and note reachable through a small, well-versioned REST and gRPC surface. The web UI is one client among many; the human is welcome but not assumed.",
  },
  {
    icon: Zap,
    title: "Agent-ready over MCP",
    body: "Ships with a Model Context Protocol server so AI agents and your own LLM-driven assistants can read and write the ledger as a first-class backend — same auth, same audit trail as the UI.",
  },
  {
    icon: Lock,
    title: "Yours, end-to-end",
    body: "A single TypeScript service with PostgreSQL beneath. Encrypted at rest. No telemetry, no accounts you don't host yourself. Kept small and readable on purpose.",
  },
]

export function KithLedgerFeature() {
  return (
    <section id="kithledger" className="relative py-20 md:py-32 border-t border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-14 md:mb-20">
          <div className="md:col-span-5">
            <Reveal>
              <div className="text-eyebrow text-primary mb-4">§ 03 — KithLedger</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-serif text-4xl md:text-6xl tracking-tight leading-[1] text-balance">
                A small ledger for the people in your life.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7 md:pt-6">
            <Reveal delay={0.1}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
                Friendships need tending — birthdays remembered, debts settled,
                last-met dates. KithLedger is the quiet database underneath:
                API-first, with a thin UI for daily use and an MCP server so
                AI agents can keep the ledger alongside you. It started as a
                service Heorth needed, and became a project of its own.
              </p>
              <a
                href="https://github.com/wyrhta-labs/kithledger"
                className="mt-6 inline-flex items-center gap-2 text-foreground border-b border-foreground/30 hover:border-foreground pb-0.5 text-sm font-medium"
              >
                Read the API docs
                <ArrowRight size={14} />
              </a>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Code panel */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <CodeBlock />
          </Reveal>

          {/* Points */}
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
                      <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
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

function CodeBlock() {
  return (
    <div className="rounded-md border border-border bg-foreground text-background overflow-hidden h-full">
      <div className="flex items-center justify-between px-5 py-3 border-b border-background/10">
        <div className="flex items-center gap-2 font-mono text-[11px] text-background/60">
          <span className="size-2 rounded-full bg-primary" />
          POST /v1/kith/{"{id}"}/touchpoints
        </div>
        <div className="font-mono text-[10px] text-background/40 hidden sm:block">curl · 200 OK</div>
      </div>
      <div className="p-5 md:p-7 font-mono text-[13px] leading-relaxed overflow-x-auto">
        <pre className="text-background/90"><span className="text-background/40"># record a coffee with an old friend</span>
{`
`}<span className="text-primary">curl</span>{" "}<span className="text-background/60">-X</span>{" "}POST https://kith.local/v1/kith/grete-w/touchpoints {"\\"}
{`
`}{"  "}<span className="text-background/60">-H</span>{" "}<span className="text-background/80">{`"Authorization: Bearer $KITH_TOKEN"`}</span>{" "}{"\\"}
{`
`}{"  "}<span className="text-background/60">-H</span>{" "}<span className="text-background/80">{`"Content-Type: application/json"`}</span>{" "}{"\\"}
{`
`}{"  "}<span className="text-background/60">-d</span>{" "}<span className="text-background/80">{`'{`}</span>
{`
`}{"     "}<span className="text-primary">"kind"</span>: <span className="text-background/80">"coffee"</span>,
{`
`}{"     "}<span className="text-primary">"at"</span>: <span className="text-background/80">"2026-04-22T10:30:00Z"</span>,
{`
`}{"     "}<span className="text-primary">"place"</span>: <span className="text-background/80">"Bakeri Grünerløkka"</span>,
{`
`}{"     "}<span className="text-primary">"notes"</span>: <span className="text-background/80">"asked after her mother — send a card"</span>,
{`
`}{"     "}<span className="text-primary">"warmth"</span>: <span className="text-primary">+2</span>
{`
`}{"  "}<span className="text-background/80">{`}'`}</span>
{`

`}<span className="text-background/40"># → 201 Created</span>
{`
`}<span className="text-background/40"># next nudge: send card · due 2026-04-29</span></pre>
      </div>
    </div>
  )
}

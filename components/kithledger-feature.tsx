"use client"

import { Reveal } from "./reveal"
import { Database, Wrench, Lock, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const POINTS = [
  {
    icon: Database,
    title: "API-first, and currently only that.",
    body: "A web UI and a round of security hardening are tagged, but KithLedger is reached over its API by the hub, with a service key. It holds no member accounts of its own — under the identity model, people exist once, in Heorth.",
  },
  {
    icon: Wrench,
    title: "The address book behind the boiler service.",
    body: "Its first real job in the constellation is unglamorous: when the property domain lands, the contacts for the people who come and fix things are backed by KithLedger rather than by a second, half-maintained address book inside Heorth.",
  },
  {
    icon: Lock,
    title: "One move away from deploying.",
    body: "Its MCP server currently speaks stdio. Moving it to HTTP is the prerequisite for it running as a satellite at all — which makes it the gate on the whole property phase, not a detail.",
  },
]

const VISIBILITY = [
  {
    level: "private",
    who: "The member who owns it",
    note: "Invisible to everyone else, including the household dashboard.",
  },
  {
    level: "shared",
    who: "A named subset of members",
    note: "Visible to the people it was explicitly shared with, and no one further.",
  },
  {
    level: "household",
    who: "Everyone in the household",
    note: "The default. Most of what a household records about people is not a secret.",
  },
]

export function KithLedgerFeature() {
  return (
    <section id="kithledger" className="relative py-20 md:py-32 border-t border-border bg-secondary/40">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-14 md:mb-20">
          <div className="md:col-span-5">
            <Reveal>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <div className="text-eyebrow text-primary">§ 05 — KithLedger</div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground border border-border rounded-full px-2 py-0.5">
                  Independent satellite
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-serif text-4xl md:text-6xl tracking-tight leading-[1] text-balance">
                A record of the people a household deals with.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7 md:pt-6">
            <Reveal delay={0.1}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
                <em className="text-foreground not-italic font-medium">Kith</em>{" "}
                — the older half of &ldquo;kith and kin&rdquo;, meaning the
                people you know well enough to be at ease with. KithLedger is
                the service that keeps track of them: family and friends, and
                equally the plumber, the piano teacher, and whoever last
                serviced the boiler. It is API-first, consumed by the hub, and
                not yet running anywhere.
              </p>
              <a
                href="/roadmap#services"
                className="mt-6 inline-flex items-center gap-2 text-foreground border-b border-foreground/30 hover:border-foreground pb-0.5 text-sm font-medium"
              >
                Where it sits in the constellation
                <ArrowRight size={14} />
              </a>
              <dl className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4 pt-6 border-t border-border">
                <div>
                  <dt className="text-eyebrow text-muted-foreground mb-1.5">Auth</dt>
                  <dd className="font-mono text-xs text-foreground">Service key only</dd>
                </div>
                <div>
                  <dt className="text-eyebrow text-muted-foreground mb-1.5">Surface</dt>
                  <dd className="font-mono text-xs text-foreground">REST · MCP (stdio)</dd>
                </div>
                <div>
                  <dt className="text-eyebrow text-muted-foreground mb-1.5">Status</dt>
                  <dd className="font-mono text-xs text-foreground">v0.2.0 · not deployed</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Privacy model — proposed */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <PrivacyPanel />
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
                      <h3 className="font-serif text-xl leading-snug">{p.title}</h3>
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

function PrivacyPanel() {
  return (
    <div className="rounded-md border border-dashed border-border bg-card overflow-hidden h-full">
      <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-background/60">
        <div className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
          <span className="size-2 rounded-full border border-primary" />
          per-member access control
        </div>
        <span className="font-mono text-[10px] uppercase tracking-wider text-primary border border-dashed border-primary/50 rounded-full px-2 py-0.5">
          proposed
        </span>
      </div>

      <div className="p-6 md:p-8">
        <h3 className="font-serif text-2xl tracking-tight">
          Privacy as a property of the data, not the interface.
        </h3>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          A shared household record of people has an obvious problem: not
          everything one member keeps about someone should be visible to
          everyone they live with. The proposed answer puts visibility on the
          records themselves — on both the nodes and the edges between them —
          so hiding something is enforced by the query rather than by a screen
          choosing not to render it.
        </p>

        <ul className="mt-6 space-y-2.5">
          {VISIBILITY.map((v, i) => (
            <li
              key={v.level}
              className="rounded border border-border bg-background/40 p-4"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span
                  className={cn(
                    "font-mono text-[11px] tracking-wider rounded-full border px-2 py-0.5",
                    i === 2
                      ? "border-primary/40 bg-primary/10 text-primary"
                      : "border-border text-muted-foreground",
                  )}
                >
                  {v.level}
                </span>
                <span className="text-sm text-foreground">{v.who}</span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                {v.note}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-6 pt-4 border-t border-border text-xs text-muted-foreground leading-relaxed">
          The hard part is not hiding a record — it is making sure the shape of
          the graph cannot leak it. Edge counts, path lengths, and traversals
          all have to refuse to imply the existence of something a caller
          cannot see. None of this is built: it depends entirely on member
          tokens reaching KithLedger, which is a later phase.
        </p>
      </div>
    </div>
  )
}

"use client"

import { Reveal } from "./reveal"
import { Scissors, KeySquare, Sprout, ArrowRight, ArrowDown } from "lucide-react"

const POINTS = [
  {
    icon: Scissors,
    title: "Split while the split was still boring.",
    body:
      "Finance used to be a module inside Heorth. Doing the extraction after deployment would have meant a data migration, a bigger surface to carve, and a household noticing the seams. Doing it now meant none of those — no production data to move, and Feoh at the smallest it will ever be.",
  },
  {
    icon: KeySquare,
    title: "Reached like a stranger, on purpose.",
    body:
      "Heorth's finance screens proxy across to Feoh over its API with a service key — a real process boundary that cannot be quietly cheated around. Feoh holds no member accounts of its own; members exist once, in the hub. That client is now the template for how every satellite gets consumed.",
  },
  {
    icon: Sprout,
    title: "Grows only after the house is lived in.",
    body:
      "Checking accounts, investments, and retirement projections are all on the far side of deployment, in the unordered set. What real use turns out to demand will reorder that list more usefully than deciding now would.",
  },
]

export function FeohFeature() {
  return (
    <section id="feoh" className="relative py-20 md:py-32 border-t border-border">
      <div className="container-custom">
        {/* Section header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-14 md:mb-20">
          <div className="md:col-span-5">
            <Reveal>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <div className="text-eyebrow text-primary">§ 04 — Feoh</div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground border border-border rounded-full px-2 py-0.5">
                  Independent satellite
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-serif text-4xl md:text-6xl tracking-tight leading-[1] text-balance">
                The first piece to leave the hub.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7 md:pt-6">
            <Reveal delay={0.1}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
                Feoh is the household&apos;s finance service — and, as of the
                extraction, its own repository, API, MCP server, and database
                rather than a folder inside Heorth. The accompanying Heorth
                release was labelled, deliberately, as no functional change:
                the acceptance test for the whole exercise was that the
                household could not tell it had happened.
              </p>
              <a
                href="/roadmap#phases"
                className="mt-6 inline-flex items-center gap-2 text-foreground border-b border-foreground/30 hover:border-foreground pb-0.5 text-sm font-medium"
              >
                See the extraction phase
                <ArrowRight size={14} />
              </a>
              <dl className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4 pt-6 border-t border-border">
                <div>
                  <dt className="text-eyebrow text-muted-foreground mb-1.5">Etymology</dt>
                  <dd className="font-mono text-xs text-foreground">ᚠ feoh · movable wealth</dd>
                </div>
                <div>
                  <dt className="text-eyebrow text-muted-foreground mb-1.5">Surface</dt>
                  <dd className="font-mono text-xs text-foreground">REST · MCP</dd>
                </div>
                <div>
                  <dt className="text-eyebrow text-muted-foreground mb-1.5">Status</dt>
                  <dd className="font-mono text-xs text-foreground">v0.1.0 · private</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>

        {/* Diagram + points */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <Reveal delay={0.1} className="lg:col-span-7">
            <SatelliteDiagram />
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
                      <h3 className="font-serif text-xl leading-snug">{p.title}</h3>
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

/** How the hub reaches a satellite. This is the pattern, not a screenshot. */
function SatelliteDiagram() {
  return (
    <div className="rounded-md border border-border bg-card overflow-hidden h-full shadow-[0_30px_60px_-30px_rgba(31,27,23,0.18)]">
      <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-background/60">
        <div className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
          <span className="size-2 rounded-full bg-primary" />
          the satellite pattern
        </div>
        <div className="font-mono text-[10px] text-muted-foreground hidden sm:block">
          established by the Feoh extraction
        </div>
      </div>

      <div className="p-6 md:p-8">
        {/* Hub */}
        <div className="rounded border border-border bg-background/40 p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="text-eyebrow text-primary">Heorth · the hub</div>
            <span className="font-mono text-[10px] text-muted-foreground">
              v0.3.0
            </span>
          </div>
          <div className="text-sm text-foreground leading-relaxed">
            Holds the members. Renders the finance screens. Owns none of the
            finance data.
          </div>
          <div className="mt-4 rounded border border-border bg-card px-4 py-3">
            <div className="font-mono text-[11px] text-muted-foreground">
              <span className="text-primary">FeohClient</span>
              <span className="mx-2 opacity-50">—</span>
              the proxy, and the template for the next satellite
            </div>
          </div>
        </div>

        {/* Boundary */}
        <div className="flex flex-col items-center py-4">
          <ArrowDown size={16} className="text-muted-foreground" />
          <div className="mt-2 rounded-full border border-dashed border-primary/50 px-3 py-1">
            <span className="font-mono text-[10px] uppercase tracking-wider text-primary">
              service key · process boundary
            </span>
          </div>
          <div className="mt-2 font-mono text-[10px] text-muted-foreground">
            no shared database · no shared process
          </div>
        </div>

        {/* Satellite */}
        <div className="rounded border border-border bg-background/40 p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="text-eyebrow text-foreground">Feoh · the satellite</div>
            <span className="font-mono text-[10px] text-muted-foreground">
              v0.1.0
            </span>
          </div>
          <div className="text-sm text-foreground leading-relaxed mb-4">
            Its own everything. Answers to an API key, not to a person.
          </div>
          <ul className="grid grid-cols-2 gap-2">
            {["own repository", "own REST API", "own MCP server", "own database"].map(
              (x) => (
                <li
                  key={x}
                  className="rounded border border-border bg-card px-3 py-2 font-mono text-[11px] text-muted-foreground"
                >
                  {x}
                </li>
              ),
            )}
          </ul>
        </div>

        <p className="mt-6 pt-4 border-t border-border text-xs text-muted-foreground leading-relaxed">
          KithLedger is consumed the same way. Its own move from a stdio MCP
          server to HTTP is what stands between it and deploying as a satellite
          alongside Feoh.
        </p>
      </div>
    </div>
  )
}

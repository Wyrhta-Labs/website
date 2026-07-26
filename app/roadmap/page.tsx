import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, Github, Rss } from "lucide-react"
import {
  PageShell,
  PageHeader,
  PageBody,
  Section,
  Lede,
  Mono,
  type TocItem,
} from "@/components/page-shell"
import { RoadmapTimeline, ServiceTable } from "@/components/roadmap-timeline"
import { ADRS, OUT_OF_SCOPE } from "@/lib/roadmap-data"

export const metadata: Metadata = {
  title: "Roadmap — Wyrhta Labs",
  description:
    "Where the work actually stands: the foundation and the Feoh extraction are done, the acceptance release is code-complete but not deployed, and nothing goes live until the household adopts it. Phases, not dates.",
}

const toc: TocItem[] = [
  { id: "now", n: "01", label: "Where this is" },
  { id: "services", n: "02", label: "The four services" },
  { id: "phases", n: "03", label: "The phases" },
  { id: "decisions", n: "04", label: "Decisions behind it" },
  { id: "not", n: "05", label: "What this is not" },
  { id: "rules", n: "06", label: "How this page changes" },
  { id: "shape", n: "07", label: "How to shape it" },
]

export default function RoadmapPage() {
  return (
    <PageShell>
      <PageHeader
        kind="§ Project · Roadmap"
        title="Phases, not dates."
        dek="The foundation is laid and finance has been extracted into its own service. The release meant to get this adopted at home is written and tested — and not deployed. Nothing here is live yet, and this page is careful to say so."
        crumbs={[{ label: "Roadmap" }]}
        meta={[
          { label: "Stage", value: "Pre-launch" },
          { label: "Phases done", value: "0 and 1" },
          { label: "Current", value: "Phase 2 · code-complete" },
          { label: "Updated", value: "July 26, 2026" },
        ]}
      />
      <PageBody
        toc={toc}
        closing={
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href="https://github.com/wyrhta-labs"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-border bg-card p-5 hover:border-primary/40 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <Github size={16} className="text-foreground" />
                <ArrowUpRight
                  size={14}
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                />
              </div>
              <div className="mt-3 font-serif text-lg tracking-tight">
                Read @wyrhta/core
              </div>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                The foundation library is the public one. The services open up
                as they become fit to read.
              </p>
            </a>
            <Link
              href="/journal"
              className="rounded-lg border border-border bg-card p-5 hover:border-primary/40 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <Rss size={16} className="text-foreground" />
                <ArrowUpRight
                  size={14}
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                />
              </div>
              <div className="mt-3 font-serif text-lg tracking-tight">
                Read the journal
              </div>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Notes on what was decided and why, posted when a phase actually
                moves.
              </p>
            </Link>
          </div>
        }
      >
        <Section id="now" n="01" title="Where this is">
          <Lede>
            Pre-launch. A good deal is built; none of it is deployed, and it is
            not a product you can run yet.
          </Lede>
          <p>
            Three things are true at once, and it is worth separating them.
            The foundation library is done and public. The Feoh extraction is
            done — finance now lives in its own service. And the release
            designed to get this adopted at home is{" "}
            <em className="text-foreground">code-complete</em>: written,
            tested, and sitting there. What stands between it and being real is
            a real-tenant smoke test, a screen on a kitchen wall, and one
            household deciding it is worth using.
          </p>
          <p>
            That last one is the actual gate. A release here is not ready when
            the tests pass — it is ready when the people who live in the house
            would rather use it than not. Until then this reads as{" "}
            <em className="text-foreground">
              in active development toward a first at-home release
            </em>
            , and any wording on this site that sounds more confident than that
            is a bug.
          </p>
          <p>
            There are no quarters on this page, and that is deliberate. The
            plan is a sequence of phases, each gated on the one before, and
            attaching dates to it would only produce a set of promises to
            quietly walk back. The order is the commitment. The calendar is
            not.
          </p>
        </Section>

        <Section id="services" n="02" title="The four services">
          <p>
            One foundation library and three services — a hub and two
            satellites, each an independent repository rather than a folder in
            a monorepo. Everything builds on{" "}
            <Mono>@wyrhta/core</Mono>, consumed as a pinned GitHub tag, so no
            service ever gets a foundation change it did not ask for.
          </p>
          <div className="mt-6">
            <ServiceTable />
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Heorth is the only human-facing surface for now. KithLedger and
            Feoh are API-first satellites that Heorth consumes over their own
            APIs, using service keys.
          </p>
        </Section>

        <Section id="phases" n="03" title="The phases">
          <p>
            Each phase is gated on the one above it. Two are behind; one is
            written but unproven; the rest are ahead, and the further down the
            page they sit, the less anyone should trust the detail.
          </p>
          <div className="mt-8">
            <RoadmapTimeline />
          </div>
        </Section>

        <Section id="decisions" n="04" title="Decisions behind it">
          <p>
            Four architecture decisions do most of the load-bearing work.
            Two are settled; two are still proposals — design direction rather
            than committed features, with nothing built for either until its
            phase arrives.
          </p>
          <ol className="mt-6 space-y-4">
            {ADRS.map((adr) => (
              <li
                key={adr.n}
                className="rounded-lg border border-border bg-card p-5 md:p-6"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-eyebrow text-muted-foreground">
                    ADR {adr.n}
                  </span>
                  <span
                    className={
                      adr.status === "accepted"
                        ? "font-mono text-[10px] uppercase tracking-wider rounded-full border border-foreground/30 bg-foreground/[0.06] text-foreground/70 px-2 py-0.5"
                        : "font-mono text-[10px] uppercase tracking-wider rounded-full border border-dashed border-primary/50 text-primary px-2 py-0.5"
                    }
                  >
                    {adr.status}
                  </span>
                </div>
                <h3 className="mt-2 font-serif text-xl tracking-tight leading-snug">
                  {adr.title}
                </h3>
                <p className="mt-2.5 text-sm text-foreground/80 leading-relaxed">
                  {adr.summary}
                </p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="not" n="05" title="What this is not">
          <p>
            A roadmap is as much what it refuses. These are ruled out until
            further notice — not deprioritised, not coming later in the year,
            simply not being built.
          </p>
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {OUT_OF_SCOPE.map((o) => (
              <li
                key={o.label}
                className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-2 sm:gap-6 py-4"
              >
                <div className="font-serif text-lg tracking-tight text-foreground/70 line-through decoration-foreground/25">
                  {o.label}
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {o.note}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="rules" n="06" title="How this page changes">
          <p>
            This page is a downstream rendering of a strategy document kept in
            a separate repository. It does not get to invent anything.
          </p>
          <ol className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                n: "01",
                title: "The strategy document wins.",
                body: "If this page and the strategy record ever disagree, this page is the one that is wrong, and it gets corrected — never the other way around.",
              },
              {
                n: "02",
                title: "Built is not shipped.",
                body: "Code-complete, deployed, and adopted are three different states, and this page names which one applies. Nothing gets described as shipping before it runs in a real house.",
              },
              {
                n: "03",
                title: "Own household first.",
                body: "The primary user for the next year or so is one household. Other self-hosters are a gate to pass near 1.0, not an audience to design for now.",
              },
              {
                n: "04",
                title: "No dates to slip.",
                body: "Phases are ordered and gated, not scheduled. Where something is genuinely unordered — everything past Phase 4 — the page says so rather than inventing a sequence.",
              },
            ].map((p) => (
              <li
                key={p.n}
                className="rounded-lg border border-border bg-card p-5"
              >
                <div className="text-eyebrow text-muted-foreground">
                  Rule · {p.n}
                </div>
                <div className="mt-2 font-serif text-lg tracking-tight leading-snug">
                  {p.title}
                </div>
                <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                  {p.body}
                </p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="shape" n="07" title="How to shape it">
          <p>
            Phase 3 has to happen before anything below it gets reordered, and
            real use will rearrange that list more than any suggestion could.
            That said, two things genuinely help:
          </p>
          <ul className="mt-4 space-y-4">
            <li className="flex items-start gap-4">
              <Github size={16} className="mt-1 text-foreground shrink-0" />
              <div>
                <div className="font-serif text-base tracking-tight">
                  Open an issue on the foundation library.
                </div>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  <Mono>@wyrhta/core</Mono> is the public repository and the
                  place conversation happens. It is demand-driven on purpose —
                  things land in it when a consumer actually needs them, so a
                  concrete need is more useful than a feature request.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Rss size={16} className="mt-1 text-foreground shrink-0" />
              <div>
                <div className="font-serif text-base tracking-tight">
                  Argue with a decision.
                </div>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The two proposed decisions above are the ones still open. If
                  you have run into the problems they describe, that is worth
                  more than agreement — see{" "}
                  <Link
                    href="/contact"
                    className="border-b border-foreground/30 hover:border-foreground"
                  >
                    contact
                  </Link>
                  .
                </p>
              </div>
            </li>
          </ul>
        </Section>
      </PageBody>
    </PageShell>
  )
}

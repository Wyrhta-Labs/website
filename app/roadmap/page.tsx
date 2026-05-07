import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, Github, Mail, Rss } from "lucide-react"
import {
  PageShell,
  PageHeader,
  PageBody,
  Section,
  Lede,
  Mono,
  type TocItem,
} from "@/components/page-shell"
import { RoadmapTimeline } from "@/components/roadmap-timeline"
import { BEYOND, MILESTONES, QUARTERS } from "@/lib/roadmap-data"

export const metadata: Metadata = {
  title: "Roadmap — Wyrhta Labs",
  description:
    "What is being built, when, and why — for Heorth, KithLedger, and Feoh. Starting with the 0.1 beta of Heorth and KithLedger in Q3 2026, Feoh in Q1 2027, and continuing through general availability.",
}

const toc: TocItem[] = [
  { id: "now", n: "01", label: "Now & next" },
  { id: "timeline", n: "02", label: "Timeline" },
  { id: "heorth", n: "03", label: "Heorth, by quarter" },
  { id: "kithledger", n: "04", label: "KithLedger, by quarter" },
  { id: "feoh", n: "05", label: "Feoh, by quarter" },
  { id: "beyond", n: "06", label: "Beyond 1.0" },
  { id: "principles", n: "07", label: "Working principles" },
  { id: "shape", n: "08", label: "How to shape it" },
]

export default function RoadmapPage() {
  return (
    <PageShell>
      <PageHeader
        kind="§ Project · Roadmap"
        title="A patient plan, written in pencil."
        dek="What is being built, when, and why — for Heorth, KithLedger, and Feoh. Heorth and KithLedger ship their first 0.1 beta in Q3 2026; Feoh, the finance module that attaches to Heorth, follows in Q1 2027. The year that follows is shown below, quarter by quarter."
        crumbs={[{ label: "Roadmap" }]}
        meta={[
          { label: "Cadence", value: "One release per quarter" },
          { label: "First beta", value: "Q3 2026" },
          { label: "Target 1.0", value: "Q3 2027" },
          { label: "Updated", value: "April 28, 2026" },
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
                Follow on GitHub
              </div>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Issues, milestones, and the public project board live alongside
                the code.
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
                A monthly note in plain prose on what shipped, what slipped, and
                what was learned.
              </p>
            </Link>
          </div>
        }
      >
        <Section id="now" n="01" title="Now & next">
          <Lede>
            We are six weeks from the first public beta. Three projects, one
            cadence, written down so it can be argued with.
          </Lede>
          <p>
            The roadmap below is deliberately small. One quarter, one
            release, per project — paired so the pieces grow together.
            Heorth is the household; KithLedger is the address book of
            kin and friendships beneath it; Feoh is the household&apos;s
            books — a finance module that attaches to Heorth and lands
            two quarters later, once the kitchen has settled. Each
            release of one usually unlocks something in another.
          </p>
          <p>
            Today we are inside <Mono>Q2 2026</Mono>, finishing the
            scaffolding: data model, auth, the MCP server, and a
            kitchen-wall layout that runs on a five-year-old tablet. The
            first <Mono>0.1 beta</Mono> ships in <Mono>Q3 2026</Mono>{" "}
            (July — September), with weekly notes on the journal until
            then.
          </p>
          <p>
            Dates are pencilled, not inked. If a quarter slips, we say so on
            the journal in the same week it slips, and the table here moves
            with it.
          </p>
        </Section>

        <Section id="timeline" n="02" title="Timeline">
          <p>
            Six quarters, three lanes, thirteen releases. The dashed line
            marks today; the bands above each lane describe the work that
            runs continuously beneath the milestones.
          </p>
          <div className="mt-6">
            <RoadmapTimeline />
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Each bar is a single release. Beta bars are dashed; GA bars are
            ringed. Hover the version on GitHub for the full milestone
            issue list.
          </p>
        </Section>

        <Section id="heorth" n="03" title="Heorth, by quarter">
          <p>
            Heorth grows from a single hearth: a working calendar, a chore
            board, a meal plan. Each quarter adds one room to the house,
            and finishes the previous one.
          </p>
          <ProjectQuarters project="heorth" />
        </Section>

        <Section id="kithledger" n="04" title="KithLedger, by quarter">
          <p>
            KithLedger stays small on purpose. It is an API and a thin UI
            for the people in your life, designed to be embedded in
            Heorth, in your own dashboard, or in a journaling app you have
            yet to write.
          </p>
          <ProjectQuarters project="kithledger" />
        </Section>

        <Section id="feoh" n="05" title="Feoh, by quarter">
          <p>
            Feoh is the household&apos;s books — a finance module that
            attaches to Heorth and runs beside it. Its 0.1 beta lands in{" "}
            <Mono>Q1 2027</Mono>, the same quarter as Heorth&apos;s
            budgets layer, so the two settle together. Three releases on
            this page; v1.0 sits in &ldquo;Beyond 1.0&rdquo; below, paired
            with Heorth&apos;s.
          </p>
          <ProjectQuarters project="feoh" />
        </Section>

        <Section id="beyond" n="06" title="Beyond 1.0">
          <p>
            1.0 is not the end; it is the first stable surface. Past
            general availability we slow further, ship less often, and
            invest in the parts of the project that are hardest to
            change later — federation, native clients, and an honest
            plugin SDK.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {BEYOND.map((b) => (
              <div
                key={b.project}
                className="rounded-lg border border-border bg-card p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="text-eyebrow text-primary">
                    {b.project === "heorth"
                      ? "Heorth · 1.x"
                      : b.project === "kithledger"
                        ? "KithLedger · 1.x"
                        : "Feoh · 1.x"}
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground tracking-wider">
                    Beyond Q3 2027
                  </span>
                </div>
                <ul className="mt-4 space-y-3">
                  {b.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-foreground/85 leading-relaxed"
                    >
                      <span
                        className="mt-2 inline-block h-1 w-3 bg-foreground/40 shrink-0"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="principles" n="07" title="Working principles">
          <p>
            A roadmap is only useful if you know how it gets revised.
            These four rules govern this page; all four can be
            renegotiated, but only in writing.
          </p>
          <ol className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                n: "01",
                title: "One release per quarter, per project.",
                body: "If we cannot fit a release into a quarter, the release shrinks. If it still cannot fit, the quarter slips and the journal explains why.",
              },
              {
                n: "02",
                title: "API before UI.",
                body: "Every milestone ships its endpoints, OpenAPI, and MCP surface before the screens that consume them. Agents are first-class users.",
              },
              {
                n: "03",
                title: "No dark releases.",
                body: "Work-in-progress lives behind feature flags in the open source. There are no private branches with the 'real' product.",
              },
              {
                n: "04",
                title: "Slip in public.",
                body: "If a date moves, the journal entry that announces the slip is published in the week it happens, with the new date and the reason.",
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

        <Section id="shape" n="08" title="How to shape it">
          <p>
            This roadmap is short on purpose, and a deliberate amount of
            it is still negotiable. There are three good ways to
            influence what lands in which quarter:
          </p>
          <ul className="mt-4 space-y-4">
            <li className="flex items-start gap-4">
              <Github size={16} className="mt-1 text-foreground shrink-0" />
              <div>
                <div className="font-serif text-base tracking-tight">
                  Open an issue on the milestone you care about.
                </div>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Each release has a GitHub milestone with the same name.
                  Comments on those threads are read every Friday.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Mail size={16} className="mt-1 text-foreground shrink-0" />
              <div>
                <div className="font-serif text-base tracking-tight">
                  Write a letter to the journal.
                </div>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Reply to any monthly note from{" "}
                  <Mono>journal@wyrhta.dev</Mono>; thoughtful replies
                  often become next month's entry — and sometimes a
                  milestone.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Rss size={16} className="mt-1 text-foreground shrink-0" />
              <div>
                <div className="font-serif text-base tracking-tight">
                  Join the build.
                </div>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Additional developers are warmly invited. Rust,
                  TypeScript, and design hands all welcome — see{" "}
                  <Link
                    href="/contact"
                    className="border-b border-foreground/30 hover:border-foreground"
                  >
                    contact
                  </Link>{" "}
                  for the easiest way in.
                </p>
              </div>
            </li>
          </ul>
        </Section>
      </PageBody>
    </PageShell>
  )
}

function ProjectQuarters({ project }: { project: "heorth" | "kithledger" }) {
  const items = MILESTONES.filter((m) => m.project === project)
  return (
    <ol className="mt-6 space-y-4">
      {items.map((m) => {
        const q = QUARTERS[m.start - 1]
        return (
          <li
            key={m.version}
            className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-8 border-t border-border pt-5"
          >
            <div>
              <div className="font-mono text-[11px] text-muted-foreground tracking-wider">
                {q.label}
              </div>
              <div className="mt-1 font-mono text-2xl text-foreground">
                v{m.version}
              </div>
              <div className="mt-1 font-mono text-[10px] text-muted-foreground tracking-wider uppercase">
                {m.tier === "beta"
                  ? "Beta launch"
                  : m.tier === "ga"
                    ? "General availability"
                    : "Release"}
              </div>
            </div>
            <div>
              <h3 className="font-serif text-xl tracking-tight">
                {m.title}
              </h3>
              <p className="mt-2 text-foreground/85 leading-relaxed">
                {m.description}
              </p>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {m.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-sm text-foreground/80"
                  >
                    <span
                      className="mt-2 inline-block h-1 w-2.5 bg-foreground/40 shrink-0"
                      aria-hidden
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        )
      })}
    </ol>
  )
}

import { cn } from "@/lib/utils"
import {
  BANDS,
  MILESTONES,
  QUARTERS,
  TODAY,
  type Milestone,
  type Project,
} from "@/lib/roadmap-data"

const PROJECT_LABEL: Record<Project, string> = {
  heorth: "Heorth",
  kithledger: "KithLedger",
  feoh: "Feoh",
}

const PROJECT_TAGLINE: Record<Project, string> = {
  heorth: "Homestead & family management",
  kithledger: "API-first relationship ledger",
  feoh: "Attaches to Heorth · envelopes & double-entry",
}

const PROJECT_LANE_NUM: Record<Project, string> = {
  heorth: "01",
  kithledger: "02",
  feoh: "01 · f", // finance module within Heorth's lane
}

// Solid bar (release) classes — design system: 1 accent only, so:
//   Heorth      → primary (ember)
//   KithLedger  → foreground (deep ink)
//   Feoh        → muted-foreground (warm taupe); reads as subordinate to
//                 Heorth's ember because it is Heorth's finance module.
const BAR_SOLID: Record<Project, string> = {
  heorth: "bg-primary text-primary-foreground border-primary",
  kithledger: "bg-foreground text-background border-foreground",
  feoh: "bg-muted-foreground text-background border-muted-foreground",
}

const BAR_GA: Record<Project, string> = {
  heorth:
    "bg-primary text-primary-foreground border-primary ring-2 ring-primary/30 ring-offset-2 ring-offset-background",
  kithledger:
    "bg-foreground text-background border-foreground ring-2 ring-foreground/25 ring-offset-2 ring-offset-background",
  feoh:
    "bg-muted-foreground text-background border-muted-foreground ring-2 ring-muted-foreground/30 ring-offset-2 ring-offset-background",
}

const BAR_BETA: Record<Project, string> = {
  heorth:
    "bg-primary/90 text-primary-foreground border border-dashed border-primary",
  kithledger:
    "bg-foreground/90 text-background border border-dashed border-foreground",
  feoh:
    "bg-muted-foreground/90 text-background border border-dashed border-muted-foreground",
}

const BAND_BG: Record<Project, string> = {
  heorth: "bg-primary/10 border border-primary/25 text-primary",
  kithledger: "bg-foreground/[0.06] border border-foreground/20 text-foreground",
  feoh: "bg-muted-foreground/[0.10] border border-muted-foreground/30 text-muted-foreground",
}

const TIER_BADGE: Record<Milestone["tier"], string> = {
  beta: "Beta",
  release: "Release",
  ga: "GA",
}

export function RoadmapTimeline() {
  return (
    <div className="not-prose">
      {/* Legend */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-6 text-eyebrow text-muted-foreground">
        <LegendSwatch className="bg-primary border-primary" label="Heorth" />
        <LegendSwatch
          className="bg-foreground border-foreground"
          label="KithLedger"
        />
        <LegendSwatch
          className="bg-muted-foreground border-muted-foreground"
          label="Feoh · Heorth finance module"
        />
        <LegendSwatch
          className="bg-transparent border-dashed border-foreground/50"
          label="Beta"
        />
        <LegendSwatch
          className="bg-transparent ring-1 ring-foreground/40 border-foreground/60"
          label="GA"
        />
        <span className="inline-flex items-center gap-2">
          <span className="inline-block h-3 w-px bg-primary" />
          {TODAY.label}
        </span>
      </div>

      {/* Desktop / tablet Gantt */}
      <div className="hidden md:block rounded-lg border border-border bg-card overflow-hidden">
        <GanttGrid />
      </div>

      {/* Mobile stacked timeline */}
      <div className="md:hidden space-y-8">
        <MobileLane project="heorth" attached={["feoh"]} />
        <MobileLane project="kithledger" />
      </div>
    </div>
  )
}

function LegendSwatch({
  className,
  label,
}: {
  className: string
  label: string
}) {
  return (
    <span className="inline-flex items-center gap-2">
      <span
        className={cn("inline-block h-3 w-6 rounded-sm border", className)}
        aria-hidden
      />
      {label}
    </span>
  )
}

function GanttGrid() {
  // grid-template-columns: a fixed 200px label column, then 6 quarter columns.
  const gridStyle = {
    gridTemplateColumns: "minmax(168px, 200px) repeat(6, minmax(0, 1fr))",
  } as const

  return (
    <div className="text-foreground">
      {/* Quarter header */}
      <div
        className="grid border-b border-border bg-secondary/40"
        style={gridStyle}
      >
        <div className="px-5 py-4 text-eyebrow text-muted-foreground">
          Project · Lane
        </div>
        {QUARTERS.map((q, i) => (
          <div
            key={q.id}
            className={cn(
              "px-3 py-4 border-l border-border relative",
              i === TODAY.column - 1 && "bg-primary/[0.04]",
            )}
          >
            <div className="font-mono text-[11px] text-foreground tracking-wider">
              {q.label}
            </div>
            <div className="font-mono text-[10px] text-muted-foreground mt-0.5">
              {q.range}
            </div>
            {i === TODAY.column - 1 && (
              <div
                className="absolute top-0 bottom-0 border-l border-dashed border-primary/70 pointer-events-none"
                style={{ left: `${TODAY.pct * 100}%` }}
                aria-hidden
              >
                <span className="absolute -top-0.5 left-1.5 font-mono text-[9px] text-primary tracking-wider whitespace-nowrap">
                  ▼ today
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      <Lane project="heorth" gridStyle={gridStyle} attached={["feoh"]} />
      <div className="rule-warm" aria-hidden />
      <Lane project="kithledger" gridStyle={gridStyle} />
    </div>
  )
}

function Lane({
  project,
  gridStyle,
  attached,
}: {
  project: Project
  gridStyle: React.CSSProperties
  attached?: Project[]
}) {
  return (
    <div className="py-5">
      {/* Lane title row */}
      <div className="grid items-baseline" style={gridStyle}>
        <div className="px-5">
          <div className="text-eyebrow text-muted-foreground">
            {PROJECT_LANE_NUM[project]}
          </div>
          <div className="mt-1 font-serif text-xl tracking-tight">
            {PROJECT_LABEL[project]}
          </div>
          <div className="mt-1 text-xs text-muted-foreground leading-snug">
            {PROJECT_TAGLINE[project]}
          </div>
        </div>
        <div className="col-span-6" />
      </div>

      <LaneRows project={project} gridStyle={gridStyle} />

      {/* Attached modules (e.g. Feoh) — nested inside this lane, not a co-equal lane */}
      {attached?.map((sub) => (
        <div key={sub} className="mt-6">
          {/* Sub-module title row */}
          <div className="grid items-baseline" style={gridStyle}>
            <div className="px-5">
              <div className="pl-3 border-l-2 border-muted-foreground/40">
                <div className="text-eyebrow text-muted-foreground">
                  Finance module
                </div>
                <div className="mt-1 font-serif text-base tracking-tight">
                  {PROJECT_LABEL[sub]}
                </div>
                <div className="mt-0.5 text-xs text-muted-foreground leading-snug">
                  {PROJECT_TAGLINE[sub]}
                </div>
              </div>
            </div>
            <div className="col-span-6" />
          </div>

          <LaneRows project={sub} gridStyle={gridStyle} indent />
        </div>
      ))}
    </div>
  )
}

function LaneRows({
  project,
  gridStyle,
  indent = false,
}: {
  project: Project
  gridStyle: React.CSSProperties
  indent?: boolean
}) {
  const releases = MILESTONES.filter((m) => m.project === project).sort(
    (a, b) => a.start - b.start,
  )
  const bands = BANDS.filter((b) => b.project === project)
  const labelIndent = indent
    ? "pl-3 border-l-2 border-muted-foreground/25"
    : ""

  return (
    <>
      {/* Continuous bands */}
      {bands.map((band) => (
        <div
          key={band.label}
          className="grid items-center mt-4"
          style={gridStyle}
        >
          <div className={cn("px-5 text-xs text-muted-foreground", labelIndent)}>
            {band.label}
          </div>
          <div
            className="col-span-6 grid"
            style={{ gridTemplateColumns: "repeat(6, minmax(0, 1fr))" }}
          >
            <div
              className={cn(
                "h-7 rounded-sm flex items-center px-3",
                BAND_BG[project],
              )}
              style={{
                gridColumnStart: band.start,
                gridColumnEnd: band.end,
              }}
            >
              <span className="font-mono text-[10px] tracking-wider opacity-80 truncate">
                {band.note}
              </span>
            </div>
          </div>
        </div>
      ))}

      {/* Release rows */}
      {releases.map((m) => (
        <div
          key={`${m.project}-${m.version}`}
          className="grid items-center mt-3"
          style={gridStyle}
        >
          <div className={cn("px-5", labelIndent)}>
            <div className="font-mono text-xs text-foreground">
              v{m.version}
            </div>
            <div className="text-[11px] text-muted-foreground leading-snug truncate">
              {m.title}
            </div>
          </div>
          <div
            className="col-span-6 grid"
            style={{ gridTemplateColumns: "repeat(6, minmax(0, 1fr))" }}
          >
            <ReleaseBar milestone={m} />
          </div>
        </div>
      ))}
    </>
  )
}

function ReleaseBar({ milestone }: { milestone: Milestone }) {
  const cls =
    milestone.tier === "ga"
      ? BAR_GA[milestone.project]
      : milestone.tier === "beta"
        ? BAR_BETA[milestone.project]
        : BAR_SOLID[milestone.project]

  return (
    <div
      className={cn(
        "h-9 rounded-sm flex items-center justify-between px-3 border",
        cls,
      )}
      style={{
        gridColumnStart: milestone.start,
        gridColumnEnd: milestone.end,
      }}
    >
      <span className="font-mono text-[11px] tracking-wider truncate">
        v{milestone.version} · {milestone.title}
      </span>
      <span className="hidden lg:inline font-mono text-[9px] tracking-wider opacity-80 ml-3 shrink-0">
        {TIER_BADGE[milestone.tier]}
      </span>
    </div>
  )
}

function MobileReleaseList({ project }: { project: Project }) {
  const releases = MILESTONES.filter((m) => m.project === project)
  return (
    <ol className="mt-4 space-y-4">
      {releases.map((m) => (
        <li
          key={m.version}
          className="grid grid-cols-[auto_1fr] gap-3 items-baseline border-t border-border pt-4"
        >
          <span
            className={cn(
              "font-mono text-[10px] tracking-wider px-2 py-0.5 rounded-sm border",
              m.tier === "ga"
                ? BAR_GA[project]
                : m.tier === "beta"
                  ? BAR_BETA[project]
                  : BAR_SOLID[project],
            )}
          >
            v{m.version}
          </span>
          <div>
            <div className="font-serif text-base tracking-tight">
              {m.title}
            </div>
            <div className="font-mono text-[10px] text-muted-foreground mt-0.5 tracking-wider">
              {QUARTERS[m.start - 1].label} · {TIER_BADGE[m.tier]}
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}

function MobileLane({
  project,
  attached,
}: {
  project: Project
  attached?: Project[]
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <div className="text-eyebrow text-muted-foreground">
        {PROJECT_LANE_NUM[project]} · Lane
      </div>
      <div className="mt-1 font-serif text-2xl tracking-tight">
        {PROJECT_LABEL[project]}
      </div>
      <div className="text-xs text-muted-foreground mt-0.5">
        {PROJECT_TAGLINE[project]}
      </div>
      <MobileReleaseList project={project} />

      {/* Attached modules (e.g. Feoh) — nested inside this lane */}
      {attached?.map((sub) => (
        <div
          key={sub}
          className="mt-6 pl-3 border-l-2 border-muted-foreground/40"
        >
          <div className="text-eyebrow text-muted-foreground">
            Finance module
          </div>
          <div className="mt-1 font-serif text-lg tracking-tight">
            {PROJECT_LABEL[sub]}
          </div>
          <div className="text-xs text-muted-foreground mt-0.5">
            {PROJECT_TAGLINE[sub]}
          </div>
          <MobileReleaseList project={sub} />
        </div>
      ))}
    </div>
  )
}

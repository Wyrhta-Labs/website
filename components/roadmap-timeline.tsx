import { cn } from "@/lib/utils"
import {
  PHASES,
  SERVICES,
  STATE_LABEL,
  type Phase,
  type PhaseState,
  type Service,
} from "@/lib/roadmap-data"

const SERVICE_LABEL: Record<Service, string> = {
  core: "@wyrhta/core",
  heorth: "Heorth",
  kithledger: "KithLedger",
  feoh: "Feoh",
}

// One accent only (ember), reserved for where the work actually stands.
// Everything behind is settled ink; everything ahead recedes into taupe.
const STATE_CHIP: Record<PhaseState, string> = {
  done: "border-foreground/25 bg-foreground/[0.06] text-foreground/70",
  "code-complete": "border-primary/40 bg-primary/10 text-primary",
  next: "border-foreground/40 bg-transparent text-foreground",
  planned: "border-dashed border-border bg-transparent text-muted-foreground",
  unordered: "border-dotted border-border bg-transparent text-muted-foreground",
}

const MARKER: Record<PhaseState, string> = {
  done: "bg-foreground/40 border-foreground/40",
  "code-complete": "bg-primary border-primary",
  next: "bg-background border-foreground",
  planned: "bg-background border-dashed border-muted-foreground/60",
  unordered: "bg-background border-dotted border-muted-foreground/50",
}

/** The rail segment *above* each phase — solid where the work is behind us. */
const RAIL: Record<PhaseState, string> = {
  done: "bg-foreground/25",
  "code-complete": "bg-foreground/25",
  next: "bg-border",
  planned: "bg-border",
  unordered: "bg-border",
}

export function RoadmapTimeline() {
  return (
    <div className="not-prose">
      <Legend />

      <ol className="mt-8">
        {PHASES.map((phase, i) => (
          <PhaseRow
            key={phase.id}
            phase={phase}
            first={i === 0}
            last={i === PHASES.length - 1}
            /* The line between "code-complete" and the phase after it is the
               real edge of the project — everything past it is unbuilt. */
            frontier={
              PHASES[i - 1]?.state === "code-complete" && phase.state === "next"
            }
          />
        ))}
      </ol>
    </div>
  )
}

function Legend() {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-eyebrow text-muted-foreground">
      {(
        ["done", "code-complete", "next", "planned", "unordered"] as PhaseState[]
      ).map((s) => (
        <span key={s} className="inline-flex items-center gap-2">
          <span
            className={cn("inline-block size-2.5 rounded-full border", MARKER[s])}
            aria-hidden
          />
          {STATE_LABEL[s]}
        </span>
      ))}
    </div>
  )
}

function PhaseRow({
  phase,
  first,
  last,
  frontier,
}: {
  phase: Phase
  first: boolean
  last: boolean
  frontier: boolean
}) {
  return (
    <li className="relative grid grid-cols-[28px_1fr] md:grid-cols-[132px_28px_1fr] gap-x-4 md:gap-x-6">
      {/* Phase number — its own column on desktop, inlined on mobile */}
      <div className="hidden md:block pt-7 text-right">
        <div className="text-eyebrow text-muted-foreground">Phase</div>
        <div className="mt-1 font-serif text-3xl tracking-tight leading-none text-foreground/70">
          {phase.n}
        </div>
      </div>

      {/* Rail + marker. The line is drawn per-row and clipped at the marker on
          the first and last rows so the spine begins and ends on a dot. */}
      <div className="relative flex justify-center">
        <span
          className={cn(
            "absolute w-px left-1/2 -translate-x-1/2",
            RAIL[phase.state],
            first ? "top-[32px]" : "top-0",
            last ? "h-0" : "bottom-0",
          )}
          aria-hidden
        />
        <span
          className={cn(
            "absolute top-[26px] size-3 rounded-full border-2 z-10",
            MARKER[phase.state],
          )}
          aria-hidden
        />
      </div>

      {/* Body */}
      <div className={cn("pt-6", last ? "pb-0" : "pb-10")}>
        {frontier && (
          <div className="mb-5 -mt-2 flex items-center gap-3">
            <span className="h-px flex-1 border-t border-dashed border-primary/50" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-primary whitespace-nowrap">
              ▲ everything above is written · everything below is not
            </span>
          </div>
        )}

        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="md:hidden text-eyebrow text-muted-foreground">
            Phase {phase.n}
          </span>
          <span
            className={cn(
              "inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider",
              STATE_CHIP[phase.state],
            )}
          >
            {STATE_LABEL[phase.state]}
          </span>
          <span className="font-mono text-[11px] text-muted-foreground tracking-wider">
            {phase.stateNote}
          </span>
        </div>

        <h3 className="mt-3 font-serif text-2xl md:text-3xl tracking-tight leading-tight">
          {phase.title}
        </h3>

        <p className="mt-3 max-w-2xl text-[0.95rem] text-foreground/80 leading-relaxed text-pretty">
          {phase.summary}
        </p>

        <ul className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-2">
          {phase.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed"
            >
              <span
                className="mt-2 inline-block h-1 w-2.5 bg-foreground/35 shrink-0"
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>

        {phase.exit && (
          <p className="mt-5 border-l-2 border-primary/40 pl-4 text-sm text-foreground/75 italic leading-relaxed">
            {phase.exit}
          </p>
        )}

        <div className="mt-5 flex flex-wrap items-center gap-2">
          {phase.services.map((s) => (
            <span
              key={s}
              className="font-mono text-[10px] tracking-wider text-muted-foreground border border-border rounded-full px-2 py-0.5"
            >
              {SERVICE_LABEL[s]}
            </span>
          ))}
        </div>
      </div>
    </li>
  )
}

/** The four services and the versions they are actually at. */
export function ServiceTable() {
  return (
    <div className="not-prose overflow-x-auto">
      <table className="w-full min-w-[560px] border-collapse text-left">
        <thead>
          <tr className="border-b border-border">
            <th className="py-3 pr-4 text-eyebrow text-muted-foreground font-normal">
              Service
            </th>
            <th className="py-3 pr-4 text-eyebrow text-muted-foreground font-normal">
              At
            </th>
            <th className="py-3 pr-4 text-eyebrow text-muted-foreground font-normal">
              Source
            </th>
            <th className="py-3 text-eyebrow text-muted-foreground font-normal">
              Where it stands
            </th>
          </tr>
        </thead>
        <tbody>
          {SERVICES.map((s) => (
            <tr key={s.id} className="border-b border-border align-top">
              <td className="py-4 pr-4">
                <div className="font-serif text-lg tracking-tight whitespace-nowrap">
                  {s.name}
                </div>
                <div className="mt-1 text-xs text-muted-foreground leading-snug max-w-[15rem]">
                  {s.role}
                </div>
              </td>
              <td className="py-4 pr-4 font-mono text-sm text-foreground whitespace-nowrap">
                {s.version}
              </td>
              <td className="py-4 pr-4">
                <span
                  className={cn(
                    "font-mono text-[10px] uppercase tracking-wider rounded-full border px-2 py-0.5 whitespace-nowrap",
                    s.visibility === "public"
                      ? "border-primary/40 bg-primary/10 text-primary"
                      : "border-border text-muted-foreground",
                  )}
                >
                  {s.visibility}
                </span>
              </td>
              <td className="py-4 text-sm text-foreground/80 leading-relaxed">
                {s.state}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

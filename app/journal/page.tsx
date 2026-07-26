import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, BookMarked, Rss } from "lucide-react"
import { PageShell, PageHeader, PageBody } from "@/components/page-shell"
import {
  FEATURED_ENTRY,
  JOURNAL_ENTRIES,
  tagColor,
  type JournalEntry,
} from "@/lib/journal-entries"

export const metadata: Metadata = {
  title: "Journal — Wyrhta Labs",
  description:
    "Notes from the Wyrhta Labs workshop on building Heorth, KithLedger, and an organization core for family and home life — a private, personal project, posted when the work warrants.",
}

function FeaturedNote({ entry }: { entry: JournalEntry }) {
  const [month, year] = entry.display.split(" ")
  return (
    <Link
      href={`/journal/${entry.slug}`}
      className="group block rounded-lg border border-border bg-card overflow-hidden hover:border-foreground/60 transition-colors"
    >
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-3 flex md:flex-col justify-between md:justify-start gap-4 p-6 md:p-8 border-b md:border-b-0 md:border-r border-border bg-secondary/40">
          <div>
            <div className="text-eyebrow text-primary mb-2">Latest note</div>
            <div className="font-serif text-3xl md:text-4xl leading-none tracking-tight">
              {month}
            </div>
            <div className="font-mono text-xs text-muted-foreground mt-1">{year}</div>
          </div>
          <div className="flex md:flex-col items-start gap-2 md:gap-3 md:mt-auto">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {entry.issue}
            </span>
            <span
              className={`font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full border ${tagColor(
                entry.tag,
              )}`}
            >
              {entry.tag}
            </span>
          </div>
        </div>

        <div className="md:col-span-9 p-6 md:p-10">
          <div className="flex items-start justify-between gap-6">
            <div className="font-mono text-xs text-muted-foreground">
              <time dateTime={entry.date}>{entry.date}</time>
              <span className="mx-2">·</span>
              {entry.read}
            </div>
            <ArrowUpRight
              size={18}
              className="shrink-0 text-muted-foreground transition-all group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </div>

          <h3 className="mt-5 font-serif text-3xl md:text-4xl tracking-tight leading-[1.05] text-balance">
            {entry.title}
          </h3>
          <p className="mt-3 font-serif italic text-lg md:text-xl text-muted-foreground leading-snug text-pretty max-w-2xl">
            {entry.dek}
          </p>

          <p className="mt-6 max-w-2xl text-base md:text-[17px] text-foreground/85 leading-relaxed text-pretty">
            {entry.body}
          </p>

          <div className="mt-8 inline-flex items-center gap-2 text-eyebrow text-foreground">
            Read the full note
            <span className="block w-8 h-px bg-foreground transition-all group-hover:w-12" />
          </div>
        </div>
      </div>
    </Link>
  )
}

function ArchiveItem({ entry }: { entry: JournalEntry }) {
  const [month, year] = entry.display.split(" ")
  return (
    <li>
      <Link
        href={`/journal/${entry.slug}`}
        className="group grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-x-8 py-8 md:py-10 border-b border-border hover:bg-card/60 transition-colors -mx-4 px-4 md:-mx-6 md:px-6 rounded-sm"
      >
        <div className="md:col-span-3 flex md:flex-col gap-3 md:gap-1.5 items-baseline md:items-start">
          <div className="font-serif text-2xl md:text-3xl leading-none tracking-tight">
            {month}
            <span className="text-muted-foreground font-light italic">
              {" "}
              {year.slice(2)}
            </span>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            {entry.issue}
          </div>
          <span
            className={`hidden md:inline-flex font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full border self-start mt-2 ${tagColor(
              entry.tag,
            )}`}
          >
            {entry.tag}
          </span>
        </div>

        <div className="md:col-span-7">
          <span
            className={`md:hidden inline-flex font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full border mb-3 ${tagColor(
              entry.tag,
            )}`}
          >
            {entry.tag}
          </span>
          <h4 className="font-serif text-2xl md:text-[28px] leading-[1.15] tracking-tight text-balance group-hover:text-primary transition-colors">
            {entry.title}
          </h4>
          <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed text-pretty max-w-xl">
            {entry.dek}
          </p>
          <div className="mt-4 font-mono text-xs text-muted-foreground">
            <time dateTime={entry.date}>{entry.date}</time>
            <span className="mx-2">·</span>
            {entry.read}
          </div>
        </div>

        <div className="md:col-span-2 hidden md:flex items-start justify-end pt-2">
          <ArrowUpRight
            size={18}
            className="text-muted-foreground transition-all group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </div>
      </Link>
    </li>
  )
}

export default function JournalPage() {
  const allEntries = [FEATURED_ENTRY, ...JOURNAL_ENTRIES]
  const lastUpdated = allEntries[0].date
  const totalIssues = allEntries.length

  return (
    <PageShell>
      <PageHeader
        kind="§ Project · Journal"
        title="Notes from the workshop, posted when a phase actually moves."
        dek="Written by one person, in the first person, about work that has already happened — a decision settled, a service extracted, a release finished. There is no publishing schedule to fill, so quiet stretches here mean quiet stretches at the bench."
        crumbs={[{ label: "Journal" }]}
        meta={[
          { label: "Cadence", value: "When the work warrants" },
          { label: "Notes", value: `${totalIssues} published` },
          { label: "Last posted", value: lastUpdated },
          { label: "Written by", value: "1 · the maintainer" },
        ]}
      />
      <PageBody
        closing={
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7">
              <p className="font-mono text-xs text-muted-foreground">
                <span className="text-foreground">wyrhta.dev/journal</span>
                <span className="mx-2">·</span>
                {"Plain HTML, no analytics, no popups. Follow by RSS, or simply by remembering."}
              </p>
            </div>
            <div className="md:col-span-5 flex flex-wrap items-center justify-start md:justify-end gap-3">
              <Link
                href="/journal/archive"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:border-foreground transition-colors"
              >
                <BookMarked size={14} />
                Read the archive
              </Link>
              <a
                href="/rss.xml"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:border-foreground transition-colors"
              >
                <Rss size={14} />
                RSS feed
              </a>
              <Link
                href="/roadmap"
                className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-primary transition-colors"
              >
                See where this stands
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        }
      >
        <section aria-labelledby="latest">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-xs text-muted-foreground tracking-wider">§ 01</span>
            <h2
              id="latest"
              className="font-serif text-2xl md:text-[1.875rem] tracking-tight leading-tight"
            >
              Latest note
            </h2>
          </div>
          <FeaturedNote entry={FEATURED_ENTRY} />
        </section>

        <section aria-labelledby="archive" className="mt-20">
          <div className="flex items-end justify-between mb-6">
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-xs text-muted-foreground tracking-wider">§ 02</span>
              <h2
                id="archive"
                className="font-serif text-2xl md:text-[1.875rem] tracking-tight leading-tight"
              >
                Earlier notes
              </h2>
            </div>
            <Link
              href="/journal/archive"
              className="hidden sm:inline-flex items-center gap-2 text-eyebrow text-muted-foreground hover:text-foreground transition-colors"
            >
              Full archive
              <ArrowUpRight size={12} />
            </Link>
          </div>
          <ol className="border-t border-border">
            {JOURNAL_ENTRIES.map((entry) => (
              <ArchiveItem key={entry.slug} entry={entry} />
            ))}
          </ol>
        </section>
      </PageBody>
    </PageShell>
  )
}

import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, Rss } from "lucide-react"
import { PageShell, PageHeader, PageBody } from "@/components/page-shell"
import {
  FEATURED_ENTRY,
  JOURNAL_ENTRIES,
  tagColor,
} from "@/lib/journal-entries"

export const metadata: Metadata = {
  title: "Journal archive — Wyrhta Labs",
  description:
    "All published Wyrhta Labs journal notes about Heorth, KithLedger, Feoh, and the shape of the project.",
}

const ENTRIES = [FEATURED_ENTRY, ...JOURNAL_ENTRIES]

export default function JournalArchivePage() {
  return (
    <PageShell>
      <PageHeader
        kind="§ Project · Journal archive"
        title="All notes, newest first."
        dek="A compact archive of the notes published so far: decisions settled, a service extracted, and the occasional point of etymology."
        crumbs={[
          { label: "Journal", href: "/journal" },
          { label: "Archive" },
        ]}
        meta={[
          { label: "Notes", value: `${ENTRIES.length} published` },
          { label: "Latest", value: ENTRIES[0].date },
          { label: "Format", value: "Plain HTML" },
          { label: "Feed", value: "/rss.xml" },
        ]}
      />
      <PageBody
        closing={
          <a
            href="/rss.xml"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            <Rss size={14} />
            Subscribe by RSS
          </a>
        }
      >
        <ol className="border-y border-border divide-y divide-border">
          {ENTRIES.map((entry) => (
            <li key={entry.slug}>
              <Link
                href={`/journal/${entry.slug}`}
                className="group grid grid-cols-1 md:grid-cols-[140px_1fr_auto] gap-4 md:gap-8 py-7 hover:bg-card/60 transition-colors -mx-4 px-4 md:-mx-6 md:px-6 rounded-sm"
              >
                <div>
                  <div className="font-serif text-2xl tracking-tight">
                    {entry.display}
                  </div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {entry.issue}
                  </div>
                </div>
                <div>
                  <span
                    className={`inline-flex font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full border mb-3 ${tagColor(
                      entry.tag,
                    )}`}
                  >
                    {entry.tag}
                  </span>
                  <h2 className="font-serif text-2xl md:text-[28px] leading-tight tracking-tight group-hover:text-primary transition-colors">
                    {entry.title}
                  </h2>
                  <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
                    {entry.dek}
                  </p>
                  <div className="mt-4 font-mono text-xs text-muted-foreground">
                    <time dateTime={entry.date}>{entry.date}</time>
                    <span className="mx-2">·</span>
                    {entry.read}
                  </div>
                </div>
                <ArrowUpRight
                  size={18}
                  className="hidden md:block mt-2 text-muted-foreground transition-all group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </li>
          ))}
        </ol>
      </PageBody>
    </PageShell>
  )
}

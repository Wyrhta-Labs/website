import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Rss } from "lucide-react"
import { PageShell, PageHeader, PageBody } from "@/components/page-shell"
import {
  FEATURED_ENTRY,
  JOURNAL_ENTRIES,
  tagColor,
  type JournalEntry,
} from "@/lib/journal-entries"

const ENTRIES = [FEATURED_ENTRY, ...JOURNAL_ENTRIES]

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return ENTRIES.map((entry) => ({ slug: entry.slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const entry = findEntry(slug)

  if (!entry) {
    return {
      title: "Journal note not found — Wyrhta Labs",
    }
  }

  return {
    title: `${entry.title} — Wyrhta Labs Journal`,
    description: entry.dek,
  }
}

export default async function JournalEntryPage({ params }: PageProps) {
  const { slug } = await params
  const entry = findEntry(slug)

  if (!entry) {
    notFound()
  }

  return (
    <PageShell>
      <PageHeader
        kind={`§ Journal · ${entry.tag}`}
        title={entry.title}
        dek={entry.dek}
        crumbs={[
          { label: "Journal", href: "/journal" },
          { label: entry.display },
        ]}
        meta={[
          { label: "Issue", value: entry.issue },
          { label: "Published", value: entry.date },
          { label: "Read", value: entry.read },
          { label: "Written by", value: "The maintainer" },
        ]}
      />
      <PageBody
        closing={
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <Link
              href="/journal"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft size={14} />
              Back to journal
            </Link>
            <a
              href="/rss.xml"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <Rss size={14} />
              RSS feed
            </a>
          </div>
        }
      >
        <article className="space-y-7">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs text-muted-foreground">
              <time dateTime={entry.date}>{entry.date}</time>
              <span className="mx-2">·</span>
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

          <p className="font-serif text-2xl md:text-3xl italic leading-relaxed text-foreground">
            {entry.dek}
          </p>

          <div className="rule-warm" aria-hidden />

          <p className="text-lg leading-[1.8] text-foreground/85 text-pretty">
            {entry.body}
          </p>

          <p className="text-base leading-relaxed text-muted-foreground">
            Notes are kept short on purpose. Longer implementation write-ups
            will be linked from the source once the corresponding repositories
            are public — for now only{" "}
            <span className="font-mono text-sm text-foreground">
              @wyrhta/core
            </span>{" "}
            is.
          </p>
        </article>
      </PageBody>
    </PageShell>
  )
}

function findEntry(slug: string): JournalEntry | undefined {
  return ENTRIES.find((entry) => entry.slug === slug)
}

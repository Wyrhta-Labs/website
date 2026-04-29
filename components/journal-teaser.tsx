"use client"

import Link from "next/link"
import { ArrowUpRight, Rss } from "lucide-react"
import { Reveal } from "./reveal"
import { FEATURED_ENTRY, JOURNAL_ENTRIES, tagColor } from "@/lib/journal-entries"

export function JournalTeaser() {
  const recent = [FEATURED_ENTRY, ...JOURNAL_ENTRIES.slice(0, 2)]

  return (
    <section
      id="journal"
      className="relative py-20 md:py-32 border-t border-border"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end mb-12 md:mb-16">
          <div className="md:col-span-7">
            <Reveal>
              <div className="text-eyebrow text-primary mb-4">§ 06 — Journal</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-serif text-4xl md:text-6xl tracking-tight leading-[1.02] text-balance">
                A monthly note,{" "}
                <span className="italic font-light text-muted-foreground">
                  written by hand.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
                {"One letter a month, posted on the first Sunday. It is where we work out loud — design dilemmas, code we are proud of, code we have since deleted, and what the families using Heorth and KithLedger have taught us."}
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-5 md:col-start-8 flex md:items-end md:justify-end">
            <Reveal delay={0.15}>
              <div className="flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2">
                <span className="text-eyebrow text-muted-foreground">Read at</span>
                <span className="font-mono text-sm text-foreground">
                  wyrhta.dev/journal
                </span>
              </div>
            </Reveal>
          </div>
        </div>

        <ol className="border-t border-border">
          {recent.map((entry, i) => {
            const [month, year] = entry.display.split(" ")
            return (
              <Reveal key={entry.slug} delay={0.05 * i}>
                <li>
                  <Link
                    href={`/journal/${entry.slug}`}
                    className="group grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-x-8 py-7 md:py-9 border-b border-border hover:bg-card/60 transition-colors -mx-4 px-4 md:-mx-6 md:px-6 rounded-sm"
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
                      <h3 className="font-serif text-2xl md:text-[28px] leading-[1.15] tracking-tight text-balance group-hover:text-primary transition-colors">
                        {entry.title}
                      </h3>
                      <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed text-pretty max-w-xl">
                        {entry.dek}
                      </p>
                      <div className="mt-4 font-mono text-xs text-muted-foreground">
                        <time dateTime={entry.date}>{entry.date}</time>
                        <span className="mx-2">·</span>
                        {entry.read}
                        <span className="mx-2">·</span>
                        by {entry.author}
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
              </Reveal>
            )
          })}
        </ol>

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7">
            <Reveal>
              <p className="font-mono text-xs text-muted-foreground">
                <span className="text-foreground">wyrhta.dev/journal</span>
                <span className="mx-2">·</span>
                {"All issues, plain HTML, no popups."}
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-5 flex flex-wrap items-center justify-start md:justify-end gap-3">
            <Reveal delay={0.05}>
              <a
                href="/rss.xml"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:border-foreground transition-colors"
              >
                <Rss size={14} />
                RSS feed
              </a>
            </Reveal>
            <Reveal delay={0.1}>
              <Link
                href="/journal"
                className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-primary transition-colors"
              >
                Read the journal
                <ArrowUpRight size={14} />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

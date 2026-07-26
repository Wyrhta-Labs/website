"use client"

import { Reveal } from "./reveal"
import { Github, Rss, MessageCircle, ArrowRight } from "lucide-react"

const CHANNELS = [
  {
    icon: Github,
    label: "GitHub",
    handle: "@wyrhta/core",
    note: "The one public repository so far — the foundation library.",
    href: "https://github.com/wyrhta-labs",
  },
  {
    icon: MessageCircle,
    label: "Contact",
    handle: "GitHub Issues first",
    note: "Slow-channel discussion tied to the work.",
    href: "/contact",
  },
  {
    icon: Rss,
    label: "Journal",
    handle: "wyrhta.dev/journal",
    note: "Notes posted when a phase actually moves, not on a schedule.",
    href: "/journal",
  },
]

export function CommunitySection() {
  return (
    <section id="community" className="relative py-20 md:py-32 border-t border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* CTA */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="text-eyebrow text-primary mb-4">§ 07 — Reading along</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-serif text-4xl md:text-6xl tracking-tight leading-[1.02] text-balance">
                Nothing to install yet.{" "}
                <span className="italic font-light text-muted-foreground">
                  Plenty to read.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
                Wyrhta Labs is one person in Castrop-Rauxel, one public
                repository, and a plan that gets to its interesting part only
                after the thing is running in an actual house. There is no
                community to join yet and nothing to install — but the
                foundation library is readable now, the decisions are written
                down, and arguing with them is genuinely more useful than
                agreeing. If you run the home you would be writing software
                for, that perspective is the scarce one.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/wyrhta-labs"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:bg-primary transition-colors"
                >
                  <Github size={16} />
                  Read @wyrhta/core
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-foreground hover:border-foreground transition-colors"
                >
                  Start a conversation
                  <ArrowRight size={14} />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Channels */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {CHANNELS.map((c, i) => (
              <Reveal key={c.label} delay={0.1 + i * 0.06}>
                <a
                  href={c.href}
                  className="group flex items-start gap-4 rounded-md border border-border bg-card p-5 transition-colors hover:border-foreground"
                >
                  <div className="flex items-center justify-center size-10 rounded-md bg-secondary border border-border text-foreground shrink-0">
                    <c.icon size={16} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-lg">{c.label}</span>
                      <ArrowRight
                        size={14}
                        className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                      />
                    </div>
                    <div className="font-mono text-xs text-primary mt-0.5">{c.handle}</div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.note}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

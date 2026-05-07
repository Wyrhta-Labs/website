"use client"

import { Reveal } from "./reveal"
import { ArrowRight, GitBranch } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      {/* subtle grain wash */}
      <div className="absolute inset-0 grain pointer-events-none" aria-hidden="true" />

      <div className="container-custom relative">
        {/* Top meta strip */}
        <div className="flex items-center justify-between mb-12 md:mb-16">
          <Reveal>
            <div className="flex items-center gap-3 text-eyebrow text-muted-foreground">
              <span className="inline-block size-1.5 rounded-full bg-primary animate-pulse" />
              Established 2026 · Personal initiative
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="hidden sm:block text-eyebrow text-muted-foreground">
              0.1 beta · Q3 2026
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight text-balance">
                Patient software{" "}
                <span className="italic font-light text-muted-foreground">for the</span>{" "}
                <span className="text-primary">hearth</span>{" "}
                <span className="italic font-light text-muted-foreground">and</span>{" "}
                <span className="">kin.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-8 max-w-xl text-lg md:text-xl leading-relaxed text-muted-foreground text-pretty">
                Wyrhta Labs is a private, personal open-source project,
                started in 2026 — a quiet labour of devotion toward one
                clear goal: an organization core for family and home life, built
                slowly, in the open, with the patience of woodwork. The
                first <span className="text-foreground">0.1 beta</span>{" "}
                ships in <span className="text-foreground">Q3 2026</span>,
                and additional developers are warmly welcome at the bench.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:bg-primary transition-colors"
                >
                  Explore our projects
                  <ArrowRight size={16} />
                </a>
                <a
                  href="https://github.com/wyrhta-labs"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-foreground hover:border-foreground transition-colors"
                >
                  <GitBranch size={16} />
                  Read the source
                </a>
              </div>
            </Reveal>
          </div>

          {/* Etymology card */}
          <div className="lg:col-span-4">
            <Reveal delay={0.2}>
              <figure className="rounded-md border border-border bg-card p-6 md:p-7">
                <figcaption className="text-eyebrow text-muted-foreground mb-4">
                  Etymology
                </figcaption>
                <div className="space-y-4">
                  <div>
                    <div className="font-serif text-2xl">
                      wyrhta{" "}
                      <span className="font-mono text-sm text-muted-foreground align-middle">
                        /ˈwʏr.x.ta/
                      </span>
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      <span className="text-eyebrow text-foreground/70">n. Old English</span>{" "}
                      one who works or makes — a <em>wright</em>. Survives in
                      English as <em>shipwright</em>, <em>playwright</em>,
                      <em> wheelwright</em>.
                    </div>
                  </div>
                  <div className="rule-warm" />
                  <div>
                    <div className="font-serif text-2xl">
                      heorth{" "}
                      <span className="font-mono text-sm text-muted-foreground align-middle">
                        /ˈhe.orθ/
                      </span>
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      <span className="text-eyebrow text-foreground/70">n. Old English</span>{" "}
                      hearth — the warm centre of a home, the place where the
                      family gathers.
                    </div>
                  </div>
                  <div className="rule-warm" />
                  <div>
                    <div className="font-serif text-2xl">
                      feoh{" "}
                      <span className="font-mono text-sm text-muted-foreground align-middle">
                        /ˈfe.oh/
                      </span>
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      <span className="text-eyebrow text-foreground/70">n. Old English</span>{" "}
                      cattle, wealth, property — the household&apos;s movable
                      goods. The first rune of the Anglo-Saxon{" "}
                      <em>futhorc</em> (<span className="font-serif">ᚠ</span>),
                      and the root of modern English <em>fee</em>.
                    </div>
                  </div>
                </div>
              </figure>
            </Reveal>
          </div>
        </div>

        {/* Inline marquee of values */}
        <Reveal delay={0.35}>
          <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6 border-y border-border py-6">
            {[
              ["03", "Active projects"],
              ["100%", "Source available"],
              ["MIT", "Default license"],
              ["self-host", "First-class"],
            ].map(([k, v]) => (
              <div key={v} className="flex flex-col gap-1">
                <span className="font-serif text-2xl md:text-3xl tracking-tight">{k}</span>
                <span className="text-eyebrow text-muted-foreground">{v}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

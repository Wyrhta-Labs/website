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
              Established 2026 · One maker
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="hidden sm:block text-eyebrow text-muted-foreground">
              Pre-launch · not yet deployed
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight text-balance">
                A household manager{" "}
                <span className="italic font-light text-muted-foreground">
                  you
                </span>{" "}
                <span className="text-primary">actually own</span>
                <span className="">.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-8 max-w-xl text-lg md:text-xl leading-relaxed text-muted-foreground text-pretty">
                Wyrhta Labs is a personal open-source project building a
                self-hosted system for running a home — a small constellation
                of services on your own hardware, not an account on someone
                else&apos;s. It is{" "}
                <span className="text-foreground">
                  in active development toward a first at-home release
                </span>
                : much of it is built, none of it is deployed, and this site
                tries hard not to blur those two things.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="#hearth-view"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:bg-primary transition-colors"
                >
                  See the Hearth View
                  <ArrowRight size={16} />
                </a>
                <a
                  href="/roadmap"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-foreground hover:border-foreground transition-colors"
                >
                  <GitBranch size={16} />
                  Where this actually stands
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
                      household gathers.
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

        {/* Honest counts — nothing here implies a live product */}
        <Reveal delay={0.35}>
          <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6 border-y border-border py-6">
            {[
              ["04", "Services in the constellation"],
              ["01", "Public repository so far"],
              ["00", "Households live on it"],
              ["self-host", "The only way to run it"],
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

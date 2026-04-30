"use client"

import { Reveal } from "./reveal"

const PRINCIPLES = [
  {
    n: "i",
    title: "Patient software.",
    body:
      "We build slowly. We'd rather ship the right thing in a year than the wrong thing in a quarter. Software made at the speed of woodwork tends to last as long.",
  },
  {
    n: "ii",
    title: "For families, not enterprises.",
    body:
      "We design for the household — small, irregular, lifelong. Not for procurement, dashboards, or quarterly reviews. The unit of value is a Sunday evening, not a sales call.",
  },
  {
    n: "iii",
    title: "Source available, by default.",
    body:
      "Every line we write is published under the permissive MIT license — Heorth, KithLedger, and every package we ship beside them. You can read it, fork it, host it, audit it — and fix it when we're asleep.",
  },
  {
    n: "iv",
    title: "Self-host first.",
    body:
      "Your home runs your home. Our hosted offerings are conveniences, never strategies. The single-binary, run-it-on-a-Pi path is always the one we test most.",
  },
  {
    n: "v",
    title: "Small surface, deep roots.",
    body:
      "We'd rather have two finished tools than ten half-finished ones. Each project earns its keep before we plant another.",
  },
  {
    n: "vi",
    title: "Quiet by design.",
    body:
      "No notifications begging for attention. No streaks, no badges, no dark patterns. The hearth doesn't need to alert you that it is, in fact, still warm.",
  },
]

export function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="relative py-20 md:py-32 border-t border-border bg-secondary/40"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-14 md:mb-20">
          <div className="md:col-span-5">
            <Reveal>
              <div className="text-eyebrow text-primary mb-4">§ 04 — Philosophy</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-serif text-4xl md:text-6xl tracking-tight leading-[1] text-balance">
                Six principles{" "}
                <span className="italic font-light text-muted-foreground">we keep at the door.</span>
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7 md:pt-6">
            <Reveal delay={0.1}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
                {
                  "These aren't marketing values — they're the rules we argue from in pull requests and design reviews. They're why we ship slowly, document carefully, and refuse certain features even when people ask for them."
                }
              </p>
            </Reveal>
          </div>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.n} delay={0.04 * i}>
              <li className="flex gap-5">
                <span className="font-mono text-xs uppercase tracking-widest text-primary pt-1.5 select-none">
                  {p.n}.
                </span>
                <div>
                  <h3 className="font-serif text-2xl tracking-tight leading-tight">{p.title}</h3>
                  <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed text-pretty">
                    {p.body}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

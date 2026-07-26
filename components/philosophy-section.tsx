"use client"

import { Reveal } from "./reveal"

const PRINCIPLES = [
  {
    n: "i",
    title: "Own household first.",
    body:
      "The primary user for the next year or so is one household — the maker's. Other self-hosters are a gate to pass somewhere near 1.0, not an audience to design for now. Building for imagined users is how you end up serving none of them.",
  },
  {
    n: "ii",
    title: "The spouse is the acceptance gate.",
    body:
      "A release is ready when the people who live in the house would rather use it than not. Not when the tests pass. A green suite means nothing has broken since yesterday; it is not evidence that anyone wants this.",
  },
  {
    n: "iii",
    title: "Don't make anyone migrate.",
    body:
      "The calendar and task list a household already uses keep owning that data. Heorth mirrors and enriches them, and pushes its own work outward into them. Asking a family to abandon what works on their phone is the fastest route to rejection.",
  },
  {
    n: "iv",
    title: "Self-host, or nothing.",
    body:
      "This runs on your hardware, holding your household's data, with no account on anyone else's service. There is no hosted offering — not as a fallback, not as a convenience. It is ruled out rather than unbuilt.",
  },
  {
    n: "v",
    title: "Seams before you need them.",
    body:
      "Every external dependency sits behind a provider interface from day one, and every satellite is reached across a real process boundary with a service key. It costs something now. It is what makes swapping a backend an implementation rather than an excavation.",
  },
  {
    n: "vi",
    title: "Built is not shipped.",
    body:
      "Code-complete, deployed, and adopted are three different states, and conflating them is the most common lie a project page tells. This one names which applies, and would rather read as unfinished than as further along than it is.",
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
              <div className="text-eyebrow text-primary mb-4">§ 06 — Doctrine</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-serif text-4xl md:text-6xl tracking-tight leading-[1] text-balance">
                Six rules{" "}
                <span className="italic font-light text-muted-foreground">
                  that decide arguments.
                </span>
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7 md:pt-6">
            <Reveal delay={0.1}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
                These are not values chosen to look good on a website. They are
                the load-bearing constraints the design actually gets argued
                from — the reasons certain obvious features are refused, and the
                reasons this page is careful about the word{" "}
                <em className="text-foreground not-italic">shipped</em>.
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

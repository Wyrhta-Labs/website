import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, Github } from "lucide-react"
import { PageShell, PageHeader, PageBody } from "@/components/page-shell"

export const metadata: Metadata = {
  title: "Contact — Wyrhta Labs",
  description:
    "Wyrhta Labs is a personal open-source project. The best place to reach the maintainer is GitHub Issues; a few alternative channels are listed for sensitive matters.",
}

const REPOS = [
  {
    name: "Heorth",
    description:
      "Bugs, design questions, feature requests, and conversation about the homestead and family system.",
    href: "https://github.com/wyrhta-labs/heorth/issues",
  },
  {
    name: "KithLedger",
    description:
      "API design, schema thoughts, MCP integrations, and anything touching the relationships ledger.",
    href: "https://github.com/wyrhta-labs/kithledger/issues",
  },
  {
    name: "Feoh",
    description:
      "Envelopes, double-entry questions, the attach-to-Heorth handshake, and anything financial that runs beside the hearth.",
    href: "https://github.com/wyrhta-labs/feoh/issues",
  },
  {
    name: "Wyrhta meta",
    description:
      "Documentation, the website, the journal — anything that isn't tied to a specific project.",
    href: "https://github.com/wyrhta-labs/wyrhta/issues",
  },
]

const EXCEPTIONS = [
  {
    label: "Security",
    note: "Vulnerability reports for the software or this site. Encrypted mail welcome; please don't open a public issue.",
    address: "security@wyrhta.dev",
    href: "/security",
    cta: "See policy",
  },
  {
    label: "Conduct",
    note: "Confidential reports concerning community spaces. Read by the maintainer only.",
    address: "conduct@wyrhta.dev",
    href: "/code-of-conduct",
    cta: "See policy",
  },
  {
    label: "Press",
    note: "Interview requests, quotes, and assets. Please include your deadline and outlet.",
    address: "press@wyrhta.dev",
    href: "/press",
    cta: "Press kit",
  },
]

const SOCIALS = [
  { label: "GitHub", handle: "@wyrhta-labs", href: "https://github.com/wyrhta-labs" },
  { label: "Mastodon", handle: "@wyrhta@social.coop", href: "https://social.coop/@wyrhta" },
  { label: "Matrix", handle: "#wyrhta:matrix.org", href: "https://matrix.to/#/#wyrhta:matrix.org" },
  { label: "Journal", handle: "wyrhta.dev/journal", href: "/journal" },
]

export default function ContactPage() {
  return (
    <PageShell>
      <PageHeader
        kind="§ Project · Contact"
        title="Talk to me on GitHub Issues."
        dek="Wyrhta Labs is, today, a private and personal open-source project — one maintainer, working in the open. The clearest way to reach me, and the most useful for the work itself, is to open an issue on the repository the conversation belongs to."
        crumbs={[{ label: "Contact" }]}
        meta={[
          { label: "Best channel", value: "GitHub Issues" },
          { label: "Maintainer", value: "1 · signed by name" },
          { label: "Project", value: "Personal initiative" },
          { label: "Languages", value: "EN · DE" },
        ]}
      />
      <PageBody>
        {/* Primary channel — large, dominant indicator */}
        <section aria-labelledby="primary" className="mb-20 md:mb-24">
          <div className="rounded-2xl border-2 border-foreground bg-foreground text-background p-7 md:p-12">
            <div className="flex items-center gap-2.5 text-eyebrow text-background/60">
              <Github size={14} />
              Primary channel
            </div>
            <h2
              id="primary"
              className="mt-5 font-serif text-4xl md:text-6xl tracking-tight leading-[1.02] text-balance"
            >
              For now, GitHub Issues{" "}
              <span className="italic font-light text-background/55">
                is the way.
              </span>
            </h2>
            <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-background/80">
              Open an issue on the repository the conversation belongs to.
              Bug, idea, design question, integration thought, or simply
              hello — it all fits there. Threads stay tied to the code,
              the history is public, and the reply comes back signed by a
              person.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3">
              {REPOS.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-xl border border-background/15 bg-background/[0.04] p-5 hover:bg-background/[0.08] hover:border-background/30 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-eyebrow text-background/55">
                      <Github size={12} />
                      Issues
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-background/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-background"
                    />
                  </div>
                  <div className="mt-3 font-serif text-2xl tracking-tight">
                    {repo.name}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-background/70">
                    {repo.description}
                  </p>
                </a>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-background/15 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <div className="text-eyebrow text-background/45 mb-2">
                  Why issues
                </div>
                <p className="text-sm leading-relaxed text-background/75">
                  In the open, tied to the work, searchable later by the
                  next person with the same question.
                </p>
              </div>
              <div>
                <div className="text-eyebrow text-background/45 mb-2">
                  What to expect
                </div>
                <p className="text-sm leading-relaxed text-background/75">
                  A reply within a few days, usually faster. From one
                  person, by name. No bots, no triage queue.
                </p>
              </div>
              <div>
                <div className="text-eyebrow text-background/45 mb-2">
                  No template required
                </div>
                <p className="text-sm leading-relaxed text-background/75">
                  A clear paragraph is enough. Steps to reproduce,
                  context, or simply a thought worth writing down.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* When email instead */}
        <section aria-labelledby="exceptions">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-xs text-muted-foreground tracking-wider">
              § 01
            </span>
            <h2
              id="exceptions"
              className="font-serif text-2xl md:text-[1.875rem] tracking-tight leading-tight"
            >
              When an issue isn&apos;t the right place
            </h2>
          </div>
          <p className="max-w-2xl text-[1rem] md:text-[1.0625rem] text-foreground/85 leading-[1.7] mb-8">
            Three things deserve a private channel. For everything else,
            please prefer the public queue — it benefits the next person
            with the same question.
          </p>
          <ul className="divide-y divide-border border-y border-border">
            {EXCEPTIONS.map((c) => (
              <li key={c.address} className="py-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                  <div className="md:col-span-3">
                    <div className="text-eyebrow text-muted-foreground">
                      {c.label}
                    </div>
                    <a
                      href={`mailto:${c.address}`}
                      className="mt-1 inline-block font-mono text-sm text-foreground hover:text-primary transition-colors"
                    >
                      {c.address}
                    </a>
                  </div>
                  <p className="md:col-span-7 text-base text-foreground/85 leading-relaxed">
                    {c.note}
                  </p>
                  <div className="md:col-span-2 flex md:justify-end">
                    <Link
                      href={c.href}
                      className="inline-flex items-center gap-1 font-mono text-xs text-foreground hover:text-primary transition-colors group"
                    >
                      {c.cta}
                      <ArrowUpRight
                        size={12}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Elsewhere */}
        <section aria-labelledby="elsewhere" className="mt-20">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-xs text-muted-foreground tracking-wider">
              § 02
            </span>
            <h2
              id="elsewhere"
              className="font-serif text-2xl md:text-[1.875rem] tracking-tight leading-tight"
            >
              Elsewhere on the network
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SOCIALS.map((s) => {
              const external = s.href.startsWith("http")
              const Tag: typeof Link | "a" = external ? "a" : Link
              const props = external
                ? { href: s.href, target: "_blank", rel: "noreferrer" }
                : { href: s.href }
              return (
                <Tag
                  key={s.label}
                  {...(props as never)}
                  className="group flex items-center justify-between rounded-lg border border-border bg-card px-5 py-4 hover:border-primary/40 transition-colors"
                >
                  <div>
                    <div className="text-eyebrow text-muted-foreground">
                      {s.label}
                    </div>
                    <div className="mt-1 font-mono text-sm text-foreground">
                      {s.handle}
                    </div>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Tag>
              )
            })}
          </div>
        </section>
      </PageBody>
    </PageShell>
  )
}

import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PageShell, PageHeader, PageBody } from "@/components/page-shell"

export const metadata: Metadata = {
  title: "Contact — Wyrhta Labs",
  description:
    "Get in touch with Wyrhta Labs. Channels for general questions, press, security, sponsorship, and community.",
}

type Channel = {
  label: string
  email: string
  description: string
  reply: string
  href?: string
  external?: boolean
}

const CHANNELS: Channel[] = [
  {
    label: "General",
    email: "hello@wyrhta.dev",
    description:
      "Questions about Heorth, KithLedger, or the studio. Long letters welcome.",
    reply: "Within a week, often the same day.",
  },
  {
    label: "Press & podcasts",
    email: "press@wyrhta.dev",
    description:
      "Interview requests, quotes, and assets. Please include your deadline and outlet.",
    reply: "Within 3 working days.",
    href: "/press",
  },
  {
    label: "Security",
    email: "security@wyrhta.dev",
    description:
      "Vulnerability reports for our software and infrastructure. Encrypted mail welcome.",
    reply: "Within 2 working days.",
    href: "/security",
  },
  {
    label: "Sponsorship",
    email: "patrons@wyrhta.dev",
    description:
      "Individuals, families, and organisations supporting our open-source work.",
    reply: "Within a week.",
  },
  {
    label: "Speaking & teaching",
    email: "speaking@wyrhta.dev",
    description:
      "Invitations for talks, workshops, and writing. We travel rarely; we read everything.",
    reply: "Within 2 weeks.",
  },
  {
    label: "Conduct",
    email: "conduct@wyrhta.dev",
    description:
      "Confidential reports concerning our community spaces. Read by maintainers only.",
    reply: "Within 2 working days.",
    href: "/code-of-conduct",
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
        kind="§ Studio · Contact"
        title="A short list of doors, all of which actually open."
        dek="We are a small team. Pick the channel that fits, write what you need, and we will reply — usually with a sentence or two of context, and the name of whoever picks it up."
        crumbs={[{ label: "Contact" }]}
        meta={[
          { label: "Studio", value: "Wyrhta Labs Ltd" },
          { label: "Hours", value: "Mon–Thu, EU time" },
          { label: "Languages", value: "EN · NB · PT · ES" },
          { label: "Response window", value: "1–7 days" },
        ]}
      />
      <PageBody>
        <section aria-labelledby="channels">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-xs text-muted-foreground tracking-wider">§ 01</span>
            <h2
              id="channels"
              className="font-serif text-2xl md:text-[1.875rem] tracking-tight leading-tight"
            >
              Channels
            </h2>
          </div>
          <ul className="divide-y divide-border border-y border-border">
            {CHANNELS.map((c) => (
              <li key={c.email} className="py-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                  <div className="md:col-span-3">
                    <div className="text-eyebrow text-muted-foreground">{c.label}</div>
                    <a
                      href={`mailto:${c.email}`}
                      className="mt-1 inline-block font-mono text-sm text-foreground hover:text-primary transition-colors"
                    >
                      {c.email}
                    </a>
                  </div>
                  <p className="md:col-span-6 text-base text-foreground/85 leading-relaxed">
                    {c.description}
                  </p>
                  <div className="md:col-span-3 flex flex-col items-start md:items-end gap-2">
                    <span className="font-mono text-xs text-muted-foreground">
                      {c.reply}
                    </span>
                    {c.href && (
                      <Link
                        href={c.href}
                        className="inline-flex items-center gap-1 font-mono text-xs text-foreground hover:text-primary transition-colors group"
                      >
                        See policy
                        <ArrowUpRight
                          size={12}
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="elsewhere" className="mt-20">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-xs text-muted-foreground tracking-wider">§ 02</span>
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
                    <div className="text-eyebrow text-muted-foreground">{s.label}</div>
                    <div className="mt-1 font-mono text-sm text-foreground">{s.handle}</div>
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

        <section aria-labelledby="expect" className="mt-20">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-xs text-muted-foreground tracking-wider">§ 03</span>
            <h2
              id="expect"
              className="font-serif text-2xl md:text-[1.875rem] tracking-tight leading-tight"
            >
              What to expect
            </h2>
          </div>
          <div className="space-y-4 text-[1rem] md:text-[1.0625rem] text-foreground/85 leading-[1.7] max-w-2xl">
            <p>
              {"You will hear back from a person, signed by name. We don't run autoresponders, helpdesks, or ticketing software for inbound email. If your question is suitable for a public answer, we may ask permission to respond on the journal so others can benefit; you will always be quoted by your preferred attribution and never by surprise."}
            </p>
            <p>
              {"Postal address and shipping for press samples and patron gifts are available on request. We do not list our home addresses on the open web."}
            </p>
          </div>
        </section>
      </PageBody>
    </PageShell>
  )
}

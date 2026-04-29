import type { Metadata } from "next"
import Link from "next/link"
import { ArrowDownToLine, Copy } from "lucide-react"
import { WyrhtaMark } from "@/components/wyrhta-mark"
import {
  PageShell,
  PageHeader,
  PageBody,
  Section,
  Lede,
  Mono,
  type TocItem,
} from "@/components/page-shell"

export const metadata: Metadata = {
  title: "Press Kit — Wyrhta Labs",
  description:
    "Facts, logos, palette, typography, and boilerplate copy for writers, podcasters, and conferences covering Wyrhta Labs.",
}

const toc: TocItem[] = [
  { id: "glance", n: "01", label: "At a glance" },
  { id: "studio", n: "02", label: "The studio" },
  { id: "projects", n: "03", label: "Projects" },
  { id: "logo", n: "04", label: "Logo & wordmark" },
  { id: "color", n: "05", label: "Color" },
  { id: "type", n: "06", label: "Typography" },
  { id: "boilerplate", n: "07", label: "Boilerplate" },
  { id: "people", n: "08", label: "People" },
  { id: "contact", n: "09", label: "Press contact" },
]

const FACTS = [
  { label: "Founded", value: "2024, Oslo" },
  { label: "Studio size", value: "4 makers" },
  { label: "Locations", value: "Oslo · Lisbon · Bristol" },
  { label: "License", value: "AGPL-3.0-or-later" },
  { label: "Funding", value: "Patrons & grants" },
  { label: "Languages", value: "EN · NB · PT · ES" },
]

const PALETTE = [
  { name: "Parchment", token: "--background", hex: "#F4EEE2", text: "#322A23" },
  { name: "Deep Ink", token: "--foreground", hex: "#322A23", text: "#F4EEE2" },
  { name: "Ember", token: "--primary", hex: "#B5572C", text: "#FBF7EE" },
  { name: "Warm Taupe", token: "--muted-foreground", hex: "#7C6F5F", text: "#FBF7EE" },
  { name: "Linen", token: "--secondary", hex: "#E6DECE", text: "#322A23" },
]

export default function PressPage() {
  return (
    <PageShell>
      <PageHeader
        kind="§ Studio · Press kit"
        title="A short, honest brief."
        dek="Everything a thoughtful piece needs about Wyrhta Labs: facts, logos, colour, type, and a few sentences you can paste without rewriting."
        crumbs={[{ label: "Press" }]}
        meta={[
          { label: "Updated", value: "April 12, 2026" },
          { label: "Press contact", value: "press@wyrhta.dev" },
          { label: "Reply window", value: "≤ 3 working days" },
          { label: "License", value: "Marks reserved · text CC BY-SA" },
        ]}
      />
      <PageBody toc={toc}>
        <Section id="glance" n="01" title="At a glance">
          <Lede>
            Wyrhta Labs is a small open-source studio building patient
            software for family and home life.
          </Lede>
          <dl className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-5 border-t border-b border-border py-6">
            {FACTS.map((f) => (
              <div key={f.label}>
                <dt className="text-eyebrow text-muted-foreground">{f.label}</dt>
                <dd className="mt-1 font-mono text-sm text-foreground">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="studio" n="02" title="The studio">
          <p>
            Wyrhta Labs takes its name from the Old English{" "}
            <em className="text-foreground">wyrhta</em> — a maker, a wright.
            Founded in Oslo in 2024, the studio designs and ships
            open-source tools for households: software for the kitchen
            wall, the family calendar, and the slow correspondence between
            people who care for one another.
          </p>
          <p>
            We work in the open by default: code on GitHub under
            AGPL-3.0-or-later, a public handbook, a monthly journal, and a
            roadmap discussed in the open before it is built.
          </p>
        </Section>

        <Section id="projects" n="03" title="Projects">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <article className="rounded-lg border border-border bg-card p-6">
              <div className="text-eyebrow text-primary">Heorth</div>
              <h3 className="mt-2 font-serif text-xl tracking-tight">
                A homestead and family management system.
              </h3>
              <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
                Meal plans, chores, calendars, pantry, garden, and a shared
                family journal. Designed for a wall-mounted screen, a phone
                in the kitchen, and a laptop after the children are in bed.
                Self-hosted by default; hosted beta available.
              </p>
              <div className="mt-4 font-mono text-xs text-muted-foreground">
                v0.18 · 142 contributors
              </div>
            </article>
            <article className="rounded-lg border border-border bg-card p-6">
              <div className="text-eyebrow text-primary">KithLedger</div>
              <h3 className="mt-2 font-serif text-xl tracking-tight">
                An API-first ledger for personal relationships.
              </h3>
              <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
                A small, self-hostable database for tracking and nurturing
                the people you care about: birthdays, last touchpoints, the
                shape of a friendship over years. Used inside Heorth and
                consumed by third-party clients.
              </p>
              <div className="mt-4 font-mono text-xs text-muted-foreground">
                v0.4 · OpenAPI 3.1
              </div>
            </article>
          </div>
        </Section>

        <Section id="logo" n="04" title="Logo & wordmark">
          <p>
            The Wyrhta mark is a stylised W with a small flame above it —
            a wright at the hearth. Use the wordmark on dark or light
            parchment backgrounds; do not recolour, stretch, or place it
            on busy imagery.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-border bg-card p-8 flex flex-col items-center justify-center gap-6">
              <WyrhtaMark className="h-20 w-20 text-foreground" />
              <div className="flex items-center gap-3">
                <a
                  href="/wyrhta-mark.svg"
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2 text-xs font-mono hover:bg-primary transition-colors"
                >
                  <ArrowDownToLine size={12} />
                  Mark.svg
                </a>
                <span className="font-mono text-xs text-muted-foreground">
                  256 × 256
                </span>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-8 flex flex-col items-center justify-center gap-6">
              <div className="flex items-center gap-3">
                <WyrhtaMark className="h-10 w-10 text-foreground" />
                <span className="font-serif text-3xl tracking-tight">
                  Wyrhta{" "}
                  <span className="text-muted-foreground font-light">
                    Labs
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="/wyrhta-wordmark.svg"
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2 text-xs font-mono hover:bg-primary transition-colors"
                >
                  <ArrowDownToLine size={12} />
                  Wordmark.svg
                </a>
                <span className="font-mono text-xs text-muted-foreground">
                  640 × 128
                </span>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Need PNG, PDF, or a high-resolution master? Email{" "}
            <a
              href="mailto:press@wyrhta.dev"
              className="underline underline-offset-2 hover:text-primary"
            >
              press@wyrhta.dev
            </a>
            {" and we'll send a packet within a working day."}
          </p>
        </Section>

        <Section id="color" n="05" title="Color">
          <p>
            The palette is parchment-and-ember: warm neutrals with a
            single saturated accent. Five colours total — three neutrals,
            one accent, one ink.
          </p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-3">
            {PALETTE.map((c) => (
              <div
                key={c.name}
                className="rounded-lg border border-border overflow-hidden"
              >
                <div
                  className="aspect-[4/3] flex items-end p-3"
                  style={{ backgroundColor: c.hex, color: c.text }}
                >
                  <div className="font-serif text-base leading-tight">
                    {c.name}
                  </div>
                </div>
                <div className="p-3 bg-card border-t border-border">
                  <div className="font-mono text-[11px] text-muted-foreground">
                    {c.token}
                  </div>
                  <div className="font-mono text-xs text-foreground mt-0.5">
                    {c.hex}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="type" n="06" title="Typography">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="text-eyebrow text-muted-foreground">Display & body</div>
              <div className="mt-3 font-serif text-5xl tracking-tight leading-none">
                Fraunces
              </div>
              <p className="mt-4 text-sm text-foreground/80 leading-relaxed">
                A warm, slightly bookish serif by Undercase Type. Used for
                everything readable and most things headline-shaped.
              </p>
              <div className="mt-4 font-mono text-xs text-muted-foreground">
                opsz · SOFT · weights 300–700
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="text-eyebrow text-muted-foreground">Mono & detail</div>
              <div className="mt-3 font-mono text-3xl tracking-tight leading-none text-foreground">
                Geist Mono
              </div>
              <p className="mt-4 text-sm text-foreground/80 leading-relaxed">
                {"Vercel's open-source monospace. Used for eyebrows, code, metadata, and anything with a measurement attached."}
              </p>
              <div className="mt-4 font-mono text-xs text-muted-foreground">
                weights 300–600
              </div>
            </div>
          </div>
        </Section>

        <Section id="boilerplate" n="07" title="Boilerplate">
          <p>Two paragraphs you can paste verbatim, short and long.</p>
          <BoilerCard
            length="Short · 1 sentence"
            text="Wyrhta Labs is a small open-source studio making patient software for family and home life — the makers of Heorth and KithLedger."
          />
          <BoilerCard
            length="Long · 1 paragraph"
            text="Wyrhta Labs is an independent open-source studio of four people, working between Oslo, Lisbon, and Bristol. Founded in 2024, the studio builds tools for households rather than enterprises: Heorth, a homestead and family management system, and KithLedger, an API-first database for nurturing personal relationships. Everything ships under AGPL-3.0-or-later, with a public roadmap, a monthly journal, and a small community of patrons and contributors."
          />
        </Section>

        <Section id="people" n="08" title="People">
          <p>
            Founders Sigrid Halland, Tomás Reis, Maeve Atherton, and
            Ezekiel Vale share editorial and engineering responsibilities.
            For interview availability, head shots, and bios, write to
            press@wyrhta.dev with a deadline and outlet.
          </p>
        </Section>

        <Section id="contact" n="09" title="Press contact">
          <p>
            <a
              href="mailto:press@wyrhta.dev"
              className="font-mono text-foreground underline underline-offset-2 hover:text-primary"
            >
              press@wyrhta.dev
            </a>{" "}
            · Sigrid Halland, on rotation. We reply within 3 working days,
            usually faster. For all other matters, see the{" "}
            <Link
              href="/contact"
              className="underline underline-offset-2 hover:text-primary"
            >
              contact page
            </Link>
            .
          </p>
        </Section>
      </PageBody>
    </PageShell>
  )
}

function BoilerCard({ length, text }: { length: string; text: string }) {
  return (
    <div className="mt-4 rounded-lg border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <div className="text-eyebrow text-muted-foreground">{length}</div>
        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
          <Copy size={11} />
          Select & copy
        </span>
      </div>
      <p className="mt-3 text-[1rem] text-foreground/90 leading-[1.7] font-serif">
        {text}
      </p>
    </div>
  )
}

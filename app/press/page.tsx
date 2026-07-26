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
    "Facts, logos, palette, typography, and boilerplate copy for anyone covering Wyrhta Labs — including the one fact easiest to get wrong: it is built, but not yet deployed.",
}

const toc: TocItem[] = [
  { id: "glance", n: "01", label: "At a glance" },
  { id: "project", n: "02", label: "The project" },
  { id: "projects", n: "03", label: "Projects" },
  { id: "logo", n: "04", label: "Logo & wordmark" },
  { id: "color", n: "05", label: "Color" },
  { id: "type", n: "06", label: "Typography" },
  { id: "boilerplate", n: "07", label: "Boilerplate" },
  { id: "people", n: "08", label: "People" },
  { id: "contact", n: "09", label: "Press contact" },
]

const FACTS = [
  { label: "Founded", value: "2026, Castrop-Rauxel" },
  { label: "Form", value: "Personal initiative" },
  { label: "Maintainers", value: "1" },
  { label: "Stage", value: "Pre-launch, not deployed" },
  { label: "Services", value: "4 · 1 public so far" },
  { label: "Distribution", value: "Self-hosted only" },
  { label: "Funding", value: "Self-funded" },
  { label: "Languages", value: "EN · DE" },
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
        kind="§ Project · Press kit"
        title="A short, honest brief."
        dek="Everything a thoughtful piece needs about Wyrhta Labs: facts, logos, colour, type, and a few sentences you can paste without rewriting."
        crumbs={[{ label: "Press" }]}
        meta={[
          { label: "Updated", value: "July 26, 2026" },
          { label: "Press contact", value: "press@wyrhta.dev" },
          { label: "Reply window", value: "≤ 3 working days" },
          { label: "License", value: "Marks reserved · text CC BY-SA" },
        ]}
      />
      <PageBody toc={toc}>
        <Section id="glance" n="01" title="At a glance">
          <Lede>
            Wyrhta Labs is a one-person open-source project building a
            self-hosted household manager. It is not yet deployed, and any
            coverage should say so.
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

        <Section id="project" n="02" title="The project">
          <p>
            Wyrhta Labs takes its name from the Old English{" "}
            <em className="text-foreground">wyrhta</em> — a maker, a wright.
            It is a private, personal open-source project, started in 2026
            in Castrop-Rauxel by a single maintainer, devoted to one clear
            goal: tools for households rather than enterprises — software
            for the kitchen wall, the family calendar, and the slow
            correspondence between people who care for one another.
          </p>
          <p>
            The architecture is a hub and satellites rather than one large
            application: <em className="text-foreground">Heorth</em> is the
            household hub and the only human-facing surface for now, while{" "}
            <em className="text-foreground">KithLedger</em> and{" "}
            <em className="text-foreground">Feoh</em> are independent,
            API-first services it consumes over their own APIs. All three build
            on <em className="text-foreground">@wyrhta/core</em>, consumed as a
            pinned version tag rather than linked in a monorepo.
          </p>
          <p>
            The most important thing to get right in coverage is the stage.
            The foundation is done, finance has been extracted into its own
            service, and the release intended to get the system adopted at home
            is code-complete — written and tested. It is{" "}
            <em className="text-foreground">not deployed</em>: there is no
            instance running, no household using it, and nothing to sign up
            for or install. There are no target dates to quote, because the
            plan is a sequence of gated phases rather than a schedule. The
            accurate framing is{" "}
            <em className="text-foreground">
              in active development toward a first at-home release
            </em>
            . Conversation happens on{" "}
            <a
              href="https://github.com/wyrhta-labs"
              className="border-b border-foreground/30 hover:border-foreground"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            , where the foundation library is public.
          </p>
        </Section>

        <Section id="projects" n="03" title="Projects">
          <p className="mb-6">
            Four independent repositories. None of the three services is
            deployed; the version each is at, and what that version means, is
            noted on every card.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <article className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-center gap-2">
                <div className="text-eyebrow text-primary">Heorth</div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground border border-border rounded-full px-2 py-0.5">
                  Hub
                </span>
              </div>
              <h3 className="mt-2 font-serif text-xl tracking-tight">
                The household hub, and the only human-facing surface.
              </h3>
              <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
                Meals, the house library, the home and its upkeep — plus the
                family calendar and task list, mirrored from the services a
                household already uses rather than replacing them. Its headline
                surface is the Hearth View, designed for a kitchen-wall
                touchscreen, with a phone PWA as companion. Also the
                household&apos;s identity provider.
              </p>
              <div className="mt-4 font-mono text-xs text-muted-foreground">
                v0.3.0 · code-complete, not deployed
              </div>
            </article>
            <article className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-center gap-2">
                <div className="text-eyebrow text-primary">KithLedger</div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground border border-border rounded-full px-2 py-0.5">
                  Satellite
                </span>
              </div>
              <h3 className="mt-2 font-serif text-xl tracking-tight">
                An API-first record of the people a household deals with.
              </h3>
              <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
                Family, friends, and equally the tradespeople who service the
                house. Consumed by Heorth over its API with a service key; it
                holds no member accounts of its own. Its MCP server moves from
                stdio to HTTP before it can deploy as a satellite.
              </p>
              <div className="mt-4 font-mono text-xs text-muted-foreground">
                v0.2.0 · tagged, not deployed
              </div>
            </article>
            <article className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-center gap-2">
                <div className="text-eyebrow text-primary">Feoh</div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground border border-border rounded-full px-2 py-0.5">
                  Satellite
                </span>
              </div>
              <h3 className="mt-2 font-serif text-xl tracking-tight">
                An independent finance service, extracted from the hub.
              </h3>
              <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
                Previously a module inside Heorth, now its own repository, API,
                MCP server, and database. Heorth&apos;s finance screens proxy
                across to it over a service key — the first satellite
                consumption, and the template for the rest. Repository is
                private.
              </p>
              <div className="mt-4 font-mono text-xs text-muted-foreground">
                v0.1.0 · extracted, not deployed
              </div>
            </article>
            <article className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-center gap-2">
                <div className="text-eyebrow text-primary">@wyrhta/core</div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-primary border border-primary/40 bg-primary/10 rounded-full px-2 py-0.5">
                  Public
                </span>
              </div>
              <h3 className="mt-2 font-serif text-xl tracking-tight">
                The shared foundation all three are built on.
              </h3>
              <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
                Identity, auth, an HTTP kit, the household model, an MCP
                scaffold, and database conventions. Demand-driven, with no
                business domains and no UI. Consumed as a pinned GitHub tag, so
                each service upgrades deliberately. The only public repository
                so far.
              </p>
              <div className="mt-4 font-mono text-xs text-muted-foreground">
                v0.1.2 · public, in use
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

          <a
            href="/wyrhta-design-guide.pdf"
            download
            className="mt-6 group flex items-center justify-between gap-6 rounded-lg border border-dashed border-border bg-card/60 p-5 hover:border-primary/60 hover:bg-card transition-colors"
          >
            <div className="min-w-0">
              <div className="text-eyebrow text-primary">
                Full design guide · PDF
              </div>
              <div className="mt-1.5 font-serif text-lg tracking-tight text-foreground">
                Brand foundation, mark, colour, type, and layout — in one
                file.
              </div>
              <div className="mt-1 font-mono text-xs text-muted-foreground">
                A4 · 13 pages · 94 KB · Spring 2026
              </div>
            </div>
            <span className="shrink-0 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2 text-xs font-mono group-hover:bg-primary transition-colors">
              <ArrowDownToLine size={12} />
              Design-guide.pdf
            </span>
          </a>
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
            text="Wyrhta Labs is a one-person open-source project in Castrop-Rauxel building a self-hosted household manager — Heorth as the hub, with KithLedger and Feoh as independent satellite services — currently in active development toward a first at-home release."
          />
          <BoilerCard
            length="Long · 1 paragraph"
            text="Wyrhta Labs is an independent open-source project started in 2026 by a single maintainer working from Castrop-Rauxel, Germany. It builds a self-hosted household manager for homes rather than enterprises, structured as a small constellation of independent services rather than one application: Heorth, the household hub and the only human-facing surface for now, whose headline feature is a kitchen-wall Hearth View showing the week's meals beside the family calendar; and KithLedger and Feoh, API-first satellite services for the people a household deals with and for its finances respectively, which Heorth consumes over their own APIs. All three build on @wyrhta/core, a shared foundation library consumed as a pinned version tag. A deliberate design choice runs through it: rather than becoming the household's system of record, Heorth mirrors the calendar and task list a family already uses — Microsoft 365 today, behind provider interfaces that keep other backends possible — so nothing has to be migrated. The project is pre-launch. The foundation and the extraction of finance into its own service are done, and the release intended to get the system adopted at home is code-complete, but nothing is deployed and no household is running it. There is no hosted offering, and none is planned."
          />
        </Section>

        <Section id="people" n="08" title="People">
          <p>
            Wyrhta Labs is authored and maintained by one person, working from
            Castrop-Rauxel at a deliberate pace. There is no team, no
            collective &ldquo;we&rdquo;, and no contributor roster — anything
            on this site written in the first person is written by the same
            maintainer. For interview
            availability, a head shot, or a short bio, please write to{" "}
            <a
              href="mailto:press@wyrhta.dev"
              className="border-b border-foreground/30 hover:border-foreground"
            >
              press@wyrhta.dev
            </a>{" "}
            with your deadline and outlet.
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
            — replied to by the maintainer, usually within three working
            days. For all other matters, the project lives on{" "}
            <a
              href="https://github.com/wyrhta-labs"
              className="underline underline-offset-2 hover:text-primary"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            ; see the{" "}
            <Link
              href="/contact"
              className="underline underline-offset-2 hover:text-primary"
            >
              contact page
            </Link>{" "}
            for the full picture.
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

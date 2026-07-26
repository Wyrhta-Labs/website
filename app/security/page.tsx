import type { Metadata } from "next"
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
  title: "Security — Wyrhta Labs",
  description:
    "How to report a vulnerability in @wyrhta/core or wyrhta.dev. Scope, response timelines, safe harbor, and coordinated disclosure.",
}

const toc: TocItem[] = [
  { id: "report", n: "01", label: "Report a vulnerability" },
  { id: "scope", n: "02", label: "Scope" },
  { id: "out", n: "03", label: "Out of scope" },
  { id: "timeline", n: "04", label: "Response timeline" },
  { id: "harbor", n: "05", label: "Safe harbor" },
  { id: "disclosure", n: "06", label: "Coordinated disclosure" },
  { id: "thanks", n: "07", label: "Credit" },
]

export default function SecurityPage() {
  return (
    <PageShell>
      <PageHeader
        kind="§ Engineering · Security"
        title="If you find something, please tell me first."
        dek="A security report is a gift. This page is the front door — what to send, where to send it, and what to expect once it lands. Note that the scope is small right now: one public repository and this website, because nothing else is published or deployed."
        crumbs={[{ label: "Security" }]}
        meta={[
          { label: "Reports", value: "security@wyrhta.dev" },
          { label: "Handled by", value: "1 · the maintainer" },
          { label: "Response", value: "≤ 2 working days" },
          { label: "Last updated", value: "July 26, 2026" },
        ]}
      />
      <PageBody toc={toc}>
        <Section id="report" n="01" title="Report a vulnerability">
          <Lede>
            Email{" "}
            <a
              href="mailto:security@wyrhta.dev"
              className="not-italic underline underline-offset-2 hover:text-primary"
            >
              security@wyrhta.dev
            </a>{" "}
            with steps to reproduce, rather than opening a public issue.
          </Lede>
          <p>A useful report typically contains:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>The affected project and version (or commit hash).</li>
            <li>A short description of the impact and the class of issue.</li>
            <li>Concrete reproduction steps, ideally a minimal proof of concept.</li>
            <li>Whether you intend to publish, and a rough disclosure timeline that suits you.</li>
          </ul>
        </Section>

        <Section id="scope" n="02" title="Scope">
          <p>
            Two things, which is everything currently published:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              The <Mono>@wyrhta/core</Mono> repository and its tagged releases
              — the shared foundation, so anything here affects all three
              services downstream.
            </li>
            <li>
              This website at <Mono>wyrhta.dev</Mono>.
            </li>
          </ul>
          <p>
            Heorth, KithLedger, and Feoh are not public and not deployed, so
            there is nothing there to test against. When they open up, this
            list grows and this page says so.
          </p>
        </Section>

        <Section id="out" n="03" title="Out of scope">
          <ul className="list-disc pl-5 space-y-2">
            <li>Issues that require physical access to an unlocked device.</li>
            <li>Volumetric denial-of-service against our public endpoints.</li>
            <li>Best-practice recommendations without a demonstrated impact (e.g. missing security headers on static pages).</li>
            <li>Vulnerabilities in third-party services listed here but not operated by this project.</li>
            <li>{"Self-XSS, clickjacking on pages with no sensitive actions, and theoretical issues without a working PoC."}</li>
          </ul>
        </Section>

        <Section id="timeline" n="04" title="Response timeline">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-foreground">First reply</strong> within 2 working days.</li>
            <li><strong className="text-foreground">Triaged</strong> with a severity within 5 working days.</li>
            <li><strong className="text-foreground">Patch released</strong> in 30 days for high or critical, 90 days for medium, best-effort for low.</li>
            <li><strong className="text-foreground">Public advisory</strong> published in the journal and on GitHub Security Advisories.</li>
          </ul>
          <p>
            These are commitments from one person rather than a rota. If
            something lands during a bad week you will get an honest holding
            reply rather than silence.
          </p>
        </Section>

        <Section id="harbor" n="05" title="Safe harbor">
          <p>
            We will not pursue legal action against, or ask law enforcement
            to investigate, a researcher who:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Reports through the channels above and gives us a reasonable opportunity to respond.</li>
            <li>Tests only on accounts they own, or with the explicit consent of the account holder.</li>
            <li>Does not exfiltrate more data than needed to demonstrate the issue.</li>
            <li>{"Does not damage data, services, or other people's experience of the service."}</li>
          </ul>
          <p>
            Authorisation under this safe harbor only covers the activities
            described above; it does not authorise unrelated unlawful
            conduct.
          </p>
        </Section>

        <Section id="disclosure" n="06" title="Coordinated disclosure">
          <p>
            We prefer coordinated disclosure with a default 90-day window
            from triage to public advisory. We are happy to publish sooner
            if there is no risk to users, and will ask for a brief
            extension when a fix needs more time. We will credit you by
            name (or chosen handle) unless you would rather remain
            anonymous.
          </p>
        </Section>

        <Section id="thanks" n="07" title="Credit">
          <p>
            No one has had cause to report anything yet — there is very little
            published to report against. When that changes, reporters get
            credited by name or chosen handle in the advisory and the release
            notes that close it, unless they would rather not be.
          </p>
          <p>
            If you need to send something encrypted, say so in a first plain
            email and a key will be exchanged then. Publishing a fingerprint
            here that nobody has verified would be worse than not having one.
          </p>
        </Section>
      </PageBody>
    </PageShell>
  )
}

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
    "How to report a vulnerability in Heorth, KithLedger, or wyrhta.dev. Scope, response timelines, safe harbor, and PGP key.",
}

const toc: TocItem[] = [
  { id: "report", n: "01", label: "Report a vulnerability" },
  { id: "scope", n: "02", label: "Scope" },
  { id: "out", n: "03", label: "Out of scope" },
  { id: "timeline", n: "04", label: "Response timeline" },
  { id: "harbor", n: "05", label: "Safe harbor" },
  { id: "disclosure", n: "06", label: "Coordinated disclosure" },
  { id: "pgp", n: "07", label: "PGP key" },
  { id: "thanks", n: "08", label: "Acknowledgments" },
]

export default function SecurityPage() {
  return (
    <PageShell>
      <PageHeader
        kind="§ Engineering · Security"
        title="If you find something, please tell us first."
        dek="We treat security reports as a gift. This page is the front door — what to send, where to send it, and what to expect once it lands."
        crumbs={[{ label: "Security" }]}
        meta={[
          { label: "Reports", value: "security@wyrhta.dev" },
          { label: "Public key", value: "0xA9B3 4C71 8E2F" },
          { label: "Response", value: "≤ 2 working days" },
          { label: "Last updated", value: "April 12, 2026" },
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
            with steps to reproduce. Encrypt with our PGP key if the issue is
            sensitive.
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
            We are interested in reports concerning the following code and
            services:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>The <Mono>heorth</Mono> repository and shipped releases.</li>
            <li>The <Mono>kithledger</Mono> repository and shipped releases.</li>
            <li>The hosted Heorth beta at <Mono>app.heorth.org</Mono>.</li>
            <li>The marketing site at <Mono>wyrhta.dev</Mono>.</li>
            <li>Our public infrastructure listed at <Mono>wyrhta.dev/handbook/infra</Mono>.</li>
          </ul>
        </Section>

        <Section id="out" n="03" title="Out of scope">
          <ul className="list-disc pl-5 space-y-2">
            <li>Issues that require physical access to an unlocked device.</li>
            <li>Volumetric denial-of-service against our public endpoints.</li>
            <li>Best-practice recommendations without a demonstrated impact (e.g. missing security headers on static pages).</li>
            <li>Vulnerabilities in third-party services we list but do not operate.</li>
            <li>{"Self-XSS, clickjacking on pages with no sensitive actions, and theoretical issues without a working PoC."}</li>
          </ul>
        </Section>

        <Section id="timeline" n="04" title="Response timeline">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-foreground">First reply</strong> within 2 working days.</li>
            <li><strong className="text-foreground">Triaged</strong> with severity and owner within 5 working days.</li>
            <li><strong className="text-foreground">Patch released</strong> in 30 days for high/critical, 90 days for medium, best-effort for low.</li>
            <li><strong className="text-foreground">Public advisory</strong> published in the journal and on GitHub Security Advisories.</li>
          </ul>
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

        <Section id="pgp" n="07" title="PGP key">
          <p>
            Sensitive reports may be encrypted with our key{" "}
            <Mono>0xA9B3 4C71 8E2F D4A8</Mono>, available at{" "}
            <a
              href="https://wyrhta.dev/.well-known/pgp.txt"
              className="underline underline-offset-2 hover:text-primary"
              target="_blank"
              rel="noreferrer"
            >
              wyrhta.dev/.well-known/pgp.txt
            </a>
            . The same fingerprint is published on our keyserver and in
            our handbook for cross-checking.
          </p>
        </Section>

        <Section id="thanks" n="08" title="Acknowledgments">
          <p>
            {"We thank everyone who has helped keep our software safe. Recent contributors are credited in each project's "}
            <Mono>SECURITY.md</Mono>
            {" and in the release notes for the advisory they helped close."}
          </p>
        </Section>
      </PageBody>
    </PageShell>
  )
}

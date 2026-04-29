import type { Metadata } from "next"
import Link from "next/link"
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
  title: "Terms of Service — Wyrhta Labs",
  description:
    "The terms governing use of wyrhta.dev, hosted Heorth, and our open-source projects. Plain English, short clauses.",
}

const toc: TocItem[] = [
  { id: "summary", n: "01", label: "Plain-English summary" },
  { id: "license", n: "02", label: "Open-source license" },
  { id: "use", n: "03", label: "Acceptable use" },
  { id: "self-host", n: "04", label: "Self-hosting" },
  { id: "hosted", n: "05", label: "Hosted services" },
  { id: "marks", n: "06", label: "Trademarks & boilerplate" },
  { id: "warranty", n: "07", label: "Disclaimers & liability" },
  { id: "term", n: "08", label: "Termination" },
  { id: "law", n: "09", label: "Governing law" },
  { id: "contact", n: "10", label: "Contact" },
]

export default function TermsPage() {
  return (
    <PageShell>
      <PageHeader
        kind="§ Legal · Terms"
        title="The agreement, written like a letter."
        dek="These terms cover wyrhta.dev, our hosted services, and the studio's relationship with people who use, fork, or sponsor our software. They are short by design."
        crumbs={[{ label: "Terms" }]}
        meta={[
          { label: "Last updated", value: "April 12, 2026" },
          { label: "Version", value: "v2" },
          { label: "License", value: "AGPL-3.0-or-later" },
          { label: "Document", value: "wyrhta.dev/terms" },
        ]}
      />
      <PageBody toc={toc}>
        <Section id="summary" n="01" title="Plain-English summary">
          <Lede>
            {"Use the software. Don't break it for anyone else. We make no warranties, but we will try our honest best."}
          </Lede>
          <p>
            By visiting wyrhta.dev or using a hosted service we operate, you
            agree to the terms below. If you self-host our open-source code,
            the AGPL license governs your use; these terms cover the
            interaction with our infrastructure and people only.
          </p>
        </Section>

        <Section id="license" n="02" title="Open-source license">
          <p>
            Heorth and KithLedger are released under the{" "}
            <Mono>AGPL-3.0-or-later</Mono> license. You are free to study,
            run, modify, and redistribute the software, including for
            commercial purposes, provided that you preserve the source
            chain and offer the source of any networked modifications to
            the people who use them.
          </p>
          <p>
            Our docs, design assets, and the contents of this website
            (excluding logos and wordmarks) are released under{" "}
            <Mono>CC BY-SA 4.0</Mono> unless a file or page states
            otherwise.
          </p>
        </Section>

        <Section id="use" n="03" title="Acceptable use">
          <p>You agree not to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Use our services to harass, surveil, or endanger anyone.</li>
            <li>Probe or attack our infrastructure outside of a coordinated security report (see our security policy).</li>
            <li>Resell hosted Heorth or KithLedger as your own product without contacting us first.</li>
            <li>
              Misrepresent yourself or impersonate the studio when using our
              communication channels.
            </li>
          </ul>
        </Section>

        <Section id="self-host" n="04" title="Self-hosting">
          <p>
            Self-hosted installations are governed by the AGPL and the
            documentation in each repository. We provide no SLA, no uptime
            guarantee, and no individualised support for self-hosted
            instances. The community forum and GitHub issues are the
            appropriate places to ask questions; we monitor both as time
            allows.
          </p>
        </Section>

        <Section id="hosted" n="05" title="Hosted services">
          <p>
            Where we operate a hosted instance (such as the Heorth beta at{" "}
            <Mono>app.heorth.org</Mono>), the service is provided on an
            as-is basis. We aim for 99.5% monthly availability and publish
            incident notes in the journal, but we make no contractual
            uptime commitment during the beta.
          </p>
          <p>
            Hosted accounts are intended for individual households and
            small caregiving groups. We may rate-limit or pause an account
            that places the service at risk for others, with a note
            explaining why.
          </p>
        </Section>

        <Section id="marks" n="06" title="Trademarks & boilerplate">
          <p>
            "Wyrhta Labs", "Heorth", and "KithLedger", together with the
            respective marks, belong to Wyrhta Labs Ltd. You may use them
            in unmodified form to refer to the studio and our projects in
            articles, talks, and tutorials. You may not use them to
            suggest endorsement, or as part of a product, service, or
            domain name without our written permission.
          </p>
        </Section>

        <Section id="warranty" n="07" title="Disclaimers & liability">
          <p>
            The software and services are provided "as is", without
            warranty of any kind, express or implied, including but not
            limited to merchantability, fitness for a particular purpose,
            and non-infringement.
          </p>
          <p>
            To the fullest extent permitted by law, Wyrhta Labs's total
            liability for any claim arising out of these terms is limited
            to the greater of one hundred euros and the amount you paid us
            in the twelve months preceding the claim.
          </p>
        </Section>

        <Section id="term" n="08" title="Termination">
          <p>
            You may stop using our services at any time. We may suspend or
            close a hosted account that materially breaches these terms,
            after a written notice and a reasonable opportunity to remedy
            the issue, except where immediate suspension is necessary to
            protect others.
          </p>
        </Section>

        <Section id="law" n="09" title="Governing law">
          <p>
            These terms are governed by the laws of Norway. Disputes that
            cannot be resolved through correspondence will be heard in the
            courts of Oslo, without prejudice to your mandatory rights as
            a consumer in your country of residence.
          </p>
        </Section>

        <Section id="contact" n="10" title="Contact">
          <p>
            Questions about these terms can be sent to{" "}
            <a
              href="mailto:hello@wyrhta.dev"
              className="underline underline-offset-2 hover:text-primary"
            >
              hello@wyrhta.dev
            </a>
            . Legal notices to{" "}
            <a
              href="mailto:legal@wyrhta.dev"
              className="underline underline-offset-2 hover:text-primary"
            >
              legal@wyrhta.dev
            </a>
            . See also the{" "}
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

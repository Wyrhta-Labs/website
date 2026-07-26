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
    "The terms governing use of wyrhta.dev and the published open-source code. Short, because there is no hosted service and nothing to buy.",
}

const toc: TocItem[] = [
  { id: "summary", n: "01", label: "Plain-English summary" },
  { id: "who", n: "02", label: "Who you are agreeing with" },
  { id: "license", n: "03", label: "Open-source license" },
  { id: "use", n: "04", label: "Acceptable use" },
  { id: "self-host", n: "05", label: "Self-hosting" },
  { id: "no-service", n: "06", label: "No hosted service" },
  { id: "marks", n: "07", label: "Trademarks & boilerplate" },
  { id: "warranty", n: "08", label: "Disclaimers & liability" },
  { id: "law", n: "09", label: "Governing law" },
  { id: "contact", n: "10", label: "Contact" },
]

export default function TermsPage() {
  return (
    <PageShell>
      <PageHeader
        kind="§ Legal · Terms"
        title="The agreement, written like a letter."
        dek="These terms cover this website and the code published under the Wyrhta Labs name. There is no hosted service, no account, and nothing to buy, which keeps this mercifully short."
        crumbs={[{ label: "Terms" }]}
        meta={[
          { label: "Last updated", value: "July 26, 2026" },
          { label: "Version", value: "v3" },
          { label: "Applies to", value: "wyrhta.dev · published code" },
          { label: "Document", value: "wyrhta.dev/terms" },
        ]}
      />
      <PageBody toc={toc}>
        <Section id="summary" n="01" title="Plain-English summary">
          <Lede>
            {
              "Read the site. Use the code under its license. There are no warranties and no service to rely on."
            }
          </Lede>
          <p>
            By visiting wyrhta.dev you agree to what follows. If you use code
            published under the Wyrhta Labs name, its own license governs that
            use — these terms cover this website and interactions with the
            project&apos;s public channels.
          </p>
        </Section>

        <Section id="who" n="02" title="Who you are agreeing with">
          <p>
            Wyrhta Labs is a personal open-source project run by a single
            individual in Castrop-Rauxel, Germany. It is not a company, and
            nothing on this site should be read as an offer from one. There
            are no employees, no support organisation, and no commercial
            relationship available to enter into.
          </p>
        </Section>

        <Section id="license" n="03" title="Open-source license">
          <p>
            Published code carries its license in the repository, and that
            file is the authority — not this page. Today the only published
            repository is <Mono>@wyrhta/core</Mono>, the shared foundation
            library. Heorth, KithLedger, and Feoh are not yet public; each will
            state its license when it is.
          </p>
          <p>
            The contents of this website, excluding the logos and wordmarks,
            are released under <Mono>CC BY-SA 4.0</Mono> unless a page states
            otherwise.
          </p>
        </Section>

        <Section id="use" n="04" title="Acceptable use">
          <p>You agree not to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Use the project&apos;s channels to harass, surveil, or endanger anyone.</li>
            <li>
              Probe or attack this site&apos;s infrastructure outside of a
              coordinated security report — see the{" "}
              <Link
                href="/security"
                className="underline underline-offset-2 hover:text-primary"
              >
                security policy
              </Link>
              .
            </li>
            <li>Misrepresent yourself or impersonate the project when using its communication channels.</li>
          </ul>
        </Section>

        <Section id="self-host" n="05" title="Self-hosting">
          <p>
            Self-hosted installations are governed by the license in the
            relevant repository together with its documentation. There is no
            SLA, no uptime guarantee, and no individualised support. GitHub
            issues on the public repository are the place to ask questions,
            monitored as time allows by one person.
          </p>
        </Section>

        <Section id="no-service" n="06" title="No hosted service">
          <p>
            There is no hosted instance of Heorth or any other service here —
            no sign-up, no subscription, no trial, and no accounts. A hosted
            offering is explicitly out of scope on the{" "}
            <Link
              href="/roadmap#not"
              className="underline underline-offset-2 hover:text-primary"
            >
              roadmap
            </Link>{" "}
            rather than merely unbuilt.
          </p>
          <p>
            Consequently there is nothing to pay for, nothing to cancel, and no
            billing relationship. If a hosted service is ever offered, it will
            arrive with its own terms rather than being quietly folded into
            these.
          </p>
        </Section>

        <Section id="marks" n="07" title="Trademarks & boilerplate">
          <p>
            &ldquo;Wyrhta Labs&rdquo;, &ldquo;Heorth&rdquo;,
            &ldquo;KithLedger&rdquo;, and &ldquo;Feoh&rdquo;, together with the
            associated marks, are used to identify this project. You may use
            them in unmodified form to refer to it in articles, talks, and
            tutorials. Please do not use them to suggest endorsement, or as
            part of a product, service, or domain name, without asking first.
          </p>
        </Section>

        <Section id="warranty" n="08" title="Disclaimers & liability">
          <p>
            The website and any published software are provided &ldquo;as
            is&rdquo;, without warranty of any kind, express or implied,
            including but not limited to merchantability, fitness for a
            particular purpose, and non-infringement.
          </p>
          <p>
            To the fullest extent permitted by law, liability for any claim
            arising out of these terms is excluded. Nothing here limits
            liability that cannot lawfully be limited, including for injury
            caused by negligence or for intentional wrongdoing, nor does it
            affect your mandatory rights as a consumer.
          </p>
        </Section>

        <Section id="law" n="09" title="Governing law">
          <p>
            These terms are governed by the laws of the Federal Republic of
            Germany, without prejudice to your mandatory rights as a consumer
            in your country of residence.
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
            , legal notices to{" "}
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

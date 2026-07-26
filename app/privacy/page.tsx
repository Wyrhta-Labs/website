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
  title: "Privacy — Wyrhta Labs",
  description:
    "What this site collects, which is close to nothing, and what the software does with your data once it exists — which is keep it on your own hardware.",
}

const toc: TocItem[] = [
  { id: "short", n: "01", label: "The short version" },
  { id: "site", n: "02", label: "This website" },
  { id: "skip", n: "03", label: "What is not collected" },
  { id: "software", n: "04", label: "The software itself" },
  { id: "no-service", n: "05", label: "There is no hosted service" },
  { id: "email", n: "06", label: "Email" },
  { id: "rights", n: "07", label: "Your rights" },
  { id: "changes", n: "08", label: "Changes to this notice" },
  { id: "contact", n: "09", label: "Contact" },
]

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageHeader
        kind="§ Legal · Privacy"
        title="A privacy notice you can read in one sitting."
        dek="Wyrhta Labs is one person building self-hosted software. This site is static, there is no product to sign up for, and there is no account anywhere holding your household's data. That makes this notice short, and it is short honestly rather than vaguely."
        crumbs={[{ label: "Privacy" }]}
        meta={[
          { label: "Last updated", value: "July 26, 2026" },
          { label: "Version", value: "v4" },
          { label: "Effective", value: "Immediately" },
          { label: "Document", value: "wyrhta.dev/privacy" },
        ]}
      />
      <PageBody toc={toc}>
        <Section id="short" n="01" title="The short version">
          <Lede>
            This site keeps a short server access log and nothing else. There
            is no product, no account, no mailing list, and no analytics.
          </Lede>
          <p>
            The software this site describes is self-hosted by design: when it
            eventually runs, it runs on your hardware, holding your data, with
            no channel back here. That is a design constraint rather than a
            promise about a service, because there is no service.
          </p>
        </Section>

        <Section id="site" n="02" title="This website">
          <p>
            Loading a page here produces an ordinary server access log entry:
            the requested path, the response code, an approximate country
            derived from your IP address, and a coarse user-agent string. It
            is used for debugging and abuse prevention, kept for 30 days, and
            then deleted.
          </p>
          <p>
            There is no contact form on this site and no newsletter to join,
            so there is nothing here that collects your details. If you email
            the addresses listed on the{" "}
            <Link
              href="/contact"
              className="underline underline-offset-2 hover:text-primary"
            >
              contact page
            </Link>
            , that message sits in an inbox until the conversation is finished
            and is then archived for a year.
          </p>
        </Section>

        <Section id="skip" n="03" title="What is not collected">
          <ul className="list-disc pl-5 space-y-2">
            <li>No analytics of any kind — first-party or third-party.</li>
            <li>No fingerprinting, session replay, or heatmaps.</li>
            <li>No advertising identifiers, no retargeting pixels.</li>
            <li>No social login, no embedded social widgets.</li>
            <li>No precise location, device sensors, or contact lists.</li>
            <li>Nothing is sold, brokered, or shared for marketing.</li>
          </ul>
        </Section>

        <Section id="software" n="04" title="The software itself">
          <p>
            Heorth and its satellite services are built to be installed on
            hardware you control. Your household data lives in a database you
            provisioned, and the software does not phone home, transmit usage
            statistics, or check in with any server here.
          </p>
          <p>
            One point worth stating plainly, because it is the part that
            genuinely touches third parties: Heorth deliberately does{" "}
            <em className="text-foreground">not</em> replace the calendar and
            task list a household already uses. It mirrors them. That means
            your instance talks to whichever provider you configure —
            Microsoft 365 today — using credentials you supply, and that
            provider&apos;s own privacy terms continue to govern the data it
            holds. Heorth reads a copy into your own database. Nothing about
            that arrangement routes through Wyrhta Labs.
          </p>
          <p>
            None of this is running anywhere yet. There is no release to
            install, so today these are commitments about how it is being
            built rather than descriptions of software in your hands.
          </p>
        </Section>

        <Section id="no-service" n="05" title="There is no hosted service">
          <p>
            There is no hosted instance, no <Mono>app.</Mono> subdomain, no
            sign-up, and no trial. A hosted offering is explicitly ruled out on
            the{" "}
            <Link
              href="/roadmap#not"
              className="underline underline-offset-2 hover:text-primary"
            >
              roadmap
            </Link>{" "}
            rather than merely unbuilt — self-hosting is the point of the
            project. If that ever changes, this notice changes with it, in
            advance.
          </p>
          <p>
            It follows that there is no payment processor, no billing data, and
            no subscriber records, because there is nothing to pay for.
          </p>
        </Section>

        <Section id="email" n="06" title="Email">
          <p>
            There is no mailing list and no journal subscription. The journal
            is a page on this site and an{" "}
            <a
              href="/rss.xml"
              className="underline underline-offset-2 hover:text-primary"
            >
              RSS feed
            </a>
            , neither of which knows who is reading. No email provider is
            involved, and no address is stored for sending anything.
          </p>
        </Section>

        <Section id="rights" n="07" title="Your rights">
          <p>
            Under the GDPR you can ask what is held about you, request a copy,
            have a mistake corrected, or have it deleted. Given the above, in
            practice this only concerns email correspondence and access logs.
            Write to{" "}
            <a
              href="mailto:privacy@wyrhta.dev"
              className="underline underline-offset-2 hover:text-primary"
            >
              privacy@wyrhta.dev
            </a>{" "}
            from the address you used. Expect a reply within five working days
            and completion within thirty.
          </p>
        </Section>

        <Section id="changes" n="08" title="Changes to this notice">
          <p>
            Changes bump the version number and date at the top of this page.
            Anything material — particularly anything that would introduce data
            collection where there currently is none — gets a journal note
            explaining it rather than a silent edit.
          </p>
        </Section>

        <Section id="contact" n="09" title="Contact">
          <p>
            Wyrhta Labs · privacy@wyrhta.dev · Castrop-Rauxel, Germany. Postal
            address available on request. For other matters see the{" "}
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

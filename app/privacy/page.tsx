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
    "How Wyrhta Labs handles personal data on wyrhta.dev and across our open-source projects. Plain language, short list.",
}

const toc: TocItem[] = [
  { id: "short", n: "01", label: "The short version" },
  { id: "site", n: "02", label: "What we collect on wyrhta.dev" },
  { id: "skip", n: "03", label: "What we don't collect" },
  { id: "self-hosted", n: "04", label: "Heorth & KithLedger (self-hosted)" },
  { id: "hosted", n: "05", label: "Hosted Heorth (beta)" },
  { id: "email", n: "06", label: "Email & journal subscriptions" },
  { id: "sharing", n: "07", label: "Sharing & disclosure" },
  { id: "cookies", n: "08", label: "Cookies & local storage" },
  { id: "rights", n: "09", label: "Your rights" },
  { id: "changes", n: "10", label: "Changes to this notice" },
  { id: "contact", n: "11", label: "Contact" },
]

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageHeader
        kind="§ Legal · Privacy"
        title="A privacy notice you can read in one sitting."
        dek="Wyrhta Labs is a private, personal open-source project devoted to tools for family life. We collect very little, sell nothing, and would rather you leave the page understanding what happens with your data than walk away soothed."
        crumbs={[{ label: "Privacy" }]}
        meta={[
          { label: "Last updated", value: "April 12, 2026" },
          { label: "Version", value: "v3" },
          { label: "Effective", value: "Immediately" },
          { label: "Document", value: "wyrhta.dev/privacy" },
        ]}
      />
      <PageBody
        toc={toc}
        closing={
          <p className="font-mono text-xs text-muted-foreground">
            Source for this notice lives in our public handbook on{" "}
            <a
              href="https://github.com/wyrhta-labs/handbook"
              className="underline underline-offset-2 hover:text-foreground"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            . Suggestions welcome via pull request.
          </p>
        }
      >
        <Section id="short" n="01" title="The short version">
          <Lede>
            We collect what we need to keep the site working, answer your
            email, and send the journal if you asked for it. Nothing else.
          </Lede>
          <p>
            Self-hosted installations of Heorth and KithLedger send no data
            back to us. The hosted Heorth beta stores only what you put in it,
            on infrastructure we operate ourselves. We do not run third-party
            analytics, advertising, or behavioural tracking on any of our
            properties.
          </p>
        </Section>

        <Section id="site" n="02" title="What we collect on wyrhta.dev">
          <p>
            When you load a page on this site, our edge servers record a short
            access log: the requested path, response code, an approximate
            country derived from your IP, and a coarse user-agent. Logs are
            kept for 30 days for debugging and abuse prevention, then
            permanently deleted.
          </p>
          <p>
            {"If you submit our contact form (we don't have one yet) or reply to a journal email,"} we hold the resulting message in our inbox
            until the conversation is plainly finished, then archive it for
            one year.
          </p>
        </Section>

        <Section id="skip" n="03" title="What we don't collect">
          <ul className="list-disc pl-5 space-y-2">
            <li>No third-party analytics, fingerprinting, or session replay.</li>
            <li>No advertising identifiers. No retargeting pixels.</li>
            <li>No social login or embedded social tracking.</li>
            <li>No precise location, no device sensor data, no contact lists.</li>
            <li>No data brokered to anyone. We do not sell anything we hold.</li>
          </ul>
        </Section>

        <Section id="self-hosted" n="04" title="Heorth & KithLedger (self-hosted)">
          <p>
            Heorth and KithLedger are designed to be installed on your own
            hardware. When you self-host, your data stays in the database
            you provisioned. Our software does not phone home, transmit
            usage statistics, or check in with our servers.
          </p>
          <p>
            The only exception is the optional <Mono>updates.check</Mono>{" "}
            setting, which queries our public release feed once per day to
            tell you when a new version is available. It sends nothing
            beyond an anonymous request for a JSON file. You can disable it
            in your config.
          </p>
        </Section>

        <Section id="hosted" n="05" title="Hosted Heorth (beta)">
          <p>
            For households that prefer not to run a server, we offer a
            hosted Heorth instance at <Mono>app.heorth.org</Mono>. Your
            household data — meals, chores, calendar, photos, journals —
            is stored encrypted at rest on EU-located infrastructure we
            rent from a single provider, listed in our handbook.
          </p>
          <p>
            We restore from backups for accidental deletions for up to 14
            days. After you close an account, we permanently delete the
            household within 30 days, except where law requires we retain
            billing records.
          </p>
        </Section>

        <Section id="email" n="06" title="Email & journal subscriptions">
          <p>
            If you subscribe to the monthly journal, we store your email
            address and the date you joined. We send one note per month
            and the occasional release announcement. Every email contains
            a one-click unsubscribe link that removes your address from our
            list immediately.
          </p>
          <p>
            We send mail through a single transactional provider under a
            data-processing agreement. We do not pixel-track opens or
            clicks.
          </p>
        </Section>

        <Section id="sharing" n="07" title="Sharing & disclosure">
          <p>
            We share the minimum data necessary with three categories of
            processor: our hosting provider, our email provider, and our
            payment processor (for sponsorships). All are listed by name
            in our public handbook and bound by data-processing
            agreements.
          </p>
          <p>
            We will disclose data to authorities only when compelled by a
            valid legal order, and we will tell you about it whenever law
            permits.
          </p>
        </Section>

        <Section id="cookies" n="08" title="Cookies & local storage">
          <p>
            wyrhta.dev sets no cookies. Hosted Heorth uses a single,
            first-party, HTTP-only session cookie to keep you signed in,
            and a small amount of local storage to remember your last
            household and theme.
          </p>
        </Section>

        <Section id="rights" n="09" title="Your rights">
          <p>
            You can ask us to confirm what we hold about you, to provide
            a copy, to correct a mistake, or to delete it. Email{" "}
            <a
              href="mailto:privacy@wyrhta.dev"
              className="underline underline-offset-2 hover:text-primary"
            >
              privacy@wyrhta.dev
            </a>{" "}
            from the address you have used with us. We aim to respond
            within five working days and to complete the request within
            thirty.
          </p>
        </Section>

        <Section id="changes" n="10" title="Changes to this notice">
          <p>
            When we change this notice, we update the version number and
            date at the top, post the diff in the journal, and email
            subscribers if the change is material. Older versions remain
            in the git history of our handbook.
          </p>
        </Section>

        <Section id="contact" n="11" title="Contact">
          <p>
            Wyrhta Labs · privacy@wyrhta.dev · Postal address available on
            request. For other matters see the{" "}
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

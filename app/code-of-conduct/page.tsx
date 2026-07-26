import type { Metadata } from "next"
import {
  PageShell,
  PageHeader,
  PageBody,
  Section,
  Lede,
  type TocItem,
} from "@/components/page-shell"

export const metadata: Metadata = {
  title: "Code of Conduct — Wyrhta Labs",
  description:
    "How we conduct ourselves in the Wyrhta Labs community: pledge, standards, enforcement, and reporting.",
}

const toc: TocItem[] = [
  { id: "short", n: "01", label: "The short version" },
  { id: "pledge", n: "02", label: "Our pledge" },
  { id: "standards", n: "03", label: "Our standards" },
  { id: "responsibility", n: "04", label: "Enforcement responsibilities" },
  { id: "scope", n: "05", label: "Scope" },
  { id: "reporting", n: "06", label: "Reporting" },
  { id: "guidelines", n: "07", label: "Enforcement guidelines" },
  { id: "attribution", n: "08", label: "Attribution" },
]

export default function CodeOfConductPage() {
  return (
    <PageShell>
      <PageHeader
        kind="§ Community · Conduct"
        title="A code of conduct for a small, kind room."
        dek="Wyrhta Labs is a personal project with a public porch. These are the manners expected of everyone — maintainer and visitors alike — when standing on it."
        crumbs={[{ label: "Code of Conduct" }]}
        meta={[
          { label: "Last updated", value: "July 26, 2026" },
          { label: "Version", value: "v1.2" },
          { label: "Reports", value: "conduct@wyrhta.dev" },
          { label: "Adapted from", value: "Contributor Covenant 2.1" },
        ]}
      />
      <PageBody toc={toc}>
        <Section id="short" n="01" title="The short version">
          <Lede>
            Be patient, be specific, and assume the person on the other end
            is tired, busy, and trying their best.
          </Lede>
          <p>
            We hold ourselves to higher standards than we hold visitors. If
            you are a maintainer or a frequent contributor, the bar for
            kindness is on you, not on the new person who phrased an issue
            awkwardly.
          </p>
        </Section>

        <Section id="pledge" n="02" title="Our pledge">
          <p>
            {"We pledge to make participation in our community a harassment-free"}
            experience for everyone, regardless of age, body size, visible or
            invisible disability, ethnicity, sex characteristics, gender
            identity and expression, level of experience, education,
            socio-economic status, nationality, personal appearance, race,
            caste, colour, religion, or sexual identity and orientation.
          </p>
          <p>
            We pledge to act and interact in ways that contribute to an open,
            welcoming, diverse, inclusive, and healthy community.
          </p>
        </Section>

        <Section id="standards" n="03" title="Our standards">
          <p>Examples of behaviour that contributes to a positive environment:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Demonstrating empathy and kindness toward other people.</li>
            <li>Being respectful of differing opinions, viewpoints, and experiences.</li>
            <li>Giving and gracefully accepting constructive feedback.</li>
            <li>Owning mistakes, apologising plainly, and learning from them.</li>
            <li>Focusing on what is best for the community, not just ourselves.</li>
          </ul>
          <p className="pt-2">Examples of unacceptable behaviour:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>The use of sexualised language or imagery, and sexual attention or advances of any kind.</li>
            <li>Trolling, insulting or derogatory comments, and personal or political attacks.</li>
            <li>Public or private harassment.</li>
            <li>{"Publishing others' private information, such as a physical or email address, without their explicit permission."}</li>
            <li>Other conduct which could reasonably be considered inappropriate in a professional setting.</li>
          </ul>
        </Section>

        <Section id="responsibility" n="04" title="Enforcement responsibilities">
          <p>
            Maintainers are responsible for clarifying and enforcing our
            standards of acceptable behaviour and will take appropriate and
            fair corrective action in response to any behaviour they deem
            inappropriate, threatening, offensive, or harmful.
          </p>
          <p>
            Maintainers have the right and responsibility to remove, edit, or
            reject comments, commits, code, wiki edits, issues, and other
            contributions that are not aligned with this Code of Conduct, and
            will communicate reasons for moderation decisions when
            appropriate.
          </p>
        </Section>

        <Section id="scope" n="05" title="Scope">
          <p>
            This Code of Conduct applies in every space this project runs.
            Today that means the issues and pull requests on the public
            repository and the email addresses listed on this site — there is
            no chat server, forum, or event, and the journal has no comments.
            It also applies when someone is representing the project in public
            elsewhere. Should further spaces ever open, they arrive under this
            document rather than outside it.
          </p>
        </Section>

        <Section id="reporting" n="06" title="Reporting">
          <p>
            Instances of abusive, harassing, or otherwise unacceptable
            behaviour may be reported to the maintainers responsible for
            enforcement at{" "}
            <a
              href="mailto:conduct@wyrhta.dev"
              className="underline underline-offset-2 hover:text-primary"
            >
              conduct@wyrhta.dev
            </a>
            . All complaints will be reviewed and investigated promptly and
            fairly.
          </p>
          <p>
            We will respect the privacy and security of the reporter of any
            incident. We will not name the reporter without their consent,
            even when describing an enforcement decision in public.
          </p>
        </Section>

        <Section id="guidelines" n="07" title="Enforcement guidelines">
          <p>
            Maintainers will follow these community impact guidelines in
            determining the consequences for any action they deem in
            violation of this Code of Conduct.
          </p>
          <ol className="list-decimal pl-5 space-y-3">
            <li>
              <strong className="text-foreground">Correction.</strong> A
              private, written warning, providing clarity around the nature
              of the violation and an explanation of why the behaviour was
              inappropriate. A public apology may be requested.
            </li>
            <li>
              <strong className="text-foreground">Warning.</strong> A warning
              with consequences for continued behaviour. No interaction with
              the people involved for a specified period.
            </li>
            <li>
              <strong className="text-foreground">Temporary ban.</strong> A
              temporary ban from any sort of interaction or public
              communication with the community for a specified period.
            </li>
            <li>
              <strong className="text-foreground">Permanent ban.</strong> A
              permanent ban from any sort of public interaction within the
              community.
            </li>
          </ol>
        </Section>

        <Section id="attribution" n="08" title="Attribution">
          <p>
            This Code of Conduct is adapted from the{" "}
            <a
              href="https://www.contributor-covenant.org/version/2/1/code_of_conduct/"
              className="underline underline-offset-2 hover:text-primary"
              target="_blank"
              rel="noreferrer"
            >
              Contributor Covenant
            </a>
            , version 2.1, and tightened in our voice.
          </p>
        </Section>
      </PageBody>
    </PageShell>
  )
}

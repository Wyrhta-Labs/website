"use client"

import { Reveal } from "./reveal"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

type Project = {
  id: string
  name: string
  tagline: string
  description: string
  /** Honest status. Never "beta", never a date. */
  status: string
  version: string
  stack: string
  surface: string
  source: string
  href: string
  external?: boolean
  featured?: boolean
  badge?: string
}

const PROJECTS: Project[] = [
  {
    id: "heorth",
    name: "Heorth",
    tagline: "The household hub, and the only screen anyone has to look at.",
    description:
      "Where the household actually lives: the week's meals, the family calendar, what is currently outstanding, the home itself and its upkeep, and the house library. It is the hub the satellites report into, and the household's identity provider — members exist here, once. The headline surface is the Hearth View on a kitchen wall; a phone PWA is the companion.",
    status: "Code-complete · not deployed",
    version: "v0.3.0",
    stack: "TypeScript · PostgreSQL",
    surface: "Web · PWA · REST · MCP",
    source: "Not yet public",
    href: "#heorth",
    featured: true,
    badge: "Hub",
  },
  {
    id: "kithledger",
    name: "KithLedger",
    tagline: "An API-first record of the people a household deals with.",
    description:
      "Kith — one's circle. A small service for the people in your life and the ones who show up to fix the boiler. Heorth calls it over its API with a service key; it holds no member accounts of its own yet. Its MCP server moves from stdio to HTTP before it can deploy as a satellite.",
    status: "Tagged · not deployed",
    version: "v0.2.0",
    stack: "TypeScript · PostgreSQL",
    surface: "REST · MCP (stdio)",
    source: "Not yet public",
    href: "#kithledger",
    badge: "Satellite",
  },
  {
    id: "feoh",
    name: "Feoh",
    tagline: "An independent finance service, extracted from the hub.",
    description:
      "Feoh (ᚠ — cattle, and so movable wealth) used to be a module inside Heorth. It is now its own repository, API, MCP server, and database. Heorth's finance screens proxy across to it over a service key — the first satellite consumption, and the template for every one after it.",
    status: "Extracted · not deployed",
    version: "v0.1.0",
    stack: "TypeScript · PostgreSQL",
    surface: "REST · MCP",
    source: "Private",
    href: "#feoh",
    badge: "Satellite",
  },
  {
    id: "core",
    name: "@wyrhta/core",
    tagline: "The foundation every service is built on.",
    description:
      "Identity, auth, an HTTP kit, the household model, an MCP scaffold, and database conventions. Deliberately demand-driven — things land in it when a consumer actually needs them — and it holds no business domains and no UI. Consumed as a pinned GitHub tag rather than a workspace link, so nothing gets a foundation change it did not ask for.",
    status: "Public · in use by all three",
    version: "v0.1.2",
    stack: "TypeScript",
    surface: "Library",
    source: "Public",
    href: "https://github.com/wyrhta-labs",
    external: true,
    badge: "Foundation",
  },
]

export function ProjectsOverview() {
  const featured = PROJECTS.find((p) => p.featured)
  const others = PROJECTS.filter((p) => !p.featured)

  return (
    <section id="projects" className="relative py-20 md:py-28 border-t border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 md:mb-16">
          <div className="md:col-span-4">
            <Reveal>
              <div className="text-eyebrow text-primary mb-4">§ 01 — The constellation</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-serif text-4xl md:text-5xl tracking-tight leading-[1.05]">
                One hub, two satellites, one foundation.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7 md:col-start-6 flex md:items-end">
            <Reveal delay={0.1}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
                Not a monorepo, and not one large application. Four
                independent repositories: <span className="text-foreground">Heorth</span>{" "}
                is the hub and the only human-facing surface for now;{" "}
                <span className="text-foreground">KithLedger</span> and{" "}
                <span className="text-foreground">Feoh</span> are API-first
                satellites it consumes over their own APIs; and all three
                build on <span className="text-foreground">@wyrhta/core</span>,
                pinned by version tag so each upgrades on purpose rather than
                by accident. Every status below is written as it actually is —
                built, tagged, and not yet running anywhere.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Hub — full width */}
        {featured && (
          <Reveal delay={0.1} className="block">
            <ProjectCard project={featured} />
          </Reveal>
        )}

        {/* Satellites and foundation */}
        <div className="mt-4 md:mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {others.map((p, idx) => (
            <Reveal key={p.id} delay={0.18 + idx * 0.08}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const inner = (
    <>
      <div className="flex items-start justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <span
            className={cn(
              "size-2 rounded-full",
              project.featured ? "bg-primary" : "bg-foreground/60",
            )}
            aria-hidden="true"
          />
          <span className="text-eyebrow text-muted-foreground">
            {project.version} · {project.status}
          </span>
        </div>
        <ArrowUpRight
          size={18}
          className="shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
        />
      </div>

      <h3
        className={cn(
          "font-serif tracking-tight",
          project.featured ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl",
        )}
      >
        {project.name}
        {project.badge && (
          <span
            className={cn(
              "ml-3 align-middle inline-flex items-center rounded-full px-2 py-0.5 text-[0.625rem] font-mono uppercase tracking-wider",
              project.featured
                ? "border border-primary/40 bg-primary/10 text-primary"
                : "border border-border bg-secondary text-muted-foreground",
            )}
          >
            {project.badge}
          </span>
        )}
      </h3>
      <p className="mt-2 italic font-light text-lg text-foreground/80">{project.tagline}</p>

      <p className="mt-6 text-base leading-relaxed text-muted-foreground text-pretty">
        {project.description}
      </p>

      <dl
        className={cn(
          "mt-8 grid gap-4 pt-6 border-t border-border",
          project.featured ? "grid-cols-2 md:grid-cols-3" : "grid-cols-2",
        )}
      >
        <div>
          <dt className="text-eyebrow text-muted-foreground mb-1.5">Stack</dt>
          <dd className="font-mono text-xs text-foreground">{project.stack}</dd>
        </div>
        <div>
          <dt className="text-eyebrow text-muted-foreground mb-1.5">Surface</dt>
          <dd className="font-mono text-xs text-foreground">{project.surface}</dd>
        </div>
        <div>
          <dt className="text-eyebrow text-muted-foreground mb-1.5">Source</dt>
          <dd className="font-mono text-xs text-foreground">{project.source}</dd>
        </div>
      </dl>
    </>
  )

  const className = cn(
    "group relative block h-full rounded-md border border-border bg-card p-6 md:p-8 transition-colors",
    "hover:border-foreground",
  )

  if (project.external) {
    return (
      <a href={project.href} target="_blank" rel="noreferrer" className={className}>
        {inner}
      </a>
    )
  }

  return (
    <a href={project.href} className={className}>
      {inner}
    </a>
  )
}

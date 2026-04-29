"use client"

import { Reveal } from "./reveal"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

type Project = {
  id: string
  name: string
  tagline: string
  description: string
  status: string
  language: string
  license: string
  href: string
  featured?: boolean
}

const PROJECTS: Project[] = [
  {
    id: "heorth",
    name: "Heorth",
    tagline: "A homestead and family management system.",
    description:
      "Chores, meals, calendar, finances, library, garden — the running of a household, gathered around a single quiet hearth. Self-hosted, family-shaped, and built to last beyond the next funding round.",
    status: "Public alpha",
    language: "TypeScript · Rust",
    license: "AGPL-3.0",
    href: "#heorth",
    featured: true,
  },
  {
    id: "kithledger",
    name: "KithLedger",
    tagline: "An API-first database for nurturing relationships.",
    description:
      "A small, opinionated service for keeping track of the people in your life — the threads worth tending. Designed to be embedded in your own tools, not another app to check.",
    status: "Early access",
    language: "Rust · SQLite",
    license: "MIT",
    href: "#kithledger",
  },
]

export function ProjectsOverview() {
  return (
    <section id="projects" className="relative py-20 md:py-28 border-t border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 md:mb-16">
          <div className="md:col-span-4">
            <Reveal>
              <div className="text-eyebrow text-primary mb-4">§ 01 — Projects</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-serif text-4xl md:text-5xl tracking-tight leading-[1.05]">
                Two tools we&apos;re building, in the open.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7 md:col-start-6 flex md:items-end">
            <Reveal delay={0.1}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
                We focus narrowly. One main project for the household, and a small
                companion service that one of our tools needed and we couldn&apos;t
                find anywhere else. Both are free, source-available, and shaped by
                everyday use.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6">
          {PROJECTS.map((p, idx) => (
            <Reveal key={p.id} delay={0.1 + idx * 0.08} className={cn(p.featured ? "lg:col-span-3" : "lg:col-span-2")}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      className={cn(
        "group relative block h-full rounded-md border border-border bg-card p-6 md:p-8 transition-colors",
        "hover:border-foreground",
      )}
    >
      <div className="flex items-start justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <span
            className={cn(
              "size-2 rounded-full",
              project.featured ? "bg-primary" : "bg-foreground/60",
            )}
            aria-hidden="true"
          />
          <span className="text-eyebrow text-muted-foreground">{project.status}</span>
        </div>
        <ArrowUpRight
          size={18}
          className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
        />
      </div>

      <h3 className="font-serif text-3xl md:text-4xl tracking-tight">
        {project.name}
        {project.featured && (
          <span className="ml-3 align-middle inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-2 py-0.5 text-[0.625rem] font-mono uppercase tracking-wider text-primary">
            Flagship
          </span>
        )}
      </h3>
      <p className="mt-2 italic font-light text-lg text-foreground/80">{project.tagline}</p>

      <p className="mt-6 text-base leading-relaxed text-muted-foreground text-pretty">
        {project.description}
      </p>

      <dl className="mt-8 grid grid-cols-3 gap-4 pt-6 border-t border-border">
        <div>
          <dt className="text-eyebrow text-muted-foreground mb-1.5">Stack</dt>
          <dd className="font-mono text-xs text-foreground">{project.language}</dd>
        </div>
        <div>
          <dt className="text-eyebrow text-muted-foreground mb-1.5">License</dt>
          <dd className="font-mono text-xs text-foreground">{project.license}</dd>
        </div>
        <div>
          <dt className="text-eyebrow text-muted-foreground mb-1.5">Source</dt>
          <dd className="font-mono text-xs text-foreground">github.com/wyrhta-labs</dd>
        </div>
      </dl>
    </a>
  )
}

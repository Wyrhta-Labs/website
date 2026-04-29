import type { ReactNode } from "react"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { SiteHeader } from "./site-header"
import { SiteFooter } from "./site-footer"
import { cn } from "@/lib/utils"

type Crumb = { label: string; href?: string }

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <div className="pt-16 md:pt-20">{children}</div>
      <SiteFooter />
    </main>
  )
}

export function PageHeader({
  kind,
  title,
  dek,
  meta,
  crumbs,
}: {
  kind: string
  title: string
  dek?: string
  meta?: { label: string; value: string }[]
  crumbs?: Crumb[]
}) {
  return (
    <header className="container-custom pt-12 md:pt-20 pb-10 md:pb-14">
      <div className="flex items-center gap-2 text-eyebrow text-muted-foreground">
        <Link
          href="/"
          className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
        >
          <ChevronLeft size={12} className="opacity-70" />
          Wyrhta Labs
        </Link>
        <span className="opacity-50">/</span>
        {crumbs?.map((c, i) => (
          <span key={i} className="inline-flex items-center gap-2">
            {c.href ? (
              <Link href={c.href} className="hover:text-foreground transition-colors">
                {c.label}
              </Link>
            ) : (
              <span className="text-foreground">{c.label}</span>
            )}
            {i < (crumbs?.length ?? 0) - 1 && <span className="opacity-50">/</span>}
          </span>
        ))}
      </div>

      <div className="mt-8 max-w-3xl">
        <div className="text-eyebrow text-primary">{kind}</div>
        <h1 className="mt-4 font-serif text-4xl md:text-6xl tracking-tight text-balance leading-[1.05]">
          {title}
        </h1>
        {dek && (
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty max-w-2xl">
            {dek}
          </p>
        )}
      </div>

      {meta && meta.length > 0 && (
        <>
          <div className="mt-12 rule-warm" aria-hidden />
          <dl className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-4">
            {meta.map((m) => (
              <div key={m.label}>
                <dt className="text-eyebrow text-muted-foreground">{m.label}</dt>
                <dd className="mt-1 font-mono text-sm text-foreground">{m.value}</dd>
              </div>
            ))}
          </dl>
        </>
      )}
    </header>
  )
}

export type TocItem = { id: string; n: string; label: string }

export function PageBody({
  toc,
  children,
  closing,
}: {
  toc?: TocItem[]
  children: ReactNode
  closing?: ReactNode
}) {
  return (
    <div className="container-custom pb-24 md:pb-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {toc && toc.length > 0 && (
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28">
              <div className="text-eyebrow text-muted-foreground mb-4">Contents</div>
              <ol className="space-y-2.5">
                {toc.map((t) => (
                  <li key={t.id} className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-muted-foreground w-6 shrink-0">
                      {t.n}
                    </span>
                    <a
                      href={`#${t.id}`}
                      className="text-sm text-foreground/80 hover:text-primary transition-colors leading-snug"
                    >
                      {t.label}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        )}
        <article
          className={cn(
            "lg:col-span-9",
            (!toc || toc.length === 0) && "lg:col-span-12 max-w-3xl mx-auto",
          )}
        >
          {children}
          {closing && (
            <>
              <div className="mt-16 rule-warm" aria-hidden />
              <div className="mt-6">{closing}</div>
            </>
          )}
        </article>
      </div>
    </div>
  )
}

export function Section({
  id,
  n,
  title,
  children,
}: {
  id: string
  n: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-28 mt-14 first:mt-0">
      <div className="flex items-baseline gap-4 mb-5">
        <span className="font-mono text-xs text-muted-foreground tracking-wider">§ {n}</span>
        <h2 className="font-serif text-2xl md:text-[1.875rem] tracking-tight leading-tight">
          {title}
        </h2>
      </div>
      <div className="space-y-4 text-[1rem] md:text-[1.0625rem] text-foreground/85 leading-[1.7]">
        {children}
      </div>
    </section>
  )
}

export function Lede({ children }: { children: ReactNode }) {
  return (
    <p className="font-serif text-xl md:text-2xl italic text-foreground leading-relaxed">
      {children}
    </p>
  )
}

export function Aside({ children }: { children: ReactNode }) {
  return (
    <aside className="my-6 border-l-2 border-primary/40 pl-5 py-1 text-foreground/80 italic">
      {children}
    </aside>
  )
}

export function Mono({ children }: { children: ReactNode }) {
  return (
    <code className="font-mono text-[0.85em] bg-secondary/70 px-1.5 py-0.5 rounded text-foreground">
      {children}
    </code>
  )
}

"use client"

import { WyrhtaMark } from "./wyrhta-mark"

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Projects",
    links: [
      { label: "Heorth", href: "#heorth" },
      { label: "KithLedger", href: "#kithledger" },
      { label: "Roadmap", href: "#roadmap" },
      { label: "Changelog", href: "#changelog" },
    ],
  },
  {
    title: "Studio",
    links: [
      { label: "Philosophy", href: "#philosophy" },
      { label: "Journal", href: "#journal" },
      { label: "Press kit", href: "#press" },
      { label: "Contact", href: "mailto:hello@wyrhta.dev" },
    ],
  },
  {
    title: "Open source",
    links: [
      { label: "GitHub", href: "https://github.com/wyrhta-labs" },
      { label: "Sponsor", href: "#sponsor" },
      { label: "Code of conduct", href: "#coc" },
      { label: "Security", href: "#security" },
    ],
  },
]

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative border-t border-border bg-secondary/40">
      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <a href="#" className="inline-flex items-center gap-2.5 group">
              <WyrhtaMark className="h-7 w-7 text-foreground" />
              <span className="font-serif text-xl tracking-tight">
                Wyrhta <span className="text-muted-foreground font-light">Labs</span>
              </span>
            </a>
            <p className="mt-5 max-w-md text-base text-muted-foreground leading-relaxed">
              A small open-source studio making patient software for family and
              home life. Names borrowed from Old English, code written in
              modern stacks.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-eyebrow text-muted-foreground">
              <span>Made between</span>
              <span className="font-mono text-foreground">Oslo</span>
              <span>·</span>
              <span className="font-mono text-foreground">Lisbon</span>
              <span>·</span>
              <span className="font-mono text-foreground">Bristol</span>
            </div>
          </div>

          {/* Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="text-eyebrow text-foreground mb-4">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="font-mono text-xs text-muted-foreground">
            © {year} Wyrhta Labs · No cookies, no trackers, no warm regards from a marketing bot.
          </div>
          <div className="flex items-center gap-6 font-mono text-xs text-muted-foreground">
            <a href="#privacy" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#terms" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#rss" className="hover:text-foreground transition-colors">
              RSS
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

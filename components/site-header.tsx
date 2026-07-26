"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { WyrhtaMark } from "./wyrhta-mark"

const NAV = [
  { label: "Services", href: "/#projects" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Doctrine", href: "/#philosophy" },
  { label: "Journal", href: "/journal" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            aria-label="Wyrhta Labs — home"
            className="flex items-center gap-2.5 group"
          >
            <WyrhtaMark className="h-7 w-7 text-foreground transition-transform group-hover:rotate-[8deg]" />
            <span className="font-serif text-lg md:text-xl tracking-tight text-foreground">
              Wyrhta <span className="text-muted-foreground font-light">Labs</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-eyebrow text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/wyrhta-labs"
              target="_blank"
              rel="noreferrer"
              className="text-eyebrow text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub ↗
            </a>
            <Link
              href="/roadmap"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-primary transition-colors"
            >
              Where this stands
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden p-2 -mr-2 text-foreground"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6 pt-2 border-t border-border">
            <nav className="flex flex-col gap-4 py-4">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://github.com/wyrhta-labs"
                target="_blank"
                rel="noreferrer"
                className="text-base text-muted-foreground"
              >
                GitHub ↗
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Fraunces } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT"],
})

const TITLE = "Wyrhta Labs — A self-hosted household manager you actually own"
const DESCRIPTION =
  "A personal open-source project building a self-hosted household system: Heorth as the hub, KithLedger and Feoh as satellites, all on @wyrhta/core. In active development toward a first at-home release — built, but not yet deployed."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  generator: "v0.app",
  alternates: {
    canonical: "https://wyrhta.dev/",
  },
  openGraph: {
    siteName: "Wyrhta Labs",
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "https://wyrhta.dev/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
}

export const viewport = {
  themeColor: "#f4eee2",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${GeistMono.variable} antialiased bg-background`}
    >
      <body className="font-sans bg-background text-foreground overflow-x-hidden">{children}</body>
    </html>
  )
}

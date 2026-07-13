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

export const metadata: Metadata = {
  title: "Wyrhta Labs — Open-source tools for the home",
  description:
    "A personal open-source initiative building an organization core for family and home life. Planning Heorth, KithLedger, and Feoh.",
  generator: "v0.app",
  alternates: {
    canonical: "https://wyrhta.dev/",
  },
  openGraph: {
    siteName: "Wyrhta Labs",
    title: "Wyrhta Labs — Open-source tools for the home",
    description:
      "A personal open-source initiative building an organization core for family and home life. Planning Heorth, KithLedger, and Feoh.",
    type: "website",
    url: "https://wyrhta.dev/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wyrhta Labs — Open-source tools for the home",
    description:
      "A personal open-source initiative building an organization core for family and home life. Planning Heorth, KithLedger, and Feoh.",
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

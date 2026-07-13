import { FEATURED_ENTRY, JOURNAL_ENTRIES } from "@/lib/journal-entries"

const SITE_URL = "https://wyrhta.dev"
const ENTRIES = [FEATURED_ENTRY, ...JOURNAL_ENTRIES]

export function GET() {
  const items = ENTRIES.map((entry) => {
    const url = `${SITE_URL}/journal/${entry.slug}`

    return [
      "    <item>",
      `      <title>${escapeXml(entry.title)}</title>`,
      `      <link>${url}</link>`,
      `      <guid>${url}</guid>`,
      `      <pubDate>${new Date(entry.date).toUTCString()}</pubDate>`,
      `      <description>${escapeXml(entry.dek)}</description>`,
      "    </item>",
    ].join("\n")
  }).join("\n")

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Wyrhta Labs Journal</title>
    <link>${SITE_URL}/journal</link>
    <description>Workshop notes from Wyrhta Labs.</description>
    <language>en</language>
${items}
  </channel>
</rss>
`

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  })
}

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;")
}

/**
 * Wyrhta Labs — Design Guide PDF generator.
 *
 * Renders a 13-page A4 brand guide to public/wyrhta-design-guide.pdf,
 * driven by the same tokens that power the site (see app/globals.css and
 * the press kit at app/press/page.tsx).
 *
 * Run once:   node scripts/generate-design-guide.cjs
 */

const fs = require("node:fs")
const path = require("node:path")
const PDFDocument = require("pdfkit")

// ──────────────────────────────────────────────────────────────────────────────
// Geometry & tokens
// ──────────────────────────────────────────────────────────────────────────────

const PAGE = { w: 595.28, h: 841.89 } // A4 in PDF points
const MARGIN = 56 // ~19.75mm
const CONTENT_W = PAGE.w - MARGIN * 2

// sRGB approximations of the OKLCH tokens defined in app/globals.css.
const C = {
  parchment: "#F4EEE2",
  ink: "#322A23",
  ember: "#B5572C",
  linen: "#E6DECE",
  taupe: "#7C6F5F",
  tan: "#D7CDB8",
  card: "#FBF7EE",
  inkSoft: "#5A4D42",
}

const FONTS_DIR = path.join(__dirname, "fonts")
const OUT_PATH = path.join(__dirname, "..", "public", "wyrhta-design-guide.pdf")

const TOTAL_PAGES = 13

const PALETTE = [
  {
    name: "Parchment",
    token: "--background",
    hex: "#F4EEE2",
    oklch: "0.962 0.012 82",
    role: "Page background",
    textOn: C.ink,
  },
  {
    name: "Deep Ink",
    token: "--foreground",
    hex: "#322A23",
    oklch: "0.21 0.012 60",
    role: "Body type & marks",
    textOn: C.parchment,
  },
  {
    name: "Ember",
    token: "--primary",
    hex: "#B5572C",
    oklch: "0.555 0.135 38",
    role: "Accent · ≤ 10% of layout",
    textOn: C.card,
  },
  {
    name: "Linen",
    token: "--secondary",
    hex: "#E6DECE",
    oklch: "0.93 0.012 80",
    role: "Cards & soft fills",
    textOn: C.ink,
  },
  {
    name: "Warm Taupe",
    token: "--muted-foreground",
    hex: "#7C6F5F",
    oklch: "0.5 0.018 65",
    role: "Muted copy & meta",
    textOn: C.card,
  },
]

const TOC = [
  { n: "01", title: "Brand foundation", page: 3, dek: "What Wyrhta Labs is and what it isn't." },
  { n: "02", title: "The mark", page: 4, dek: "Geometry, clear space, sizing." },
  { n: "03", title: "Wordmark & lockup", page: 5, dek: "Horizontal, vertical, reversed." },
  { n: "04", title: "Colour", page: 6, dek: "Parchment, ink, ember; five colours total." },
  { n: "05", title: "Typography", page: 7, dek: "Fraunces and Geist Mono." },
  { n: "06", title: "Layout principles", page: 8, dek: "§-numbered sections; quiet rules." },
  { n: "07", title: "Imagery & UI style", page: 9, dek: "What we ship — and what we don't." },
  { n: "08", title: "Voice & tone", page: 10, dek: "Plain, slow, unsentimental." },
  { n: "09", title: "Naming & etymology", page: 11, dek: "Old English, modern stacks." },
  { n: "10", title: "Application", page: 12, dek: "Article, header, footer." },
]

const PROJECTS = [
  {
    name: "Heorth",
    tag: "Homestead & family",
    summary:
      "Meal plans, chores, calendars, pantry, garden, and a shared family journal — for the wall-mounted screen, the kitchen phone, and the laptop after the children are asleep.",
    beta: "0.1 beta · Q3 2026",
  },
  {
    name: "KithLedger",
    tag: "Relationships, API-first",
    summary:
      "A small, self-hostable ledger for the people you care about: birthdays, last touchpoints, the shape of a friendship over years. Used inside Heorth and consumed by third-party clients.",
    beta: "0.1 beta · Q3 2026",
  },
  {
    name: "Feoh",
    tag: "Household finance · module",
    summary:
      "Envelopes, double-entry, recurring bills, joint expenses split fairly, and savings goals that breathe with the season. Attaches to Heorth — same household, same auth, same MCP surface.",
    beta: "0.1 beta · Q1 2027",
  },
]

const ETYMOLOGY = [
  {
    word: "wyrhta",
    ipa: "/ˈwyr.xta/",
    pos: "n. Old English",
    gloss: "A maker, a wright. The hand on the tool, the person who shapes.",
    project: "The studio name",
  },
  {
    word: "heorth",
    ipa: "/ˈhe.orθ/",
    pos: "n. Old English",
    gloss: "Hearth — the warm centre of a home, the place where the family gathers.",
    project: "Project · homestead OS",
  },
  {
    word: "kith",
    ipa: "/kɪθ/",
    pos: "n. Middle English",
    gloss: "One's friends, neighbours, and acquaintances; the people one knows.",
    project: "Project · relationships ledger",
  },
  {
    word: "feoh",
    ipa: "/ˈfe.oh/",
    pos: "n. Old English",
    gloss:
      "Cattle, wealth, property — the household's movable goods. The first rune of the Anglo-Saxon futhorc (ᚠ); root of modern English fee.",
    project: "Project · finance module",
  },
]

// ──────────────────────────────────────────────────────────────────────────────
// Document setup
// ──────────────────────────────────────────────────────────────────────────────

function createDoc() {
  const doc = new PDFDocument({
    size: "A4",
    margin: 0,
    autoFirstPage: false,
    info: {
      Title: "Wyrhta Labs — Design Guide",
      Author: "Wyrhta Labs",
      Subject:
        "Brand foundation, typography, colour, and layout principles. Volume 01 — Spring 2026.",
      Keywords:
        "design system, brand, typography, identity, Wyrhta Labs, Heorth, KithLedger, Feoh",
      Creator: "Wyrhta Labs (in-house)",
      Producer: "PDFKit",
    },
  })

  doc.registerFont("display-light", path.join(FONTS_DIR, "Fraunces72pt-Light.ttf"))
  doc.registerFont("display", path.join(FONTS_DIR, "Fraunces72pt-Regular.ttf"))
  doc.registerFont("body", path.join(FONTS_DIR, "Fraunces9pt-Regular.ttf"))
  doc.registerFont("body-italic", path.join(FONTS_DIR, "Fraunces9pt-Italic.ttf"))
  doc.registerFont("body-bold", path.join(FONTS_DIR, "Fraunces9pt-Bold.ttf"))
  doc.registerFont("mono", path.join(FONTS_DIR, "GeistMono-Regular.ttf"))
  doc.registerFont("mono-medium", path.join(FONTS_DIR, "GeistMono-Medium.ttf"))
  doc.registerFont("mono-bold", path.join(FONTS_DIR, "GeistMono-Bold.ttf"))

  return doc
}

// ──────────────────────────────────────────────────────────────────────────────
// Drawing helpers
// ──────────────────────────────────────────────────────────────────────────────

function newPage(doc, fill = C.parchment) {
  doc.addPage({ size: "A4", margin: 0 })
  doc.rect(0, 0, PAGE.w, PAGE.h).fill(fill)
  doc.fillColor(C.ink)
}

function rule(doc, x1, y, x2, color = C.tan, width = 0.5) {
  doc
    .save()
    .lineWidth(width)
    .strokeColor(color)
    .moveTo(x1, y)
    .lineTo(x2, y)
    .stroke()
    .restore()
}

function vrule(doc, x, y1, y2, color = C.tan, width = 0.5) {
  doc
    .save()
    .lineWidth(width)
    .strokeColor(color)
    .moveTo(x, y1)
    .lineTo(x, y2)
    .stroke()
    .restore()
}

function eyebrow(doc, text, x, y, color = C.taupe, size = 7.5) {
  doc.font("mono-medium").fontSize(size).fillColor(color)
  doc.text(text.toUpperCase(), x, y, { characterSpacing: 1.6, lineBreak: false })
}

function mono(doc, text, x, y, opts = {}) {
  const { size = 9, color = C.ink, weight = "mono", width, align } = opts
  doc.font(weight).fontSize(size).fillColor(color)
  doc.text(text, x, y, { width, align, lineBreak: !!width })
}

function body(doc, text, x, y, width, opts = {}) {
  const { size = 10, color = C.ink, leading = 1.55, font = "body", align = "left" } = opts
  doc
    .font(font)
    .fontSize(size)
    .fillColor(color)
    .text(text, x, y, {
      width,
      align,
      lineGap: size * (leading - 1),
    })
}

function display(doc, text, x, y, opts = {}) {
  const { size = 56, color = C.ink, font = "display-light", width, align = "left", tracking = -0.4 } = opts
  doc
    .font(font)
    .fontSize(size)
    .fillColor(color)
    .text(text, x, y, {
      width,
      align,
      characterSpacing: tracking,
      lineGap: size * 0.05,
    })
}

function chip(doc, text, x, y, opts = {}) {
  const {
    bg = "transparent",
    fg = C.ink,
    border = C.tan,
    pad = 5,
    size = 7.5,
    radius = 999,
  } = opts
  doc.font("mono-medium").fontSize(size)
  const tw = doc.widthOfString(text.toUpperCase(), { characterSpacing: 1.4 })
  const w = tw + pad * 2 + 4
  const h = size + pad * 1.4
  doc.save()
  if (bg !== "transparent") {
    doc.roundedRect(x, y, w, h, radius).fill(bg)
  }
  if (border) {
    doc.lineWidth(0.5).strokeColor(border).roundedRect(x, y, w, h, radius).stroke()
  }
  doc.fillColor(fg)
  doc.text(text.toUpperCase(), x + pad + 2, y + pad / 1.6, {
    characterSpacing: 1.4,
    lineBreak: false,
  })
  doc.restore()
  return w
}

// Wyrhta mark, derived from components/wyrhta-mark.tsx (viewBox 32×32).
function drawMark(doc, x, y, size, color = C.ink, opacity = 1) {
  const s = size / 32
  doc.save()
  doc.translate(x, y).scale(s, s)
  doc
    .lineWidth(1.6)
    .strokeColor(color)
    .strokeOpacity(opacity)
    .lineCap("round")
    .lineJoin("round")
  doc.path("M5 8 L9 24 L13 14 L16 22 L19 14 L23 24 L27 8").stroke()
  doc.fillColor(color).fillOpacity(opacity * 0.9)
  doc
    .path(
      "M16 6.5 C 16 5 14.6 4.2 14.6 3 C 14.6 2 15.2 1.4 16 1.4 C 16.8 1.4 17.4 2 17.4 3 C 17.4 4.2 16 5 16 6.5 Z"
    )
    .fill()
  doc.fillOpacity(1).strokeOpacity(1)
  doc.restore()
}

// Running header — printed on every interior page.
function runningHeader(doc, sectionN, sectionTitle, pageNumber) {
  const y = 36
  rule(doc, MARGIN, y + 16, PAGE.w - MARGIN)
  // left: § 04 — Colour
  eyebrow(doc, `§ ${sectionN} — ${sectionTitle}`, MARGIN, y)
  // right: page count
  doc.font("mono").fontSize(7.5).fillColor(C.taupe)
  const right = `Wyrhta Labs · Design Guide · ${String(pageNumber).padStart(2, "0")}/${String(TOTAL_PAGES).padStart(2, "0")}`
  const w = doc.widthOfString(right, { characterSpacing: 1.4 })
  doc.text(right.toUpperCase(), PAGE.w - MARGIN - w, y, {
    characterSpacing: 1.4,
    lineBreak: false,
  })
}

function runningFooter(doc, slug = "wyrhta.dev / design") {
  const y = PAGE.h - 36
  rule(doc, MARGIN, y - 14, PAGE.w - MARGIN)
  doc.font("mono").fontSize(7.5).fillColor(C.taupe)
  doc.text(slug.toUpperCase(), MARGIN, y, {
    characterSpacing: 1.4,
    lineBreak: false,
  })
  const right = "MIT · marks reserved"
  const w = doc.widthOfString(right.toUpperCase(), { characterSpacing: 1.4 })
  doc.text(right.toUpperCase(), PAGE.w - MARGIN - w, y, {
    characterSpacing: 1.4,
    lineBreak: false,
  })
}

// Section opener — eyebrow + display headline + dek + thin rule.
function sectionOpener(doc, n, title, dek) {
  const top = 96
  eyebrow(doc, `§ ${n}`, MARGIN, top, C.ember, 8)
  display(doc, title, MARGIN, top + 18, {
    size: 44,
    width: CONTENT_W,
    tracking: -0.6,
  })
  body(doc, dek, MARGIN, doc.y + 6, CONTENT_W * 0.78, {
    size: 12,
    color: C.inkSoft,
    leading: 1.55,
    font: "body-italic",
  })
  rule(doc, MARGIN, doc.y + 14, PAGE.w - MARGIN)
  return doc.y + 30
}

// ──────────────────────────────────────────────────────────────────────────────
// Page renderers
// ──────────────────────────────────────────────────────────────────────────────

function pageCover(doc) {
  newPage(doc)

  // Fine corner mono accents at the four corners
  doc.font("mono").fontSize(7.5).fillColor(C.taupe)
  doc.text("WYRHTA · 001 / 013".toUpperCase(), MARGIN, 36, {
    characterSpacing: 1.4,
    lineBreak: false,
  })
  const tr = "VOLUME ONE — SPRING 2026"
  const trW = doc.widthOfString(tr, { characterSpacing: 1.4 })
  doc.text(tr, PAGE.w - MARGIN - trW, 36, {
    characterSpacing: 1.4,
    lineBreak: false,
  })
  rule(doc, MARGIN, 60, PAGE.w - MARGIN)

  // Centre composition
  const cx = PAGE.w / 2
  const yMark = 160
  drawMark(doc, cx - 36, yMark, 72, C.ember)

  // Wordmark
  doc
    .font("display")
    .fontSize(28)
    .fillColor(C.ink)
  const wordmark = "Wyrhta Labs"
  const wmW = doc.widthOfString(wordmark)
  doc.text(wordmark, cx - wmW / 2, yMark + 96, { lineBreak: false })

  // Title
  display(doc, "Design", MARGIN, yMark + 168, {
    size: 132,
    width: CONTENT_W,
    align: "center",
    tracking: -2.2,
  })
  display(doc, "Guide.", MARGIN, doc.y - 14, {
    size: 132,
    width: CONTENT_W,
    align: "center",
    tracking: -2.2,
    color: C.ember,
  })

  // Subtitle
  body(
    doc,
    "Brand foundation, typography, colour, and layout principles for the projects, the press kit, and the people who write about us.",
    MARGIN + 80,
    doc.y + 12,
    CONTENT_W - 160,
    { size: 12, color: C.inkSoft, font: "body-italic", align: "center", leading: 1.55 }
  )

  // Footer block
  const fy = PAGE.h - 124
  rule(doc, MARGIN, fy, PAGE.w - MARGIN)

  // Three meta columns
  const colW = CONTENT_W / 3
  const meta = [
    { k: "Studio", v: "Castrop-Rauxel\nWest Germany" },
    { k: "Edition", v: "v1.0 · Spring 2026\nReviewed quarterly" },
    { k: "Contact", v: "press@wyrhta.dev\ngithub.com/wyrhta-labs" },
  ]
  meta.forEach((m, i) => {
    const x = MARGIN + colW * i
    eyebrow(doc, m.k, x, fy + 18, C.taupe, 7.5)
    doc.font("mono").fontSize(9).fillColor(C.ink)
    doc.text(m.v, x, fy + 34, { width: colW - 12, lineGap: 2 })
  })
}

function pageContents(doc) {
  newPage(doc)
  runningHeader(doc, "00", "Contents", 2)
  runningFooter(doc)

  display(doc, "Contents.", MARGIN, 110, {
    size: 56,
    tracking: -1,
    width: CONTENT_W,
  })
  rule(doc, MARGIN, 196, PAGE.w - MARGIN)

  // Two columns: TOC list (60%) and colophon (40%)
  const tocX = MARGIN
  const tocW = CONTENT_W * 0.62
  const sideX = MARGIN + CONTENT_W * 0.66
  const sideW = CONTENT_W * 0.34

  let y = 220
  TOC.forEach((item) => {
    // mono section number (ember)
    doc.font("mono-medium").fontSize(10).fillColor(C.ember)
    doc.text(`§ ${item.n}`, tocX, y + 4, { lineBreak: false, characterSpacing: 0.6 })

    // title (serif)
    doc.font("body").fontSize(15).fillColor(C.ink)
    doc.text(item.title, tocX + 50, y, { lineBreak: false })

    // dek (italic)
    doc.font("body-italic").fontSize(10).fillColor(C.taupe)
    doc.text(item.dek, tocX + 50, y + 19, { width: tocW - 100, lineBreak: false })

    // dotted leader + page number
    doc.font("mono").fontSize(9).fillColor(C.taupe)
    const pgStr = String(item.page).padStart(2, "0")
    const pgW = doc.widthOfString(pgStr)
    doc.text(pgStr, tocX + tocW - pgW, y + 4, { lineBreak: false })

    rule(doc, tocX, y + 38, tocX + tocW)
    y += 50
  })

  // Sidebar — colophon
  let sy = 220
  eyebrow(doc, "About this guide", sideX, sy, C.ember, 8)
  sy += 18
  body(
    doc,
    "A short, honest brief: how the Wyrhta mark is drawn, how the type is set, where the ember falls, and how the §-numbered sections hold together — for the press kit, the journal, and anyone else who needs to set our work next to their own.",
    sideX,
    sy,
    sideW,
    { size: 10.5, color: C.ink, leading: 1.6 }
  )
  sy = doc.y + 18
  eyebrow(doc, "Audience", sideX, sy, C.ember, 8)
  sy += 16
  body(
    doc,
    "Writers, podcasters, conferences, and contributors. Designers extending the system inside Heorth, KithLedger, or Feoh. Anyone setting our marks next to theirs.",
    sideX,
    sy,
    sideW,
    { size: 10, color: C.inkSoft, leading: 1.55 }
  )
  sy = doc.y + 18
  eyebrow(doc, "Licence", sideX, sy, C.ember, 8)
  sy += 16
  body(
    doc,
    "Text of this document is published CC BY-SA 4.0. Wyrhta marks are reserved; please do not modify, recolour, or place them on busy imagery. If in doubt, write press@wyrhta.dev — we are friendly.",
    sideX,
    sy,
    sideW,
    { size: 10, color: C.inkSoft, leading: 1.55 }
  )
}

function pageFoundation(doc) {
  newPage(doc)
  runningHeader(doc, "01", "Brand foundation", 3)
  runningFooter(doc)
  const startY = sectionOpener(
    doc,
    "01",
    "Brand foundation.",
    "What Wyrhta Labs is, what it isn't, and the principles that hold the work together at a deliberate pace."
  )

  // Two-column body
  const colGap = 26
  const colW = (CONTENT_W - colGap) / 2
  const leftX = MARGIN
  const rightX = MARGIN + colW + colGap

  // LEFT — narrative
  let y = startY
  eyebrow(doc, "What it is", leftX, y, C.ember, 8)
  y += 16
  body(
    doc,
    "Wyrhta Labs is a private, personal open-source initiative founded in 2026 in Castrop-Rauxel, devoted to one clear goal: an organisation core for family and home life — software for the kitchen wall, the family calendar, and the slow correspondence between people who care for one another.",
    leftX,
    y,
    colW,
    { size: 11, color: C.ink, leading: 1.6 }
  )
  y = doc.y + 14
  body(
    doc,
    "The work is done in the open by default: code on GitHub under the permissive MIT license, a public handbook, a journal posted when the work warrants, and a roadmap discussed openly before it is built.",
    leftX,
    y,
    colW,
    { size: 11, color: C.ink, leading: 1.6 }
  )

  y = doc.y + 18
  eyebrow(doc, "Three projects", leftX, y, C.ember, 8)
  y += 16
  PROJECTS.forEach((p) => {
    doc.font("body-bold").fontSize(11).fillColor(C.ink)
    doc.text(p.name, leftX, y, { lineBreak: false })
    doc.font("body-italic").fontSize(10).fillColor(C.taupe)
    const nameW = doc.widthOfString(p.name, { features: [] })
    doc.text(`  ${p.tag}`, leftX + nameW + 2, y + 1, { lineBreak: false })
    y += 14
    body(doc, p.summary, leftX, y, colW, {
      size: 10,
      color: C.inkSoft,
      leading: 1.55,
    })
    y = doc.y + 4
    doc.font("mono").fontSize(8).fillColor(C.taupe)
    doc.text(p.beta.toUpperCase(), leftX, y, { characterSpacing: 1.4 })
    y = doc.y + 12
  })

  // RIGHT — principles list (inside a linen card)
  const cardY = startY
  const cardH = PAGE.h - cardY - 80
  doc.save()
  doc.fillColor(C.linen).rect(rightX, cardY, colW, cardH).fill()
  doc.restore()

  let py = cardY + 22
  eyebrow(doc, "Working principles", rightX + 18, py, C.ember, 8)
  py += 18
  display(doc, "Patient,\nplain,\npublic.", rightX + 18, py, {
    size: 30,
    width: colW - 36,
    tracking: -0.4,
  })
  py = doc.y + 18

  const principles = [
    {
      n: "I",
      t: "Tools, not platforms.",
      d: "We make small, owned, replaceable software for households — not engagement loops for strangers.",
    },
    {
      n: "II",
      t: "API-first; UI as a guest.",
      d: "Each project is a database with a kind face. Humans use the UI; agents use the same API beneath it.",
    },
    {
      n: "III",
      t: "In the open by default.",
      d: "Code on GitHub, MIT-licensed. Roadmap, journal, and contact channel all public. Nothing important hides.",
    },
    {
      n: "IV",
      t: "Self-host first.",
      d: "Your home runs your home. The run-it-on-a-Pi path — Node service with PostgreSQL beside it — is always the one we test most.",
    },
    {
      n: "V",
      t: "Few, finished things.",
      d: "We'd rather have three finished tools than a dozen half-finished ones. Each project earns its keep.",
    },
  ]
  principles.forEach((p) => {
    doc.font("mono-bold").fontSize(8).fillColor(C.ember)
    doc.text(p.n, rightX + 18, py + 2, { lineBreak: false, characterSpacing: 1 })
    doc.font("body-bold").fontSize(11).fillColor(C.ink)
    doc.text(p.t, rightX + 50, py, { width: colW - 70, lineBreak: false })
    doc.font("body").fontSize(10).fillColor(C.inkSoft)
    doc.text(p.d, rightX + 50, py + 16, {
      width: colW - 70,
      lineGap: 2.5,
    })
    py = doc.y + 14
  })
}

function pageMark(doc) {
  newPage(doc)
  runningHeader(doc, "02", "The mark", 4)
  runningFooter(doc)
  const startY = sectionOpener(
    doc,
    "02",
    "The mark.",
    "A stylised W with a small flame above it — a wright at the hearth. Drawn on a 32-unit grid; round caps and joins."
  )

  // Big mark on grid
  const stageX = MARGIN
  const stageW = CONTENT_W * 0.55
  const stageY = startY
  const stageH = 320
  // grid backdrop
  doc.save()
  doc.fillColor(C.card).rect(stageX, stageY, stageW, stageH).fill()
  // 32×32 grid lines (faint)
  doc.strokeColor(C.tan).lineWidth(0.25).strokeOpacity(0.7)
  const grid = 32
  const cell = Math.min(stageW, stageH) / grid
  const offsetX = stageX + (stageW - cell * grid) / 2
  const offsetY = stageY + (stageH - cell * grid) / 2
  for (let i = 0; i <= grid; i++) {
    doc
      .moveTo(offsetX + i * cell, offsetY)
      .lineTo(offsetX + i * cell, offsetY + cell * grid)
      .stroke()
    doc
      .moveTo(offsetX, offsetY + i * cell)
      .lineTo(offsetX + cell * grid, offsetY + i * cell)
      .stroke()
  }
  doc.strokeOpacity(1)
  doc.restore()

  // Mark in ink, scaled to fill grid (the artwork itself is on a 32×32 viewBox)
  drawMark(doc, offsetX, offsetY, cell * grid, C.ink)

  // Clear-space ring (dotted) — cap-height of the W = ~16 grid units high.
  // Show clear space as a dashed rectangle inset by 4 grid units.
  doc.save()
  doc
    .lineWidth(0.6)
    .strokeColor(C.ember)
    .dash(2, { space: 3 })
    .roundedRect(
      offsetX - cell * 4,
      offsetY - cell * 4,
      cell * 32 + cell * 8,
      cell * 32 + cell * 8,
      4
    )
    .stroke()
  doc.undash()
  doc.restore()

  // Clear-space label
  doc.font("mono").fontSize(7.5).fillColor(C.ember)
  doc.text("CLEAR SPACE = 4 GRID UNITS", offsetX - cell * 4, stageY + stageH - 18, {
    characterSpacing: 1.4,
    lineBreak: false,
  })

  // Right column — usage
  const sideX = stageX + stageW + 28
  const sideW = CONTENT_W - stageW - 28
  let y = startY
  eyebrow(doc, "Construction", sideX, y, C.ember, 8)
  y += 16
  body(
    doc,
    "Drawn on a 32-unit square. The W is a single open path with round caps and joins, painted in Deep Ink. The hearth flame is a closed teardrop above the centre apex, filled at 90% opacity.",
    sideX,
    y,
    sideW,
    { size: 10.5, color: C.ink, leading: 1.55 }
  )
  y = doc.y + 14

  eyebrow(doc, "Clear space", sideX, y, C.ember, 8)
  y += 16
  body(
    doc,
    "Always leave a margin equal to four grid units (≈ ⅛ of the mark's full width) on every side. Never let the flame touch a surrounding edge or another logo.",
    sideX,
    y,
    sideW,
    { size: 10.5, color: C.ink, leading: 1.55 }
  )
  y = doc.y + 14

  eyebrow(doc, "Minimum size", sideX, y, C.ember, 8)
  y += 16
  body(
    doc,
    "Digital: 16 px square. Print: 8 mm square. Below this size the flame closes up; if the mark must go smaller, use the wordmark alone.",
    sideX,
    y,
    sideW,
    { size: 10.5, color: C.ink, leading: 1.55 }
  )
  y = doc.y + 14

  eyebrow(doc, "Colour rules", sideX, y, C.ember, 8)
  y += 16
  body(
    doc,
    "Render in Deep Ink on Parchment, or Parchment on Deep Ink. Ember is allowed only when the mark is the single accent on the page (the cover here is the canonical example).",
    sideX,
    y,
    sideW,
    { size: 10.5, color: C.ink, leading: 1.55 }
  )

  // Mini variants strip below stage
  const stripY = stageY + stageH + 28
  rule(doc, MARGIN, stripY, PAGE.w - MARGIN)
  eyebrow(doc, "Approved Mark variants", MARGIN, stripY + 12, C.taupe, 7.5)

  const variants = [
    { fill: C.parchment, mark: C.ink, label: "Ink on parchment" },
    { fill: C.ink, mark: C.parchment, label: "Parchment on ink" },
    { fill: C.parchment, mark: C.ember, label: "Ember (cover only)" },
    { fill: C.linen, mark: C.ink, label: "Ink on linen" },
  ]
  const vY = stripY + 36
  const vBoxW = (CONTENT_W - 36) / 4
  variants.forEach((v, i) => {
    const x = MARGIN + i * (vBoxW + 12)
    doc.save()
    doc.lineWidth(0.5).strokeColor(C.tan).fillColor(v.fill).rect(x, vY, vBoxW, 88).fillAndStroke()
    doc.restore()
    drawMark(doc, x + vBoxW / 2 - 22, vY + 22, 44, v.mark)
    doc.font("mono").fontSize(7.5).fillColor(C.taupe)
    doc.text(v.label.toUpperCase(), x, vY + 96, {
      characterSpacing: 1.4,
      width: vBoxW,
      align: "center",
      lineBreak: false,
    })
  })
}

function pageWordmark(doc) {
  newPage(doc)
  runningHeader(doc, "03", "Wordmark & lockup", 5)
  runningFooter(doc)
  const startY = sectionOpener(
    doc,
    "03",
    "Wordmark & lockup.",
    "Three approved compositions: horizontal, vertical, and reversed. The wordmark is set in Fraunces, with " +
      "“Labs” trailing in a lighter weight."
  )

  // Three variants in a column, each in a generous canvas
  const canvasW = CONTENT_W
  const canvasH = 130

  // Helper: lockup horizontal (mark + wordmark inline)
  function lockupHorizontal(x, y, fill, ink, scale = 1) {
    drawMark(doc, x, y, 64 * scale, ink)
    doc.font("display").fontSize(40 * scale).fillColor(ink)
    doc.text("Wyrhta", x + 78 * scale, y + 12 * scale, { lineBreak: false })
    const wW = doc.widthOfString("Wyrhta")
    doc.font("display-light").fontSize(40 * scale).fillColor(ink)
    doc.text(" Labs", x + 78 * scale + wW, y + 12 * scale, { lineBreak: false })
  }

  function lockupVertical(x, y, fill, ink) {
    drawMark(doc, x + canvasW / 2 - 28 - x, y, 56, ink)
    doc.font("display").fontSize(28).fillColor(ink)
    doc.text("Wyrhta Labs", x, y + 80, {
      width: canvasW * 0.4,
      align: "center",
      lineBreak: false,
    })
  }

  let y = startY
  // 1 — Horizontal (canonical)
  doc.save()
  doc.fillColor(C.card).strokeColor(C.tan).lineWidth(0.5)
  doc.rect(MARGIN, y, canvasW, canvasH).fillAndStroke()
  doc.restore()
  eyebrow(doc, "01 · Horizontal · canonical", MARGIN + 14, y + 14, C.ember, 7.5)
  lockupHorizontal(MARGIN + 32, y + 36, C.card, C.ink, 1)
  y += canvasH + 16

  // 2 — Vertical
  doc.save()
  doc.fillColor(C.card).strokeColor(C.tan).lineWidth(0.5)
  doc.rect(MARGIN, y, canvasW, canvasH + 30).fillAndStroke()
  doc.restore()
  eyebrow(doc, "02 · Vertical · centred", MARGIN + 14, y + 14, C.ember, 7.5)
  drawMark(doc, MARGIN + canvasW / 2 - 28, y + 36, 56, C.ink)
  doc.font("display").fontSize(26).fillColor(C.ink)
  doc.text("Wyrhta Labs", MARGIN, y + 110, {
    width: canvasW,
    align: "center",
    lineBreak: false,
  })
  y += canvasH + 30 + 16

  // 3 — Reversed (parchment on ink)
  doc.save()
  doc.fillColor(C.ink).rect(MARGIN, y, canvasW, canvasH).fill()
  doc.restore()
  eyebrow(doc, "03 · Reversed · parchment on ink", MARGIN + 14, y + 14, C.parchment, 7.5)
  lockupHorizontal(MARGIN + 32, y + 36, C.ink, C.parchment, 1)

  // bottom guidance
  const gy = y + canvasH + 24
  rule(doc, MARGIN, gy, PAGE.w - MARGIN)
  const gx = MARGIN
  const gw = CONTENT_W
  body(
    doc,
    "Do not stretch, recolour, or add a tagline beneath the lockup. Do not render the wordmark in any face other than Fraunces. Use the wordmark alone when the mark would render below 16 px / 8 mm.",
    gx,
    gy + 12,
    gw,
    { size: 10, color: C.inkSoft, leading: 1.55, font: "body-italic" }
  )
}

function pageColour(doc) {
  newPage(doc)
  runningHeader(doc, "04", "Colour", 6)
  runningFooter(doc)
  const startY = sectionOpener(
    doc,
    "04",
    "Colour.",
    "Parchment-and-ember: warm neutrals with a single saturated accent. Five colours total — three neutrals, one accent, one ink."
  )

  // Five swatches, full content width
  const gap = 8
  const sw = (CONTENT_W - gap * 4) / 5
  const sh = 240
  PALETTE.forEach((p, i) => {
    const x = MARGIN + i * (sw + gap)
    const y = startY
    // big colour block
    doc.save()
    doc.fillColor(p.hex).rect(x, y, sw, sh * 0.62).fill()
    doc.restore()
    // name on chip
    doc.font("display").fontSize(16).fillColor(p.textOn)
    doc.text(p.name, x + 10, y + sh * 0.62 - 30, {
      width: sw - 20,
      lineBreak: false,
    })
    // metadata strip
    const my = y + sh * 0.62
    doc.save()
    doc.fillColor(C.card).strokeColor(C.tan).lineWidth(0.5)
    doc.rect(x, my, sw, sh - sh * 0.62).fillAndStroke()
    doc.restore()
    let py = my + 10
    eyebrow(doc, p.token, x + 10, py, C.ember, 7)
    py += 12
    doc.font("mono-medium").fontSize(9).fillColor(C.ink)
    doc.text(p.hex.toUpperCase(), x + 10, py, { lineBreak: false })
    py += 13
    doc.font("mono").fontSize(7.5).fillColor(C.taupe)
    doc.text(`OKLCH ${p.oklch}`, x + 10, py, {
      lineBreak: false,
      characterSpacing: 0.3,
    })
    py += 14
    doc.font("body-italic").fontSize(8.5).fillColor(C.inkSoft)
    doc.text(p.role, x + 10, py, { width: sw - 20, lineGap: 1 })
  })

  // Usage rules below
  const rulesY = startY + 240 + 30
  rule(doc, MARGIN, rulesY - 8, PAGE.w - MARGIN)
  eyebrow(doc, "Usage rules", MARGIN, rulesY + 8, C.ember, 8)

  const rules = [
    {
      title: "Ember is the only saturated colour.",
      body:
        "Use Ember (#B5572C) sparingly — for the §-numbered eyebrows, primary CTAs, and a single accent per page. If a layout needs two oranges, the layout needs editing.",
    },
    {
      title: "Type lives on parchment or ink.",
      body:
        "Body copy is always Deep Ink on Parchment, or Parchment on Deep Ink. Ember is reserved for short labels, not running text under 14 pt.",
    },
    {
      title: "Linen for cards.",
      body:
        "Linen (#E6DECE) softly distinguishes a card or sidebar from the parchment field — never as a primary fill.",
    },
    {
      title: "Taupe carries the meta.",
      body:
        "Warm Taupe (#7C6F5F) sets eyebrows, captions, dates, and timestamps; never section headlines or running serif text.",
    },
  ]

  let y = rulesY + 28
  const colW = (CONTENT_W - 24) / 2
  rules.forEach((r, i) => {
    const col = i % 2
    const row = Math.floor(i / 2)
    const x = MARGIN + col * (colW + 24)
    const yy = y + row * 92
    doc.font("body-bold").fontSize(11).fillColor(C.ink)
    doc.text(r.title, x, yy, { width: colW, lineBreak: false })
    body(doc, r.body, x, yy + 16, colW, {
      size: 10,
      color: C.inkSoft,
      leading: 1.55,
    })
  })
}

function pageType(doc) {
  newPage(doc)
  runningHeader(doc, "05", "Typography", 7)
  runningFooter(doc)
  const startY = sectionOpener(
    doc,
    "05",
    "Typography.",
    "Two faces, one voice. Fraunces carries everything readable; Geist Mono carries everything with a measurement attached."
  )

  // Two big specimen blocks side by side
  const colW = (CONTENT_W - 24) / 2
  const colH = 200
  const left = MARGIN
  const right = MARGIN + colW + 24

  function specimen(x, w, opts) {
    doc.save()
    doc.fillColor(C.card).strokeColor(C.tan).lineWidth(0.5).rect(x, startY, w, colH).fillAndStroke()
    doc.restore()
    eyebrow(doc, opts.eyebrow, x + 16, startY + 16, C.taupe, 7.5)

    // huge "Aa"
    doc.font(opts.font).fontSize(opts.size).fillColor(C.ink)
    doc.text("Aa", x + 16, startY + 40, { lineBreak: false, characterSpacing: opts.tracking || 0 })

    // family name
    doc.font(opts.metaFont).fontSize(11).fillColor(C.ink)
    doc.text(opts.family, x + 16, startY + colH - 56, { lineBreak: false })

    // weight ladder
    doc.font("mono").fontSize(8).fillColor(C.taupe)
    doc.text(opts.weights, x + 16, startY + colH - 38, {
      width: w - 32,
      characterSpacing: 0.6,
      lineGap: 1.5,
    })
  }

  specimen(left, colW, {
    eyebrow: "Display & body · serif",
    font: "display-light",
    metaFont: "body",
    family: "Fraunces — by Undercase Type",
    size: 132,
    tracking: -2,
    weights: "OPSZ 9 → 144 · WGHT 100 → 900 · ROMAN & ITALIC",
  })

  specimen(right, colW, {
    eyebrow: "Mono & detail",
    font: "mono",
    metaFont: "body",
    family: "Geist Mono — by Vercel",
    size: 124,
    tracking: -1,
    weights: "WGHT 100 → 900 · OSS · USED FOR LABELS, METADATA, CODE",
  })

  // Type scale ladder across full width
  const ladderY = startY + colH + 28
  rule(doc, MARGIN, ladderY, PAGE.w - MARGIN)
  eyebrow(doc, "Type scale (Fraunces)", MARGIN, ladderY + 12, C.ember, 8)

  const SCALE = [
    { label: "H1 / Hero", size: 56, font: "display-light", weight: "300", note: "Fraunces72pt-Light · −0.6 tracking" },
    { label: "H2 / Section", size: 36, font: "display", weight: "400", note: "Fraunces72pt-Regular" },
    { label: "H3 / Subhead", size: 24, font: "body-bold", weight: "700", note: "Fraunces9pt-Bold" },
    { label: "Lede / Italic", size: 14, font: "body-italic", weight: "400i", note: "Fraunces9pt-Italic" },
    { label: "Body", size: 10.5, font: "body", weight: "400", note: "Fraunces9pt · 1.55 leading" },
    { label: "Caption", size: 8.5, font: "body-italic", weight: "400i", note: "Fraunces9pt-Italic" },
  ]

  let y = ladderY + 32
  SCALE.forEach((s) => {
    doc.font(s.font).fontSize(s.size).fillColor(C.ink)
    doc.text("The hearth, the kin, the wright.", MARGIN, y, { lineBreak: false })

    // right-side meta
    doc.font("mono").fontSize(8).fillColor(C.taupe)
    const meta = `${s.label.toUpperCase()} · ${s.size}PT · ${s.weight}`
    const mw = doc.widthOfString(meta, { characterSpacing: 1.4 })
    doc.text(meta, PAGE.w - MARGIN - mw, y + s.size * 0.35, {
      characterSpacing: 1.4,
      lineBreak: false,
    })
    y += s.size * 1.25 + 4
  })

  // Pairing guidance
  rule(doc, MARGIN, y + 6, PAGE.w - MARGIN)
  body(
    doc,
    "Use Geist Mono only for the §-numbered eyebrow, the meta strip, dates, code identifiers, and anything with a unit attached. Never set body copy in Geist Mono. Never set Fraunces in all caps; if you need shouting, use a mono eyebrow instead.",
    MARGIN,
    y + 18,
    CONTENT_W,
    { size: 9.5, color: C.inkSoft, leading: 1.55, font: "body-italic" }
  )
}

function pageLayout(doc) {
  newPage(doc)
  runningHeader(doc, "06", "Layout principles", 8)
  runningFooter(doc)
  const startY = sectionOpener(
    doc,
    "06",
    "Layout principles.",
    "§-numbered sections, mono eyebrows, generous rules, and a quiet 12-column grid that almost never asserts itself."
  )

  // Anatomy diagram on the left
  const colW = CONTENT_W * 0.58
  const sideX = MARGIN + colW + 24
  const sideW = CONTENT_W - colW - 24

  // Mock section anatomy
  const ax = MARGIN
  let ay = startY
  // 12-column grid lines (very faint)
  doc.save()
  doc.strokeColor(C.tan).lineWidth(0.25).strokeOpacity(0.6)
  for (let i = 0; i <= 12; i++) {
    const x = ax + (colW / 12) * i
    doc.moveTo(x, ay).lineTo(x, ay + 360).stroke()
  }
  doc.strokeOpacity(1)
  doc.restore()

  // top rule
  rule(doc, ax, ay, ax + colW)
  // Eyebrow (mono)
  ay += 14
  eyebrow(doc, "§ 04 — Sample section", ax, ay, C.ember, 8)
  // Headline
  ay += 22
  display(doc, "A patient plan,\nwritten in pencil.", ax, ay, {
    size: 38,
    width: colW - 12,
    tracking: -0.6,
  })
  ay = doc.y + 6
  // Lede
  body(
    doc,
    "We are six weeks from the first public beta. Three projects, one cadence, written down so it can be argued with.",
    ax,
    ay,
    colW * 0.85,
    { size: 13, color: C.inkSoft, font: "body-italic", leading: 1.55 }
  )
  ay = doc.y + 12
  // Body
  body(
    doc,
    "The roadmap below is deliberately small. One quarter, one release, per project — paired so the pieces grow together. Heorth is the household; KithLedger is the address book of kin and friendships beneath it; Feoh is the household's books, attaching to Heorth two quarters later.",
    ax,
    ay,
    colW * 0.92,
    { size: 10.5, color: C.ink, leading: 1.6 }
  )
  ay = doc.y + 12

  // meta strip
  doc.font("mono").fontSize(8).fillColor(C.taupe)
  doc.text("Q3 2026 · 0.1 BETA · MIT", ax, ay, { characterSpacing: 1.4, lineBreak: false })
  rule(doc, ax, ay + 16, ax + colW)

  // Annotation arrows pointing at each layer
  const annotations = [
    { label: "MONO EYEBROW · 8pt · Ember · §-NUMBERED", at: startY + 14 },
    { label: "DISPLAY HEADLINE · Fraunces72pt-Light", at: startY + 50 },
    { label: "LEDE · Fraunces9pt-Italic · taupe", at: startY + 130 },
    { label: "BODY · Fraunces9pt-Regular · ink", at: startY + 184 },
    { label: "META STRIP · Geist Mono · 8pt · taupe", at: startY + 280 },
  ]
  annotations.forEach((a) => {
    // small ember dot + label on the side panel
    doc.save()
    doc.fillColor(C.ember).circle(sideX, a.at + 4, 1.6).fill()
    doc.restore()
    doc.font("mono").fontSize(7.5).fillColor(C.inkSoft)
    doc.text(a.label, sideX + 10, a.at, {
      characterSpacing: 1.2,
      width: sideW - 12,
      lineBreak: true,
      lineGap: 2,
    })
  })

  // Right column principles below annotations
  let py = startY + 320
  eyebrow(doc, "Spatial rules", sideX, py, C.ember, 8)
  py += 16
  const layoutRules = [
    "12-column grid; max content rail 1240 px / 200 mm.",
    "Eyebrow → headline → lede → body, in that vertical order.",
    "Rules separate § sections; never decorate.",
    "Mono and serif never share a baseline; offset the mono by 1–2 pt up.",
    "Cards: Linen fill, hairline tan border, 6 pt corner radius.",
    "Never centre running body copy.",
  ]
  layoutRules.forEach((r) => {
    doc.font("mono").fontSize(7.5).fillColor(C.ember)
    doc.text("·", sideX, py + 2, { lineBreak: false })
    doc.font("body").fontSize(10).fillColor(C.ink)
    doc.text(r, sideX + 10, py, { width: sideW - 14, lineGap: 2 })
    py = doc.y + 6
  })
}

function pageImagery(doc) {
  newPage(doc)
  runningHeader(doc, "07", "Imagery & UI style", 9)
  runningFooter(doc)
  const startY = sectionOpener(
    doc,
    "07",
    "Imagery & UI style.",
    "We ship typography, hand-set UI mockups, and the occasional Old English diagram. We do not ship gradient blobs."
  )

  // Three project mock cards across the page
  const gap = 14
  const cardW = (CONTENT_W - gap * 2) / 3
  const cardH = 220
  PROJECTS.forEach((p, i) => {
    const x = MARGIN + i * (cardW + gap)
    const y = startY

    doc.save()
    doc.fillColor(C.card).strokeColor(C.tan).lineWidth(0.5).rect(x, y, cardW, cardH).fillAndStroke()
    doc.restore()

    // top strip with §
    eyebrow(doc, `§ 0${i + 1} · ${p.tag}`, x + 14, y + 14, C.ember, 7.5)

    // title
    doc.font("display").fontSize(20).fillColor(C.ink)
    doc.text(p.name, x + 14, y + 36, { lineBreak: false })

    // mini summary
    body(doc, p.summary, x + 14, y + 64, cardW - 28, {
      size: 9.5,
      color: C.inkSoft,
      leading: 1.55,
    })

    // mock UI bars at bottom
    const ux = x + 14
    const uy = y + cardH - 60
    rule(doc, ux, uy, ux + cardW - 28, C.tan)
    const bars = [0.85, 0.55, 0.35]
    bars.forEach((b, j) => {
      doc.save()
      doc
        .fillColor(j === 0 ? C.ember : C.linen)
        .rect(ux, uy + 12 + j * 12, (cardW - 28) * b, 6)
        .fill()
      doc.restore()
    })

    // beta strip
    doc.font("mono").fontSize(7.5).fillColor(C.taupe)
    doc.text(p.beta.toUpperCase(), x + 14, y + cardH - 22, {
      characterSpacing: 1.4,
      lineBreak: false,
    })
  })

  // Do / Don't
  const dy = startY + 240
  rule(doc, MARGIN, dy, PAGE.w - MARGIN)
  const dColW = (CONTENT_W - 24) / 2

  // DO
  let yy = dy + 14
  eyebrow(doc, "Do", MARGIN, yy, C.ember, 8)
  yy += 14
  ;[
    "Set typography first; let it carry the page.",
    "Use mocked-up UI fragments — the actual product, screenshotted simply.",
    "Use Old English etymology diagrams when relevant.",
    "Photograph kitchens, gardens, and notebooks if photographed at all.",
  ].forEach((s) => {
    doc.font("body").fontSize(10.5).fillColor(C.ink)
    doc.text("· " + s, MARGIN, yy, { width: dColW, lineGap: 3 })
    yy = doc.y + 4
  })

  // DON'T
  let zz = dy + 14
  const zx = MARGIN + dColW + 24
  eyebrow(doc, "Don't", zx, zz, C.ember, 8)
  zz += 14
  ;[
    "Decorate with abstract shapes — gradient circles, blurred squares, blobs.",
    "Use stock photography of generic “families” or “teams”.",
    "Place the mark over photography or busy patterns.",
    "Use emoji, sparkles, or illustration as filler.",
  ].forEach((s) => {
    doc.font("body").fontSize(10.5).fillColor(C.ink)
    doc.text("× " + s, zx, zz, { width: dColW, lineGap: 3 })
    zz = doc.y + 4
  })
}

function pageVoice(doc) {
  newPage(doc)
  runningHeader(doc, "08", "Voice & tone", 10)
  runningFooter(doc)
  const startY = sectionOpener(
    doc,
    "08",
    "Voice & tone.",
    "Plain, slow, unsentimental. The work speaks before we do; when we do speak, we speak in concrete things."
  )

  // Two columns — register table, then before/after
  const colW = (CONTENT_W - 24) / 2
  const left = MARGIN
  const right = MARGIN + colW + 24

  // Register table
  let y = startY
  eyebrow(doc, "Register", left, y, C.ember, 8)
  y += 18
  const REGISTER = [
    ["Concrete", "Abstract"],
    ["Plain", "Elaborate"],
    ["Slow", "Hurried"],
    ["Specific", "Generic"],
    ["Quiet", "Loud"],
    ["Old English roots", "Buzzwords"],
  ]
  // table header
  doc.font("mono-medium").fontSize(8).fillColor(C.ember)
  doc.text("WE WRITE LIKE THIS", left, y, {
    characterSpacing: 1.4,
    width: colW / 2 - 6,
    lineBreak: false,
  })
  doc.fillColor(C.taupe)
  doc.text("NOT LIKE THIS", left + colW / 2 + 6, y, {
    characterSpacing: 1.4,
    width: colW / 2 - 6,
    lineBreak: false,
  })
  y += 14
  rule(doc, left, y, left + colW)
  y += 4
  REGISTER.forEach((row) => {
    y += 6
    doc.font("body").fontSize(11).fillColor(C.ink)
    doc.text(row[0], left, y, { width: colW / 2 - 6, lineBreak: false })
    doc.font("body-italic").fontSize(11).fillColor(C.taupe)
    doc.text(row[1], left + colW / 2 + 6, y, { width: colW / 2 - 6, lineBreak: false })
    y += 16
    rule(doc, left, y, left + colW)
  })

  // Right column — before/after
  let yr = startY
  eyebrow(doc, "Before · after", right, yr, C.ember, 8)
  yr += 18

  // Before card
  doc.save()
  doc.fillColor(C.card).strokeColor(C.tan).lineWidth(0.5)
  doc.rect(right, yr, colW, 110).fillAndStroke()
  doc.restore()
  doc.font("mono-medium").fontSize(7.5).fillColor(C.taupe)
  doc.text("BEFORE", right + 12, yr + 10, { characterSpacing: 1.4, lineBreak: false })
  body(
    doc,
    "Wyrhta Labs is a forward-thinking innovator empowering modern families with AI-driven, end-to-end solutions for next-generation home management.",
    right + 12,
    yr + 28,
    colW - 24,
    { size: 10, color: C.inkSoft, leading: 1.55, font: "body-italic" }
  )
  yr += 124

  // After card
  doc.save()
  doc.fillColor(C.linen).strokeColor(C.tan).lineWidth(0.5)
  doc.rect(right, yr, colW, 130).fillAndStroke()
  doc.restore()
  doc.font("mono-medium").fontSize(7.5).fillColor(C.ember)
  doc.text("AFTER", right + 12, yr + 10, { characterSpacing: 1.4, lineBreak: false })
  body(
    doc,
    "Wyrhta Labs is a personal open-source project from Castrop-Rauxel, building tools for households rather than enterprises: Heorth, KithLedger, and Feoh.",
    right + 12,
    yr + 28,
    colW - 24,
    { size: 10.5, color: C.ink, leading: 1.6 }
  )
  yr += 144

  // Tone tip
  doc.font("body-italic").fontSize(10).fillColor(C.inkSoft)
  doc.text(
    "If a sentence could be on the back of a kettle, it is probably right. If it could be on a billboard for crypto, it is probably wrong.",
    right,
    yr + 8,
    { width: colW, lineGap: 2 }
  )
}

function pageNaming(doc) {
  newPage(doc)
  runningHeader(doc, "09", "Naming & etymology", 11)
  runningFooter(doc)
  const startY = sectionOpener(
    doc,
    "09",
    "Naming & etymology.",
    "Names borrowed from Old English, code written in modern stacks. Each project name is a real word, with a real definition."
  )

  let y = startY
  ETYMOLOGY.forEach((e, i) => {
    // word
    doc.font("display").fontSize(38).fillColor(C.ink)
    doc.text(e.word, MARGIN, y, { lineBreak: false })
    const ww = doc.widthOfString(e.word)
    // IPA
    doc.font("mono").fontSize(11).fillColor(C.taupe)
    doc.text(e.ipa, MARGIN + ww + 14, y + 16, { lineBreak: false })
    // POS chip on the right
    chip(doc, e.pos, MARGIN + ww + 14 + 90, y + 16, {
      bg: C.linen,
      fg: C.ink,
      border: C.tan,
      pad: 4,
      size: 7,
    })
    y += 50
    // gloss
    body(doc, e.gloss, MARGIN, y, CONTENT_W * 0.78, {
      size: 11,
      color: C.ink,
      leading: 1.6,
    })
    y = doc.y + 6
    // project tag
    doc.font("mono").fontSize(8).fillColor(C.ember)
    doc.text(e.project.toUpperCase(), MARGIN, y, {
      characterSpacing: 1.4,
      lineBreak: false,
    })
    y += 18
    if (i < ETYMOLOGY.length - 1) {
      rule(doc, MARGIN, y, PAGE.w - MARGIN)
      y += 14
    }
  })
}

function pageApplication(doc) {
  newPage(doc)
  runningHeader(doc, "10", "Application", 12)
  runningFooter(doc)
  const startY = sectionOpener(
    doc,
    "10",
    "Application.",
    "Three small assemblies of the system: an article header, a project card, and a footer. Each uses only what § 01–09 declares."
  )

  // 1 — Mock article header
  const ax = MARGIN
  let ay = startY
  rule(doc, ax, ay, PAGE.w - MARGIN)
  ay += 14
  eyebrow(doc, "§ Journal · letter no. 04", ax, ay, C.ember, 8)
  ay += 22
  display(doc, "A small ledger,\nthrough five Christmases.", ax, ay, {
    size: 30,
    width: CONTENT_W * 0.78,
    tracking: -0.6,
  })
  ay = doc.y + 6
  body(
    doc,
    "On reading every entry of the family's Heorth journal, in order, on a winter afternoon — and what five years of small notes look like when read as a single book.",
    ax,
    ay,
    CONTENT_W * 0.78,
    { size: 11, color: C.inkSoft, font: "body-italic", leading: 1.55 }
  )
  ay = doc.y + 8
  // meta strip
  doc.font("mono").fontSize(8).fillColor(C.taupe)
  doc.text(
    "JANUARY 6, 2026 · 1,200 WORDS · BY THE WYRIGHT".toUpperCase(),
    ax,
    ay,
    { characterSpacing: 1.4, lineBreak: false }
  )
  rule(doc, ax, ay + 16, PAGE.w - MARGIN)

  // 2 — Mock project card (single, Heorth)
  const cy = ay + 36
  const cardH = 130
  doc.save()
  doc.fillColor(C.card).strokeColor(C.tan).lineWidth(0.5)
  doc.rect(MARGIN, cy, CONTENT_W, cardH).fillAndStroke()
  doc.restore()
  // Mark vertical strip on left
  doc.save()
  doc.fillColor(C.linen).rect(MARGIN, cy, 80, cardH).fill()
  doc.restore()
  drawMark(doc, MARGIN + 18, cy + 32, 44, C.ink)
  // Right side text
  const tx = MARGIN + 100
  eyebrow(doc, "§ 01 — Heorth", tx, cy + 16, C.ember, 8)
  doc.font("display").fontSize(22).fillColor(C.ink)
  doc.text("A homestead and family management system.", tx, cy + 38, {
    width: CONTENT_W - 120,
    lineBreak: false,
  })
  body(
    doc,
    "Meal plans, chores, calendars, pantry, garden, and a shared family journal — for the wall-mounted screen, the kitchen phone, and the laptop after the children are asleep.",
    tx,
    cy + 70,
    CONTENT_W - 120,
    { size: 9.5, color: C.inkSoft, leading: 1.55 }
  )
  // beta corner
  doc.font("mono").fontSize(8).fillColor(C.taupe)
  doc.text("0.1 BETA · Q3 2026", tx, cy + cardH - 18, {
    characterSpacing: 1.4,
    lineBreak: false,
  })

  // 3 — Mock footer
  const fy = cy + cardH + 30
  doc.save()
  doc.fillColor(C.ink).rect(MARGIN, fy, CONTENT_W, 110).fill()
  doc.restore()
  drawMark(doc, MARGIN + 24, fy + 24, 44, C.parchment)
  doc.font("display").fontSize(20).fillColor(C.parchment)
  doc.text("Wyrhta Labs", MARGIN + 80, fy + 28, { lineBreak: false })
  doc.font("mono").fontSize(8).fillColor("#C4B6A2")
  doc.text(
    "PRESS@WYRHTA.DEV · GITHUB.COM/WYRHTA-LABS · CASTROP-RAUXEL".toUpperCase(),
    MARGIN + 80,
    fy + 60,
    { characterSpacing: 1.4, lineBreak: false }
  )
  doc.text("MIT · MARKS RESERVED · v1.0", MARGIN + 80, fy + 78, {
    characterSpacing: 1.4,
    lineBreak: false,
  })
}

function pageColophon(doc) {
  newPage(doc, C.ink)
  // light text on dark for the colophon
  // header / footer in muted parchment
  const y = 36
  rule(doc, MARGIN, y + 16, PAGE.w - MARGIN, "#5A4A3A")
  doc.font("mono-medium").fontSize(7.5).fillColor("#C4B6A2")
  doc.text("§ COLOPHON · END OF GUIDE", MARGIN, y, {
    characterSpacing: 1.6,
    lineBreak: false,
  })
  const right = `Wyrhta Labs · Design Guide · ${String(13).padStart(2, "0")}/${String(TOTAL_PAGES).padStart(2, "0")}`.toUpperCase()
  const rw = doc.widthOfString(right, { characterSpacing: 1.4 })
  doc.text(right, PAGE.w - MARGIN - rw, y, {
    characterSpacing: 1.4,
    lineBreak: false,
  })

  // big mark in ember at top-centre
  drawMark(doc, PAGE.w / 2 - 56, 130, 112, C.ember)

  // Title
  display(doc, "Colophon.", MARGIN, 280, {
    size: 56,
    tracking: -1,
    width: CONTENT_W,
    align: "center",
    color: C.parchment,
  })

  body(
    doc,
    "This guide was set in Fraunces, drawn by Phaedra Charles and Flavia Zimbardi for Undercase Type, " +
      "and Geist Mono, drawn by Vercel. It was typeset on parchment-and-ember by the Wyrhta wright, " +
      "in Castrop-Rauxel, in the spring of 2026, alongside the 0.1 beta of Heorth and KithLedger.",
    MARGIN + 60,
    340,
    CONTENT_W - 120,
    {
      size: 12,
      color: "#E6DECE",
      font: "body-italic",
      leading: 1.7,
      align: "center",
    }
  )

  // Three meta blocks at bottom
  const fy = PAGE.h - 200
  rule(doc, MARGIN, fy, PAGE.w - MARGIN, "#5A4A3A")
  const colW = CONTENT_W / 3
  const meta = [
    {
      k: "Type",
      v: "Fraunces — Undercase Type\nGeist Mono — Vercel\nBoth open source.",
    },
    {
      k: "Licence",
      v: "Document text · CC BY-SA 4.0\nMarks · Wyrhta Labs, reserved\nAll project code · MIT.",
    },
    {
      k: "Reach us",
      v: "press@wyrhta.dev\ngithub.com/wyrhta-labs\nReplied to within 3 working days.",
    },
  ]
  meta.forEach((m, i) => {
    const x = MARGIN + colW * i
    eyebrow(doc, m.k, x, fy + 22, C.ember, 8)
    doc.font("mono").fontSize(9).fillColor("#E6DECE")
    doc.text(m.v, x, fy + 40, { width: colW - 16, lineGap: 3 })
  })

  // tiny end-mark
  doc.font("mono").fontSize(7.5).fillColor("#7C6F5F")
  doc.text("— END —", MARGIN, PAGE.h - 36, {
    characterSpacing: 2,
    width: CONTENT_W,
    align: "center",
    lineBreak: false,
  })
}

// ──────────────────────────────────────────────────────────────────────────────
// Main
// ──────────────────────────────────────────────────────────────────────────────

function main() {
  const outDir = path.dirname(OUT_PATH)
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true })
  }

  const doc = createDoc()
  doc.pipe(fs.createWriteStream(OUT_PATH))

  pageCover(doc) //         01
  pageContents(doc) //      02
  pageFoundation(doc) //    03
  pageMark(doc) //          04
  pageWordmark(doc) //      05
  pageColour(doc) //        06
  pageType(doc) //          07
  pageLayout(doc) //        08
  pageImagery(doc) //       09
  pageVoice(doc) //         10
  pageNaming(doc) //        11
  pageApplication(doc) //   12
  pageColophon(doc) //      13

  doc.end()
  console.log(`[v0] Generated ${OUT_PATH}`)
}

main()

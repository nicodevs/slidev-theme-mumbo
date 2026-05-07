# slidev-theme-mumbo

A scrapbook-style [Slidev](https://sli.dev) theme. Patterned backgrounds, cream chapter cards with subtle stripes, and an optional polaroid logo stamp on every slide.

## Install

Add this line to your slides frontmatter:

```yaml
---
theme: mumbo
---
```

Slidev will prompt to install on first run. Or install it manually:

```bash
npm install slidev-theme-mumbo
```

## Layouts

| Layout    | Use for                                                    |
| --------- | ---------------------------------------------------------- |
| `default` | Standard content slides                                    |
| `cover`   | Cream chapter card — title slides, intros, quotes, ends    |
| `items`   | Numbered list with a headline                              |
| `code`    | Centered code window on a patterned background             |
| `blank`   | Patterned background only — bring your own content         |

## Frontmatter

All layouts share a common base:

```yaml
---
layout: cover
pattern: grid                   # grid | stripes | gingham | dots | diagonal | plaid | solid
backgroundColor: '#88a989'      # any hex — drives the pattern background color
stamp: /vue.svg                 # optional polaroid: any square PNG/SVG
stampSide: tr                   # tl | tr | bl | br (default tr)
---
```

`cover` and `items` add chapter-card fields:

```yaml
---
layout: cover
label: Chapter One              # small label above the title
headline: Silly Prank War       # large title
quote: Every site is real-time… # alternate title styled with curly quotes
subtitle: Hermitcraft S11       # small label below the title
tag: INTRO                      # masking-tape badge across the card
width: 85                       # cover-only: card width as a percent
---
```

`headline` and `quote` are mutually exclusive (`quote` takes precedence and renders the title with `“ ”`).

## Patterns

| Name       | Look                       |
| ---------- | -------------------------- |
| `grid`     | Crosshatched grid          |
| `dots`     | Polka dots                 |
| `stripes`  | Vertical stripes           |
| `diagonal` | 45° diagonal lines         |
| `gingham`  | Picnic-blanket gingham     |
| `plaid`    | Tartan plaid               |
| `solid`    | No pattern, flat color     |

## Components

Auto-imported and available inside any slide:

| Component       | What it does                                                         |
| --------------- | -------------------------------------------------------------------- |
| `<CardsGrid>`   | Grid wrapper for 1–3 numbered cards. Children should be `<Card>`s.   |
| `<Card>`        | A single accent-colored card. Props: `accent`, `number`.             |
| `<CodeWindow>`  | Mac-style window frame around a code block. Prop: `title`.           |
| `<Cover>`       | The cream chapter card. Use directly to compose custom layouts.      |
| `<PolaroidStamp>` | Polaroid-framed image. Props: `src`, `side`.                       |
| `<Wrapper>`     | Internal layout wrapper (pattern + background). Used by all layouts. |

Example:

```md
---
layout: blank
pattern: grid
backgroundColor: '#b3cde4'
---

<CardsGrid>
  <Card number="01" accent="#5da9e9">Server-Sent Events</Card>
  <Card number="02" accent="#a981ff">WebSockets</Card>
  <Card number="03" accent="#ff8a3d">WebRTC</Card>
</CardsGrid>
```

## Types

The theme exports prop types you can reuse when building custom components:

```ts
import type {
  LayoutBaseProps,  // class, pattern, backgroundColor
  StampProps,       // stamp, stampSide
  CoverProps,       // label, headline, quote, subtitle, tag
  StampSide,        // 'tl' | 'tr' | 'bl' | 'br'
} from 'slidev-theme-mumbo/types'
```

## Local development

```bash
npm install
npm run dev      # opens example.md
npm run export   # PDF
```

## License

MIT — Nico Devs

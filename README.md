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

| Layout    | Use for                                                                            |
| --------- | ---------------------------------------------------------------------------------- |
| `default` | Universal layout — `cover:`, `snippet:`, `cards:`, `items:`, or a content card     |

## Frontmatter

All layouts share a common base:

```yaml
---
layout: default                 # `default` is implicit; can be omitted
pattern: grid                   # grid | stripes | gingham | dots | diagonal | plaid | solid
backgroundColor: '#88a989'      # any hex — drives the pattern background color
accentColor: '#16243a'          # optional — color used for links, strong, list markers, etc.
stamp:                          # optional polaroid on the patterned background
  url: /vue.svg                 # any square PNG/SVG
  position: tr                  # tl | tr | bl | br (default tr)
---
```

For a list slide, set `items:` (each entry auto-wraps in `<v-click>` so they reveal one by one):

```yaml
---
label: Chapter One
headline: What's in the Box
subtitle: A short summary
items:
  - First point
  - Second point
  - Third point
---
```

For a chapter / hero slide, set the fields under a nested `cover:` object:

```yaml
---
cover:
  label: Chapter One              # small label above the title
  headline: Lorem Ipsum Dolor     # large title
  quote: Every site is real-time… # alternate title styled with curly quotes
  subtitle: Sit Amet              # small label below the title
  tag: INTRO                      # masking-tape badge across the card
  width: 85                       # card width as a percent
  stamp:                          # polaroid inside the card
    url: /vue.svg
    position: br
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
| `<CardsGrid>`   | Grid wrapper for 1–3 cards. Children should be `<Card>`s.            |
| `<Card>`        | A single colored card. Props: `color`, `label`, `text` (slot fallback). |
| `<CodeWindow>`  | Mac-style window frame around a code block. Prop: `title`.           |
| `<Cover>`       | The cream chapter card. Use directly to compose custom layouts.      |
| `<PolaroidStamp>` | Polaroid-framed image. Props: `url`, `position`.                   |
| `<Wrapper>`     | Internal layout wrapper (pattern + background). Used by all layouts. |

Example — imperative form (slot content):

```md
---
pattern: grid
backgroundColor: '#b3cde4'
---

<CardsGrid>
  <Card label="01" color="#5da9e9">Server-Sent Events</Card>
  <Card label="02" color="#a981ff">WebSockets</Card>
  <Card label="03" color="#ff8a3d">WebRTC</Card>
</CardsGrid>
```

Example — declarative via `cover:` and `cards:` frontmatter (renders the same content automatically):

```md
---
pattern: grid
backgroundColor: '#88a989'
cover:
  label: MadVue 2026
  headline: Vue Real‑Time Apps
  subtitle: A talk by Nico Devs
  stamp:
    url: https://vuejs.org/images/logo.png
    position: tr
cards:
  - text: Server-Sent Events
    label: '01'
    color: '#5da9e9'
  - text: WebSockets
    label: '02'
    color: '#a981ff'
  - text: WebRTC
    label: '03'
    color: '#ff8a3d'
---
```

If `cover` is set, the slot renders *inside* the chapter card (useful for embedding a component below the headline). If `snippet` is set, the slot is wrapped in a `<CodeWindow>` titled with the snippet value — convenient for code-block slides:

````md
---
backgroundColor: '#b8332b'
snippet: polling.js
---

```js
function poll() { /* ... */ }
```
````

If `items` is set, a list slide is rendered (top-level `headline`/`label`/`subtitle` decorate it; each item auto-wraps in `<v-click>`). If `cards` is set, the cards grid replaces the slot. With none of these set, the slot renders inside a cream content card on the patterned background.

## Types

The theme exports prop types you can reuse when building custom components:

```ts
import type {
  LayoutBaseProps,  // class, pattern, backgroundColor, accentColor
  StampProps,       // stamp
  StampConfig,      // { url, position? }
  StampSide,        // 'tl' | 'tr' | 'bl' | 'br'
  CoverProps,       // label, headline, quote, subtitle, tag
  CoverConfig,      // CoverProps + StampProps + width
  CardItem,         // { text, label?, color? }
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

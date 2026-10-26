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

## Frontmatter

All options are top-level — no nesting required. The slide mode is inferred from which keys are present.

### Universal options (work in every mode)

```yaml
---
pattern: grid                   # grid | stripes | gingham | dots | diagonal | plaid | solid
backgroundColor: '#88a989'      # any hex — drives the pattern background color
accentColor: '#16243a'          # color for links, strong, list markers, etc.
label: Chapter One              # small label above the title
headline: Lorem Ipsum Dolor     # large centered title → triggers cover card (supports *italic*, **bold**, `code`)
quote: Every site is real-time… # alternate title with curly quotes (takes precedence over headline)
subtitle: Sit Amet              # small label below the title
tag: INTRO                      # masking-tape badge across the card (in cards mode, across the top of the grid)
width: 85                       # cover card width as a percent
headlineStroke: true            # outline the headline (true = white, or any CSS color)
markerColor: '#2f6fb3'          # fill of the round markers in items lists (defaults to backgroundColor)
stamp:                          # polaroid stamp
  url: /vue.svg                 # any square PNG/SVG
  position: tr                  # tl | tr | bl | br (default tr)
---
```

### Headline stroke

Set `headlineStroke` to outline the headline so it stays readable on top of the pattern. It's most useful for headlines that sit on the background, like the ones above cards and stickers. Use `true` for a white outline, or pass any CSS color.

```yaml
---
pattern: grid
backgroundColor: '#b3cde4'
headline: Pick your stack
headlineStroke: true            # or '#ffe873'
cards:
  - text: Server-Sent Events
  - text: WebSockets
---
```

### Mode inference

| Keys present | Mode |
|---|---|
| `snippet` | Mac-style code window |
| `cards` | Card grid |
| `stickers` | Sticker wall |
| `items` | Reveal list (left-aligned card) |
| `headline` or `quote` | Cover card (centered) |
| *(none of the above)* | Content card (left-aligned, slot) |

### Cover card

Setting `headline` (or `quote`) is all you need — the slide becomes a centered chapter card:

```yaml
---
pattern: grid
backgroundColor: '#88a989'
label: MadVue 2026
headline: Vue Real‑Time Apps
subtitle: A talk by Nico Devs
stamp:
  url: /vue.svg
  position: tr
---
```

### List slide

```yaml
---
label: Chapter One
headline: What's in the Box
items:
  - First point
  - Second point
  - Third point
---
```

Each item auto-wraps in `<v-click>` so they reveal one by one. Items support inline markdown and an optional `(marker)` prefix.

A marker that contains `:` is treated as an [Iconify](https://icon-sets.iconify.design/) icon name instead of text:

```yaml
items:
  - (mdi:lightning-bolt) Super fast search
  - (mdi:spellcheck) Typo tolerance
  - (🔁) Emoji markers still work
```

Numbers and icons sit in a round marker filled with the slide's `backgroundColor`. Set `markerColor` to use a different color:

```yaml
markerColor: '#2f6fb3'
items:
  - (mdi:lightning-bolt) Super fast search
  - (mdi:spellcheck) Typo tolerance
```

### Cards

```yaml
---
pattern: grid
headline: Pick your stack
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

Add `reveal: true` to make cards appear one by one via `<v-click>`. The `label` field accepts an Iconify icon name (e.g. `mdi:home`).

A card's `subtext` supports inline markdown (`` `code` ``, `**bold**`, `*italic*`, links) and bullet lists, one `- ` item per line:

```yaml
cards:
  - text: Zero typo tolerance
    subtext: |
      - `Evanguelion` won't match `Evangelion`
      - `Narutto` won't match `Naruto`
```

### Stickers

```yaml
---
pattern: dots
backgroundColor: '#7ad7d7'
stickers:
  - icon: logos:chrome
    rotation: -6              # degrees (number) or any CSS rotate value
  - icon: logos:firefox
    rotation: 4
  - icon: logos:safari
    rotation: '0.02turn'
---
```

### Code snippet

````yaml
---
backgroundColor: '#b8332b'
snippet: polling.js
---

```js
function poll() { /* ... */ }
```
````

A `stamp` on a snippet slide pins to the corner of the code window instead of the slide.

Add a `headline` to show a title above the code window (combine it with `headlineStroke` to outline it).

### Content card (slot)

With none of the above keys set, the slot renders inside a left-aligned cream content card:

```yaml
---
pattern: dots
---

# My slide

Regular markdown content here.
```

## Layouts

| Layout    | Use for |
|-----------|---------|
| `default` | Everything above |
| `browser` | Browser window screenshot. Props: `url`, `image`, `width`. Also supports `headline`, `label`, `subtitle`, `tag`, `stamp`. |

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

| Component         | What it does |
| ----------------- | ------------ |
| `<CardsGrid>`     | Grid wrapper for 1–3 cards. Children should be `<Card>`s. |
| `<Card>`          | A single colored card. Props: `color`, `label`, `text` (slot fallback). |
| `<CodeWindow>`    | Mac-style window frame around a code block. Prop: `title`. |
| `<Cover>`         | The cream chapter card. Use directly to compose custom layouts. |
| `<PolaroidStamp>` | Polaroid-framed image/emoji/icon. Props: `url`, `emoji`, `icon`, `position`. |
| `<StickersWall>`  | Centered flex-wrap wall of rotated outlined stickers. Prop: `items`. |
| `<Wrapper>`       | Internal layout wrapper (pattern + background). Used by all layouts. |

## Types

```ts
import type {
  LayoutBaseProps,  // class, pattern, backgroundColor, accentColor, headlineStroke, markerColor
  StampProps,       // stamp
  StampConfig,      // { url?, emoji?, icon?, color?, position?, inset? }
  StampSide,        // 'tl' | 'tr' | 'bl' | 'br'
  CoverProps,       // label, headline, quote, subtitle, tag, width
  CardItem,         // { text, subtext?, label?, icon?, color? }
  StickerItem,      // { text?, icon?, url?, rotation? }
} from 'slidev-theme-mumbo/types'
```

## Local development

```bash
npm install
npm run dev      # opens example.md
npm run export   # PDF
```

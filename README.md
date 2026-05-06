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

| Layout    | Use for                                   |
| --------- | ----------------------------------------- |
| `default` | Standard content slides                   |
| `cover`   | Cream chapter card (title / intro / end)  |
| `items`   | Numbered list grid                        |
| `cards`   | 1–3 numbered cards on patterned bg        |
| `code`    | Code window centered on patterned bg      |

## Frontmatter

Every layout accepts the same options:

```yaml
---
layout: cover
label: Chapter One              # small label above the headline
headline: Silly Prank War       # large title
subtitle: Hermitcraft Season 11 # small label below the headline
pattern: grid                   # grid | stripes | gingham | dots | diagonal | plaid | solid
palette: sage                   # sage | forest | blue | red | kraft | pink | amber
stamp: /vue.svg                 # optional polaroid: any square PNG/SVG
stampSide: tr                   # tl | tr | bl | br (default tr)
---
```

The `stamp` is an optional polaroid in the corner of the card. Drop in any squared logo (PNG or SVG) — a tech logo, a project mark, a portrait, anything.

## Palettes

| Name     | Vibe                       |
| -------- | -------------------------- |
| `sage`   | Soft muted green (default) |
| `forest` | Deep evergreen             |
| `blue`   | Cool denim blue            |
| `red`    | Warm tomato red            |
| `kraft`  | Brown paper / sepia        |
| `pink`   | Dusty rose                 |
| `amber`  | Warm yellow / orange       |

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

## Local development

```bash
npm install
npm run dev      # opens example.md
npm run export   # PDF
```

## License

MIT — Nico Devs

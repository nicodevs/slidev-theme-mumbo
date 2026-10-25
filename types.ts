export type StampSide = 'tl' | 'tr' | 'bl' | 'br'

export interface StampConfig {
  url?: string
  emoji?: string
  icon?: string
  color?: string
  position?: StampSide
  inset?: number | string
}

export interface LayoutBaseProps {
  class?: string
  pattern?: string
  backgroundColor?: string
  accentColor?: string
  /** Outline the headline so it reads on top of the pattern. `true` = white, or any CSS color. */
  headlineStroke?: boolean | string
  /** Background of the round markers in `items` lists (numbers and icons). Defaults to the slide's backgroundColor. */
  markerColor?: string
}

export interface StampProps {
  stamp?: StampConfig | StampConfig[]
}

export interface CoverProps {
  label?: string | number
  headline?: string
  quote?: string
  subtitle?: string
  tag?: string
  width?: number | string
}

export interface CardItem {
  text: string
  subtext?: string
  label?: string | number
  icon?: string
  color?: string
}

export interface StickerItem {
  text?: string
  icon?: string
  url?: string
  rotation?: string | number
}

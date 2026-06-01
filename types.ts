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
}

export interface CoverConfig extends CoverProps, StampProps {
  width?: number | string
}

export interface CardItem {
  text: string
  subtext?: string
  label?: string | number
  color?: string
}

export interface StickerItem {
  text?: string
  icon?: string
  url?: string
  rotation?: string | number
}

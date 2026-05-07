export type StampSide = 'tl' | 'tr' | 'bl' | 'br'

export interface LayoutBaseProps {
  class?: string
  pattern?: string
  backgroundColor?: string
}

export interface StampProps {
  stamp?: string
  stampSide?: StampSide
}

export interface CoverProps {
  label?: string | number
  headline?: string
  quote?: string
  subtitle?: string
  tag?: string
}

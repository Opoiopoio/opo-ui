export type LabelType =
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right'
  | 'left'
  | 'right'
  | 'hidden'
export type LabelNesting = 'inner' | 'outer'
export type LabelPosition = 'after' | 'before' | 'none'

export const LabelPositionEnum: Record<LabelType, LabelPosition> = {
  top: 'before',
  'top-left': 'before',
  'top-right': 'before',
  bottom: 'after',
  'bottom-left': 'after',
  'bottom-right': 'after',
  hidden: 'none',
  left: 'before',
  right: 'after',
}

export type ErrorMessageType = 'warn' | 'fatal'

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

export type ErrorMessageType = 'warn' | 'fatal'

export const labelTypes: Record<string, LabelType> = {
  bottom: 'bottom',
  bottomLeft: 'bottom-left',
  bottomRight: 'bottom-right',
  hidden: 'hidden',
  left: 'left',
  right: 'right',
  top: 'top',
  topLeft: 'top-left',
  topRight: 'top-right',
} as const

export const labelNestings: Record<LabelNesting, true> = {
  inner: true,
  outer: true,
} as const

export const errorMessageTypes: Record<ErrorMessageType, true> = {
  fatal: true,
  warn: true,
} as const

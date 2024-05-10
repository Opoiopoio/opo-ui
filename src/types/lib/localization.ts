import AllRules from '@vee-validate/rules'

export type ILanguageLocalization = Record<
  keyof Omit<typeof AllRules, 'toTypedSchema'>,
  (field: string, params?: unknown) => string
>

export type LocalizationConstructorParams = {
  localizations: { [name: string]: ILanguageLocalization }[]
  language?: string
}

export type BetweenParams = StringOrNumberKortage | BetweenParamsObject
export type StringOrNumberKortage = [string | number, string | number]
export type BetweenParamsObject = {
  min: number | string
  max: number | string
}

export type ConfirmedParams = [string] | ConfirmedParamsObject
export type ConfirmedParamsObject = {
  target: string
}

export type WithLengthParams = [string | number] | WithLengthParamsObject
export type WithLengthParamsObject = {
  length: string | number
}

export type DimensionsParams = StringOrNumberKortage | DimensionsParamsObject
export type DimensionsParamsObject = {
  width: string | number
  height: string | number
}

export type MaxValueParams = [string | number] | MaxValueParamsObject
export type MaxValueParamsObject = {
  max: string | number
}

export type MinValueParams = [string | number] | MinValueParamsObject
export type MinValueParamsObject = {
  min: string | number
}

export type SizeParams = [string | number] | SizeParamsObject
export type SizeParamsObject = {
  size: string | number
}

export type RegexParams = [string | RegExp] | RegexParamsObject
export type RegexParamsObject = {
  regex: RegExp | string
}

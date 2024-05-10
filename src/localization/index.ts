import {
  BetweenParams,
  ConfirmedParams,
  DimensionsParams,
  ILanguageLocalization,
  LocalizationConstructorParams,
  MaxValueParams,
  MinValueParams,
  SizeParams,
  WithLengthParams,
} from '@/types'

import ru from './ru'

class Localization {
  private readonly _localizations: Map<string, ILanguageLocalization>
  private readonly _defaultLanguage: string
  private _currentLanguage: string

  constructor(params: LocalizationConstructorParams) {
    const { localizations } = params

    this._localizations = new Map(this.makeParamsToLanguages(localizations))
    this._defaultLanguage = 'ru'
    this._currentLanguage = this.getLanguage(params.language)
  }

  private getLanguage(lang: string | undefined) {
    if (lang && !this._localizations.has(lang)) {
      console.warn(`Unknown Localization: ${lang}. Assigned ${this._defaultLanguage}`)
      return this._defaultLanguage
    } else if (lang) {
      return lang
    } else {
      return this._defaultLanguage
    }
  }

  private makeParamsToLanguages(
    languages: LocalizationConstructorParams['localizations'],
  ) {
    return languages.reduce((array, lang) => {
      for (const langName in lang) {
        const element = lang[langName]
        array.push([langName, element])
      }

      return array
    }, new Array<[string, ILanguageLocalization]>())
  }

  private get Localization(): ILanguageLocalization {
    const result = this._localizations.get(this._currentLanguage)

    if (!result) throw new Error(`Not Found Localization ${this._currentLanguage}`)

    return result
  }

  setLanguage(lang: string) {
    this._currentLanguage = this.getLanguage(lang)
  }

  alpha(field: string) {
    return this.Localization.alpha(field)
  }

  alpha_dash(field: string) {
    return this.Localization.alpha_dash(field)
  }
  alpha_num(field: string) {
    return this.Localization.alpha_num(field)
  }
  alpha_spaces(field: string) {
    return this.Localization.alpha_spaces(field)
  }
  between(field: string, params: BetweenParams): string {
    return this.Localization.between(field, params)
  }
  confirmed(field: string, params: ConfirmedParams): string {
    return this.Localization.confirmed(field, params)
  }
  digits(field: string, params: WithLengthParams): string {
    return this.Localization.digits(field, params)
  }
  dimensions(field: string, params: DimensionsParams): string {
    return this.Localization.dimensions(field, params)
  }
  email(field: string) {
    return this.Localization.email(field)
  }
  ext(field: string, params: string[]): string {
    return this.Localization.ext(field, params)
  }
  image(field: string) {
    return this.Localization.image(field)
  }
  integer(field: string) {
    return this.Localization.integer(field)
  }
  is(field: string) {
    return this.Localization.is(field)
  }
  is_not(field: string) {
    return this.Localization.is_not(field)
  }
  length(field: string) {
    return this.Localization.length(field)
  }
  max(field: string, params: WithLengthParams): string {
    return this.Localization.max(field, params)
  }
  max_value(field: string, params: MaxValueParams): string {
    return this.Localization.max_value(field, params)
  }
  mimes(field: string, params: string[]): string {
    return this.Localization.mimes(field, params)
  }
  min(field: string, params: MaxValueParams): string {
    return this.Localization.min(field, params)
  }
  min_value(field: string, params: MinValueParams): string {
    return this.Localization.min_value(field, params)
  }
  not_one_of(field: string, params: unknown[]): string {
    return this.Localization.not_one_of(field, params)
  }
  numeric(field: string) {
    return this.Localization.numeric(field)
  }
  one_of(field: string, params: unknown[]) {
    return this.Localization.not_one_of(field, params)
  }
  regex(field: string): string {
    return this.Localization.regex(field)
  }
  required(field: string) {
    return this.Localization.required(field)
  }
  size(field: string, params: SizeParams): string {
    return this.Localization.size(field, params)
  }
  url(field: string) {
    return this.Localization.url(field)
  }
}

export default new Localization({ localizations: [{ ru }] })

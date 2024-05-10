import {
  BetweenParams,
  StringOrNumberKortage,
  BetweenParamsObject,
  ConfirmedParams,
  ConfirmedParamsObject,
  WithLengthParams,
  WithLengthParamsObject,
  ILanguageLocalization,
  DimensionsParams,
  DimensionsParamsObject,
  MaxValueParams,
  MaxValueParamsObject,
  MinValueParamsObject,
  MinValueParams,
  SizeParams,
  SizeParamsObject,
} from '@/types'

export class RuLocalization implements ILanguageLocalization {
  alpha(field: string) {
    return `Поле ${field} может содержать только буквенные символы`
  }

  alpha_dash(field: string) {
    return `Поле ${field} может содержать буквенно-цифровые символы, а также тире и подчеркивания`
  }

  alpha_num(field: string) {
    return `Поле ${field} может содержать буквенные символы или цифры.`
  }

  alpha_spaces(field: string) {
    return `Поле ${field} может содержать только буквенные символы, а также пробелы`
  }

  between(field: string, params: unknown): string
  between(field: string, params: BetweenParams): string
  between(field: string, params: unknown | BetweenParams) {
    let betweenParams: BetweenParamsObject = { min: 0, max: 0 }
    if (typeof params != 'object') throw new Error('Incorrect Between Params')
    else if (Array.isArray(params)) {
      betweenParams.min = (params as StringOrNumberKortage)[0]
      betweenParams.max = (params as StringOrNumberKortage)[1]
    } else {
      betweenParams = params as BetweenParamsObject
    }

    return `Значение поля ${field} должно находиться в диапазоне от ${betweenParams.min} до ${betweenParams.max}`
  }

  confirmed(field: string, params: unknown): string
  confirmed(field: string, params: ConfirmedParams): string
  confirmed(field: string, params: unknown | ConfirmedParams) {
    let target: string

    if (typeof params != 'object') throw new Error('Incorrect Confirm Params')
    else if (Array.isArray(params)) {
      target = params[0]
    } else {
      target = (params as ConfirmedParamsObject).target
    }

    return `Поля ${field} и ${target} не совпадают`
  }

  digits(field: string, params: unknown): string
  digits(field: string, params: WithLengthParams): string
  digits(field: string, params: unknown | WithLengthParams) {
    let length: string | number

    if (typeof params != 'object') throw new Error('Incorrect Digits Params')
    else if (Array.isArray(params)) {
      length = params[0]
    } else {
      length = (params as WithLengthParamsObject).length
    }

    return `Поле ${field} должно быть числовым и содержать ровно ${length} цифры`
  }

  dimensions(field: string, params: unknown): string
  dimensions(field: string, params: DimensionsParams): string
  dimensions(field: string, params: unknown | DimensionsParams) {
    let height: string | number
    let width: string | number

    if (typeof params != 'object') throw new Error('Incorrect Dimensions Params')
    else if (Array.isArray(params)) {
      width = params[0]
      height = params[1]
    } else {
      width = (params as DimensionsParamsObject).width
      height = (params as DimensionsParamsObject).height
    }

    return `Поле ${field} должно быть размером ${width} на ${height} пикселей`
  }

  email(field: string) {
    return `В поле ${field} должен быть указан действительный адрес электронной почты`
  }

  ext(field: string, params: unknown): string
  ext(field: string, params: string[]): string
  ext(field: string, params: unknown | string[]) {
    if (!Array.isArray(params)) throw new Error('Incorrect Ext Params')
    const formats = params as string[]

    return `Поле ${field} должно быть файлом одного из форматов: ${formats.join(', ')}`
  }

  image(field: string) {
    return `Поле ${field} должно быть изображением`
  }

  integer(field: string) {
    return `Поле ${field} должно быть целочисленным числом`
  }

  is() {
    throw new Error('Method not implemented')
    return ''
  }

  is_not() {
    throw new Error('Method not implemented')
    return ''
  }

  length(field: string) {
    return `Поле ${field} должно быть итерируемым объектом`
  }

  max(field: string, params: unknown): string
  max(field: string, params: WithLengthParams): string
  max(field: string, params: unknown | WithLengthParams) {
    let length: string | number

    if (typeof params != 'object') throw new Error('Incorrect Max Params')
    else if (Array.isArray(params)) {
      length = params[0]
    } else {
      length = (params as WithLengthParamsObject).length
    }

    return `Длина поля ${field} не должна превышать ${length} символов`
  }

  max_value(field: string, params: unknown): string
  max_value(field: string, params: MaxValueParams): string
  max_value(field: string, params: unknown | MaxValueParams) {
    let max: string | number

    if (typeof params != 'object') throw new Error('Incorrect Max Params')
    else if (Array.isArray(params)) {
      max = params[0]
    } else {
      max = (params as MaxValueParamsObject).max
    }

    return `Поле ${field} должно быть равным ${max} или меньше`
  }

  mimes(field: string, params: unknown): string
  mimes(field: string, params: string[]): string
  mimes(field: string, params: unknown) {
    if (!Array.isArray(params)) throw new Error('Incorrect Mimes Params')

    return `Поле ${field} должно иметь один из типов: ${params.join(', ')}`
  }

  min(field: string, params: unknown): string
  min(field: string, params: MaxValueParams): string
  min(field: string, params: unknown | MaxValueParams) {
    let length: string | number

    if (typeof params != 'object') throw new Error('Incorrect Min Params')
    else if (Array.isArray(params)) {
      length = params[0]
    } else {
      length = (params as WithLengthParamsObject).length
    }

    return `Длина поля ${field} не должна быть меньше ${length} символов`
  }

  min_value(field: string, params: unknown): string
  min_value(field: string, params: MinValueParams): string
  min_value(field: string, params: unknown | MinValueParams) {
    let min: string | number

    if (typeof params != 'object') throw new Error('Incorrect Min Params')
    else if (Array.isArray(params)) {
      min = params[0]
    } else {
      min = (params as MinValueParamsObject).min
    }

    return `Поле ${field} должно быть равным ${min} или больше`
  }

  not_one_of(field: string, params: unknown): string
  not_one_of(field: string, params: unknown[]): string
  not_one_of(field: string, params: unknown) {
    if (!Array.isArray(params)) throw new Error('Incorrect Not One Of Params')

    return `Поле ${field} является одним из вариантов ${params.join(', ')}`
  }

  numeric(field: string) {
    return `Поле ${field} может содержать только числовые символы`
  }

  one_of(field: string, params: unknown) {
    if (!Array.isArray(params)) throw new Error('Incorrect One Of Params')

    return `Поле ${field} не является одним из вариантов: ${params.join(', ')}`
  }

  regex(field: string): string
  regex(field: string): string
  regex(field: string) {
    return `Формат поля ${field} неверен`
  }

  required(field: string) {
    return `Поле ${field} является обязательным`
  }

  size(field: string, params: unknown): string
  size(field: string, params: SizeParams): string
  size(_: string, params: unknown | SizeParams) {
    let size: string | number
    if (typeof params != 'object') throw new Error('Incorrect Size Params')
    else if (Array.isArray(params)) {
      size = params[0]
    } else {
      size = (params as SizeParamsObject).size
    }

    return `Размер файла должен быть не более ${size} КБ`
  }

  url(field: string) {
    return `Поле ${field} не является допустимым URL-адресом`
  }
}

export default new RuLocalization()

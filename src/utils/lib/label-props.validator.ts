import { LabelNesting, LabelType, labelTypes } from '@/types'

class LabelPropsValidator {
  private readonly _nestingSet: Set<LabelNesting>
  private readonly _typeSet: Set<LabelType>

  constructor() {
    this._nestingSet = new Set(['inner', 'outer'])
    this._typeSet = new Set(Object.values(labelTypes))
  }

  nesting(nesting: string | undefined): boolean {
    return this._nestingSet.has(nesting as LabelNesting)
  }

  type(type: string | undefined): boolean {
    return this._typeSet.has(type as LabelType)
  }
}

export default new LabelPropsValidator()

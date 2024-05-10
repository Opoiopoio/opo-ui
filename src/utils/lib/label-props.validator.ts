import { LabelNesting, LabelPosition, LabelPositionEnum, LabelType } from '@/types'

class LabelPropsValidator {
  private readonly _nestingSet: Set<LabelNesting>
  private readonly _typeSet: Set<LabelType>
  private readonly _positionSet: Set<LabelPosition>

  constructor() {
    this._nestingSet = new Set(['inner', 'outer'])
    this._typeSet = new Set(Object.keys(LabelPositionEnum) as LabelType[])
    this._positionSet = new Set(Object.values(LabelPositionEnum))
  }

  nesting(nesting: string | undefined): boolean {
    return this._nestingSet.has(nesting as LabelNesting)
  }

  type(type: string | undefined): boolean {
    return this._typeSet.has(type as LabelType)
  }

  position(position: string | undefined): boolean {
    return this._positionSet.has(position as LabelPosition)
  }
}

export default new LabelPropsValidator()

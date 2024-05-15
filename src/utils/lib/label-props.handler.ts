import { LabelNesting, LabelType } from '@/types'
import labelPropsValidator from './label-props.validator'

class LabelPropsHandler {
  type(props: LabelType | undefined, injected: LabelType | undefined): () => LabelType {
    return () => {
      if (props) {
        return props
      } else if (injected && labelPropsValidator.type(injected)) {
        return injected
      }
      return 'left'
    }
  }

  nesting(
    props: LabelNesting | undefined,
    injected: LabelNesting | undefined,
  ): () => LabelNesting {
    return () => {
      if (props) {
        return props
      } else if (injected && labelPropsValidator.nesting(injected)) {
        return injected
      }
      return 'outer'
    }
  }
}

export default new LabelPropsHandler()

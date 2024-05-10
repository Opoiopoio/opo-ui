<script setup lang="ts">
import { Field, ErrorMessage } from 'vee-validate'
import { computed, inject } from 'vue'

import {
  ErrorMessageType,
  LabelNesting,
  LabelPosition,
  LabelPositionEnum,
  LabelType,
} from '@/types'
import '@/style.scss'
import { labelPropsValidator } from '@/utils'

const props = defineProps<{
  name: string
  label?: string
  labelType?: LabelType
  labelNesting?: LabelNesting
  errorMessageType?: ErrorMessageType
}>()

const injectedLabelType = inject<LabelType>('labelType')
const ingectedLabelNesting = inject<LabelNesting>('labelNesting')

const label = computed<string>(() => props.label ?? props.name)

const labelType = computed<LabelType>(() => {
  if (props.labelType) {
    return props.labelType
  } else if (injectedLabelType && labelPropsValidator.type(injectedLabelType)) {
    return injectedLabelType
  }
  return 'left'
})

const labelNesting = computed<LabelNesting>(() => {
  if (props.labelNesting) {
    return props.labelNesting
  } else if (ingectedLabelNesting && labelPropsValidator.nesting(ingectedLabelNesting)) {
    return ingectedLabelNesting
  }
  return 'outer'
})

const labelPosition = computed<LabelPosition>(() => LabelPositionEnum[labelType.value])

const errorMessageClass = computed(
  () => `field__error-message_${props.errorMessageType ?? 'warn'}`,
)
</script>

<template>
  <div class="field">
    <span v-if="labelPosition == 'before'">{{ label }}</span>
    <Field :name :label class="field__input" />
    <span v-if="labelPosition == 'after'">{{ label }}</span>
    <ErrorMessage :name class="field__error-message" :class="errorMessageClass" />
  </div>
</template>

<style scoped lang="scss">
$padding: 0.5rem;

.field {
  display: flex;
  flex-direction: column;

  &__input {
    padding: $padding;
    border: solid 1px;
    border-radius: 0.3rem;
  }

  &__error-message {
    &_warn {
      color: yellow;
    }
    &_fatal {
      color: red;
    }
  }
}
</style>

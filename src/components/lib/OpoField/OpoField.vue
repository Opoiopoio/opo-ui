<script setup lang="ts">
import { Field, ErrorMessage } from 'vee-validate'
import { computed, inject, onMounted, ref, watch } from 'vue'

import { ErrorMessageType, LabelNesting, LabelType } from '@/types'
import { labelPropsValidator } from '@/utils'
import '@/style.scss'

import { OpoLabel } from '../OpoLabel'

const props = defineProps<{
  name: string
  label?: string
  labelType?: LabelType
  labelNesting?: LabelNesting
  errorMessageType?: ErrorMessageType
}>()

const injectedLabelType = inject<LabelType | undefined>('labelType', undefined)
const injectedLabelNesting = inject<LabelNesting | undefined>('labelNesting', undefined)

const label = computed<string>(() => props.label ?? props.name)

const mainClass = 'opo-field'
const inputClass = `${mainClass}__input`
const errorMessageClass = `${mainClass}__error-message`

const blockRef = ref<HTMLDivElement>()
const inputElem = computed(() =>
  blockRef.value?.querySelector<HTMLInputElement>(`.${inputClass}`),
)

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
  } else if (injectedLabelNesting && labelPropsValidator.nesting(injectedLabelNesting)) {
    return injectedLabelNesting
  }
  return 'outer'
})

const errorMessageTypeClass = computed(
  () => `${errorMessageClass}_${props.errorMessageType ?? 'warn'}`,
)

const nestingClass = computed(() => {
  const index = labelType.value.indexOf('-')
  const type = labelType.value.substring(0, index == -1 ? labelType.value.length : index)
  return `${mainClass}_nesting-${labelNesting.value}-${type}`
})

const labelRef = ref<typeof OpoLabel>()
const labelSize = ref<number>()

onMounted(async () => {
  labelSize.value = await labelRef.value?.size
})

watch(
  () => labelRef.value?.size,
  async () => {
    labelSize.value = await labelRef.value?.size
  },
  {
    immediate: false,
  },
)

function checkInnerType() {
  return (
    labelNesting.value == 'inner' &&
    labelType.value != 'left' &&
    labelType.value != 'right'
  )
}

const padding = ref(10)
const paddingPx = computed<`${number}px`>(() => `${padding.value}px`)

const sideInputPadding = computed<`${number}px`>(() => {
  if (checkInnerType()) return '0px'
  return `${padding.value + (labelSize.value ?? 0)}px`
})

const labelWidth = computed<`${number}px`>(() => {
  if (checkInnerType()) return `0px`
  else if (!labelSize?.value) return '0px'
  else return `${labelSize?.value}px`
})
</script>

<template>
  <div ref="blockRef" :class="[mainClass, nestingClass]">
    <div class="opo-field__container">
      <OpoLabel
        ref="labelRef"
        :text="label"
        :type="labelType"
        :nesting="labelNesting"
        :input-elem="inputElem"
      />
      <Field :name :label :class="[inputClass]" />
    </div>

    <ErrorMessage :name :class="[errorMessageClass, errorMessageTypeClass]" />
  </div>
</template>

<style scoped lang="scss">
$padding: v-bind(paddingPx);
$input-padding: 20px;

.opo-field {
  display: flex;
  flex-direction: column;
  z-index: 10;

  color: var(--text-color-darken);

  &__container {
    position: relative;
  }

  &_nesting-inner {
    &-top {
      .opo-field__input {
        padding-top: $input-padding;
      }
    }

    &-bottom {
      .opo-field__input {
        padding-bottom: $input-padding;
      }
    }

    &-left {
      .opo-field__input {
        padding-left: v-bind(sideInputPadding);
      }
    }

    &-right {
      .opo-field__input {
        padding-right: v-bind(sideInputPadding);
      }
    }
  }

  &__input {
    width: calc(100% - $padding * 2 - v-bind(labelWidth));
    padding: $padding;
    border: solid 0px;
    border-radius: 0.3rem;

    color: var(--text-color);

    line-height: 1.5;

    background-color: var(--main-color);

    &:focus {
      outline: solid 2px var(--sub-color);
    }
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

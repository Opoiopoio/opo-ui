<script setup lang="ts">
import { LabelNesting, LabelType } from '@/types'
import { computed, ref, watch } from 'vue'

const props = defineProps<{
  text: string
  type: LabelType
  nesting: LabelNesting
  inputElem: HTMLInputElement | null | undefined
}>()

const mainClass = 'opo-label'

const typeClass = computed(() => {
  const type = `${mainClass}_type-${props.type}`
  return type
})
const nestingClass = computed(() => `${mainClass}_nesting-${props.nesting}`)

function onClick() {
  props.inputElem?.focus()
}

const spanRef = ref<HTMLSpanElement>()

const size = ref<Promise<number | undefined>>()

watch(
  () => props.type,
  () => {
    size.value = new Promise((resolve) => {
      setTimeout(() => {
        resolve(spanRef.value?.offsetWidth)
      })
    })
  },
  { immediate: true },
)

defineExpose({ size })
</script>

<template>
  <span ref="spanRef" @click="onClick" :class="[mainClass, typeClass, nestingClass]">{{
    text
  }}</span>
</template>

<style scoped lang="scss">
$x-padding: 10px;
$y-padding: 4px;

.opo-label {
  z-index: 5;
  width: 100%;

  cursor: text;

  &_type-top,
  &_type-bottom {
    text-align: center;
  }
  &_type-top-left,
  &_type-bottom-left,
  &_type-left {
    text-align: left;
  }
  &_type-top-right,
  &_type-bottom-right,
  &_type-right {
    text-align: right;
  }
  &_type-hidden {
    display: none;
  }

  &_nesting-inner {
    position: absolute;
    font-size: 14px;

    width: 100%;

    &.opo-label_type-top {
      top: $y-padding;

      &-left {
        @extend .opo-inner-top-side-lables;
        padding-left: $x-padding;
      }

      &-right {
        @extend .opo-inner-top-side-lables;
        padding-right: $x-padding;
      }
    }

    &.opo-label_type-bottom {
      bottom: $y-padding;
      left: 0;

      &-left {
        @extend .opo-inner-bottom-side-lables;
        padding-left: $x-padding;
        left: 0;
        text-align: left;
      }

      &-right {
        @extend .opo-inner-bottom-side-lables;
        padding-right: $x-padding;
        right: 0;
        text-align: right;
      }
    }

    &.opo-label_type-left {
      @extend .opo-inner-side-lables;
      border-right: solid 1px var(--sub-color);
    }

    &.opo-label_type-right {
      @extend .opo-inner-side-lables;
      border-left: solid 1px var(--sub-color);
      right: 0;
    }
  }
}

.opo-inner-y-side-lables {
  width: calc(100% - $x-padding);
}

.opo-inner-top-side-lables {
  @extend .opo-inner-y-side-lables;
  top: $y-padding;
}

.opo-inner-bottom-side-lables {
  @extend .opo-inner-y-side-lables;
  bottom: $y-padding;
}

.opo-inner-side-lables {
  width: min-content;
  padding: $x-padding;
  margin: auto;
}
</style>

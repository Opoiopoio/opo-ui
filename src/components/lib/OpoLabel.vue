<script setup lang="ts">
import { computed } from 'vue'
import { LabelType, LabelNesting } from '@/types'
import { labelPropsValidator } from '@/utils'

defineProps<{ text: string }>()

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
</script>

<template>
  <span>{{ text }}</span>
</template>

<script setup lang="ts">
import { LabelNesting, LabelType } from '@/types'
import { Form, YupSchema } from 'vee-validate'
import { provide } from 'vue'

const props = defineProps<{
  validationSchema: YupSchema
  labelType?: LabelType
  labelNesting?: LabelNesting
}>()

provide('labelType', props.labelType)
provide('labelNesting', props.labelNesting)
</script>

<template>
  <Form class="opo-form" :validation-schema="validationSchema">
    <slot />
  </Form>
</template>

<style scoped>
.opo-form {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>

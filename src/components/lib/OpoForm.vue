<script setup lang="ts">
import { LabelType } from '@/types'
import { Form, YupSchema } from 'vee-validate'
import { provide } from 'vue'

const props = defineProps<{
  validationSchema: YupSchema
  labelType?: LabelType
}>()

provide('labelType', props.labelType)
</script>

<template>
  <Form :validation-schema>
    <slot />
  </Form>
</template>

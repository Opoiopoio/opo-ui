import { Meta, StoryObj } from '@storybook/vue3'
import OpoForm from './OpoForm.vue'
import { labelTypes, labelNestings, LabelNesting } from '../../../types'
import * as yup from 'yup'

const meta = {
  title: 'Example/Button',
  component: OpoForm,
  tags: ['autodocs'],
  argTypes: {
    validationSchema: { control: 'object' },
    labelType: { control: 'select', options: Object.values(labelTypes) },
    labelNesting: {
      control: 'select',
      options: Object.keys(labelNestings) as LabelNesting[],
    },
  },
} satisfies Meta<typeof OpoForm>

export default meta
type Story = StoryObj<typeof meta>

export const InnerTop: Story = {
  args: {
    validationSchema: yup.object({
      login: yup.string().required().min(5),
    }),
    labelType: 'top',
    labelNesting: 'inner',
  },
}

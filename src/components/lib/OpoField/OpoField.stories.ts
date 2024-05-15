import { Meta, StoryObj } from '@storybook/vue3'
import OpoField from './OpoField.vue'
import {
  labelTypes,
  labelNestings,
  errorMessageTypes,
  LabelNesting,
  ErrorMessageType,
} from '../../../types'
import '../../../styles/blue.theme.scss'
import '../../../style.scss'

const meta = {
  title: 'UI/Field',
  component: OpoField,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    label: { control: 'text' },
    labelType: { control: 'select', options: Object.values(labelTypes) },
    labelNesting: {
      control: 'select',
      options: Object.keys(labelNestings) as LabelNesting[],
    },
    errorMessageType: {
      control: 'select',
      options: Object.keys(errorMessageTypes) as ErrorMessageType[],
    },
  },
  args: {
    name: 'label',
    label: 'Label',
    labelNesting: 'inner',
  },
} satisfies Meta<typeof OpoField>

export default meta

type Story = StoryObj<typeof meta>

export const InnerTop: Story = {
  args: {
    labelType: 'top',
  },
}

export const InnerTopLeft: Story = {
  args: {
    labelType: 'top-left',
  },
}

export const InnerTopRight: Story = {
  args: {
    labelType: 'top-right',
  },
}

export const InnerBottom: Story = {
  args: {
    labelType: 'bottom',
  },
}

export const InnerBottomLeft: Story = {
  args: {
    labelType: 'bottom-left',
  },
}

export const InnerBottomRight: Story = {
  args: {
    labelType: 'bottom-right',
  },
}

export const InnerLeft: Story = {
  args: {
    labelType: 'left',
  },
}

export const InnerRight: Story = {
  args: {
    labelType: 'right',
  },
}

export const InnerHidden: Story = {
  args: {
    labelType: 'hidden',
  },
}

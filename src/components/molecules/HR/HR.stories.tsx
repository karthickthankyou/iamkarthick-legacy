import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import HR from './HR'

export default {
  title: 'src/components/molecules/HR',
  component: HR,
} as ComponentMeta<typeof HR>

const Template: ComponentStory<typeof HR> = (args) => <HR {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}

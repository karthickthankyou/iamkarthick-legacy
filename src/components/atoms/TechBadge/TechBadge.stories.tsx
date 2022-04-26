import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import TechBadge from './TechBadge'

export default {
  title: 'src/components/atoms/TechBadge',
  component: TechBadge,
} as ComponentMeta<typeof TechBadge>

const Template: ComponentStory<typeof TechBadge> = (args) => (
  <TechBadge {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}

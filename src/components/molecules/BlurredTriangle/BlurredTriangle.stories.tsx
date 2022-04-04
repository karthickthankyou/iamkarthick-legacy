import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BlurredTriangle from './BlurredTriangle'

export default {
  title: 'src/components/molecules/BlurredTriangle',
  component: BlurredTriangle,
} as ComponentMeta<typeof BlurredTriangle>

const Template: ComponentStory<typeof BlurredTriangle> = (args) => (
  <BlurredTriangle {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SlideIndicator from './SlideIndicator'

export default {
  title: 'src/components/molecules/SlideIndicator',
  component: SlideIndicator,
} as ComponentMeta<typeof SlideIndicator>

const Template: ComponentStory<typeof SlideIndicator> = (args) => (
  <SlideIndicator {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}

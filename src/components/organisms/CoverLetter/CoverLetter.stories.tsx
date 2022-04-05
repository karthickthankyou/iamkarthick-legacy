import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import CoverLetter from './CoverLetter'

export default {
  title: 'src/components/organisms/CoverLetter',
  component: CoverLetter,
} as ComponentMeta<typeof CoverLetter>

const Template: ComponentStory<typeof CoverLetter> = (args) => <CoverLetter {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}

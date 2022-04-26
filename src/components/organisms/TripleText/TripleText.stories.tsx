import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import TripleText from './TripleText'

export default {
  title: 'src/components/organisms/TripleText',
  component: TripleText,
} as ComponentMeta<typeof TripleText>

const Template: ComponentStory<typeof TripleText> = (args) => (
  <TripleText {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}

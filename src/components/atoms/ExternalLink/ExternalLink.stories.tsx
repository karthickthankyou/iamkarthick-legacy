import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ExternalLink from './ExternalLink'

export default {
  title: 'src/components/atoms/ExternalLink',
  component: ExternalLink,
} as ComponentMeta<typeof ExternalLink>

const Template: ComponentStory<typeof ExternalLink> = (args) => (
  <ExternalLink {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}

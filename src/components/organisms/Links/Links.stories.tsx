import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Links from './Links'

export default {
  title: 'src/components/organisms/Links',
  component: Links,
} as ComponentMeta<typeof Links>

const Template: ComponentStory<typeof Links> = (args) => <Links {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}

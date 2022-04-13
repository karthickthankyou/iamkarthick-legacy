import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Cursor from './Cursor'

export default {
  title: 'src/components/atoms/Cursor',
  component: Cursor,
} as ComponentMeta<typeof Cursor>

const Template: ComponentStory<typeof Cursor> = (args) => <Cursor {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}

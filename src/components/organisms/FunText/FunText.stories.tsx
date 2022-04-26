import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import FunText from './FunText'

export default {
  title: 'src/components/organisms/FunText',
  component: FunText,
} as ComponentMeta<typeof FunText>

const Template: ComponentStory<typeof FunText> = () => <FunText />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Hero from './Hero'

export default {
  title: 'src/components/organisms/Hero',
  component: Hero,
} as ComponentMeta<typeof Hero>

const Template: ComponentStory<typeof Hero> = () => <Hero />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}

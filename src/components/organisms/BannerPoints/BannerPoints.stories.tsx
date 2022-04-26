import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BannerPoints from './BannerPoints'

export default {
  title: 'src/components/organisms/BannerPoints',
  component: BannerPoints,
} as ComponentMeta<typeof BannerPoints>

const Template: ComponentStory<typeof BannerPoints> = (args) => (
  <BannerPoints {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}

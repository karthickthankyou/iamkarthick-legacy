import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PortfolioBanner from './PortfolioBanner'

export default {
  title: 'src/components/organisms/PortfolioBanner',
  component: PortfolioBanner,
} as ComponentMeta<typeof PortfolioBanner>

const Template: ComponentStory<typeof PortfolioBanner> = () => (
  <PortfolioBanner />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PortfolioProjectSection from './PortfolioProjectSection'

export default {
  title: 'src/components/organisms/PortfolioProjectSection',
  component: PortfolioProjectSection,
} as ComponentMeta<typeof PortfolioProjectSection>

const Template: ComponentStory<typeof PortfolioProjectSection> = (args) => (
  <PortfolioProjectSection {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}

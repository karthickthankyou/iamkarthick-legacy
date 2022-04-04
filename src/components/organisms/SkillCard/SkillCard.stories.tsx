import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SkillCard from './SkillCard'

export default {
  title: 'src/components/organisms/SkillCard',
  component: SkillCard,
} as ComponentMeta<typeof SkillCard>

const Template: ComponentStory<typeof SkillCard> = (args) => <SkillCard {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}

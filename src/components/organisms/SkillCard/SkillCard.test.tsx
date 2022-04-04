import { mount } from '@cypress/react'
import SkillCard from './SkillCard'

describe('SkillCard Component', () => {
  it('SkillCard renders', () => {
    mount(<SkillCard />)
  })
})

import { mount } from '@cypress/react'
import TechBadge from './TechBadge'

describe('TechBadge Component', () => {
  it('TechBadge renders', () => {
    mount(<TechBadge text='Sample' />)
  })
})

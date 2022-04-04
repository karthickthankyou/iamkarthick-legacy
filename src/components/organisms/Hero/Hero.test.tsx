import { mount } from '@cypress/react'
import Hero from './Hero'

describe('Hero Component', () => {
  it('Hero renders', () => {
    mount(<Hero />)
  })
})

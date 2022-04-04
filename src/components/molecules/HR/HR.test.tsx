import { mount } from '@cypress/react'
import HR from './HR'

describe('HR Component', () => {
  it('HR renders', () => {
    mount(<HR />)
  })
})

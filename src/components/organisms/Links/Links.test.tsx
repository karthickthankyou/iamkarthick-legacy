import { mount } from '@cypress/react'
import Links from './Links'

describe('Links Component', () => {
  it('Links renders', () => {
    mount(<Links />)
  })
})

import { mount } from '@cypress/react'
import CoverLetter from './CoverLetter'

describe('CoverLetter Component', () => {
  it('CoverLetter renders', () => {
    mount(<CoverLetter />)
  })
})

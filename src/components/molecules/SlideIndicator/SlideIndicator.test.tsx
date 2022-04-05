import { mount } from '@cypress/react'
import SlideIndicator from './SlideIndicator'

describe('SlideIndicator Component', () => {
  it('SlideIndicator renders', () => {
    mount(<SlideIndicator />)
  })
})

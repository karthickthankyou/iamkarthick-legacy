import { mount } from '@cypress/react'
import BlurredTriangle from './BlurredTriangle'

describe('BlurredTriangle Component', () => {
  it('BlurredTriangle renders', () => {
    mount(<BlurredTriangle />)
  })
})

import { mount } from '@cypress/react'
import FunText from './FunText'

describe('FunText Component', () => {
  it('FunText renders', () => {
    mount(<FunText />)
  })
})

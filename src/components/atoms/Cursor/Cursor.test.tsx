import { mount } from '@cypress/react'
import Cursor from './Cursor'

describe('Cursor Component', () => {
  it('Cursor renders', () => {
    mount(<Cursor />)
  })
})

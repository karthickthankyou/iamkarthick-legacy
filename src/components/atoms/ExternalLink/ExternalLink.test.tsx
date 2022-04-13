import { mount } from '@cypress/react'
import ExternalLink from './ExternalLink'

describe('ExternalLink Component', () => {
  it('ExternalLink renders', () => {
    mount(<ExternalLink />)
  })
})

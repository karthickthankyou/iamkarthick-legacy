import { mount } from '@cypress/react'
import PortfolioBanner from './PortfolioBanner'

describe('PortfolioBanner Component', () => {
  it('PortfolioBanner renders', () => {
    mount(<PortfolioBanner />)
  })
})

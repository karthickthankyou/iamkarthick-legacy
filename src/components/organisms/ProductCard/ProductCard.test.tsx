import { mount } from '@cypress/react'
import ProductCard from './ProductCard'

describe('ProductCard Component', () => {
  it('ProductCard renders', () => {
    mount(<ProductCard />)
  })
})

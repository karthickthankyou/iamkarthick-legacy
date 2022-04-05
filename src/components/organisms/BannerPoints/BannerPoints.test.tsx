import { mount } from '@cypress/react'
import BannerPoints from './BannerPoints'

describe('BannerPoints Component', () => {
  it('BannerPoints renders', () => {
    mount(<BannerPoints />)
  })
})

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Image from './Image'

export default {
  title: 'atoms/Image',
  component: Image,
} as ComponentMeta<typeof Image>

const Template: ComponentStory<typeof Image> = ({ src }) => (
  <Image alt='' src={src} layout='fill' className='h-64' />
)

export const Primary = Template.bind({})
Primary.args = {
  src: 'sdf/sdf.jpg',
}
Primary.parameters = {}

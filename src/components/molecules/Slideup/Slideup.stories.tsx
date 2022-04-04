import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Slideup from './Slideup'

export default {
  title: 'molecules/Slideup',
  component: Slideup,
} as ComponentMeta<typeof Slideup>

const Template: ComponentStory<typeof Slideup> = (args) => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button type='button' onClick={() => setOpen((state) => !state)}>
        toggle
      </button>
      <Slideup {...args} show={open} />
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  show: false,
}
Primary.parameters = {}

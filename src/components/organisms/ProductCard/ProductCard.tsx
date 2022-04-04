import React from 'react'
import Image from 'src/components/atoms/Image'
import { Children } from 'src/types'

export interface IProductCardProps {
  src: string
  title: string

  children: Children
}

const ProductCard = React.forwardRef(
  ({ src, title, children }: IProductCardProps, ref) => (
    <div className='grid h-screen grid-cols-2 gap-6 py-6' ref={ref}>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <div className='flex gap-2 overflow-x-scroll -skew-x-3 bg-white'>
        <div className='relative flex-shrink-0'>
          <img
            src='https://res.cloudinary.com/thankyou/image/upload/v1649076995/iamkarthick/46aP2QbqUqBqpx5c7Zikd2HFMqywJNqDeZVr22vYLLq3mmDMvC912rHdNBhAedaBaUAW5aF7NFVhWLBXM7zWakKcqK41_vb0mox.gif'
            alt='pic'
            className='object-cover h-full bg-fixed w-72 -z-10'
          />
          <div className='absolute bottom-0 w-full p-4 text-white bg-black/60'>
            <div className='skew-x-3'>
              <div className='text-3xl font-bold'>Hello</div>
              <div className='mt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                cupiditate asperiores pariatur!
              </div>
            </div>
          </div>
        </div>
        <div className='flex-shrink-0 '>
          <img
            src='https://res.cloudinary.com/thankyou/image/upload/v1649076995/iamkarthick/46aP2QbqUqBqpx5c7Zikd2HFMqywJNqDeZVr22vYLLq3mmDMvC912rHdNBhAedaBaUAW5aF7NFVhWLBXM7zWakKcqK41_vb0mox.gif'
            alt='pic'
            className='object-cover h-full w-72'
          />
        </div>
        <div className='flex-shrink-0 '>
          <img
            src='https://res.cloudinary.com/thankyou/image/upload/v1649076995/iamkarthick/46aP2QbqUqBqpx5c7Zikd2HFMqywJNqDeZVr22vYLLq3mmDMvC912rHdNBhAedaBaUAW5aF7NFVhWLBXM7zWakKcqK41_vb0mox.gif'
            alt='pic'
            className='object-cover h-full w-72'
          />
        </div>
      </div>
      <div className='-skew-x-3'>
        <div className='inline-block mt-2 text-5xl font-black bg-white-transparent'>
          {title}
        </div>
        <p className='bg-white-transparent'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          quibusdam ducimus corporis, architecto quasi dolorem quidem,
          repellendus non animi eos maiores nesciunt quae deleniti!
        </p>
        <p className='bg-white-transparent'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          quibusdam ducimus corporis, architecto quasi dolorem quidem,
          repellendus non animi eos maiores nesciunt quae deleniti!
        </p>
        <div className='mt-1 bg-white-transparent'>{children}</div>
      </div>
    </div>
  ),
)
ProductCard.displayName = 'ProductCard'
export default ProductCard

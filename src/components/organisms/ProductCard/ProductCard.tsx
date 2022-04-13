import React from 'react'
import Image from 'src/components/atoms/Image'
import SlideIndicator from 'src/components/molecules/SlideIndicator/SlideIndicator'
import { Children } from 'src/types'

export interface IProductCardProps {
  src: string
  title: string

  children: Children
}

const ProductCard = React.forwardRef<HTMLDivElement, IProductCardProps>(
  ({ src, title, children }, ref) => (
    <div className='flex flex-col-reverse gap-6 py-12 md:flex-row' ref={ref}>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <div>
        <div className='flex justify-end mb-3'>
          <SlideIndicator direction='left' />
        </div>
        <div className='flex h-full gap-2 pb-3 overflow-x-scroll bg-white md:-skew-x-3 overscroll-x-none thin-scrollbar snap-proximity'>
          <div className='relative flex-shrink-0 h-screen80 '>
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video
              autoPlay
              controls
              src='https://res.cloudinary.com/thankyou/video/upload/v1649852674/IKEA/ikea-home_ktr1qk.mov'
              className='object-cover h-full bg-fixed w-96 -z-10'
            />
            <div className='absolute bottom-0 w-full p-4 text-white bg-black/60'>
              <div className='md:skew-x-3'>
                <div className='text-3xl font-bold'>Hello</div>
                <div className='mt-2'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta cupiditate asperiores pariatur!
                </div>
              </div>
            </div>
          </div>
          <div className='flex-shrink-0 h-screen80 '>
            <img
              src='https://res.cloudinary.com/thankyou/image/upload/v1649076995/iamkarthick/46aP2QbqUqBqpx5c7Zikd2HFMqywJNqDeZVr22vYLLq3mmDMvC912rHdNBhAedaBaUAW5aF7NFVhWLBXM7zWakKcqK41_vb0mox.gif'
              alt='pic'
              className='object-cover h-full w-96'
            />
          </div>
          <div className='flex-shrink-0 h-screen80 '>
            <img
              src='https://res.cloudinary.com/thankyou/image/upload/v1649076995/iamkarthick/46aP2QbqUqBqpx5c7Zikd2HFMqywJNqDeZVr22vYLLq3mmDMvC912rHdNBhAedaBaUAW5aF7NFVhWLBXM7zWakKcqK41_vb0mox.gif'
              alt='pic'
              className='object-cover h-full w-96'
            />
          </div>
        </div>
      </div>
      <div className='md:-skew-x-3'>
        <div className='inline-block mt-2 text-5xl font-black '>{title}</div>
        <div className='mt-6 '>{children}</div>
      </div>
    </div>
  ),
)
ProductCard.displayName = 'ProductCard'
export default ProductCard

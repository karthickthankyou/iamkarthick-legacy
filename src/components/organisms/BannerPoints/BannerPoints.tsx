import React from 'react'
import StarIcon from '@heroicons/react/solid/StarIcon'
import { Children } from 'src/types'

export interface IBannerPointsProps {
  title: string
  description: string

  children: Children
}

export const Point = ({
  title,
  children,
}: {
  title: string
  children: Children
}) => (
  <div className='max-w-md space-y-1'>
    <div className='text-xl font-bold bg-white-transparent'>{title}</div>
    <div className='bg-white-transparent'>{children}</div>
  </div>
)
export const BulletPoint = ({ description }: { description: string }) => (
  <div className='flex items-center max-w-md'>
    <StarIcon className='flex-shrink-0 w-5 h-5 mr-2 fill-primary' />{' '}
    <li className='list-disc bg-white-transparent'>{description}</li>
  </div>
)

const BannerPoints = React.forwardRef<HTMLDivElement, IBannerPointsProps>(
  ({ title, description, children }, ref) => (
    <div className='min-h-screen py-12 space-y-6 ' ref={ref}>
      <div className='bg-white-transparent'>
        <div className='text-3xl font-bold text-luxury bg-white-transparent'>
          {title}
        </div>
      </div>
      <div className=' bg-white-transparent'>{description}</div>
      {children}
    </div>
  ),
)

BannerPoints.displayName = 'BannerPoints'

export default BannerPoints

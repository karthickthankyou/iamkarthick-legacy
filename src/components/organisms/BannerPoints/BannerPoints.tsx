import React from 'react'
import StarIcon from '@heroicons/react/solid/StarIcon'
import { Children } from 'src/types'

export interface IBannerPointsProps {
  title: string
  description?: string
  height?: 'min-h-screen' | 'min-h-50vh'
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
    <div className='text-xl font-bold '>{title}</div>
    <div className=''>{children}</div>
  </div>
)
export const BulletPoint = ({ description }: { description: string }) => (
  <div className='flex items-center max-w-md'>
    <li className='list-disc '>{description}</li>
  </div>
)

const BannerPoints = React.forwardRef<HTMLDivElement, IBannerPointsProps>(
  ({ title, description, children, height = 'min-h-screen' }, ref) => (
    <div className={`${height} py-12 space-y-6 `} ref={ref}>
      <div className=''>
        <div className='text-3xl font-bold text-luxury '>{title}</div>
      </div>
      <div className='text-xl'>{description}</div>
      {children}
    </div>
  ),
)

BannerPoints.displayName = 'BannerPoints'

export default BannerPoints

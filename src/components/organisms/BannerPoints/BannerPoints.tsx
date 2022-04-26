import React from 'react'
import StarIcon from '@heroicons/react/solid/StarIcon'
import { Children } from 'src/types'
import SlideIndicator from 'src/components/molecules/SlideIndicator/SlideIndicator'

export interface IBannerPointsProps {
  title: string
  description?: string
  height?: 'min-h-screen' | 'min-h-50vh'
  children: Children
}

export const Point = ({
  title,
  children,
  className,
}: {
  title: string
  children: Children
  className?: string
}) => (
  <div className={`max-w-md  ${className}`}>
    <div className='text-2xl font-bold '>{title}</div>
    <div className='mt-2 space-y-2 text-sm'>{children}</div>
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
        <div className='text-3xl font-bold text-primary '>{title}</div>
      </div>
      <div className='text-xl'>{description}</div>
      {children}
      <div className='flex justify-end'>
        <SlideIndicator direction='left' />
      </div>
    </div>
  ),
)

BannerPoints.displayName = 'BannerPoints'

export default BannerPoints

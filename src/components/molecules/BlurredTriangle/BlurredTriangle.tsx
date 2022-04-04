/* eslint-disable react/jsx-props-no-spreading */
export type IBlurredTriangleProps = React.SVGProps<SVGSVGElement>

const BlurredTriangle = ({ className, ...props }: IBlurredTriangleProps) => (
  <svg height='500' width='500' className={` ${className}`} {...props}>
    <polygon
      points='250,60 100,400 400,400'
      className='triangle'
      filter='url(#f1)'
    />
    <defs>
      <filter id='f1'>
        <feGaussianBlur in='SourceGraphic' stdDeviation='20' />
      </filter>
    </defs>
  </svg>
)

export default BlurredTriangle

export interface ISlideIndicatorProps {
  direction: 'up' | 'down' | 'left' | 'right'
  className?: string
}

const directionClass = {
  up: 'animate-slide-up-100',
  down: 'animate-slide-down-100',
  left: 'animate-slide-left-100',
  right: 'animate-slide-right-100',
}
const SlideIndicator = ({ direction, className }: ISlideIndicatorProps) => (
  <div
    className={`w-3 h-3 rounded-full bg-primary ${className}  ${directionClass[direction]}`}
  />
)

export default SlideIndicator

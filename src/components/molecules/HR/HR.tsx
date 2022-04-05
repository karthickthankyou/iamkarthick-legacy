export interface IHRProps {
  className?: string
  variant?: 'primary' | 'black'
}

const HR = ({ className, variant = 'black' }: IHRProps) => (
  <div
    className={`w-4 h-1 px-5 ${variant === 'primary' && 'bg-primary'} ${
      variant === 'black' && 'bg-black'
    } ${className}`}
  />
)

export default HR

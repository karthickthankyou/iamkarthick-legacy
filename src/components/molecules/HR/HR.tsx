export interface IHRProps {
  className?: string
}

const HR = ({ className }: IHRProps) => (
  <div className={`w-4 h-1 px-5 bg-black ${className}`} />
)

export default HR

export interface ITechBadgeProps {
  text: string
}

const TechBadge = ({ text }: ITechBadgeProps) => (
  <div className='py-2 pr-2 group '>
    <div className='py-2 transition-all group-hover:shadow-xl group-hover:-translate-y-1 group-hover:underline underline-offset-8 bg-white-transparent'>
      {text}
    </div>
  </div>
)

export default TechBadge

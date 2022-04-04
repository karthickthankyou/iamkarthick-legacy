import { Children } from 'src/types'

export interface ISkillCardProps {
  title: string
  experience: number
  children: Children
}

const SkillCard = ({ title, children, experience }: ISkillCardProps) => (
  <div>
    <div className='inline-block text-4xl font-black bg-white-transparent'>
      {title}
    </div>
    <div className='bg-white-transparent'>{experience} years</div>
    <div className='space-y-4 text-lg bg-white-transparent'>{children}</div>
  </div>
)

export default SkillCard

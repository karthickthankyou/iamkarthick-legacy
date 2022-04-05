import HR from 'src/components/molecules/HR/HR'
import { Children } from 'src/types'

export interface ISkillCardProps {
  title: string
  experience?: number
  children: Children
  type?: 'title' | 'subtitle'
}

//  className={`${type === 'title' && 'break-before-column'}`}

const SkillCard = ({
  title,
  children,
  experience,
  type = 'subtitle',
}: ISkillCardProps) => (
  <>
    {type === 'title' && (
      <div className={`${type === 'title' && 'break-before-column'}`} />
    )}
    <div className='break-inside-avoid'>
      <div className='bg-white-transparent '>
        <div
          className={`inline-block ${
            type === 'title' && 'text-5xl text-luxury'
          } ${
            type === 'subtitle' && 'text-2xl'
          } font-black bg-white-transparent`}
        >
          {title}
        </div>
      </div>
      {experience && (
        <div className='bg-white-transparent'>
          {experience} {experience === 1 ? 'year' : 'years'}
        </div>
      )}
      <div className='space-y-4 text-lg bg-white-transparent'>{children}</div>
    </div>
  </>
)

export default SkillCard

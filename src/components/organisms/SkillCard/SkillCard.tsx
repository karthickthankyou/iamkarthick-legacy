import { Children } from 'src/types'

export interface ISkillCardProps {
  title: string
  experience?: number
  children?: Children
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

    <div>
      <div className='flex items-baseline gap-3'>
        <div
          className={`inline-block ${
            type === 'title' && 'text-5xl text-luxury'
          } ${type === 'subtitle' && 'text-2xl'} font-black  `}
        >
          {title}
        </div>
        {experience && (
          <div className='inline-block'>
            {experience} {experience === 1 ? 'year' : 'years'}
          </div>
        )}
      </div>
      <div className='mt-4 space-y-4 text-lg'>{children}</div>
    </div>
  </>
)

export default SkillCard

export interface ITripleTextProps {
  text: string
  className?: string
}

const TripleText = ({ text, className }: ITripleTextProps) => {
  if (text === ' ') return <div className='w-4' />
  return (
    <div className={`relative ${className}`}>
      {/* <Image src='/k.png' alt='logo' layout='fill' /> */}

      <div className='absolute font-black text-black origin-left -skew-y-12 text-7xl '>
        {text}
      </div>
      <div className='absolute font-black origin-left -skew-y-6 text-7xl text-primary-700'>
        {text}
      </div>
      <div className='absolute font-black origin-left text-7xl text-primary'>
        {text}
      </div>
      <div className='font-black origin-left opacity-0 text-7xl text-primary'>
        {text}
      </div>
    </div>
  )
}

export default TripleText

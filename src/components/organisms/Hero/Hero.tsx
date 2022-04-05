import BlurredCirle from 'src/components/molecules/BlurredCirle/BlurredCirle'
import OverlapSpace from 'src/components/molecules/OverlapSpace/OverlapSpace'
import SlideIndicator from 'src/components/molecules/SlideIndicator'
import { useStore } from 'src/pages/_app'
import Links from '../Links'

export interface IHeroProps {
  scrollToElegantUi: () => void
  scrollToRobustArch: () => void
}

const Ring = ({ className, radius }: { className: string; radius: number }) => (
  <div className='absolute -translate-x-1/2 -translate-y-1/2 -z-20 left-full top-1/2 '>
    <BlurredCirle className={` ${className}`} radius={radius} />
  </div>
)
const RingR = ({
  className,
  radius,
}: {
  className: string
  radius: number
}) => (
  <div className='absolute -translate-x-1/2 -translate-y-1/2 -z-20 right-full top-1/2 '>
    <BlurredCirle className={` ${className}`} radius={radius} />
  </div>
)
const RingBL = ({
  className,
  radius,
}: {
  className: string
  radius: number
}) => (
  <div className='absolute right-0 -translate-x-1/2 -translate-y-1/2 -z-20 top-full '>
    <BlurredCirle className={` ${className}`} radius={radius} />
  </div>
)
const RingTL = ({
  className,
  radius,
}: {
  className: string
  radius: number
}) => (
  <div className='absolute top-0 -translate-x-1/2 left-full -z-20 '>
    <BlurredCirle className={` ${className}`} radius={radius} />
  </div>
)

const Hero = ({ scrollToElegantUi, scrollToRobustArch }: IHeroProps) => {
  const { show } = useStore((state) => state)
  return (
    <OverlapSpace className='relative h-screen overflow-hidden'>
      <OverlapSpace.Child className='flex flex-col items-start justify-center gap-6 sm:flex-row sm:justify-start sm:items-center'>
        <div className='relative sm:h-full h-72 w-72'>
          <img
            alt='Karthick Ragavendran'
            width={256}
            height={256}
            className='object-cover w-full h-full '
            src='https://res.cloudinary.com/thankyou/image/upload/v1649073609/iamkarthick/karthick_vejq34.jpg'
          />
        </div>
        <div>
          <div className='inline-block pb-2 text-5xl font-black tracking-tight text-luxury md:text-7xl '>
            Hello, <br /> I&apos; m <span className=''>Karthick</span>{' '}
            Ragavendran
          </div>
          <Links />
          <div className='max-w-md mt-6 text-lg'>
            I create React applications with{' '}
            <button
              type='button'
              className='font-medium underline underline-offset-4 '
              onClick={() => scrollToElegantUi()}
            >
              <strong>elegant UI</strong>
            </button>{' '}
            and{' '}
            <button
              className='font-medium underline underline-offset-4 '
              type='button'
              onClick={() => scrollToRobustArch()}
            >
              <strong>robust architecture</strong>
            </button>
            .
          </div>
        </div>
      </OverlapSpace.Child>
      <OverlapSpace.Child className='flex items-end justify-center mb-3 -z-30'>
        <SlideIndicator direction='up' className='bottom-0 mt-auto left-1/2' />
      </OverlapSpace.Child>
      <OverlapSpace.Child className='-z-40'>
        <div className='fixed top-0 w-full h-full overflow-hidden translate-x-1/2 right-1/2 bg-gradient-to-r from-white to-gray-50 -z-40' />
      </OverlapSpace.Child>
      <OverlapSpace.Child
        className={`relative -z-30  ${show ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className='container fixed top-0 w-full h-full mx-auto overflow-hidden '>
          <Ring
            className='stroke-10 animate-breathe-20 stroke-white fill-transparent '
            radius={1200}
          />
          <Ring
            className='stroke-10 stroke-white fill-transparent animate-breathe-30 '
            radius={1000}
          />
          <Ring
            className='stroke-10 stroke-white animate-breathe-40 fill-transparent -z-30'
            radius={800}
          />
          <Ring
            className='stroke-10 stroke-white animate-breathe-50 fill-transparent -z-20'
            radius={600}
          />
          <Ring
            className='stroke-10 stroke-white animate-breathe-60 fill-transparent -z-20'
            radius={400}
          />
          <Ring
            className='stroke-10 stroke-white animate-breathe-70 fill-transparent -z-20'
            radius={200}
          />
          <Ring
            className='stroke-10 stroke-white animate-breathe-80 fill-transparent -z-20'
            radius={100}
          />
          <Ring className=' fill-white -z-20' radius={40} />
        </div>
      </OverlapSpace.Child>
    </OverlapSpace>
  )
}

export default Hero

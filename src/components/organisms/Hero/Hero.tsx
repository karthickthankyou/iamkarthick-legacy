import ArrowDownIcon from '@heroicons/react/solid/ArrowDownIcon'
import { useState } from 'react'
import Button from 'src/components/atoms/Button/Button'
import BlurredCirle from 'src/components/molecules/BlurredCirle/BlurredCirle'
import BlurredTriangle from 'src/components/molecules/BlurredTriangle/BlurredTriangle'
import OverlapSpace from 'src/components/molecules/OverlapSpace/OverlapSpace'
import Image from 'src/components/atoms/Image'
import Links from '../Links'
import SlideIndicator from 'src/components/molecules/SlideIndicator'

export interface IHeroProps {
  scrollToElegantUi: () => void
  scrollToRobustArch: () => void
}

const Ring = ({ className, radius }: { className: string; radius: number }) => (
  <div className='absolute -translate-x-1/2 -translate-y-1/2 -z-20 left-full top-1/2 '>
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
  const [showWave, setshowWave] = useState(true)
  return (
    <OverlapSpace className='relative h-screen overflow-hidden'>
      <OverlapSpace.Child className='flex items-end justify-center mb-3 '>
        <SlideIndicator direction='up' className='bottom-0 mt-auto left-1/2' />
      </OverlapSpace.Child>
      <OverlapSpace.Child className='flex items-start justify-end'>
        <button
          type='button'
          onClick={() => setshowWave((state) => !state)}
          className='z-30'
        >
          Turn that thing off!
        </button>
      </OverlapSpace.Child>
      <OverlapSpace.Child className='z-10 flex flex-col items-start justify-center gap-6 sm:flex-row sm:justify-start sm:items-center'>
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
          <div className='mt-2 '>
            I create React applications with{' '}
            <button
              type='button'
              className='font-medium underline underline-offset-4 text-primary'
              onClick={() => scrollToElegantUi()}
            >
              <strong>elegant UI</strong>
            </button>{' '}
            and{' '}
            <button
              className='font-medium underline underline-offset-4 text-primary'
              type='button'
              onClick={() => scrollToRobustArch()}
            >
              <strong>robust architecture</strong>
            </button>
            .
          </div>
        </div>
      </OverlapSpace.Child>
      <OverlapSpace.Child className='-z-40'>
        <div className='fixed top-0 w-full h-full overflow-hidden translate-x-1/2 right-1/2 bg-gradient-to-r from-white to-gray-50 -z-40' />
      </OverlapSpace.Child>
      <OverlapSpace.Child
        className={`relative -z-30  ${showWave ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className='container fixed top-0 w-full h-full mx-auto overflow-hidden '>
          <Ring
            className='stroke-10 animate-breathe-20 stroke-white/10 fill-transparent '
            radius={1200}
          />
          <Ring
            className='stroke-10 stroke-white/20 fill-transparent animate-breathe-30 '
            radius={1000}
          />
          <Ring
            className='stroke-10 stroke-white/30 animate-breathe-40 fill-transparent -z-30'
            radius={800}
          />
          <Ring
            className='stroke-10 stroke-white/40 animate-breathe-50 fill-transparent -z-20'
            radius={600}
          />
          <Ring
            className='stroke-10 stroke-white/50 animate-breathe-60 fill-transparent -z-20'
            radius={400}
          />
          <Ring
            className='stroke-10 stroke-white/60 animate-breathe-70 fill-transparent -z-20'
            radius={200}
          />
          <Ring
            className='stroke-10 stroke-white/70 animate-breathe-80 fill-transparent -z-20'
            radius={100}
          />
          <Ring className=' fill-white -z-20' radius={40} />
        </div>
      </OverlapSpace.Child>
    </OverlapSpace>
  )
}

export default Hero

// <OverlapSpace.Child
//         className={`relative -z-30  ${showWave ? 'opacity-100' : 'opacity-0'}`}
//       >
//         <div className='container fixed top-0 w-full h-full mx-auto overflow-hidden '>
//           <RingBL
//             className='stroke-10 animate-breathe-20 stroke-white/10 fill-transparent '
//             radius={1200}
//           />
//           <RingBL
//             className='stroke-10 stroke-white/20 fill-transparent animate-breathe-30 '
//             radius={1000}
//           />
//           <RingBL
//             className='stroke-10 stroke-white/30 animate-breathe-40 fill-transparent -z-30'
//             radius={800}
//           />
//           <RingBL
//             className='stroke-10 stroke-white/40 animate-breathe-50 fill-transparent -z-20'
//             radius={600}
//           />
//           <RingBL
//             className='stroke-10 stroke-white/50 animate-breathe-60 fill-transparent -z-20'
//             radius={400}
//           />
//           <RingBL
//             className='stroke-10 stroke-white/60 animate-breathe-70 fill-transparent -z-20'
//             radius={200}
//           />
//           <RingBL
//             className='stroke-10 stroke-white/70 animate-breathe-80 fill-transparent -z-20'
//             radius={100}
//           />
//           <RingBL className=' fill-white -z-20' radius={40} />
//         </div>
//       </OverlapSpace.Child>
//       <OverlapSpace.Child
//         className={`relative -z-30  ${showWave ? 'opacity-100' : 'opacity-0'}`}
//       >
//         <div className='container fixed top-0 w-full h-full mx-auto overflow-hidden '>
//           <RingTL
//             className='stroke-10 animate-breathe-20 stroke-white/10 fill-transparent '
//             radius={1200}
//           />
//           <RingTL
//             className='stroke-10 stroke-white/20 fill-transparent animate-breathe-30 '
//             radius={1000}
//           />
//           <RingTL
//             className='stroke-10 stroke-white/30 animate-breathe-40 fill-transparent -z-30'
//             radius={800}
//           />
//           <RingTL
//             className='stroke-10 stroke-white/40 animate-breathe-50 fill-transparent -z-20'
//             radius={600}
//           />
//           <RingTL
//             className='stroke-10 stroke-white/50 animate-breathe-60 fill-transparent -z-20'
//             radius={400}
//           />
//           <RingTL
//             className='stroke-10 stroke-white/60 animate-breathe-70 fill-transparent -z-20'
//             radius={200}
//           />
//           <RingTL
//             className='stroke-10 stroke-white/70 animate-breathe-80 fill-transparent -z-20'
//             radius={100}
//           />
//           <RingTL className=' fill-white -z-20' radius={40} />
//         </div>
//       </OverlapSpace.Child>

import ArrowDownIcon from '@heroicons/react/solid/ArrowDownIcon'
import { useState } from 'react'
import Button from 'src/components/atoms/Button/Button'
import BlurredCirle from 'src/components/molecules/BlurredCirle/BlurredCirle'
import BlurredTriangle from 'src/components/molecules/BlurredTriangle/BlurredTriangle'
import OverlapSpace from 'src/components/molecules/OverlapSpace/OverlapSpace'

export interface IHeroProps {}

const Hero = () => {
  const [showWave, setshowWave] = useState(true)
  return (
    <OverlapSpace className='h-screen overflow-hidden'>
      <OverlapSpace.Child className='flex items-start justify-end'>
        <button
          type='button'
          onClick={() => setshowWave((state) => !state)}
          className='z-30'
        >
          Turn that thing off!
        </button>
      </OverlapSpace.Child>
      <OverlapSpace.Child className='flex flex-col items-start justify-center'>
        <div className='text-5xl font-black tracking-tight md:text-7xl'>
          Hello, <br /> I&apos; m <span className='text-primary'>Karthick</span>{' '}
          Ragavendran
        </div>
        <div className='mt-2 bg-white-transparent'>
          Elegant composable <em>UI</em> <span className='text-primary'>&</span>{' '}
          Robust <em>architecture</em>.
        </div>
      </OverlapSpace.Child>
      <OverlapSpace.Child
        className={`fixed rotate-90 -z-20 ${
          showWave ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className='absolute translate-x-1/2 -translate-y-1/2 top-full right-1/2'>
          <BlurredCirle
            className='stroke stroke-primary fill-primary animate-pulse'
            radius={30}
          />
        </div>
        <div className='absolute translate-x-1/2 -translate-y-1/2 top-full right-1/2'>
          <BlurredCirle
            className='stroke stroke-primary fill-transparent animate-breathe-80'
            radius={100}
          />
        </div>
        <div className='absolute translate-x-1/2 -translate-y-1/2 top-full right-1/2'>
          <BlurredCirle
            className='stroke stroke-primary-600 fill-transparent animate-breathe-70'
            radius={200}
          />
        </div>
        <div className='absolute translate-x-1/2 -translate-y-1/2 top-full right-1/2'>
          <BlurredCirle
            className='stroke stroke-primary-700 fill-transparent animate-breathe-60'
            radius={400}
          />
        </div>
        <div className='absolute translate-x-1/2 -translate-y-1/2 top-full right-1/2'>
          <BlurredCirle
            className='stroke stroke-primary-900 animate-breathe-50 fill-transparent '
            radius={600}
          />
        </div>
        <div className='absolute translate-x-1/2 -translate-y-1/2 top-full right-1/2'>
          <BlurredCirle
            className='stroke stroke-primary-800 animate-breathe-40 fill-transparent'
            radius={800}
          />
        </div>

        <div className='absolute translate-x-1/2 -translate-y-1/2 top-full right-1/2'>
          <BlurredCirle
            className='stroke stroke-black fill-transparent animate-breathe-30'
            radius={1000}
          />
        </div>
        <div className='absolute translate-x-1/2 -translate-y-1/2 top-full right-1/2'>
          <BlurredCirle
            className='stroke animate-breathe-20 stroke-black fill-transparent'
            radius={1200}
          />
        </div>
      </OverlapSpace.Child>
    </OverlapSpace>
  )
}

export default Hero

import { useStore } from 'src/pages/_app'
import React from 'react'
import SlideIndicator from 'src/components/molecules/SlideIndicator/SlideIndicator'

export interface IPortfolioProjectSectionProps {
  children: React.ReactNode
  className?: string
}

export const ProjectVideo = ({ videoId }: { videoId: string }) => {
  const setHoverTargetType = useStore((state) => state.setHoverTargetType)
  const muted = useStore((state) => state.muted)
  return (
    <div
      className='h-full col-span-1 lg:col-span-2'
      onMouseEnter={() => setHoverTargetType('VIDEO')}
      onMouseLeave={() => setHoverTargetType('DEFAULT')}
    >
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <iframe
        title='.'
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${
          muted ? 1 : 0
        }`}
        allowFullScreen
        className='w-full border-2 border-white rounded-b-sm shadow-lg h-96 lg:h-screen80 rounded-t-3xl'
        tabIndex={-1}
      />
    </div>
  )
}

export const ProjectText = ({
  title,
  links,
  techStack,
  className,
  right = true,
}: {
  title?: string
  techStack?: string[]
  links?: { text: string; url: string }[]
  className?: string
  right?: boolean
}) => {
  const rightClasses = right ? 'skew-y-3 origin-left' : '-skew-y-3 origin-right'
  return (
    <div
      className={`col-span-1 flex h-full flex-col overflow-x-scroll ease-in-expo duration-1000 bg-circuit transition-all  ${className} ${rightClasses}`}
    >
      <div className='flex-shrink-0 px-4 py-3 text-6xl font-black tracking-tighter text-white rounded-t-3xl bg-primary'>
        {title}
      </div>
      <div className='flex justify-end p-1'>
        <SlideIndicator direction='left' />
      </div>
      <div
        className='flex-grow overflow-x-scroll thin-scrollbar'
        style={{ columnWidth: '16rem' }}
      >
        <div className='flex flex-col gap-4 p-4'>
          {links?.map((item) => (
            <a
              target='_blank'
              key={item.text}
              href={item.url}
              className='text-3xl underline underline-offset-8'
              rel='noreferrer'
            >
              {item.text}
            </a>
          ))}
        </div>
        <div className='flex flex-col gap-2 p-4'>
          {links?.map((item) => (
            <a
              target='_blank'
              key={item.text}
              href={item.url}
              className='text-lg underline underline-offset-4'
              rel='noreferrer'
            >
              {item.text}
            </a>
          ))}
        </div>
        <div className='flex flex-col gap-2 p-4'>
          {links?.map((item) => (
            <a
              target='_blank'
              key={item.text}
              href={item.url}
              className='text-lg underline underline-offset-4'
              rel='noreferrer'
            >
              {item.text}
            </a>
          ))}
        </div>
        <div className='flex flex-col gap-2 p-4'>
          {links?.map((item) => (
            <a
              target='_blank'
              key={item.text}
              href={item.url}
              className='text-lg underline underline-offset-4'
              rel='noreferrer'
            >
              {item.text}
            </a>
          ))}
        </div>
        <div className='flex flex-col gap-2 p-4'>
          {links?.map((item) => (
            <a
              target='_blank'
              key={item.text}
              href={item.url}
              className='text-lg underline underline-offset-4'
              rel='noreferrer'
            >
              {item.text}
            </a>
          ))}
        </div>
        <div className='flex flex-col gap-2 p-4'>
          {links?.map((item) => (
            <a
              target='_blank'
              key={item.text}
              href={item.url}
              className='text-lg underline underline-offset-4'
              rel='noreferrer'
            >
              {item.text}
            </a>
          ))}
        </div>
        <div className='flex flex-col gap-2 p-4'>
          {links?.map((item) => (
            <a
              target='_blank'
              key={item.text}
              href={item.url}
              className='text-lg underline underline-offset-4'
              rel='noreferrer'
            >
              {item.text}
            </a>
          ))}
        </div>
        <div className='flex flex-col gap-2 p-4'>
          {links?.map((item) => (
            <a
              target='_blank'
              key={item.text}
              href={item.url}
              className='text-lg underline underline-offset-4'
              rel='noreferrer'
            >
              {item.text}
            </a>
          ))}
        </div>
        <div className='flex flex-wrap justify-end gap-2 p-4 mt-4 ml-4'>
          {techStack?.map((item) => (
            <div
              key={item}
              className='px-2 py-1 bg-white shadow-xl border-primary'
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const PortfolioProjectSection = ({
  children,
  className,
}: IPortfolioProjectSectionProps) => (
  <div
    className={`grid grid-cols-1 gap-4 lg:grid-cols-3 lg:h-screen80 ${className}`}
  >
    {children}
  </div>
)

export default PortfolioProjectSection

import PaperAirplaneIcon from '@heroicons/react/solid/PaperClipIcon'
import { useStore } from 'src/pages/_app'

export interface IExternalLinkProps {
  children: React.ReactNode
  href: string
}

const ExternalLink = ({ children, href }: IExternalLinkProps) => {
  const setHoverTargetType = useStore((state) => state.setHoverTargetType)
  return (
    <a
      target='_black'
      className='inline-flex items-start gap-1 text-sm leading-5 cursor-pointer group'
      href={href}
      onMouseEnter={() => setHoverTargetType('LINK')}
      onMouseLeave={() => setHoverTargetType('DEFAULT')}
    >
      <PaperAirplaneIcon className='flex-shrink-0 w-3 h-3 group-hover:animate-slide-up group-hover:fill-primary' />
      {children}
    </a>
  )
}

export default ExternalLink

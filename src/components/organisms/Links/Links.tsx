import { SiGithub } from '@react-icons/all-files/si/SiGithub'
import { SiLinkedin } from '@react-icons/all-files/si/SiLinkedin'
import { SiMedium } from '@react-icons/all-files/si/SiMedium'
import { SiSoundcloud } from '@react-icons/all-files/si/SiSoundcloud'
import { SiTwitter } from '@react-icons/all-files/si/SiTwitter'
import { SiNpm } from '@react-icons/all-files/si/SiNpm'
import { SiYoutube } from '@react-icons/all-files/si/SiYoutube'
import { FaMusic } from '@react-icons/all-files/fa/FaMusic'
import { SiDribbble } from '@react-icons/all-files/si/SiDribbble'
import Link from 'src/components/atoms/Link/Link'
import { SiKaggle } from '@react-icons/all-files/si/SiKaggle'
import { useStore } from 'src/pages/_app'

export interface ILinksProps {}
export interface IOneLinkProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  href: string
}

export const OneLink = ({ Icon, href }: IOneLinkProps) => {
  const setHoverTargetType = useStore((state) => state.setHoverTargetType)
  return (
    <a
      target='_blank'
      rel='noreferrer'
      href={href}
      className='p-0.5 group cursor-pointer'
      onMouseEnter={() => {
        setHoverTargetType('LINK')
      }}
      onMouseLeave={() => setHoverTargetType('DEFAULT')}
    >
      <Icon className='w-8 h-8 p-1.5 fill-black shadow-xl shadow-gray/10 bg-white ' />
    </a>
  )
}

const Links = () => (
  <div className='flex gap-3 mt-3'>
    <OneLink Icon={SiGithub} href='https://github.com/karthickthankyou' />
    <OneLink Icon={SiMedium} href='https://medium.com/@karthickragavendran' />
    <OneLink
      Icon={SiYoutube}
      href='https://www.youtube.com/channel/UC82M9uZCd7c7mM7-WEaWJlA'
    />
    <OneLink Icon={SiNpm} href='https://www.npmjs.com/~iamkarthick' />
    <OneLink
      Icon={SiLinkedin}
      href='https://www.linkedin.com/in/iamkarthickr/'
    />
    <OneLink Icon={SiTwitter} href='https://twitter.com/karthicthankyou' />
    <OneLink
      Icon={SiSoundcloud}
      href='https://soundcloud.com/search?q=karthick%20ragavendran'
    />
    <OneLink
      Icon={FaMusic}
      href='https://www.youtube.com/channel/UCJwnuB7qJYxUFjes6T-Al_A'
    />
    <OneLink Icon={SiDribbble} href='https://dribbble.com/karthickthankyou' />
    <OneLink
      Icon={SiKaggle}
      href='https://www.kaggle.com/karthickragavendran'
    />
  </div>
)

export default Links

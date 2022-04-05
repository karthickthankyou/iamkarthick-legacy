import { SiGithub } from '@react-icons/all-files/si/SiGithub'
import { SiLinkedin } from '@react-icons/all-files/si/SiLinkedin'
import { SiMedium } from '@react-icons/all-files/si/SiMedium'
import { SiSoundcloud } from '@react-icons/all-files/si/SiSoundcloud'
import { SiTwitter } from '@react-icons/all-files/si/SiTwitter'
import { SiYoutube } from '@react-icons/all-files/si/SiYoutube'
import Link from 'src/components/atoms/Link/Link'

export interface ILinksProps {}
export interface IOneLinkProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  href: string
}

const OneLink = ({ Icon, href }: IOneLinkProps) => (
  <a target='_blank' rel='noreferrer' href={href} className='p-0.5 group'>
    <Icon className='w-8 h-8 p-1.5 fill-white bg-black  group-hover:bg-luxury transition-colors ' />
  </a>
)

const Links = () => (
  <div className='flex gap-3 mt-3'>
    <OneLink Icon={SiGithub} href='https://github.com/karthickthankyou' />
    <OneLink Icon={SiMedium} href='https://medium.com/@karthickragavendran' />
    <OneLink
      Icon={SiYoutube}
      href='https://www.youtube.com/channel/UC82M9uZCd7c7mM7-WEaWJlA'
    />
    <OneLink
      Icon={SiLinkedin}
      href='https://www.linkedin.com/in/iamkarthickr/'
    />
    <OneLink Icon={SiTwitter} href='https://twitter.com/karthicthankyou' />
    <OneLink
      Icon={SiSoundcloud}
      href='https://soundcloud.com/search?q=karthick%20ragavendran'
    />
  </div>
)

export default Links

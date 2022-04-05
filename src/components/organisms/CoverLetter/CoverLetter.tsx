import { SiMedium } from '@react-icons/all-files/si/SiMedium'
import { SiYoutube } from '@react-icons/all-files/si/SiYoutube'
import { SiLinkedin } from '@react-icons/all-files/si/SiLinkedin'
import { SiSoundcloud } from '@react-icons/all-files/si/SiSoundcloud'
import { SiTwitter } from '@react-icons/all-files/si/SiTwitter'
import { SiGithub } from '@react-icons/all-files/si/SiGithub'
import Link from 'src/components/atoms/Link/Link'
import Links from '../Links'

export interface ICoverLetterProps {}

const CoverLetter = () => (
  <div>
    <div className='text-4xl font-black'>Karthick Ragavendran</div>
    <div>React Developer</div>
    <Links />
  </div>
)

export default CoverLetter

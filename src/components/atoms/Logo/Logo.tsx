import Link from '../Link/Link'

export interface ILogoProps {}

const Logo = () => (
  <Link href='/' className='relative w-16 h-8'>
    {/* <Image src='/k.png' alt='logo' layout='fill' /> */}
    <div className='absolute text-6xl font-black text-black origin-left -skew-y-12 '>
      K
    </div>
    <div className='absolute text-6xl font-black origin-left -skew-y-6 text-primary-700'>
      K
    </div>
    <div className='absolute text-6xl font-black origin-left text-primary'>
      K
    </div>
  </Link>
)

export default Logo

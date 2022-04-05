import Image from 'src/components/atoms/Image'

export interface ILogoProps {}

const Logo = () => (
  <div className='relative w-24 h-12'>
    <Image src='/favicon.ico' alt='logo' layout='fill' />
  </div>
)

export default Logo

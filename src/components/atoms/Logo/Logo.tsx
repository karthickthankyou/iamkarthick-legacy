import Image from 'src/components/atoms/Image'

export interface ILogoProps {}

const Logo = () => (
  <div className='relative w-16 h-8'>
    <Image src='/favicon.ico' alt='logo' layout='fill' />
  </div>
)

export default Logo

import CubeTransparentIcon from '@heroicons/react/outline/CubeTransparentIcon'
import Logo from 'src/components/atoms/Logo/Logo'
import Container from 'src/components/atoms/Container/Container'
import { useStore } from 'src/pages/_app'

export interface INavbarProps {}

const Navbar = () => {
  const toggleShow = useStore((state) => state.toggleShow)
  return (
    <nav className='sticky top-0 z-50 backdrop-grayscale bg-white/50 backdrop-filter'>
      <Container>
        <div className='flex items-center justify-between py-2 '>
          <Logo />
          <div className='flex gap-3'>
            <button
              type='button'
              className='p-2 '
              onClick={toggleShow}
              aria-label='Go to search products page.'
            >
              <CubeTransparentIcon className='w-5 h-5' />
            </button>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar

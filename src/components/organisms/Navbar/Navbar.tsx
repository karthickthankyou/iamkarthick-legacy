import CubeTransparentIcon from '@heroicons/react/outline/CubeTransparentIcon'
import VolumeOffIcon from '@heroicons/react/outline/VolumeOffIcon'
import VolumeUpIcon from '@heroicons/react/outline/VolumeUpIcon'
import Logo from 'src/components/atoms/Logo/Logo'
import Container from 'src/components/atoms/Container/Container'
import { useStore } from 'src/pages/_app'

export interface INavbarProps {}

const Navbar = () => {
  const toggleShow = useStore((state) => state.toggleShow)
  const toggleMuted = useStore((state) => state.toggleMuted)
  const muted = useStore((state) => state.muted)
  return (
    <nav className='sticky top-0 z-50 backdrop-grayscale bg-white/50 backdrop-filter'>
      {/* <div className='w-full h-full bg-circuit-black bg-primary-25' /> */}
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
            <button
              type='button'
              className='p-2 '
              onClick={toggleMuted}
              aria-label='Go to search products page.'
            >
              {muted ? (
                <VolumeOffIcon className='w-5 h-5' />
              ) : (
                <VolumeUpIcon className='w-5 h-5' />
              )}
            </button>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar

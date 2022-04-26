import Container from 'src/components/atoms/Container/Container'
import CoverLetter from '../CoverLetter/CoverLetter'

export interface IFooterProps {}

const Footer = () => (
  <footer className='py-24 mt-12 text-white bg-black'>
    <Container>
      <CoverLetter />
    </Container>
  </footer>
)

export default Footer

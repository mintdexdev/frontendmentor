import { Container, Logo } from './index.js';
import {
  iconFacebook,
  iconTwitter,
  iconPinterest,
  iconInstagram
} from '../assets/index.js';

function Footer() {
  return (
    <footer className='bg-black text-white'>
      <Container>
        <div className='py-10 flex flex-col sm:flex-row  sm:justify-between'>
          <div className='flex flex-col p-8 justify-center '>
            <div>
              < Logo />
            </div>
            <ul className='flex flex-col justify-center text-center sm:flex-row gap-4 mt-4'>
              <li><a href="#">About</a></li>
              <li><a href="#">Carrers</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
          <div className=''>
            <ul className='flex justify-center gap-4 my-4'>
              <li><a href="#"><img src={iconFacebook} alt="" /></a></li>
              <li><a href="#"><img src={iconTwitter} alt="" /></a></li>
              <li><a href="#"><img src={iconPinterest} alt="" /></a></li>
              <li><a href="#"><img src={iconInstagram} alt="" /></a></li>
            </ul>
            <div className='text-center'>&copy;{new Date().getFullYear()} Loopstudios. All right Reserved</div>

          </div>

        </div>
      </Container>
    </footer>
  )
}

export default Footer
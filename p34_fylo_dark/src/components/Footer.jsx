import { Container, Logo } from './index.js'
import { iconEmail, iconLocation, iconPhone } from '../assets'


function Footer() {
  return (
    <footer >
      <div className='pt-60 md:pt-50 md:pb-20 bg-[hsl(216,53%,9%)]'>
        <Container>

          {/* content starts */}
          <Logo className='mb-10' />
          <div className='text-neutral-400 grid grid-rows-5 gap-8 md:grid-cols-12 md:grid-rows-none '>
            <div className='col-span-3 flex gap-4'>
              <img className='w-5 h-5' src={iconLocation} alt="" />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua
            </div>
            <div className='col-span-3'>
              <div className='mb-4 flex gap-4'>
                <img className='w-5 h-5' src={iconPhone} alt="" />
                <p>+1-543-123-4567</p>
              </div>

              <div className='flex gap-4'>
                <img className='w-5 h-5' src={iconEmail} alt="" />
                <p>example@fylo.com</p>
              </div>

            </div>
            <ul className='col-span-2'>
              <li className='hover:text-gray-600'><a href="/about">About Us</a></li>
              <li className='hover:text-gray-600'><a href="/jobs">Jobs</a></li>
              <li className='hover:text-gray-600'><a href="/press">Press</a></li>
              <li className='hover:text-gray-600'><a href="/blog">Blog</a></li>
            </ul>
            <ul className='col-span-2'>
              <li className='hover:text-gray-600'><a href="/contact">Contact Us</a></li>
              <li className='hover:text-gray-600'><a href="/terms">Terms</a></li>
              <li className='hover:text-gray-600'><a href="/privacy">Privacy</a></li>
            </ul>
            <div className='col-span-2'>
              <p className='hover:text-gray-600'> <a href="/facebook.com">Facebook</a></p>
              <p className='hover:text-gray-600'> <a href="/x.com">X ( Twitter )</a></p>
              <p className='hover:text-gray-600'> <a href="/instagram.com">Instagram</a></p>
            </div>
          </div>
          {/* content end */}


        </Container>
      </div>
    </footer>
  )
}

export default Footer
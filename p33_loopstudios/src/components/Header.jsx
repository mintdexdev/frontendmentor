import React from 'react'
import Container from './Container/Container'
import { iconHamburger, iconLogo } from '../assets'

function Header({ currentDevice }) {
  return (
    <header className='absolute top-0 left-0 right-0'>
      <Container>
        <nav className='flex justify-between py-10'>
          <div>
            <img src={iconLogo} alt="" />
          </div>
          {currentDevice === 'desktop' ?
            <ul className='flex gap-8'>
              <li className='text-white 2xl:text-xl'>About</li>
              <li className='text-white 2xl:text-xl'>Carrers</li>
              <li className='text-white 2xl:text-xl'>Events</li>
              <li className='text-white 2xl:text-xl'>Ptoducts</li>
              <li className='text-white 2xl:text-xl'>Support</li>
            </ul> :
            <img src={iconHamburger} alt="" />
          }
        </nav>
      </Container>
    </header>
  )
}

export default Header
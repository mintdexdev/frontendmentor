import React from 'react'
import { Logo, Container } from './index.js'

function Header() {
  return (
    <header>
      <Container>
        <nav className='flex justify-between pt-10'>
          <div className='w-20'>
            <Logo />
          </div>
          <ul className='flex gap-4 sm:gap-10 text-neutral-300'>
            <li>Features</li>
            <li>Team</li>
            <li>Sign in</li>
          </ul>

        </nav>
      </Container>
    </header>
  )
}

export default Header
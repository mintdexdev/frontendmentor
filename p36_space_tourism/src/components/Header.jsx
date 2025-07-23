import React, { useState } from 'react'
import { Container, Logo } from '../components'
import { iconClose, iconHamburger } from '../assets'
import { Link } from 'react-router'
import { AnimatePresence, motion, scale } from 'motion/react'

function Header({ currentViewport }) {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className='fixed w-full'>

      <Container>
        <nav className=' py-[20px] flex justify-between items-center'>

          <div> <Logo /> </div>

          {currentViewport === 'small' ?
            <motion.button className='block h-fit will-change-transform duration-75'
              type='button'
              onClick={() => setIsMenuOpen(true)}
              whileTap={{ scale: 0.8 }}
            >

              <img src={iconHamburger} alt="" />
            </motion.button>
            :
            <div>
              00 Home
              01 Destination
              02 Crew
              03 Technology
            </div>}
        </nav>

        <AnimatePresence>
          {isMenuOpen && <Menu setIsMenuOpen={setIsMenuOpen} />}
        </AnimatePresence>

      </Container>
    </header>
  )
}

export default Header

function Menu({ setIsMenuOpen }) {

  const menuAnimations = {
    key: 'menuBar',
    initial: { x: '100%' },
    animate: { x: 0 },
    exit: { x: '100%' },
    transition: { duration: 0.3, type: 'easeOut' }
  }

  return (
    <motion.nav className='w-[70vw] h-svh p-[24px] fixed top-0 right-0 backdrop-blur-xl border-l border-white/30 backdrop-brightness-75'
      {...menuAnimations}
    >
      <div className='py-3'>

        <motion.button className='block ml-auto will-change-transform duration-75'
          type='button'
          onClick={() => setIsMenuOpen(false)}
          whileTap={{ scale: 0.9 }}
        >
          <img src={iconClose} alt="" />
        </motion.button>

      </div>
      <ul className='mt-20 flex flex-col gap-4 text-preset-8'>
        <li>
          <Link to='/home'>
            <span className='mr-2 font-bold'>00</span>
            Home
          </Link>
        </li>
        <li>
          <Link to='/destination'>
            <span className='mr-2 font-bold'>01</span>
            Destination
          </Link>
        </li>
        <li>
          <Link to='/crew'>
            <span className='mr-2 font-bold'>02</span>
            Crew
          </Link>
        </li>
        <li>
          <Link to='/technology'>
            <span className='mr-2 font-bold'>03</span>
            Technology
          </Link>
        </li>
      </ul>
    </motion.nav>
  )
}
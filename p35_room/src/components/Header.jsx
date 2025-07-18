import React, { useState } from 'react'
import { iconClose, iconHamburger, imgLogo } from '../assets'
import { motion, AnimatePresence } from 'motion/react'

function Header({ currentViewport }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='absolute z-10 top-0 left-0 w-full'>
      <AnimatePresence >

        {isOpen &&
          <motion.div
            className='absolute p-16 flex gap-8 w-full items-center bg-white justify-between'
            key={'navbar'}
            initial={{ translateY: '-100%' }}
            animate={{ translateY: 0 }}
            exit={{ translateY: '-100%' }}
            transition={{
              duration: 0.2,
              ease: 'easeOut',
            }}
          >

            <motion.button
              type='button'
              onClick={() => setIsOpen(false)}
              whileTap={{ scale: 0.9, rotate: 3 }}
            >
              <img src={iconClose} alt="" />
            </motion.button>

            < ul className='flex gap-8 font-semibold  flex-wrap'>
              <li><a href="/home">Home</a></li>
              <li><a href="/shop">Shop</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </motion.div>
        }
      </AnimatePresence>
      <nav className='p-16 flex w-full md:gap-20 md:w-fit items-center'>
        {currentViewport === 'small' ?
          <motion.button
            type='button'
            onClick={() => setIsOpen(true)}
            whileTap={{ scale: 0.9, rotate: 3 }}
          >
            <img src={iconHamburger} alt="" />
          </motion.button> : null
        }
        <div className='w-full'>
          <img className='mx-auto sm:mx-0' src={imgLogo} alt="" />
        </div>
        {currentViewport !== 'small' ?
          < ul className='flex gap-4 text-white font-semibold'>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul> : null
        }
      </nav>
    </header >
  )
}

export default Header
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink, useLocation } from 'react-router'
import { Logo } from './'
import { iconClose, iconHamburger } from '../assets'
import { AnimatePresence, motion } from 'motion/react'

const navlinkList = [
  { id: '00', name: 'Home', link: '/', },
  { id: '01', name: 'Destination', link: '/destination', },
  { id: '02', name: 'Crew', link: '/crew', },
  { id: '03', name: 'Technology', link: '/technology', }
]

function Header() {
  const currentViewport = useSelector(state => state.screenSlice.viewportSize)

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(window.scrollY)
  const [headerHideStyle, setHeaderHideStyle] = useState(null)

  useEffect(() => {
    const navigationHide = () => {
      const scrollY = window.scrollY

      if (scrollY === 0) {
        setHeaderHideStyle('border-b border-white/0 backdrop-blur-none')
      } else if (scrollY > lastScrollY) {
        setHeaderHideStyle('translate-y-[-100%]')
      }
      else if (scrollY < lastScrollY) {
        setHeaderHideStyle('backdrop-blur-2xl border-b border-white/20')
      }

      setLastScrollY(scrollY)
    }
    window.addEventListener('scroll', navigationHide)
    return () => window.removeEventListener('scroll', navigationHide)
  }, [lastScrollY])

  return (
    <header >
      <div className={`fixed z-50 flex justify-between w-screen duration-300 ease-out
             sm:backdrop-blur-none  
            ${headerHideStyle}`}>
        <Link className='p-[24px]'
          to={'/'}
          onClick={() => setIsMenuOpen(false)}
        >
          <Logo />
        </Link>


        {currentViewport !== 'large' &&
          <div className='p-[24px] flex items-center'>
            <motion.button className='h-fit will-change-transform duration-75'
              type='button'
              onClick={() => setIsMenuOpen(true)}
              whileTap={{ scale: 0.8 }}
            >
              <img src={iconHamburger} alt="" />
            </motion.button>
          </div>
        }

        {currentViewport === 'large' &&
          <nav className='w-full'
          >
            {/* <div className='absolute top-0 right-0 w-[80%] h-full z-[-10] bg-white/10 backdrop-blur-2xl'>

              </div> */}

            <ul className='w-fit ml-auto px-[3rem] flex gap-8 text-preset-8 h-full bg-white/10 backdrop-blur-2xl'>
              {navlinkList.map(item => (
                <li className={`flex items-center `}
                  key={item.name}>
                  <NavLink
                    to={item.link}
                    onClick={() => setIsMenuOpen(false)}
                    className={' hover:text-neutral-500 duration-300'}
                  >
                    <span className='mr-2 font-bold'>{item.id}</span>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        }

      </div>

      <AnimatePresence>
        {isMenuOpen && <Menu setIsMenuOpen={setIsMenuOpen} />}
      </AnimatePresence>


    </header>
  )
}

export default Header

function Menu({ setIsMenuOpen }) {
  const location = useLocation();

  // animations
  const menuAnimation = {
    initial: { x: '100%' },
    animate: { x: 0 },
    exit: { x: '100%' },
    transition: { duration: 0.3, type: 'easeOut' }
  }

  const menuBackdropAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  }

  return (
    <>
      <motion.div className='w-full h-full fixed top-0 left-0 bg-black/40  '
        onClick={() => setIsMenuOpen(false)}
        {...menuBackdropAnimation}
      />

      <motion.nav className='w-[70vw] h-svh z-50 fixed top-0 right-0 backdrop-blur-xl border-l border-white/30 '
        key='menuBar'
        {...menuAnimation}
      >
        <div className='px-[24px] py-[36px] '>

          <motion.button className='block ml-auto will-change-transform duration-75'
            type='button'
            onClick={() => setIsMenuOpen(false)}
            whileTap={{ scale: 0.9 }}
          >
            <img src={iconClose} alt="" />
          </motion.button>

        </div>
        <ul className='mt-12 pl-[24px] flex flex-col gap-4 text-preset-8'>
          {navlinkList.map(item => (
            <li className={`${location.pathname === item.link ? 'border-r-4' : null}`}
              key={item.name}>
              <NavLink
                to={item.link}
                onClick={() => setIsMenuOpen(false)}
                className={' hover:text-neutral-500 duration-300'}
              >
                <span className='mr-2 font-bold  '>{item.id}</span>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </motion.nav>
    </>
  )
}
import { motion, useAnimation } from "motion/react"

import { Logo } from './'
import { useEffect } from "react";

function Header({ device }) {

  const navList = [
    { name: "About", },
    { name: "Services", },
    { name: "Projects", },
  ]

  const contactBtnEffect = {
    initial: {
      backgroundColor: 'hsl(0, 0%, 100%)',
    },

    whileHover: {
      backgroundColor: 'hsla(0, 0%, 100%, 0.5)',
    },
    whileTap: {
      scale: 0.95,
    },
    transition: {
      backgroundColor: { duration: 0.1 },
      scale: { duration: 0.1 }
    }
  }

  const arrowFlickControls = useAnimation();
  useEffect(() => {
    let loopCount = 0;

    const bounce = async () => {
      while (true) {
        await arrowFlickControls.start({
          y: [0, 16, 0],
          transition: {
            duration: 5,
            ease: 'easeInOut',
            times: [0, 0.6, 1],
          },
        });
        loopCount++;

        if (loopCount === 5) {
          await arrowFlickControls.start({
            y: [0, 8, 0, 8, 0],
            transition: {
              duration: 0.6,
              ease: 'easeInOut',
            },
          });
          loopCount = 0;
        }
      }

    };

    bounce();
  }, [arrowFlickControls]);

  return (
    <header className='relative'>
      <nav className='absolute w-full px-8 py-6 flex justify-between items-center lg:px-12 lg:pt-6'>
        <div>
          <Logo />
        </div>
        {device === 'mobile' ?
          <img
            src="/images/icon-hamburger.svg"
            alt="menu btn"
          />
          : <ul className='flex gap-8 items-center'>
            {navList.map(item => (
              <li
                key={item.name}>
                <a
                  className='text-lg font-semibold text-gray-100 hover:text-gray-200'
                  href="#">{item.name}</a>
              </li>
            ))}

            <li>
              <motion.a
                href="#"
                className="inline-block px-6 py-3 rounded-full text-lg font-semibold bg-neutral-100 text-neutral-900
                will-change-transform"
                {...contactBtnEffect}

              // initial={{
              //   backgroundColor: 'hsl(0, 0%, 100%)',
              // }}
              // whileHover={{
              //   backgroundColor: 'hsla(0, 0%, 100%, 0.5)',
              // }}
              // whileTap={{
              //   scale: 0.95,
              // }}
              // transition={{
              //   backgroundColor: { duration: 0.1 },
              //   scale: { duration: 0.1 },
              // }}

              >
                Contact
              </motion.a>
            </li>
          </ul>
        }
      </nav>

      <section>
        <div className=' w-full text-center
        absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h1 className='m-4 text-5xl sm:text-5xl lg:text-7xl uppercase tracking-widest text-white'
          >
            <div>We are</div>
            <div>Creatives</div>
          </h1>
          <motion.img
            className='h-[80px] mx-auto my-10  lg:my-16 md:h-fit'
            src="/images/icon-arrow-down.svg"
            alt="down arrow"
            animate={arrowFlickControls}
          />
        </div>
        <img
          className='h-[100vh] object-cover w-full overflow-clip'
          src={`/images/${device}/image-header.jpg`}
          alt="" />
      </section>
    </header >
  )
}

export default Header
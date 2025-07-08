import React from 'react'
import { Logo } from './'

function Header() {
  const navList = [
    { name: "About", },
    { name: "Services", },
    { name: "Projects", },
  ]
  return (
    <header className='relative'>
      <nav className='absolute w-full px-8 py-10  flex justify-between items-center'>
        <div>
          <Logo />
        </div>
        <ul className='flex gap-8'>
          {navList.map(item => (
            <li
              key={item.name}>
              <a
                className='text-lg font-semibold text-gray-100 hover:text-gray-200'
                href="#">{item.name}</a>
            </li>
          ))}

          <li>
            <a
              className='px-6 py-3 rounded-full text-lg font-semibold bg-neutral-100 text-neutral-900 hover:bg-neutral-100/40 hover:text-neutral-100'
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <section>
        <div className=' w-full text-center
        absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h1 className='text-7xl uppercase tracking-widest text-white'
          >
            We are creatives
          </h1>
          <img
            className='mx-auto my-20'
            src="/images/icon-arrow-down.svg"
            alt="down arrow"
          />
        </div>
        <img src="/images/desktop/image-header.jpg" alt="" />
      </section>
    </header >
  )
}

export default Header
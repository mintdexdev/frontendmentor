import React from 'react'
import { Logo } from './'

function Footer() {
  const navList = [
    { name: "About", },
    { name: "Services", },
    { name: "Projects", },
  ]
  const socialList = [
    { link: "/images/icon-facebook.svg", alt: "facebook social" },
    { link: "/images/icon-instagram.svg", alt: "instagram social" },
    { link: "/images/icon-twitter.svg", alt: "twitter social" },
    { link: "/images/icon-pinterest.svg", alt: "pinterest social" },
  ]
  const imageList = [
    { link: `/images/desktop/image-gallery-milkbottles.jpg`, alt: "milk bottle" },
    { link: `/images/desktop/image-gallery-orange.jpg`, alt: "orange" },
    { link: `/images/desktop/image-gallery-cone.jpg`, alt: "cone" },
    { link: `/images/desktop/image-gallery-sugarcubes.jpg`, alt: "sugarcubes" },
  ]
  return (
    <footer className=' bg-[hsl(167,34%,50%)]'>

      <div className="grid grid-cols-4">
        {imageList.map((item) => (
          <img
            className="w-full h-full"
            key={item.alt}
            src={item.link}
            alt={item.alt}
          />
        ))}
      </div>

      <div className='w-[300px] h-[300px] mx-auto p-14 flex flex-col '>

        <div className='mb-4 flex justify-center'>
          <Logo />
        </div>

        <ul className='mb-20 flex gap-20 justify-center'>
          {navList.map((item) => (
            <li
              key={item.name}>
              <a
                className='text-lg font-semibold text-[hsl(167,40%,20%)] hover:text-neutral-100 transition-all hover:brightness-[200]'
                href="#">{item.name}</a>
            </li>
          ))}
        </ul>


        <div className='flex gap-8 justify-center cursor-pointer'>
          {socialList.map((item) => (
            <a
              href="#"
              key={item.alt}
            >
              <img
                // do i write key here? too
                className='w-full h-full duration-200 transition-all hover:brightness-[200] '
                src={item.link}
                alt={item.alt} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
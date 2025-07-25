import React, { useEffect, useState } from 'react'
import { iconAngleLeft, iconAngleRight, iconArrow, imgDesktopHero1, imgDesktopHero2, imgDesktopHero3, imgMobileHero1, imgMobileHero2, imgMobileHero3 } from '../assets'
import { NavigationButton } from './index.js'

import { motion, useMotionValue } from 'motion/react'

let list = [
  {
    id: 1,
    currentImageSource: imgMobileHero1,
    title: 'Discover innovative ways to decorate',
    description: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
    desktopImageSource: imgDesktopHero1,
    mobileImageSource: imgMobileHero1,
  },
  {
    id: 2,
    currentImageSource: imgMobileHero2,
    title: 'We are available all across the globe',
    description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    desktopImageSource: imgDesktopHero2,
    mobileImageSource: imgMobileHero2,
  },
  {
    id: 3,
    currentImageSource: imgMobileHero3,
    title: 'Manufactured with the best materials',
    description: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
    desktopImageSource: imgDesktopHero3,
    mobileImageSource: imgMobileHero3,
  },
]

const DRAG_THRESHOLD = 50
const AUTO_IMAGE_SCROLL_TIME = 1000 * 100
const SPRING_OPTIONS = {
  duration: 0.3,
  ease: "easeOut"
};

export default function Hero({ currentViewport }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (currentViewport !== 'small') {
    list.forEach(item => { item.currentImageSource = item.desktopImageSource })
  } else if (currentViewport === 'small') {
    list.forEach(item => { item.currentImageSource = item.mobileImageSource })
  }

  const dragX = useMotionValue(0);

  const previousImage = () => {
    if (currentIndex === 0) return;
    else setCurrentIndex(prev => prev - 1)
  }
  const nextImage = () => {
    if (currentIndex === list.length - 1) return;
    else setCurrentIndex(prev => prev + 1)

  }

  const onDragEnd = () => {
    const x = dragX.get();
    if (x >= DRAG_THRESHOLD) {
      previousImage()

    } else if (x <= -DRAG_THRESHOLD) {
      nextImage()
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === list.length - 1) {
        setCurrentIndex(0)
      } else {
        nextImage()
      }

    }, AUTO_IMAGE_SCROLL_TIME)
    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <section>

      <div className='md:flex md:w-auto md:min-h-auto md:h-[70vh] '>

        <div className='relative overflow-clip shrink-0 md:w-[60%]'>
          <motion.div className='flex cursor-grab h-full'
            drag='x'
            style={{
              x: dragX
            }}
            dragConstraints={{
              left: 0,
              right: 0,
            }}
            onDragEnd={onDragEnd}
            animate={{
              translateX: `-${currentIndex * 100}%`,
            }}
            transition={SPRING_OPTIONS}
          >
            {list.map((item, index) => (
              <img className='w-screen h-full md:w-full shrink-0 object-cover'
                src={item.currentImageSource}
                key={index}
                alt=""
                draggable="false"
              />
            ))}
          </motion.div>


          <div className='absolute bottom-0 right-0 flex'>
            <NavigationButton
              className='text-white'
              aria-label="Go to Previous"
              title="Previous"
              onClick={previousImage}
            >
              <img src={iconAngleLeft} alt="" />
            </NavigationButton>
            <NavigationButton
              className='text-white'
              aria-label="Go to Next"
              title="Next"
              onClick={nextImage}
            >
              <img src={iconAngleRight} alt="" />
            </NavigationButton>
          </div>

          <Dots
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </div>


        <div className='py-10 px-[clamp(1.5rem,5vw,5rem)] md:w-[40%]'>

          <h1 className='font-bold text-[2rem] leading-[1.2] mb-4'>{list[currentIndex].title}</h1>
          <p className='font-semibold text-neutral-500'>{list[currentIndex].description}</p>

          <a className='inline-block mt-10 '
            href='/shop'>
            <span className='uppercase tracking-[8px] font-semibold'>Shop now</span>
            <img className='inline-block ml-8' src={iconArrow} alt="" />
          </a>

        </div>

      </div>

    </section >
  )
}
function ImageCarousel() {
  return (
    <>

    </>
  )
}

function Dots({ currentIndex, setCurrentIndex }) {
  return (
    <div className='w-fit p-1.5 rounded-full flex bg-black/40  absolute bottom-4 left-[50%] translate-x-[-50%] '>
      <div className='flex justify-center items-center gap-2'>
        {list.map((item, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentIndex === index ? 'bg-white w-4 h-4 ' : 'bg-gray-600'
              }`}
            aria-label={`Go to slide ${index + 1}`}
            title={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}


import { useEffect, useState } from 'react'
import { iconAngleLeft, iconAngleRight, iconArrow, imgMobileHero1, imgMobileHero2, imgMobileHero3 } from '../assets'
import { Container, NavigationButton } from './index.js'

import { motion, useMotionValue } from 'motion/react'

const list = [
  {
    id: 1,
    imageSource: imgMobileHero1,
    title: 'Discover innovative ways to decorate',
    description: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
  },
  {
    id: 2,
    imageSource: imgMobileHero2,
    title: 'We are available all across the globe',
    description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
  },
  {
    id: 3,
    imageSource: imgMobileHero3,
    title: 'Manufactured with the best materials',
    description: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
  },
]

const DRAG_THRESHOLD = 50
const AUTO_IMAGE_SCROLL_TIME = 1000 * 100
const SPRING_OPTIONS = {
  duration: 0.3,
  ease: "easeOut"
};

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

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
      <Container>

        <div className='min-h-svh lg:flex lg:w-[100vw] lg:min-h-auto lg:h-[70vh]'>

          <div className='relative overflow-clip shrink-0 lg:w-[60%]'>
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
                <img className='w-screen h-full lg:w-full shrink-0 object-cover'
                  src={item.imageSource}
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


          <div className='py-[3rem]  overflow-clip lg:w-[40%]'>

            <motion.div className='flex'
              animate={{
                translateX: `-${currentIndex * 100}%`,
              }}
              transition={SPRING_OPTIONS}
            >
              {list.map(item => (
                <div
                  className='min-w-[100vw] px-[clamp(1.5rem,5vw,5rem)] lg:min-w-[100%]'
                  key={item.title}>
                  <h1 className='font-bold text-[2rem] leading-[1.2] mb-4'>{item.title}</h1>
                  <p className='font-semibold text-neutral-500'>{item.description}</p>
                </div>
              ))}
            </motion.div>

            <a className='inline-block mt-10 ml-[clamp(1.5rem,5vw,5rem)] '
              href='/shop'>
              <span className='uppercase tracking-[8px] font-semibold'>Shop now</span>
              <img className='inline-block ml-8' src={iconArrow} alt="" />
            </a>

          </div>

        </div>

      </Container>
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


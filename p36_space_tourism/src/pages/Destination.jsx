import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { BackgroundImage, Container } from '../components'
import {
  imgBackgroundDestinationDesktop,
  imgBackgroundDestinationMobile,
  imgBackgroundDestinationTablet
} from '../assets'
import { motion as m } from 'motion/react'


function Destination() {
  const currentViewport = useSelector(state => state.screenSlice.viewportSize)
  const destinationData = useSelector(state => state.dataSlice.spaceData.destinations)
  const [currentDestination, setCurrentDestination] = useState(destinationData[0])
 
  return (
    <section className='relative'>

      <div className='absolute inset-0 z-[-999]'>
        {currentViewport === 'small' &&
          <BackgroundImage
            imgSource={imgBackgroundDestinationMobile}
            alt={'space background'} />
        }
        {currentViewport === 'medium' &&
          <BackgroundImage
            imgSource={imgBackgroundDestinationTablet}
            alt={'space background'} />
        }
        {currentViewport === 'large' &&
          <BackgroundImage
            imgSource={imgBackgroundDestinationDesktop}
            alt={'space background'} />
        }
      </div>

      <Container>

        <div className='min-h-dvh flex flex-col pt-[100px] lg:justify-center'>

          <div className='text-preset-8 text-center lg:text-left'>
            <span className='mr-4 font-bold  text-neutral-500'>01</span>
            Pick your destination
          </div>


          <div className='text-center lg:flex lg:text-left lg:items-center ' >
            <div className='max-w-[200px] h-fit mx-auto py-10 lg:max-w-full '>
              <m.img className='w-full h-full'
                src={currentDestination.images.webp}
                alt="destination image"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 90,
                  repeat: Infinity,
                  ease: 'linear'

                }}
              />
            </div>

            <div className='lg:w-[50%] lg:p-4'>
              <ul className='px-10 flex gap-10 justify-center lg:justify-start lg:px-0'>
                {destinationData.map(item => (
                  <li className={`pb-4 transition-colors duration-300 hover:text-neutral-400 hover:border-b-4 hover:border-neutral-400
                  ${currentDestination.name === item.name ? 'border-white border-b-4 hover:text-white hover:border-white' : null}`}
                    key={item.name}
                    onClick={() => setCurrentDestination(item)}
                  >
                    <button
                      className='text-preset-8 '
                      type='button'
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>

              <div className='max-w-[50ch] mx-auto'>
                <p className='my-6 text-preset-2'>{currentDestination.name}</p>
                <p className='my-6 text-preset-9'>{currentDestination.description}</p>
                <div className='p-6 border-t border-neutral-600
                      lg:p-0 lg:pt-6 lg:flex lg:justify-between'>
                  <div className='mb-6'>
                    <p className='text-preset-7 text-neutral-400 '>avg. distance</p>
                    <p className='mt-2 text-preset-4'>{currentDestination.distance}</p>
                  </div>
                  <div>
                    <p className='text-preset-7 text-neutral-400 '>ext. travel time</p>
                    <p className='mt-2 text-preset-4'>{currentDestination.travel}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section >
  )
}

export default Destination
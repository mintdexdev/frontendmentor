import React, { useState } from 'react'
import { imgBackgroundTechnologyDesktop, imgBackgroundTechnologyMobile, imgBackgroundTechnologyTablet } from '../assets'
import { BackgroundImage, Container } from '../components'
import { useSelector } from 'react-redux'

function Technology() {
  const currentViewport = useSelector(state => state.screenSlice.viewportSize)
  const technologyData = useSelector(state => state.dataSlice.spaceData.technology)

  const [currentTechnology, setCurrentTechnology] = useState(technologyData[0])

  return (
    <section className='relative'>

      <div className='absolute inset-0 z-[-999]'>
        {currentViewport === 'small' &&
          <BackgroundImage
            imgSource={imgBackgroundTechnologyMobile}
            alt={'space background'} />
        }
        {currentViewport === 'medium' &&
          <BackgroundImage
            imgSource={imgBackgroundTechnologyTablet}
            alt={'space background'} />
        }
        {currentViewport === 'large' &&
          <BackgroundImage
            imgSource={imgBackgroundTechnologyDesktop}
            alt={'space background'} />
        }
      </div>

      <Container>
        <div className='min-h-svh flex flex-col pt-[100px] lg:justify-center'>

          <div className='text-preset-8 text-center lg:text-left'>
            <span className='mr-4 font-bold  text-neutral-500'>03</span>
            space launch 101
          </div>

          <div className='text-center overflow-clip lg:flex lg:flex-row-reverse lg:items-center lg:text-left' >

            <div className='lg:w-[40%] mx-auto my-10 aspect-[4/3] sm:aspect-auto'>
              {currentViewport === 'medium' ?
                <img className='w-full h-full object-cover' src={currentTechnology.images.landscape} alt="" />
                :
                <img className='w-full h-full object-cover' src={currentTechnology.images.portrait} alt="" />
              }
            </div>

            <div className='lg:w-[60%] lg:flex '>

              <div className='my-6 px-10 flex gap-5 justify-center lg:flex-col'>
                {technologyData.map((item, index) => (
                  <button
                    className={`w-10 h-10 rounded-full
                  ${currentTechnology.name === item.name ? 'bg-white text-black' : 'text-white border border-white backdrop-blur-md'}`}
                    imgBackgroundTechnologyMobilekey={item.name}
                    onClick={() => setCurrentTechnology(item)}
                  >
                    {index}
                  </button>
                ))}
              </div>

              <div className='pb-10 lg:p-10'>
                <p className='mb-2 text-preset-6 text-neutral-500'>The Terminology ..</p>
                <p className='mb-4 text-preset-4'>{currentTechnology.name}</p>
                <p className='mt-4 text-preset-9'>{currentTechnology.description}</p>
              </div>

            </div>

          </div>

        </div>
      </Container>
    </section >
  )
}

export default Technology
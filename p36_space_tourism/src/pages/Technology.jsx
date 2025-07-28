import { useState } from 'react'
import { useSelector } from 'react-redux'

import { BackgroundImage, Container, PageHeading } from '../components'
import {
  imgBackgroundTechnologyMobile,
  imgBackgroundTechnologyTablet,
  imgBackgroundTechnologyDesktop
} from '../assets'

const backgroundImageList = [
  { atViewport: 'small', imageSource: imgBackgroundTechnologyMobile },
  { atViewport: 'medium', imageSource: imgBackgroundTechnologyTablet },
  { atViewport: 'large', imageSource: imgBackgroundTechnologyDesktop }
]

function Technology() {
  const currentViewport = useSelector(state => state.screenSlice.viewportSize)
  const technologyData = useSelector(state => state.dataSlice.spaceData.technology)

  const [currentTechnology, setCurrentTechnology] = useState(technologyData[0])

  return (
    <section className='relative'>


      <BackgroundImage backgroundImageList={backgroundImageList} />

      <Container>
        <div className='min-h-svh pt-[150px] lg:h-screen lg:flex lg:flex-col'>

          <PageHeading textNumber='03' textHeading='space launch 101' />

          <div className='grow flex items-center'>

            <div className='w-full lg:flex pt-10 lg:pt-0 lg:flex-row-reverse lg:items-center lg:text-left' >

              <div className='lg:w-[40%] mx-auto aspect-[4/3] sm:aspect-auto'>
                {currentViewport === 'medium' ?
                  <img className='w-full h-full object-cover' src={currentTechnology.images.landscape} alt="" />
                  :
                  <img className='w-full h-full object-cover' src={currentTechnology.images.portrait} alt="" />
                }
              </div>

              <div className='lg:w-[60%] lg:flex '>

                <div className='my-6 pr-10 flex gap-5 justify-center lg:flex-col'>
                  {technologyData.map((item, index) => (
                    <button
                      className={`w-10 h-10 rounded-full
                    ${currentTechnology.name === item.name ? 'bg-white text-black' : 'text-white border border-white backdrop-blur-md'}`}
                      key={item.name}
                      onClick={() => setCurrentTechnology(item)}
                    >
                      {index}
                    </button>
                  ))}
                </div>

                <div className='max-w-[60ch] mx-auto pb-10 text-center lg:mx-0 lg:p-10 lg:text-left'>
                  <p className='mb-2 text-preset-6 text-neutral-500'>The Terminology ..</p>
                  <p className='mb-4 text-preset-4'>{currentTechnology.name}</p>
                  <p className='mt-4 text-preset-9 max-w-[60ch]'>{currentTechnology.description}</p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </Container>
    </section >
  )
}

export default Technology
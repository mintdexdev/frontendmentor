import React, { useState } from 'react'
import { imgBackgroundTechnologyMobile } from '../assets'
import { Container } from '../components'
import { useSelector } from 'react-redux'

function Technology() {

  const technologyData = useSelector(state => state.dataSlice.spaceData.technology)
  const [currentTechnology, setCurrentTechnology] = useState(technologyData[0])

  console.log(currentTechnology)

  return (
    <section className='relative'>
      <div className='absolute inset-0 z-[-999]'>
        <img className='w-full h-full object-cover'
          src={imgBackgroundTechnologyMobile} alt="space earth" />
      </div>
      <Container>

        <div className='min-h-svh flex flex-col pt-[clamp(100px,65.2174px+10.8696vw,200px)]'>

          <div className='text-preset-8 text-center'>
            <span className='mr-4 font-bold  text-neutral-500'>03</span>
            space launch 101
          </div>

          <div className='text-center overflow-clip' >
            <div className=' mx-auto my-10 aspect-[4/3]'>
              <img className='w-full h-full' src={currentTechnology.images.portrait} alt="" />
            </div>

            <div className='my-6 px-10 flex gap-5 justify-center'>
              {technologyData.map((item, index) => (
                <button
                  className={`w-10 h-10 rounded-full  ${currentTechnology.name === item.name ? 'bg-white text-black' : 'text-white border border-white'}`}
                  key={item.name}
                  onClick={() => setCurrentTechnology(item)}
                >
                  {index}
                </button>
              ))}
            </div>

            <div className='mb-10'>
              <p className='mb-2 text-preset-6 text-neutral-500'>The Terminology ..</p>
              <p className='mb-4 text-preset-4'>{currentTechnology.name}</p>
              <p className='mt-4 text-preset-9'>{currentTechnology.description}</p>
            </div>
          </div>

        </div>
      </Container>
    </section >
  )
}

export default Technology
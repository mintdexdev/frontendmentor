import React, { useState } from 'react'
import { imgBackgroundDestinationMobile } from '../assets'
import { Container } from '../components'
import { useSelector } from 'react-redux'

function Destination() {

  const destinationData = useSelector(state => state.dataSlice.spaceData.destinations)
  const [currentDestination, setCurrentDestination] = useState(destinationData[0])

  return (
    <section className='relative'>
      <div className='absolute inset-0 z-[-999]'>
        <img className='w-full h-full object-cover'
          src={imgBackgroundDestinationMobile} alt="space earth" />
      </div>
      <Container>

        <div className='min-h-svh flex flex-col pt-[clamp(100px,65.2174px+10.8696vw,200px)]'>

          <div className='text-preset-8 text-center'>
            <span className='mr-4 font-bold  text-neutral-500'>01</span>
            Pick your destination
          </div>


          <div className='text-center overflow-clip' >
            <div className='max-w-[200px] mx-auto py-10'>
              <img className='w-full h-full' src={currentDestination.images.webp} alt="" />
            </div>

            <ul className='px-10 flex gap-10 justify-center'>
              {destinationData.map(item => (
                <li className={`pb-4 border-white
                  ${currentDestination.name === item.name ? 'border-b-4' : null}`}
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

            <div className=' '>
              <p className='my-6 text-preset-2'>{currentDestination.name}</p>
              <p className='my-6 text-preset-9'>{currentDestination.description}</p>
              <div className='p-6 border-t border-neutral-600'>
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
      </Container>
    </section >
  )
}

export default Destination
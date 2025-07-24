import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { imgBackgroundCrewDesktop, imgBackgroundCrewMobile, imgBackgroundCrewTablet } from '../assets'
import { BackgroundImage, Container } from '../components'

function Crew() {
  const currentViewport = useSelector(state => state.screenSlice.viewportSize)
  const crewData = useSelector(state => state.dataSlice.spaceData.crew)
  const [currentCrewMember, setCurrrentCrewMember] = useState(crewData[0])
  console.log(currentCrewMember)

  return (

    <section className='relative'>

      <div className='absolute inset-0 z-[-999]'>
        {currentViewport === 'small' &&
          <BackgroundImage
            imgSource={imgBackgroundCrewMobile}
            alt={'space background'} />
        }
        {currentViewport === 'medium' &&
          <BackgroundImage
            imgSource={imgBackgroundCrewTablet}
            alt={'space background'} />
        }
        {currentViewport === 'large' &&
          <BackgroundImage
            imgSource={imgBackgroundCrewDesktop}
            alt={'space background'} />
        }
      </div>

      <Container>
        <div className='min-h-svh flex flex-col pt-[100px] lg:justify-center '>

          <div className=' text-preset-8 text-center lg:text-left'>
            <span className='mr-4 font-bold  text-neutral-500'>02</span>
            meet your crew
          </div>

          <div className='mt-8 text-center h-ful lg:min-h-[400px] lg:flex lg:text-left lg:items-center lg:pb-10 lg:h-full ' >

            <div className='min-h-[280px]  lg:w-[50%]'>
              <p className='text-preset-6 text-neutral-400'>{currentCrewMember.role}</p>
              <p className='my-2 text-preset-4'>{currentCrewMember.name}</p>
              <p className='mt-6 text-preset-9'>{currentCrewMember.bio}</p>

              <div className='my-6 px-10 flex gap-5 justify-center lg:justify-start lg:mt-20 lg:p-0'>
                {crewData.map(item => (
                  <button
                    className={`w-2 h-2 rounded-full  ${currentCrewMember.name === item.name ? 'bg-white' : 'bg-neutral-400'}`}
                    key={item.name}
                    onClick={() => setCurrrentCrewMember(item)}
                  />
                ))}
              </div>
            </div>

            <div className='max-w-[200px] mx-auto pt-10 lg:p-0 lg:max-w-full lg:w-[30%]'>
              <img className='w-full h-full' src={currentCrewMember.images.webp} alt="" />
            </div>
          </div>

        </div>
      </Container>
    </section >
  )
}

export default Crew
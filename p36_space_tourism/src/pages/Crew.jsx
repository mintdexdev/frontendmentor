import React, { useState } from 'react'
import { imgBackgroundCrewMobile, imgBackgroundHomeMobile } from '../assets'
import { Container } from '../components'
import { useSelector } from 'react-redux'

function Crew() {

  const crewData = useSelector(state => state.dataSlice.spaceData.crew)
  const [currentCrewMember, setCurrrentCrewMember] = useState(crewData[0])
  console.log(currentCrewMember)

  return (

    <section className='relative'>
      <div className='absolute inset-0 z-[-999]'>
        <img className='w-full h-full object-cover'
          src={imgBackgroundCrewMobile} alt="space earth" />
      </div>
      <Container>
        <div className='min-h-svh flex flex-col pt-[clamp(100px,65.2174px+10.8696vw,200px)]'>

          <div className='text-preset-8 text-center'>
            <span className='mr-4 font-bold  text-neutral-500'>02</span>
            meet your crew
          </div>

          <div className='mt-8  text-center h-full' >

            <div className='min-h-[280px]'>
              <p className='text-preset-6 text-neutral-400'>{currentCrewMember.role}</p>
              <p className='my-2 text-preset-4'>{currentCrewMember.name}</p>
              <p className='mt-6 text-preset-9'>{currentCrewMember.bio}</p>
            </div>

            <div className='my-6 px-10 flex gap-5 justify-center'>
              {crewData.map(item => (
                <button
                  className={`w-2 h-2 rounded-full  ${currentCrewMember.name === item.name ? 'bg-white' : 'bg-neutral-400'}`}
                  key={item.name}
                  onClick={() => setCurrrentCrewMember(item)}
                />
              ))}
            </div>


            <div className='max-w-[200px] mx-auto pt-10  '>
              <img className='w-full h-full' src={currentCrewMember.images.webp} alt="" />
            </div>
          </div>

        </div>
      </Container>
    </section >
  )
}

export default Crew
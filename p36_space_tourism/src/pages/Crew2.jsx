import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { imgBackgroundCrewDesktop, imgBackgroundCrewMobile, imgBackgroundCrewTablet } from '../assets'
import { BackgroundImage, Container } from '../components'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


function Crew2() {
  const currentViewport = useSelector(state => state.screenSlice.viewportSize)
  const crewData = useSelector(state => state.dataSlice.spaceData.crew)

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

          <div>
            <SwiperText crewData={crewData} />
          </div>

        </div>
      </Container>
    </section >
  )
}
export default Crew2


function SwiperText({ crewData }) {
  return (
    <>
      <Swiper
        spaceBetween={100}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {crewData.map(item => (
          <SwiperSlide key={item.name}>

            <div className='cursor-pointer pointer-events-none mt-8 text-center h-full lg:min-h-[400px] lg:flex lg:text-left lg:items-center lg:pb-10 lg:h-full ' >

              <div className='min-h-[280px] lg:w-[50%] max-w-[60ch] mx-auto '>
                <p className='text-preset-6 text-neutral-400'>{item.role}</p>
                <p className='my-2 text-preset-4'>{item.name}</p>
                <p className='mt-6 text-preset-9'>{item.bio}</p>
              </div>

              <div className=' h-[300px] w-fit mx-auto mb-10 lg:p-0 lg:max-w-full lg:w-[30%]'>
                <img className=' h-full' src={item.images.webp} alt="" />
              </div>
            </div>

          </SwiperSlide>

        ))}

      </Swiper>
    </>
  );
}

import { useSelector } from 'react-redux'
import { imgBackgroundCrewDesktop, imgBackgroundCrewMobile, imgBackgroundCrewTablet } from '../assets'
import { BackgroundImage, Container, PageHeading } from '../components'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const backgroundImageList = [
  { atViewport: 'small', imageSource: imgBackgroundCrewMobile },
  { atViewport: 'medium', imageSource: imgBackgroundCrewTablet },
  { atViewport: 'large', imageSource: imgBackgroundCrewDesktop }
]

function Crew() {
  const crewData = useSelector(state => state.dataSlice.spaceData.crew)

  return (
    <section className='relative'>

      <BackgroundImage backgroundImageList={backgroundImageList} />

      <Container>
        <div className='min-h-svh pt-[150px] lg:h-screen lg:flex lg:flex-col'>

          <PageHeading textNumber='02' textHeading='meet your Crew' />

          <div className='grow flex items-center'>
            <SwiperText crewData={crewData} />
          </div>

        </div>
      </Container>
    </section >
  )
}
export default Crew


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
          <SwiperSlide key={item.name} className=''>

            <div className='mt-8 text-center h-full cursor-pointer    lg:min-h-[400px] lg:h-full lg:pb-10 lg:flex lg:items-center lg:text-left ' >

              <div className='min-h-[280px] mx-auto max-w-[60ch] lg:w-[50%] lg:mx-0 '>
                <p className='text-preset-6 text-neutral-400'>{item.role}</p>
                <p className='my-2 text-preset-4'>{item.name}</p>
                <p className='mt-6 text-preset-9'>{item.bio}</p>
              </div>

              <div
                className='w-fit h-[300px] mx-auto mb-10    lg:max-w-full lg:w-[30%] lg:h-auto lg:m-0 lg:ml-auto lg:p-0'>
                <img className='mx-auto h-full' src={item.images.webp} alt="" />
              </div>
            </div>

          </SwiperSlide>

        ))}

      </Swiper>
    </>
  );
}

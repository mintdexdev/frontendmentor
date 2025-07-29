import { useState } from 'react';
import { featuredProjectList } from '../data/projectList.js';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { Autoplay, EffectCards, Thumbs, } from 'swiper/modules';
import FeatureCard from './cards/FeatureCard';

export default function Slider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <div>
        <Swiper
          className=" max-w-[85%] md:max-w-[60vw]"
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards, Autoplay, Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
          autoplay={{
            delay: 1000 * 20,
            disableOnInteraction: false,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {featuredProjectList.map((item) => (
            <SwiperSlide key={item.id}>
              <FeatureCard projectData={item} />
            </SwiperSlide>
          ))}
          {featuredProjectList.filter((_, index) => activeIndex === index).map(item => (
            <p className='text-center my-2' key={item.name} >{item.name}</p>
          ))
          }
        </Swiper>
      </div>

      <div className='mt-10'>
        <Swiper
          className=" max-w-full md:max-w-[70vw]"
          modules={[Thumbs]}
          watchSlidesProgress={true}
          onSwiper={setThumbsSwiper}
          slidesPerView={4}
          spaceBetween={5}
          breakpoints={{
            640: { spaceBetween: 10 },
          }}
        >
          {featuredProjectList.map((item, index) => (
            <SwiperSlide key={item.id} className=' '>
              <button type='button' className={`relative aspect-video rounded-xl overflow-clip
              border-2  ${activeIndex === index ? 'border-white saturate-150' : 'border-white/30 saturate brightness-25'}`}>
                < img src={item.images.cover.avif} alt='space tourism' />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div >

  );
}

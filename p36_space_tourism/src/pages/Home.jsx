import React from 'react'
import { BackgroundImage, Container } from '../components'
import { imgBackgroundHomeDesktop, imgBackgroundHomeMobile, imgBackgroundHomeTablet } from '../assets'
import { useSelector } from 'react-redux'

function Home() {
  const currentViewport = useSelector(state => state.screenSlice.viewportSize)

  return (
    <section className='relative'>

      <div className='absolute inset-0 z-[-999]'>
        {currentViewport === 'small' &&
          <BackgroundImage
            imgSource={imgBackgroundHomeMobile}
            alt={'space earth'} />
        }
        {currentViewport === 'medium' &&
          <BackgroundImage
            imgSource={imgBackgroundHomeTablet}
            alt={'space earth'} />
        }
        {currentViewport === 'large' &&
          <BackgroundImage
            imgSource={imgBackgroundHomeDesktop}
            alt={'space earth'} />
        }
      </div>

      <Container>
        <div className='min-h-svh pt-[clamp(120px,65.2174px+10.8696vw,200px)] flex flex-col lg:flex-row lg:items-center'>

          <div className='text-center'>
            <p className='text-preset-5'>
              So, you want to travel to
            </p>
            <h1 className='mt-2 mb-6 text-preset-1'>Space</h1>
            <p className='text-preset-9 max-w-[55ch] mx-auto'>
              Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
            </p>
          </div>

          <div className='p-8 flex items-center justify-center grow'>
            <button className='text-preset-4 px-10 aspect-square rounded-full bg-white text-black'>Explore</button>
          </div>

        </div>
      </Container>
    </section>
  )
}

export default Home
import React from 'react'
import { Container } from '../components'
import { imgBackgroundHomeMobile } from '../assets'

function Home() {
  return (
    <section className='relative'>
      <div className='absolute inset-0 z-[-999]'>
        <img className='w-full h-full object-cover'
          src={imgBackgroundHomeMobile} alt="space earth" />
      </div>
      <Container>
        <div className='min-h-svh flex flex-col pt-[clamp(120px,65.2174px+10.8696vw,200px)]'>

          <div className='text-center'>
            <p className='text-preset-5'>
              So, you want to travel to
            </p>
            <h1 className='mt-2 mb-6 text-preset-1'>Space</h1>
            <p className='text-preset-9 max-w-[55ch] mx-auto'>
              Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
            </p>
          </div>

          <div className='p-4 flex items-center justify-center grow'>
            <button className='text-preset-4 px-10 aspect-square rounded-full bg-white text-black'>Explore</button>
          </div>

        </div>
      </Container>
    </section>
  )
}

export default Home
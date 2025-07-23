import React from 'react'
import { Container } from '../components'
import { imgBackgroundHomeMobile } from '../assets'

function Home() {
  return (
    <section>
      <div className='absolute inset-0 z-[-999]'>
        <img className='w-full h-full object-cover'
          src={imgBackgroundHomeMobile} alt="space earth" />
      </div>
      <Container>
        <div className='h-svh pt-[clamp(100px,65.2174px+10.8696vw,200px)]'>

          <div className='h-full flex flex-col'>
            <div className='text-center'>
              <p className='text-preset-5'>
                So, you want to travel to
              </p>
              <h1 className='text-preset-1'>Space</h1>
              <p className='text-preset-9'>
                Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
              </p>
            </div>

            <div className='flex items-center justify-center grow'>
              <button className='text-preset-4 px-10 aspect-square rounded-full bg-white text-black'>Explore</button>
            </div>
          </div>

        </div>

      </Container>
    </section>
  )
}

export default Home
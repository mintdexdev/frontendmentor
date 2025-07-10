import React from 'react'
import { Container} from '../index.js';

import {
  imgDesktopInteractive,
  imgMobileInteractive,
} from '../../assets'

function Intro({currentDevice}) {
  return (
    <section>
      <Container>
        <div className='py-20 md:h-[100vh] md:max-h-[1000px]'>

          <div className='flex flex-col md:relative md:block md:h-full md:min-h-[500px]'>
            <div className='md:w-[60%] md:h-full'>
              {currentDevice === 'desktop' ?
                <img className='w-full h-full object-cover' src={imgDesktopInteractive} alt="vrglasses" />
                :
                <img className='w-full h-full object-cover' src={imgMobileInteractive} alt="vrglasses" />
              }
            </div>
            <div
              className='bg-white
              md:absolute md:bottom-0 md:right-0 md:w-[50%] md:px-[min(4vw,56px)] md:pt-[min(3vw,48px)] md:pb-0'
            >
              <h2 className='mb-8 leading-[120%] uppercase text-[max(2.25rem,10vw)] md:text-[min(4.5vw,5.5rem)] '>The Leader in Interactive VR</h2>
              <p className='font-semibold text-neutral-700'>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies arounf the globe. Our award-winning creations habe transformed businesses through digital experiences that bind to their brand.</p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}

export default Intro
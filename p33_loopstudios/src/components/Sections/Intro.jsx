import React from 'react'
import { Container } from '../index.js';

import {
  imgDesktopInteractive,
  imgMobileInteractive,
} from '../../assets'

function Intro({ currentDevice }) {
  return (
    <section>
      <Container>
        <div className='py-20 md:max-h-[1000px]'>

          <div className='md:relative bg-red-300/20'>
            <div className='md:absolute md:bottom-0 z-[-999] md:w-[60%] md:h-full'>
              {currentDevice === 'desktop' ?
                <img className='w-full h-full object-cover' src={imgDesktopInteractive} alt="vrglasses" />
                :
                <img className='w-full h-full object-cover' src={imgMobileInteractive} alt="vrglasses" />
              }
            </div>

            <div className='flex flex-col md:flex-row md:justify-end '>
              <div
                className='bg-white
               md:w-[50%] md:px-[min(4vw,56px)] md:pt-[min(3vw,48px)] md:pb-0 '
              >
                <h2 className='mb-8 leading-[120%] uppercase text-[max(2.25rem,10vw)] md:text-[min(4.5vw,5.5rem)] '>The Leader in Interactive VR</h2>
                <p className='font-semibold text-neutral-700'>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies arounf the globe. Our award-winning creations habe transformed businesses through digital experiences that bind to their brand.</p>
              </div>
            </div>
          </div>



        </div>

      </Container>
    </section>
  )
}

export default Intro
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
        <div className='pt-[clamp(5rem,6vw,10rem)] pb-10'>

          <div className='md:relative md:flex '>
            <div className='md:w-[60%]'>
              {currentDevice === 'desktop' ?
                <img className='w-full h-full object-cover' src={imgDesktopInteractive} alt="vrglasses" />
                :
                <img className='w-full h-full object-cover' src={imgMobileInteractive} alt="vrglasses" />
              }
            </div>
            <div
              className='bg-white md:absolute md:bottom-0 md:right-0
               md:w-[50%] md:px-[min(4vw,56px)] md:pt-[min(3vw,48px)] md:pb-0 '
            >
              <h2 className='mb-8 leading-[120%] uppercase text-[max(2.25rem,10vw)] md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl '>The Leader in Interactive VR</h2>
              <p className='font-semibold text-neutral-700 xl:text-xl 2xl:text-2xl '>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies arounf the globe. Our award-winning creations habe transformed businesses through digital experiences that bind to their brand.</p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}

export default Intro
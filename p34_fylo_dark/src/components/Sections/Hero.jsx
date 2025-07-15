import React from 'react'
import Container from '../Container'
import Button from '../Button'
import { imgIllustrationIntro } from '../../assets'

function Hero() {
  return (
    <section>
      <Container>
        <div className='mx-auto pt-5 pb-20 text-center'>


          <img className='mx-auto w-[30vw] 2xl:max-w-[640px]'
            src={imgIllustrationIntro} alt="" />


          <h1 className='max-w-[30ch] m-auto text-7xl my-10' >All your files in one secure location, accessible anywhere.</h1>

          <p className='mb-4'>
            Fylo stores all your most important files in one secure location.
            <br />
            Access them wherever you need, share and collaborate with friends family, and co-workers.
          </p>

          <Button>
            Get Started
          </Button>

        </div>
      </Container>
    </section>
  )
}

export default Hero
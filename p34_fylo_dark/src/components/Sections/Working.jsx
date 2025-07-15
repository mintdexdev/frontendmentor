import React from 'react'
import { iconArrow, imgIllustrationStayProductive } from '../../assets'
import Container from '../Container'

function Working() {
  return (
    <section id='working'>
      <Container>
        <div className='py-20'>

          {/* content-starts */}
          <div className='flex'>

            <div className='w-[50%] p-8'>
              <img src={imgIllustrationStayProductive} alt="Illustration of stay Productive" />
            </div>

            <div className='w-[50%] content-center'>
              <h2 className='text-5xl mb-5'> Stay productive, wherever you are </h2>

              <p className='mb-3'> Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs. </p>

              <p className='mb-3'> Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required. </p>

              <a className='relative text-cyan-300
              after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-[2px] after:bg-cyan-500'
                href="#working">
                See how Fylo works
                <img className='inline ml-2' src={iconArrow} alt="" />
              </a>
            </div>
          </div>
          {/* content-end */}

        </div>
      </Container>
    </section>
  )
}

export default Working
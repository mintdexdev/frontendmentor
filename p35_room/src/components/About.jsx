import { imgAboutDark, imgAboutLight } from '../assets/index.js'

function About() {
  return (
    <section>

      <div className='sm:flex sm:flex-wrap' >

        <div className='sm:order-1 sm:w-[50%] lg:w-[30%]'>
          <img className='w-full h-full object-cover' src={imgAboutDark} alt="Image of Dark Furniture" />
        </div>

        <div className='sm:order-3 lg:order-2 lg:w-[40%] px-[clamp(1.5rem,5vw,5rem)] py-10'>
          <h2 className='mb-4 uppercase font-bold tracking-[0.4rem]'>
            About our Furniture
          </h2>
          <p>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
        </div>

        <div className='sm:order-2 sm:w-[50%] lg:orer-3 lg:w-[30%]'>

          <img className='w-full h-full object-cover' src={imgAboutLight} alt="Image of Light Furniture" />
        </div>

      </div>

    </section>
  )
}

export default About
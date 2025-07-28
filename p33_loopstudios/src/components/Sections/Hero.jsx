import { imgDesktopHero } from '../../assets'
import Container from '../Container/Container'

function Hero({ currentDevice }) {
  return (
    <section className='w-full h-svh min-h-[604px] relative'>
      <img className='absolute inset-0 z-[-999] w-full h-full object-cover' src={imgDesktopHero} alt="" />

      <Container>
        <div className='py-40 h-svh min-h-[700px] flex items-center'>
          <div className='w-full p-[clamp(1.5rem,6vw,3rem)] border-4 border-white md:w-[50vw] md:p-20 md:min-w-fit'>
            <p className='break leading-[120%] text-[max(2.25rem,12vw)] md:text-[min(6vw,6rem)]  uppercase text-white'>Immersive
              <br />
              Experience
              <br />
              that {currentDevice === 'mobile' ? <br /> : null}
              deliver</p>
          </div>
        </div>
      </Container>
    </section >
  )
}

export default Hero
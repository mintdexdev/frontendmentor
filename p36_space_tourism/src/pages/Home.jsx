import { useNavigate } from 'react-router'
import {
  BackgroundImage,
  Container,
  SplitText
} from '../components'
import {
  imgBackgroundHomeMobile,
  imgBackgroundHomeTablet,
  imgBackgroundHomeDesktop,
} from '../assets'

const backgroundImageList = [
  { atViewport: 'small', imageSource: imgBackgroundHomeMobile },
  { atViewport: 'medium', imageSource: imgBackgroundHomeTablet },
  { atViewport: 'large', imageSource: imgBackgroundHomeDesktop }
]

function Home() {
  const navigate = useNavigate()

  return (
    <section className='relative'>
      <BackgroundImage backgroundImageList={backgroundImageList} />

      <Container>
        <div className='min-h-svh pt-[clamp(120px,65.2174px+10.8696vw,200px)] flex flex-col lg:flex-row lg:items-center'>

          <div className='text-center'>
            <p className='text-preset-5'>
              So, you want to travel to
            </p>
            <SplitText
              className='mt-2 mb-6 text-preset-1 pointer-events-none'
              text="Space"
              delay={100}
              duration={1.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />

            <p className='text-preset-9 max-w-[55ch] mx-auto'>
              Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
            </p>
          </div>

          <div className='p-8 flex items-center justify-center grow'>
            <button
              className='text-preset-4 px-10 aspect-square rounded-full bg-white text-black
              outline-0 outline-white/40 duration-400 ease-out hover:outline-[40px] active:scale-95 active:outline-[60px]'
              onClick={() => navigate('/destination')}
            >
              Explore
            </button>
          </div>

        </div>
      </Container>
    </section>
  )
}

export default Home
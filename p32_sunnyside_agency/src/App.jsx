import { useEffect, useState } from 'react';
import './App.css'
import { Container, FeatureCard, Footer, Header, MarketingMessageCard, Testimonials } from './components'

function App() {

  const [device, setDevice] = useState('mobile');

  useEffect(() => {
    setDevice('mobile')
    function handleResize() {
      if (window.innerWidth >= 640) {
        setDevice('desktop')
      } else {
        setDevice('mobile')
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const MarketingMessageList = [
    {
      imageSrc: `./images/${device}/image-transform.jpg`,
      alt: "image",
      title: "Transform your brand",
      description: "We are a full-service creative agency specializing in helping brands grow fast.Engage your clients through compelling visuals that do most of the marketing for you.",
      flip: true,
    },
    {
      imageSrc: `./images/${device}/image-stand-out.jpg`,
      alt: "image",
      title: "Stand out to the right audience",
      description: "We are a full-service creative agency specializing in helping brands grow fast.Engage your clients through compelling visuals that do most of the marketing for you.",
      flip: false,
    },
  ]

  const featureList = [
    {
      imageSrc: `./images/${device}/image-graphic-design.jpg`,
      alt: "graphic design",
      title: " Graphic design",
      description: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
    },
    {
      imageSrc: `./images/${device}/image-photography.jpg`,
      alt: "photography",
      title: "Photography",
      description: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",

    },
  ]

  return (
    <>
      <Header device={device} />
      <Container>
        {MarketingMessageList.map(item => (
          <MarketingMessageCard
            key={item.title}
            imageSrc={item.imageSrc}
            alt={item.alt}
            title={item.title}
            description={item.description}
            flip={item.flip}
          />
        ))}


        <div className='flex flex-col sm:flex-row'>
          {featureList.map(item => (
            <FeatureCard
              key={item.title}

              imageSrc={item.imageSrc}
              alt={item.alt}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <Testimonials />
      </Container>


      <Footer device={device} />
    </>
  )
}

export default App

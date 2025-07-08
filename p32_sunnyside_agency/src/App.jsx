import './App.css'
import { FeatureCard, Footer, Header, LearnMoreCTA, MarketingMessageCard, Testimonials } from './components'

function App() {

  const MarketingMessageList = [
    {
      imageSrc: "/images/desktop/image-transform.jpg",
      alt: "image",
      title: "Transform your brand",
      description: "We are a full-service creative agency specializing in helping brands grow fast.Engage your clients through compelling visuals that do most of the marketing for you.",
      flip: false,
    },
    {
      imageSrc: "/images/desktop/image-stand-out.jpg",
      alt: "image",
      title: "Stand out to the right audience",
      description: "We are a full-service creative agency specializing in helping brands grow fast.Engage your clients through compelling visuals that do most of the marketing for you.",
      flip: true,
    },
  ]

  const featureList = [
    {
      imageSrc: "/images/desktop/image-graphic-design.jpg",
      alt: "graphic design",
      title: " Graphic design",
      description: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
    },
    {
      imageSrc: "/images/desktop/image-photography.jpg",
      alt: "photography",
      title: "Photography",
      description: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",

    },
  ]

  return (
    <>
      <Header />

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


      <div className='flex'>
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

      <Footer />
    </>
  )
}

export default App

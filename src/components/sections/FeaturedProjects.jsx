import { Container, Slider } from '../index.js'

function FeaturedProjects() {
  return (
    <section id='featured-projects'>
      <Container>
        <div className='mb-20 overflow-clip'>
          <Slider />
        </div>
      </Container>
    </section>
  )
}

export default FeaturedProjects
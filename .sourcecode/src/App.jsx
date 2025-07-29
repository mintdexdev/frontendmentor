import { AllProjects, FeaturedProjects, Footer, AboutFrontendMentor } from './components'

function App() {
  return (
    <div className=' bg-neutral-950 text-neutral-200'>
      <main>
        <h1 className='text-[clamp(4rem,2.0385rem+8.7179vw,12.5rem)] text-center  font-semibold [font-variation-settings:"GRAD"_200]'>PROJECTS</h1>
        <FeaturedProjects />
        <AllProjects />
      </main>
      <AboutFrontendMentor />
      <Footer />
    </div>
  )
}

export default App
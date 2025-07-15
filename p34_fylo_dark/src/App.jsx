import './App.css'
import { CalltoActionCard, Comments, Container, EarlyAccess, Features, Footer, Header, Hero, Working } from './components'

function App() {

  return (
    <div className='bg-[hsl(218,28%,13%)] text-[hsl(0,0%,100%)] '>

      <Header />

      <Hero />

      <Features/>

      <Working/>

      <Comments/>

      <EarlyAccess/>

      <Footer/>
    </div>
  )
}

export default App

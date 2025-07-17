import { useEffect, useState } from 'react'
import './App.css'
import { About, Hero, Header } from './components/index.js'

function App() {

  const [currentViewport, setCurrentViewport] = useState('small')
  useEffect(() => {
    const checkcurrentViewport = () => {
      let viewportWidth = 'small';
      const viewportSize = window.innerWidth;

      if (viewportSize >= 1024) viewportWidth = 'large';
      else if (viewportSize >= 640) viewportWidth = 'medium';
      else viewportWidth = 'small';

      setCurrentViewport(viewportWidth);
    }
    checkcurrentViewport()
    window.addEventListener('resize', checkcurrentViewport)
    return () => window.removeEventListener('resize', checkcurrentViewport)
  }, [])

  return (
    <div className=' '>
      <Header currentViewport={currentViewport} />
      <Hero currentViewport={currentViewport} />
      <About />
    </div>
  )
}

export default App
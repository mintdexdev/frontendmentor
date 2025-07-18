import React, { useEffect, useState } from 'react'
import './App.css'
import { Creations, Intro, Footer, Header, Hero } from './components';



function App() {
  const [currentDevice, setCurrentDevice] = useState('desktop');
  const checkCurrentDevice = () => {
    if (window.innerWidth < 640) {
      setCurrentDevice('mobile')
    } else {
      setCurrentDevice('desktop')
    }
  }
  useEffect(() => {
    checkCurrentDevice()
    window.addEventListener('resize', checkCurrentDevice)
    return () => window.removeEventListener('resize', checkCurrentDevice);
  }, [])


  return (
    <div>
      <Header currentDevice={currentDevice}  />
      <Hero currentDevice={currentDevice} />

      <main>

        <Intro currentDevice={currentDevice} />
        <Creations currentDevice={currentDevice} />

      </main>
      <Footer />
    </div>
  )
}

export default App
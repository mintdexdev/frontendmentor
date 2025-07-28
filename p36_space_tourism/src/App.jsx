import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addSpaceData } from './store/dataSlice'
import { setViewportSize } from './store/screenSlice'

import { Outlet } from 'react-router';
import { Header, IntroLoading } from './components';
import { AnimatePresence } from 'motion/react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(() => {
    const checkViewportSize = () => {
      const viewport = window.innerWidth
      if (viewport < 640) { dispatch(setViewportSize('small')) }
      else if (viewport < 1024) { dispatch(setViewportSize('medium')) }
      else { dispatch(setViewportSize('large')) }
    }
    checkViewportSize()

    window.addEventListener('resize', checkViewportSize)
    return () => window.removeEventListener('resize', checkViewportSize)

  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch('/data/data.json')
        .then(res => res.json())
        .then(data => { dispatch(addSpaceData(data)) })
        .catch(err => console.error('Failed to load data.json', err))
        .finally(() => { setIsLoading(false) })
    }, 1000 )

    return () => clearTimeout(timer)
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading &&
          <IntroLoading />
        }
      </AnimatePresence>

      {!isLoading && (
        <div className='text-white'>
          <Header />
          <Outlet />
        </div>
      )}
    </>
  )
}

export default App
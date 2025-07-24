import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addSpaceData } from './store/dataSlice'
import { setViewportSize } from './store/screenSlice'

import { Outlet } from 'react-router';
import { Container, Header } from './components';

function App() {
  const [loading, setLoading] = useState(true);
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
    fetch('/data/data.json')
      .then(res => res.json())
      .then(data => { dispatch(addSpaceData(data)) })
      .catch(err => console.error('Failed to load data.json', err))
      .finally(() => setLoading(false))
  }, []);


  if (loading) return <p>Loading...</p>;

  return (
    <div className='text-white'>

      <Header />
      <Outlet />

    </div>
  )
}

export default App
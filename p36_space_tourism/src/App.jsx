import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addSpaceData } from './store/dataSlice'

import { Outlet } from 'react-router';
import { Container, Header } from './components';

function App() {
  const [currentViewport, setCurrentViewport] = useState('small');

  useEffect(() => {
    const checkViewportSize = () => {
      const viewport = window.innerWidth

      if (viewport < 640) {
        setCurrentViewport('small')
      } else if (viewport < 1024) {
        setCurrentViewport('medium')
      } else {
        setCurrentViewport('large')
      }
    }
    checkViewportSize()

    window.addEventListener('resize', checkViewportSize)
    return () => window.removeEventListener('resize', checkViewportSize)

  }, [])



  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(data => { dispatch(addSpaceData(data)) })
      .catch(err => console.error('Failed to load data.json', err))
      .finally(() => setLoading(false))

    // if api fetch
    // setTimeout(() => {
    //   fetch('/data/data.json')
    //     .then(res => res.json())
    //     .then(data => { dispatch(addSpaceData(data)) })
    //     .catch(err => console.error('Failed to load data.json', err))
    //     .finally(() => setLoading(false))
    // }, 1000); // 1 second delay


  }, []);


  if (loading) return <p>Loading...</p>;

  return (
    <div className='text-white'>

      <Header currentViewport={currentViewport} />
      <Outlet />

    </div>
  )
}

export default App
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addSpaceData } from './store/dataSlice'

import { Outlet } from 'react-router';
import { Container, Header } from './components';

function App() {
  const [viewport, setViewport] = useState(0)

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

    setViewport(window.innerWidth)

  }, []);


  if (loading) return <p>Loading...</p>;

  return (
    <div className='text-white'>

      {/* <Header /> */}
      <Outlet />

    </div>
  )
}

export default App
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Provider } from 'react-redux'
import store from './store/store.js'

import { createBrowserRouter, redirect, RouterProvider } from 'react-router'
import { Crew, Destination, Home, Technology } from './pages'

const router = createBrowserRouter([
  { path: '*', loader: () => redirect('/') },
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: '/destination', element: <Destination /> },
      { path: '/crew', element: <Crew /> },
      { path: 'technology', element: <Technology /> },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)

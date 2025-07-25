import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Provider } from 'react-redux'
import store from './store/store.js'

import { createBrowserRouter, redirect, RouterProvider } from 'react-router'
import { Home } from './pages'

const router = createBrowserRouter([
  { path: '*', loader: () => redirect('/') },
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> }
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

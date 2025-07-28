import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Provider } from 'react-redux'
import store from './store/store.js'

import { Crew, Destination, Home, Technology } from './pages'

// for routing on server like netlify or vercel
import { createBrowserRouter, redirect, RouterProvider } from 'react-router'

const router = createBrowserRouter([
  { path: '*', loader: () => redirect('/') },
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'destination', element: <Destination /> },
      { path: 'crew', element: <Crew /> },
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

// for static like liver server or github pages
// import { createHashRouter, RouterProvider, redirect } from 'react-router';

// const router = createHashRouter([
//   { path: '*', loader: () => redirect('/') },
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: 'destination', element: <Destination /> },
//       { path: 'crew', element: <Crew /> },
//       { path: 'technology', element: <Technology /> },
//     ],
//   },
// ])
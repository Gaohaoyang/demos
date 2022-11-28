import React from 'react'
import ReactDOM from 'react-dom/client'
import loadable from '@loadable/component'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import LoadingPage from './LoadingPage'

const FerrisWheel = loadable(() => import('./FerrisWheel'), {
  fallback: <LoadingPage />,
})
const MultiRedBags = loadable(() => import('./MultiRedBags'), {
  fallback: <LoadingPage />,
})
const LoadingDots = loadable(() => import('./LoadingDots'))

const CompositeImage = loadable(() => import('./CompositeImage'))

const VerticalSlide = loadable(() => import('./VerticalSlide'))

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/FerrisWheel',
    element: <FerrisWheel />,
  },
  {
    path: '/MultiRedBags',
    element: <MultiRedBags />,
  },
  {
    path: '/LoadingDots',
    element: <LoadingDots />,
  },
  {
    path: '/CompositeImage',
    element: <CompositeImage />,
  },
  {
    path: '/VerticalSlide',
    element: <VerticalSlide />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  // <React.StrictMode>
  <div>
    <RouterProvider router={router} />
  </div>,
  // </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

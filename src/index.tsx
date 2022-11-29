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
const LoadingDots = loadable(() => import('./LoadingDots'), {
  fallback: <LoadingPage />,
})

const CompositeImage = loadable(() => import('./CompositeImage'), {
  fallback: <LoadingPage />,
})

const VerticalSlide = loadable(() => import('./VerticalSlide'), {
  fallback: <LoadingPage />,
})

const CoinsFly = loadable(() => import('./CoinsFly'), {
  fallback: <LoadingPage />,
})

const StickyContainer = loadable(() => import('./StickyContainer'), {
  fallback: <LoadingPage />,
})

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
  {
    path: '/CoinsFly',
    element: <CoinsFly />,
  },
  {
    path: '/StickyContainer',
    element: <StickyContainer />,
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

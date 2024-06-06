import ReactDOM from 'react-dom/client'
import 'normalize.css'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const lazyWrap = (factory: () => Promise<any>) => {
  console.log('first lazyWrap')
  return async () => {
    const page = await factory()
    // https://reactrouter.com/en/main/route/lazy
    return {
      Component: page.default || page.Component,
      ErrorBoundary: page.ErrorBoundary,
      loader: page.loader,
    }
  }
}

const router = createHashRouter([
  {
    path: '/',
    element: <div>Hello world1!</div>,
  },
  {
    path: '/InfiniteCarouselScroll',
    element: <div>InfiniteCarouselScroll</div>,
    // lazy: lazyWrap(() => import('@/pages/Animations/InfiniteCarouselScroll')),
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
)

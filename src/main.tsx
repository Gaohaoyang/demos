// main.ts
import 'virtual:uno.css'
import ReactDOM from 'react-dom/client'
import 'normalize.css'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'

const lazyWrap = (factory: () => Promise<unknown>) => {
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
    lazy: lazyWrap(() => import('@/pages/Animations/InfiniteCarouselScroll')),
  },
])

const root = document.querySelector<HTMLDivElement>('root')
if (root) {
  ReactDOM.createRoot(root).render(<RouterProvider router={router} />)
}

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from 'react-router'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { myStore } from './redux/myStore.js'
import NotFound from './components/NotFound.jsx'
import ProductDetail from './components/ProductDetail.jsx'
import { lazy, Suspense } from 'react'


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />
  },
  {
    path: '/product/:id',
    element: <ProductDetail/>
  }])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>,
)

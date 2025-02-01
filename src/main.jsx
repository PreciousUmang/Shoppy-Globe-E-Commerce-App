import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createHashRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { myStore } from './redux/myStore.js';
import './index.css';
import App from './App.jsx';
import NotFound from './components/NotFound.jsx';
import { lazy, Suspense } from 'react';

const ProductList = lazy(() => import('./components/ProductList.jsx'));
const ProductDetail = lazy(() => import('./components/ProductDetail.jsx'));
const Cart = lazy(() => import('./components/Cart.jsx'));
const Checkout = lazy(() => import('./components/Checkout.jsx'))

const appRouter = createHashRouter([
  {

    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<div>Loading Product List...</div>}>
            <ProductList />
          </Suspense>
        ),
      },
      {
        path: '/product/:id',
        element: (
          <Suspense fallback={<div>Loading Product Details...</div>}>
            <ProductDetail />
          </Suspense>
        ),
      },
      {
        path: 'cart',
        element: (
          <Suspense fallback={<div>Loading Cart...</div>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: '/checkout',
        element: (
          <Suspense fallback={<div>Initiating Payment...</div>}>
            <Checkout />
          </Suspense>
        )
      }
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
],
  { basename: '/Shoppy-Globe-E-Commerce-App' });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myStore}>
      <HashRouter>
        <RouterProvider router={appRouter} /> 
        </HashRouter>
    </Provider>
  </StrictMode>
);
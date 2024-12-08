import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { myStore } from './redux/myStore.js';
import './index.css';
import App from './App.jsx';
import NotFound from './components/NotFound.jsx';
import { lazy, Suspense } from 'react';

// Lazy load components
const ProductList = lazy(() => import('./components/ProductList.jsx'));
const ProductDetail = lazy(() => import('./components/ProductDetail.jsx'));
const Cart = lazy(() => import('./components/Cart.jsx'));

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Wrap the App component which includes the Header
    errorElement: <NotFound />, // Error page without the Header
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
        path: '/cart',
        element: (
          <Suspense fallback={<div>Loading Cart...</div>}>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
  // The NotFound route is outside of the App layout, so no Header will be shown
  {
    path: '*',
    element: <NotFound />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
);

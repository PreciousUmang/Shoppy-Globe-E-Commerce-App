import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { myStore } from './redux/myStore.js';
import './index.css';
import App from './App.jsx';
import NotFound from './components/NotFound.jsx';
import { lazy, Suspense } from 'react';

const ProductList = lazy(() => import('./components/ProductList.jsx'));
const ProductDetail = lazy(() => import('./components/ProductDetail.jsx'));
const Cart = lazy(() => import('./components/Cart.jsx'));
const Checkout = lazy(() => import('./components/Checkout.jsx'));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myStore}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route
              index
              element={
                <Suspense fallback={<div>Loading Product List...</div>}>
                  <ProductList />
                </Suspense>
              }
            />
            <Route
              path="product/:id"
              element={
                <Suspense fallback={<div>Loading Product Details...</div>}>
                  <ProductDetail />
                </Suspense>
              }
            />
            <Route
              path="cart"
              element={
                <Suspense fallback={<div>Loading Cart...</div>}>
                  <Cart />
                </Suspense>
              }
            />
            <Route
              path="checkout"
              element={
                <Suspense fallback={<div>Initiating Payment...</div>}>
                  <Checkout />
                </Suspense>
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </Provider>
  </StrictMode>
);

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from 'react-router'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { myStore } from './redux/myStore.js'





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myStore}>
      <h2>Hello World</h2>
      <App />
    </Provider>
  </StrictMode>,
)

import './App.css'
import Header from './components/Header.jsx'
import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <>
      <ToastContainer />
      <Header />
      <Outlet />
    </>
  )
}

export default App

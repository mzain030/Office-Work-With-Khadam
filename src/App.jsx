import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/style.css'
import HomePage from './components/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PropsRecived from './components/PropsRecived'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route excep path='/' element={<HomePage/>}/>
      <Route excep path='/moveNextPage' element={<PropsRecived/>}/>
    </Routes>
    </BrowserRouter>
  {/* <HomePage/> */}
       
    </>
  )
}

export default App

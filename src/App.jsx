import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/style.css'
import HomePage from './components/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PropsRecived from './components/PropsRecived'
import UserReactIcons from './components/BasicURL'

function App() {
  return (
    <>
    <UserReactIcons/>
    <BrowserRouter>
    <Routes>
      <Route excep path='/' element={<HomePage/>}/>
      <Route excep path='/moveNextPage' element={<PropsRecived/>}/>
    </Routes>
    </BrowserRouter>
  <HomePage/>
  <button onClick={()=>setCount(count+1)}>+</button>
    <button onClick={()=>setCount(count-1)}>-</button>
       <div>Block1 </div>
    </>
  )
}

export default App

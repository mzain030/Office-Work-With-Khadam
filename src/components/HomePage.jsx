import React, { useState } from 'react'
import PropsRecived from './PropsRecived'

const HomePage = () => {
  const [color,setColor]=useState('')
  return (
    <div>
      <h1>My current state is {color}</h1>
      <button  onClick={()=>setColor("green")}>State Update Green</button>
      <button  onClick={()=>setColor("Yellow")}>Yellow</button><hr></hr>
        Search:<input ></input>
        <button>Click me</button>

<PropsRecived color={color}/>
    </div>
  )
}

export default HomePage
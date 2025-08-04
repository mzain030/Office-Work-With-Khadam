import React, { useState } from 'react'
import PropsRecived from './PropsRecived'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [color,setColor]=useState('');
  const history=useNavigate();
  const moveNextPage=()=>{
    return(
history('/moveNextPage')
    )
  }
  return (
    <div>
      <h1>My current state is {color}</h1>
      <button  onClick={()=>setColor("green")}>State Update Green</button>
    <div>Buu</div>

<PropsRecived color={color}/>
    </div>
  )
}

export default HomePage
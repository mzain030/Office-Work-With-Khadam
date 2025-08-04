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
     <div>My section</div>
     <div>My Section 2</div>
     <div>My dddd</div>
      <button  onClick={()=>setColor("green")}>State Update Green</button>
    <div>Buu</div>
    <span>Hellow Khadam</span>

<PropsRecived color={color}/>
    </div>
  )
}

export default HomePage
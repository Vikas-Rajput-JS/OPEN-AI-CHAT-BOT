import React, { useEffect } from 'react'
import Gif from '../Assets/robot.gif'
export default function Welcome() {
    
    useEffect(()=>{
  setTimeout(()=>{
      window.location.href='http://localhost:3000/chat'
        },3000)},[])
  return (
    <div className='w-[100%] h-[100vh] flex' style={{backgroundImage:'url(https://www.sciencenews.org/wp-content/uploads/2023/04/040823_chatgpt_feat.gif)',backgroundRepeat:'no-repeat',backgroundSize:'190vh',backgroundPositionX:'-250px'}}>
        <div className='w-[100%] h-[100vh] bg-transparent text-white flex justify-center items-center flex-col'>
        <img src={Gif} alt=""  />
        <h1 className='text-3xl animate-bounce' style={{'font-family': 'Ysabeau SC, sans-serif'}}>Please Wait......</h1>
        <h1 className='text-3xl animate-pulse' style={{'font-family': 'Ysabeau SC, sans-serif'}}>Redirecting You To Next-Gen AI-Assistent......</h1>
    </div>
      
    </div>
  )
}

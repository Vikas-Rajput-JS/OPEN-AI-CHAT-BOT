import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Gif from '../Assets/loader.gif'
import Wave from '../Assets/Wave.jpeg'
export default function LogIn() {
    const[name,setname]=useState("")
    const[email,setemail]=useState("")
    const[password,setpass]=useState("")
    const[confirmpass,setconfirmpass]=useState("")
    const[loading,setloading] = useState(false)
    
    useEffect(()=>{
  setloading(true);
  setTimeout(()=>{
  setloading(false);
  },3000)
    },[])
  return (
  
<div style={{backgroundImage:`url(${Wave})`}} className='w-[100%] h-[100vh] bg-transparent flex justify-center items-center ' onLoad={()=>{
   sessionStorage.setItem('valid',true)
}}>


{
    loading?(
        <div className='w-[100%] h-[100vh] bg-transparent flex justify-center items-center flex-col'>
            <img src={Gif} alt=""  />
            <h1 className='text-2xl animate-bounce' style={{'font-family': 'Ysabeau SC, sans-serif'}}>Please Wait......</h1>
        </div>
    ):<div className='w-[90%] h-[60vh]  sm:w-[40%] sm:h-[40vh] rounded-xl flex justify-evenly items-center flex-col' style={{background: '#f15f79',
    background: '-webkit-linear-gradient(to right, #b24592, #f15f79)',
    background: 'linear-gradient(to right, #b24592, #f15f79)'
    }}>
      <h1 className='absolute top-[10vh] text-red-500 text-2xl flex ' style={{'fontFamily': 'Ysabeau SC, sans-serif'}}>Log In <h1 className=' ml-3 text-slate-200 ' style={{'fontFamily': 'Ysabeau SC, sans-serif'}}>And Power Your Dreams</h1></h1>
     
      <div className="relative z-0 flex justify-evenly w-[100%]">
      <input value={email}  onChange={(e)=>{
        setemail(e.target.value)
        console.log(email)
      }} type="email" id="floating_filled" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-[70%] text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label for="floating_filled" class="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4  origin-[0] left-4.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Enter Email Address</label>
</div>
      <div className="relative z-0 flex justify-center w-[100%]">
      <input value={password} onChange={(e)=>{
        setpass(e.target.value)
        console.log(password)
      }} type="password" id="floating_filled" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-[70%] text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label for="floating_filled" class="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4  origin-[0] left-4.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Enter Your Password</label>
</div>
   
<div>
<button onClick={async()=>{
    const send = await fetch('http://localhost:5000/login',{
      method:'post',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({email,password})
    })
    const res =await send.json()
    console.log(res)
    setname(res.name)
    localStorage.setItem('data',JSON.stringify(res.name))
   
if( email=='' || password==''){
    toast.error('🦄 Please Enter All Fields!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        sessionStorage.setItem('valid',true)
}
if( password!=res.password || email!=res.email){
  toast.error('🦄 Please Enter Valid Credentials!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      sessionStorage.setItem('valid',true)
      setemail('')

setpass('')
}else{
  sessionStorage.setItem('valid',false)
 
  toast.success('🦄 Please Wait!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
    setTimeout(()=>{
      window.location.href='http://localhost:3000/Welcome'
      },3000)
}



   
}} type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-20 py-2.5 text-center mr-2 mb-2">Sign Up</button>
<h1>Don't have account? <Link to={'/'} className='text-green-400'>Sign Up</Link></h1>
</div>
<ToastContainer/>
    </div>
}
    </div>
    
  )
}

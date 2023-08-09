import React, { useEffect, useRef, useState } from "react";

import Wave from "../Assets/Wave4.jpeg";
import Bg from "../Assets/msg.png";
import Bg2 from "../Assets/Gradient.png";
import { SiSendinblue } from 'react-icons/si';







export default function Chat() {
  const [prompt, setprompt] = useState("");
  const scroll = useRef();
  const [input, setinput] = useState("");
  const[answer,setans]=useState([])
  const[qst,setqst]=useState([])
  const[style,setstyle]=useState({filter:'blur(10px)',backgroundImage: `url(${Bg2})`})
  const[style2,setstyle2]=useState({filter:'blur(10px)',backgroundImage: `url(${Bg})`})
  const[style3,setstyle3]=useState({ backgroundImage: `url(${Wave})`,filter:'blur(10px)' })

  const senddata = async () => {
const Getdata =  await fetch('http://localhost:5000/Chat',{
  method:'Post',
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify({qst:prompt})
})
const res = await Getdata.json();
console.log(res)
setans([...answer,{
  ans:res
}])
if(res){
  setTimeout(()=>{
    setstyle2({backgroundImage: `url(${Bg})`})
  },2000)
}
  };

  useEffect(()=>{
    setTimeout(()=>{
      setstyle3({ backgroundImage: `url(${Wave})` })
    },1000)
    
  },[qst])
  useEffect(()=>{
    scroll.current?.scrollIntoView({behavior:"smooth"})
  },[answer])

  return (
    <div
      className="w-[100%] h-[100vh] flex justify-around flex-col items-center"
      style={style3} 
    >
      <div className="w-[50%] bg-black h-[7vh] text-white rounded-xl shadow-xl shadow-black flex justify-center items-center mt-5">
        <h1
          className="text-3xl  text"
          style={{ "fontFamily": "Ysabeau SC, sans-serif" }}
        >
          Welcome To OPEN-AI-ASSISTENT
        </h1>
      </div>

      <div className="w-[100%] h-[93vh]  flex justify-center items-center ">
        <div className="w-[45%]  h-[80vh] rounded-2xl shadow-lg shadow-black">
          <div>
            <h1
              className="text-2xl text-white"
              style={{ "fontFamily": "Ysabeau SC, sans-serif" }}
            >
              Response
            </h1>
          </div>
          <div  className="w-[100%] h-[71vh]   rounded-2xl flex justify-start items-start flex-col overflow-auto response ">
            {
              answer.map((que,id)=>{
return(


                <div ref={scroll} key={id} className="w-[80%] h-auto bg-white flex justify-start items-start ml-5 flex-col rounded-2xl mt-4 shadow-2xl py-3 shadow-black px-2 " style={style2}>
              <h1
                className="text-2xl text-black px-3 py-3  "
                style={{ "fontFamily": "Ysabeau SC, sans-serif" }}
                >
               {que.ans}
               
              </h1>
             
            </div>
            )
              })
            }
          </div>
        </div>
        <div className="w-[45%]  h-[80vh] rounded-2xl shadow-lg shadow-black">
          <h1
            className="text-2xl text-white"
            style={{ "font-family": "Ysabeau SC, sans-serif" }}
          >
            Ask Me Questions!!
          </h1>
          <div className="w-[100%] h-[71vh]  rounded-2xl flex justify-start items-end flex-col overflow-auto response ">
            {
              qst.map((que,id)=>{
return(


                <div key={id} className="w-auto h-auto bg-white flex justify-start items-start flex-col rounded-2xl mr-5 mt-4 shadow-2xl py-3 shadow-black px-2 " style={style}>
              <h1
                className="text-2xl text-black  px-1 py-1 "
                style={{ "font-family": "Ysabeau SC, sans-serif" }}
                >
               {que.item}
              </h1>
             
            </div>
            )
              })
            }
          </div>
          <div className="flex justify-evenly items-center">
            {/* <input  className="w-[90%] h-[5vh] rounded-lg text-gray-950 text-center  font-serif" type="text" style={{border:'none',borderBottom:'2px solid red'}} /> */}
    <input id="input"  onChange={(e)=>{
setprompt(e.target.value)
            }} onKeyDown={(e)=>{
              
if(e.key==='Enter'){
  setqst([...qst,{
    item:e.target.value
   
  }])
  setprompt(e.target.value)
  senddata()
  console.log(qst)
  setTimeout(()=>{
    setstyle({backgroundImage: `url(${Bg2})`})
  },2000)
  e.target.value=''
}

            }}  type="text" className="py-3 px-4 block w-[85%] border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 shadow-xl shadow-black" placeholder="Ask Me Some Questions!!!" readonly/>
            <SiSendinblue onClick={()=>{
              let que = document.getElementById('input').value
              setqst([...qst,{
                item:que
              }])
              setTimeout(()=>{
                setstyle({})
              },2000)
              senddata()
            }} size={'4vh'} className="cursor-pointer animate-spin animation duration-100 hover:scale-110 " />
          </div>
        </div>
      </div>
    </div>
  );
}

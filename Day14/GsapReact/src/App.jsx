import React,{useRef} from 'react'
import './App.css';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { div } from 'motion/react-client';


const App = () => {
  // const gsapRef = useRef();

  // useGSAP( ()=>{
  //   gsap.to(gsapRef.current,{
  //    x:1500,
  //    duration:2,
  //    delay:1,
  //    rotate:720 
  //   })
  // })

  // useGSAP(() =>{
  //   gsap.to(".box",{
  //     x:1000,
  //     duration:2,
  //     delay:1
  //   })
  // })

  // useGSAP(() =>{
  //   gsap.to(".box",{
  //     x:1000,
  //     duration:2,
  //     delay:1
  //   })
  // },{scope:".box"})
  return (
    <div className=" box w-[100%] h-[100vh] p-[20px]">
      <div ref={gsapRef} className="w-[300px] h-[300px] bg-[red] rounded-[10px]"></div>
    </div>
    )
}

export default App
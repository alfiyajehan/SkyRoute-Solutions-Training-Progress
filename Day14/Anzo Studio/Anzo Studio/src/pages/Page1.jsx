import React, { useRef, useState } from 'react'
import TiltText from '../components/TiltText'
import Page1Bottom from '../components/Page1Bottom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Page1 = () => {
  const tiltRef = useRef(null)
  const [xVal, setXVal] = useState(0)
  const [yVal, setYVal] = useState(0)

  const mouseMoving = (e) => {
    setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width/2)/40)
    setYVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height/2)/20)
  }

  useGSAP(() => {
    gsap.to(tiltRef.current, {
      transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration: 4,
      // ease: 'elastic.out(1, 0.3)',
      ease: 'power4.out'
    })
  }, [xVal, yVal]) // jab jab xVal and yVal ki values change hongi iske andar ke function ki values bhi update hoti rahengi

  return (
    <div id='page1' onMouseMove={(e) => {
      mouseMoving(e)
    }} className='h-screen p-6 relative bg-white'>
        <div id='page1-in' className='shadow-xl p-28 shadow-gray-700 h-full w-full rounded-[50px] bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_2494,h_1083,fp_0.69_0.64,q_90,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg)] bg-cover'>
          <img className='h-20' src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_83,h_83,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2053.png" alt="" />


          <TiltText abc={tiltRef} />
          <Page1Bottom />
        </div>
    </div>
  )
}

export default Page1
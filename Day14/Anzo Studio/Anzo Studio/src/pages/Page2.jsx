import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const Page2 = () => {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(function(){
        gsap.from('.rotateText', {
            transform: `rotateX(-80deg)`,
            opacity:0,
            duration: 1,
            stagger: 1,
            scrollTrigger: {
                trigger: '.rotateText',
                start: "top 60%",
                end: "top -270%",
                scrub: 2
            }
        })
    })

  return (
    <div id='section2' className='bg-white text-center p-24 text-black'>
        <h3 className='text-gray-500 text-2xl font-[anzo3]'>©  anzo.studio 2024 | designed and developed</h3>
 
        <div className='rotateText mt-32'>
            <h1 className='text-[42vw] text-black font-[anzo4] uppercase leading-[35vw]'>IMPACTFUL</h1>
        </div>
        <div className='rotateText'>
            <h1 className='text-[42vw] text-black font-[anzo4] uppercase leading-[35vw]'>DESIGN</h1>
        </div>
        <div className='rotateText'>
            <h1 className='text-[42vw] text-black font-[anzo4] uppercase leading-[35vw]'>IS THE</h1>
        </div>
        <div className='rotateText'>
            <h1 className='text-[42vw] text-black font-[anzo4] uppercase leading-[35vw]'>DESIGN</h1>
        </div>
        <div className='rotateText'>
            <h1 className='text-[42vw] text-black font-[anzo4] uppercase leading-[35vw]'>THAT</h1>
        </div>
        <div className='rotateText'>
            <h1 className='text-[42vw] text-black font-[anzo4] uppercase leading-[35vw]'>WORKS</h1>
        </div>
    </div>
  )
}

export default Page2
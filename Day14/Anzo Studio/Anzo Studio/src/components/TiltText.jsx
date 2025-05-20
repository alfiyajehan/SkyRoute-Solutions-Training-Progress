import React from 'react'

const TiltText = (props) => {
  return (
    <div id='tiltDiv' ref={props.abc} className='mt-20'>
      <h1 className='text-[3vw] leading-[3vw] uppercase font-[anzo5]'>I AM <span className='text-black'>DARK MODE</span>™</h1>
      <h1 className='text-[6vw] leading-[5vw] font-[anzo1]'>DESIGNER</h1>
      <h1 className='text-[3vw] leading-[3vw] uppercase font-[anzo5]'>TO HIRE</h1>
    </div>
  )
}         

export default TiltText
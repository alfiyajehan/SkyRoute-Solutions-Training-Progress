import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'

const Page1Bottom = () => {
  useGSAP(function() {
    gsap.to('#banner img', {
      rotate: 360,
      duration: 5,
      repeat: -1,
      ease: 'linear'
    })
  })

  return (
    <div className='absolute left-0 bottom-0 px-32 pb-20 flex items-end justify-between w-full'>
      <div>
        <h2 className='text-2xl font-[anzo2]'>BRAND DESIGN | WEBSITE DESIGN</h2>
        <h3 className='text-2xl font-[anzo3] text-gray-400'>BESPOKE FREELANCE</h3>
      </div>
      <div id='banner'>
        <img src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_94,h_94,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cssda-wotd-white.png" alt="" />
        <img className='mt-2' src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_94,h_94,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EN_legend_large.png" alt="" />
      </div>
    </div>
  )
}

export default Page1Bottom
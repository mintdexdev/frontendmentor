import React from 'react'
import { LearnMoreCTA } from '../index'

function MarketingMessageCard({ imageSrc, alt, title, description, flip = false }) {
  return (
    <div className={`w-full flex ${flip ? "flex-row-reverse" : ""}`}>
      <div className='w-[50%] p-20 flex flex-col justify-center gap-10'>
        <h2 className='text-4xl font-bold'>{title}</h2>
        <p className='text-neutral-600 font-semibold'>{description}</p>
        <LearnMoreCTA />
      </div>
      <div className='w-[50%]'>
        <img
          className='w-full h-full object-cover'
          src={imageSrc}
          alt={alt} />
      </div>
    </div>
  )
}

export default MarketingMessageCard
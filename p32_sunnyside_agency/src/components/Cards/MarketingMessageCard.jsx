import React from 'react'
import { LearnMoreCTA } from '../index'

function MarketingMessageCard({ imageSrc, alt, title, description, flip = false }) {
  return (
    <div className={`w-full flex flex-col sm:flex-row ${flip ? "sm:flex-row-reverse" : ""}`}>
      <img
        className='w-full sm:w-[50%] object-cover'
        src={imageSrc}
        alt={alt} />
      <div
        className='w-full px-4 pt-4 pb-12 flex flex-col
        sm:w-[50%] sm:p-8 sm:justify-center lg:p-20'>
        <h2 className='mb-6 text-4xl font-bold'>{title}</h2>
        <p className='text-neutral-600 font-semibold'>{description}</p>
        <LearnMoreCTA />
      </div>
    </div>
  )
}

export default MarketingMessageCard
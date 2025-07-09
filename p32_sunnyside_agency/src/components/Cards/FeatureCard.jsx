import React from 'react'

function FeatureCard({ imageSrc, alt, title, description }) {
  return (
    <div className='relative w-full sm:w-[50%]'>
      <img
        className='w-full'
        src={imageSrc}
        alt={alt} />
      <div
        className='absolute left-0 right-0 bottom-0
        px-4 py-8 flex flex-col items-center justify-center
        sm:p-8 lg:px-20 lg:py-12'>
        <h2 className='mb-5 text-3xl font-bold text-neutral-900/70'>{title}</h2>
        <p className='font-semibold text-center text-neutral-900/50'>{description}</p>
      </div>

    </div>
  )
}

export default FeatureCard
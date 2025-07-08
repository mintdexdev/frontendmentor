import React from 'react'

function FeatureCard({ imageSrc, alt, title, description }) {
  return (
    <div className='w-[50%] relative'>
      <img
        className='w-full'
        src={imageSrc}
        alt={alt} />
      <div className='p-20 absolute left-0 right-0 bottom-0 flex flex-col items-center justify-center'>
        <h2 className='mb-5 text-3xl font-bold text-neutral-900/70'>{title}</h2>
        <p className='font-semibold text-center text-neutral-900/50'>{description}</p>
      </div>

    </div>
  )
}

export default FeatureCard
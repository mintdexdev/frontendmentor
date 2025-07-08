import React from 'react'

function TestimonialCard({ image, name, role, comment }) {
  return (
    <div className='flex flex-col items-center p-8'>
      <img
        className='rounded-full w-[80px] h-[80px]'
        src={image} alt="" />
      <p className='my-14 text-lg text-center font-semibold text-neutral-600'>"{comment}"</p>
      <p className='text-xl font-bold text-neutral-900'>{name}</p>
      <p className='text-neutral-400 font-semibold'>{role}</p>
    </div>
  )
}

export default TestimonialCard
import React from 'react'

function TestimonialCard({ image, name, role, comment }) {
  return (
    <div className='p-4 flex flex-col items-center sm:p-0 lg:p-4'>
      <img
        className='rounded-full w-[80px] h-[80px]'
        src={image} alt="" />
      <p className='my-4 text-lg text-center font-semibold text-neutral-600'>"{comment}"</p>
      <p className='text-xl font-bold text-neutral-900'>- {name}</p>
      <p className='text-neutral-400 font-semibold'>{role}</p>
    </div>
  )
}

export default TestimonialCard
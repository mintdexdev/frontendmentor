import React from 'react'

function FeatureCard({ imgSource = '', title, body }) {
  return (
    <div className='max-w-[50ch] text-center p-4 '>
      <img className='m-auto'
      src={imgSource} alt="" />
      <h3 className='text-4xl mt-8 mb-4'>{title}</h3>

      <p className='text-lg text-neutral-400'>{body}</p>
    </div>
  )
}

export default FeatureCard
import React from 'react'

function CreationCard({ imgSrc, name }) {
  return (
    <div className='relative'>
      <div className='relative after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:to-black after:z-10'>
        <img className='w-full h-auto' src={imgSrc} alt={`${name.n1} ${name.n2}`} />
      </div>

      <div className='absolute left-4 bottom-4 uppercase text-3xl text-white z-20'>
        <p>{name.n1}</p>
        <p>{name.n2}</p>
      </div>
    </div>
  )
}

export default CreationCard
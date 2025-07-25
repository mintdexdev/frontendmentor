import React from 'react'

function BackgroundImage({ imgSource, alt }) {
  return (
    <img className='w-full h-full object-cover'
      src={imgSource} alt={alt} />
  )
}

export default BackgroundImage
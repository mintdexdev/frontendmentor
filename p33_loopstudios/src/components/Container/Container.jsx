import React from 'react'

function Container({ children }) {
  return (
    <div className='w-full max-w-[2000px] mx-auto px-[clamp(1.5rem,5vw,8rem)] '>
      {children}
    </div>
  )
}

export default Container
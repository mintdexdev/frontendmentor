import React from 'react'

function Container({ children }) {
  return (
    <div className='px-[clamp(24px,-15.4839px+10.9677vw,160px)] max-w-[1920px] mx-auto'
    >{children}</div>
  )
}

export default Container
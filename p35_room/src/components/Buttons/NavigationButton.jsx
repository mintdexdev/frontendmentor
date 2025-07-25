import React from 'react'

function NavigationButton({ children, className = '', ...props }) {
  return (
    <button
      className={`p-[clamp(1rem,4vw,2rem)] bg-black ${className}`}
      {...props}
      type='button'
    >
      {children}
    </button >
  )
}

export default NavigationButton
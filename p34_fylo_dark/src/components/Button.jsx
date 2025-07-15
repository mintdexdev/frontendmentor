import React from 'react'

function Button({
  children,
  className = '',
  ...props }) {
  return (
    <button
      className={`px-10 pt-1.5 pb-2 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-700 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
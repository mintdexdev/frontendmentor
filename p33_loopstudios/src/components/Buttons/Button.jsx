import React from 'react'


function Button({
  children,
  className = '',
  props
}) {
  return (
    <div
      className={`bg-white border-2 w-fit h-fit px-4 py-2 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Button
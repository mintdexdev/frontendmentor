import React from 'react'
import { imgLogo } from '../assets'

function Logo({ className = '', ...props }) {
  return (
    <img className={`${className}`}
      {...props}
      src={imgLogo} alt="" />
  )
}

export default Logo
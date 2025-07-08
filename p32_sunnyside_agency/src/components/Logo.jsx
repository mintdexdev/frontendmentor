import React from 'react'

function Logo({ width = '100px' }) {
  return (
    <a href="/">
      <img className=''
        src="/images/logo.svg"
        alt="Logo"
      />
    </a>
  )
}

export default Logo

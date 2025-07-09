import React from 'react'

function Container({ children}) {
  return (
    <div className={`w-full m-auto`}>{children}</div>
  )
}

export default Container
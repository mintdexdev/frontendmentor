import React from 'react'

function LearnMoreCTA({ link = "/" }) {
  return (
    <a className='w-fit ml-2 uppercase font-bold text-xl relative hover:text-neutral-700
        before:absolute before:z-[-1]  before:left-[-8px] before:bottom-[-4px] before:right-[-8px] before:top-[55%] before:rounded-full  before:bg-amber-400/70 hover:before:bg-amber-500/30 '
      href={link}>
      Learn More
    </a>
  )
}

export default LearnMoreCTA
import { motion as m } from 'motion/react'
import React from 'react'

function IntroLoading() {
  return (
    <m.div className='absolute inset-0 z-[999] bg-black flex justify-center items-center'
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <m.p className='text-preset-5 text-white'
        animate={{ opacity: 0.3 }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      >LOADING...
      </m.p>


    </m.div>
  )
}

export default IntroLoading
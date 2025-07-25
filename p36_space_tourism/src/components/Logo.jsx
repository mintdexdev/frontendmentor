import { motion } from 'motion/react'
import { imgLogo } from '../assets'

function Logo() {
  return (
    <motion.img
      src={imgLogo} alt="website logo"
      animate={{ rotate: [0, 180, 180, 360] }}
      transition={{
        duration: 1,
        delay: 7,
        times: [0, 0.43, 0.55, 1],
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 7,
      }}
    />
  )
}

export default Logo
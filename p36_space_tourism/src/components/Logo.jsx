import { imgLogo } from '../assets'
import { motion } from 'motion/react'

export default function Logo() {
  return (
    <motion.img
      src={imgLogo}
      alt="website logo"
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
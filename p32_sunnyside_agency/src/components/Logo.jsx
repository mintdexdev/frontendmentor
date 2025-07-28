import { motion as m } from 'motion/react'

export default function Logo() {
  return (
    <a href="/" >
      <m.img
        src="./images/logo.svg"
        alt="website logo"
        initial={{ scale: 1 }}
        animate={{ opacity: [1, 0, 1] }}
        transition={{
          opacity: {
            duration: 1,
            delay: 7,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 7,
          },
        }}
      />
    </a>
  )
}
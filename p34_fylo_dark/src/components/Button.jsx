import { motion as m } from 'motion/react'

export default function Button({
  children,
  className = '',
  ...props }) {

  return (
    <m.button
      className={`px-10 pt-1.5 pb-2 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-700 duration-500  transition-colors ease-out
        hover:from-cyan-800 hover:to-cyan-300
        ${className}`}
      {...props}

      whileHover={{ scale: 1.02, }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </m.button>
  )
}
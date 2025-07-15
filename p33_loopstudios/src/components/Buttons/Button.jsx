import React from 'react'
import { motion } from 'motion/react'

function Button({
  children,
  className = '',
  props
}) {
  return (
    <motion.div
      className={`bg-white border-2 w-fit h-fit px-4 py-2 cursor-pointer ${className} will-change-transform`}
      {...props}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  )
}

export default Button
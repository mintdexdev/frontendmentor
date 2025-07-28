import { motion } from 'motion/react'

export default function Button({
  children,
  className = '',
  props
}) {
  return (
    <a href="/all-projects">
      <motion.div
        className={`bg-white border-2 w-fit h-fit px-4 py-2 cursor-pointer ${className} will-change-transform`}
        {...props}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.div>
    </a>
  )
}
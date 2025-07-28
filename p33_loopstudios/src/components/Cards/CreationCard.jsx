import { motion } from 'motion/react'

function CreationCard({ imgSrc, name }) {
  return (
    <a href="#all-creations" className=''>
      <motion.div className='relative overflow-hidden '
        whileHover={{ filter: 'brightness(60%)' }}
        whileTap={{ scale: 0.98 }}
      >
        <div className='after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:to-black after:z-10 after:pointer-events-none'
        >
          <motion.img className='w-full h-auto ' src={imgSrc} alt={`${name.n1} ${name.n2}`}
            whileHover={{ scale: 1.05 }} />
        </div>

        <div className='absolute left-4 bottom-4 uppercase text-3xl text-white z-20'>
          <p>{name.n1}</p>
          <p>{name.n2}</p>
        </div>
      </motion.div>
    </a>
  )
}

export default CreationCard
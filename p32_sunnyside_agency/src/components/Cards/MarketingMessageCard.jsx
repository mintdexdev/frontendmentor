import { LearnMoreCTA } from '../index'
import { motion } from 'motion/react'

function MarketingMessageCard({ imageSrc, alt, title, description, flip = false }) {

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const fadeInUpDelayed = {
    ...fadeInUp,
    transition: { ...fadeInUp.transition, delay: 0.2 },
  };

  return (
    <div className={`w-full flex flex-col sm:flex-row ${flip ? "sm:flex-row-reverse" : ""}`}>
      <img
        className='w-full sm:w-[50%] object-cover'
        src={imageSrc}
        alt={alt} />
      <div
        className='w-full px-4 pt-4 pb-12 flex flex-col
        sm:w-[50%] sm:p-8 sm:justify-center lg:p-20'>

        <motion.h2 className='mb-6 text-4xl font-bold'
          {...fadeInUp}
        >
          {title}
        </motion.h2>

        <motion.p
          className='text-neutral-600 font-semibold'
          {...fadeInUpDelayed}
        >
          {description}
        </motion.p>
        <LearnMoreCTA
        />
      </div>
    </div>
  )
}

export default MarketingMessageCard

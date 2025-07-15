import React from 'react'
import { Button } from '../index.js'

function CalltoActionCard() {
  return (
    <div className='max-w-[100ch] px-20 py-10 mx-auto text-center bg-[hsl(222,26%,15%)] shadow-md shadow-black/40
          relative translate-y-[50%]
              '>

      <h2 className='mb-6 text-4xl'> Get early access today      </h2>

      <p className='mb-6'>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>

      <form className=" flex flex-col items-center justify-between gap-4 md:flex-row ">
        <input
          className='w-[calc(100%-30ch)] px-8 pb-2 py-1.5 bg-white rounded-full text-black'
          type="email"
          id='email-address'
          placeholder='email@example.com'
        />

        <Button> Get Started For Free </Button>
      </form>
    </div>
  )
}

export default CalltoActionCard
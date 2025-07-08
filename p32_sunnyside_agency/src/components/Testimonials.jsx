import React from 'react'
import { Container, TestimonialCard } from './'

function Testimonials() {
  const testimonialList = [
    {
      image: "/images/image-emily.jpg",
      name: "Emily R.",
      role: "Marketing Director",
      comment: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
    },
    {
      image: "/images/image-thomas.jpg",
      name: "Thomas S.",
      role: "Chief Operating Officer",
      comment: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
    },
    {
      image: "/images/image-jennie.jpg",
      name: "Jennie F.",
      role: "Business Owner",
      comment: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
    },
  ]
  return (
    <section className='py-10'>
      <h2 className='mb-10 text-center text-4xl  tracking-widest font-semibold uppercase text-neutral-500'>
        Client testimonials
      </h2>
      <Container className='m-auto  max-w-[1280px] flex'>
        {testimonialList.map(item => (
          <TestimonialCard
            key={item.name}
            image={item.image}
            name={item.name}
            role={item.role}
            comment={item.comment}
          />
        ))}

      </Container>
    </section>
  )
}

export default Testimonials
import React from 'react'
import CommentCard from '../Cards/CommentCard'
import Container from '../Container'
import { imgProfile1, imgProfile2, imgProfile3 } from '../../assets'

function Comments() {

  const commentList = [
    {
      name: 'Satish Patel',
      position: 'Founder & CEO, Huddle',
      comment: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
      imageSource: imgProfile1,
    },
    {
      name: 'Bruce McKenzie',
      position: 'Founder & CEO, Huddle',
      comment: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
      imageSource: imgProfile2,
    },
    {
      name: 'Iva Boyd',
      position: ' Founder & CEO, Huddle',
      comment: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
      imageSource: imgProfile3,
    },
  ]

  return (
    <section>
      <Container>
        <div className='py-20  relative before:absolute before:top-0 before:left-0 before:w-full before:h-[1px] before:bg-neutral-600 
         after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-neutral-600 '>

          {/* content-starts */}
          <div className='w-fit flex gap-8 flex-col md:flex-row
          '>
            {commentList.map(item => (
              <CommentCard
                key={item.name}
                name={item.name}
                position={item.position}
                comment={item.comment}
                imageSource={item.imageSource}
              />
            ))}
          </div>
          {/* content-end */}

        </div>
      </Container>
    </section>
  )
}

export default Comments
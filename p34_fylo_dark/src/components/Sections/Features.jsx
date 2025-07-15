import React from 'react'
import Container from '../Container'
import FeatureCard from '../Cards/FeatureCard'
import { iconAccessAnywhere, iconAnyFile, iconCollaboration, iconSecurity } from '../../assets'

function Features() {

  const featureList = [
    {
      imgSource: iconAccessAnywhere,
      title: 'Access your files, anywhere',
      body: 'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.'
    },
    {
      imgSource: iconSecurity,
      title: ' Security you can trust',
      body: '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.'
    },
    {
      imgSource: iconCollaboration,
      title: 'Real-time collaboration',
      body: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.'
    },
    {
      imgSource: iconAnyFile,
      title: 'Store any type of file',
      body: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
    },
  ]

  return (

    <section>
      <Container>
        <div
          className='py-20 flex justify-center items-center
         relative before:absolute before:top-0 before:left-0 before:w-full before:h-[1px] before:bg-neutral-600 
         after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-neutral-600 
        '>

          <div className='max-w-[1200px] grid grid-cols-2 gap-14 justify-items-center'>
            {featureList.map(item => (
              <FeatureCard
                key={item.title}
                imgSource={item.imgSource}
                title={item.title}
                body={item.body}
              />
            ))}
          </div>

        </div>
      </Container>
    </section>

  )
}

export default Features
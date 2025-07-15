import React from 'react'
import { Container, Button, CreationCard } from '../index.js';

import {
  imgDesktopDeepEarth,
  imgDesktopNightArcade,
  imgDesktopSoccerTeam,
  imgDesktopGrid,
  imgDesktopFromAbove,
  imgDesktopPocketBorealis,
  imgDesktopCuriosity,
  imgDesktopFisheye,

  imgMobileDeepEarth,
  imgMobileNightArcade,
  imgMobileSoccerTeam,
  imgMobileGrid,
  imgMobileFromAbove,
  imgMobilePocketBorealis,
  imgMobileCuriosity,
  imgMobileFisheye
} from '../../assets/index.js'

function Creations({ currentDevice }) {


  let creationList = [
    { imgSrc: imgDesktopDeepEarth, name: { n1: "Deep", n2: "Earth" } },
    { imgSrc: imgDesktopNightArcade, name: { n1: "Night", n2: "Arcade" } },
    { imgSrc: imgDesktopSoccerTeam, name: { n1: "Soccer", n2: "Team VR" } },
    { imgSrc: imgDesktopGrid, name: { n1: "The", n2: "Grid" } },
    { imgSrc: imgDesktopFromAbove, name: { n1: "From up", n2: "Above VR" } },
    { imgSrc: imgDesktopPocketBorealis, name: { n1: "Pocket", n2: "Borealis" } },
    { imgSrc: imgDesktopCuriosity, name: { n1: "The", n2: "Curiosity" } },
    { imgSrc: imgDesktopFisheye, name: { n1: "Make it", n2: "FishEye" } },
  ]

  if (currentDevice === 'mobile') {
    creationList = [
      { imgSrc: imgMobileDeepEarth, name: { n1: "Deep", n2: "Earth" } },
      { imgSrc: imgMobileNightArcade, name: { n1: "Night", n2: "Arcade" } },
      { imgSrc: imgMobileSoccerTeam, name: { n1: "Soccer", n2: "Team VR" } },
      { imgSrc: imgMobileGrid, name: { n1: "The", n2: "Grid" } },
      { imgSrc: imgMobileFromAbove, name: { n1: "From up", n2: "Above VR" } },
      { imgSrc: imgMobilePocketBorealis, name: { n1: "Pocket", n2: "Borealis" } },
      { imgSrc: imgMobileCuriosity, name: { n1: "The", n2: "Curiosity" } },
      { imgSrc: imgMobileFisheye, name: { n1: "Make it", n2: "FishEye" } },
    ]
  }

  return (
    <section id='all-creations'>
      <Container>
        <div className='py-20 '>
          <div className='flex justify-center sm:justify-between items-center'>
            <h2 className=' mb-8 leading-[120%] uppercase text-[max(2.25rem,8vw)] md:text-[min(4.5vw,5.5rem)] '>Our Creations</h2>
            {currentDevice === 'desktop' ? <Button>SEE ALL</Button> : null}
          </div>
          <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8 '>
            {creationList.map(item => (
              <CreationCard
                key={`${item.name.n1} ${item.name.n2}`}
                imgSrc={item.imgSrc}
                name={item.name}
              />
            ))}
            {currentDevice === 'mobile' ?
              <div className='flex justify-center'>
                <Button>SEE ALL</Button>
              </div>
              : null}
          </div>

        </div>
      </Container>
    </section >
  )
}

export default Creations
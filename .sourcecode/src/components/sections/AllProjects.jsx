import { useEffect, useState } from 'react';
import { projectList } from '../../data/projectList';
import { Button, Container, ProjectCard } from '../index.js';

const AllProjects = () => {
  const [viewType, setViewType] = useState('grid')
  const [order, setOrder] = useState('latest first')
  const [projects, setProjects] = useState(projectList)

  useEffect(() => {
    if (order === 'oldest first') {
      setProjects(projectList);
    } else if (order === 'latest first') {
      setProjects([...projectList].reverse());
    }
  }, [order]);

  return (
    <section id='all-projects'>
      <Container>
        <div className=''>
          <h2 className='text-[clamp(2.5rem,1.4rem+5.5vw,8rem)]  text-center mb-4 tracking-[2px]'>All Projects</h2>

          <div className='my-5 flex justify-center gap-2 flex-wrap'>
            <button
              className='bg-neutral-900 w-[200px] py-2 rounded-full uppercase border border-white/20 duration-300 ease-out hover:bg-neutral-800 active:scale-95 '
              onClick={() => setViewType(prev => (prev === 'grid' ? 'list' : 'grid'))}
            >View: {viewType}</button>
            <button
              className='bg-neutral-900 w-[200px] py-2 rounded-full uppercase border border-white/20 duration-300 ease-out hover:bg-neutral-800 active:scale-95'
              onClick={() => setOrder(prev => (prev === 'oldest first' ? 'latest first' : 'oldest first'))}
            >Sort: {order}</button>
          </div>


          {viewType === 'grid' ?
            <div className='grid gap-2 sm:grid-cols-2 lg:grid-cols-3'>
              {projects.map((item) => (
                <ProjectCard
                  key={item.id}
                  imageSource={item.images.avif}
                  projectData={item} />
              ))}
            </div>
            :
            <ul className='grid sm:grid-flow-col sm:grid-rows-18 sm:grid-cols-2 lg:grid-rows-12 lg:grid-cols-3 '>
              {projects.map((item) => (
                <li 
                key={item.id} 
                >
                  <a href={item.link} target='_blank' title='Open Project in new tab'>
                    <div className='py-2 px-3.5 rounded-xl text-lg border-l-4 border-r-4 border-transparent duration-300 ease-out text-neutral-300 hover:text-white hover:border-white/20 hover:bg-white/2 active:scale-95'>
                      <span>{item.id}. </span>
                      {item.name}
                    </div>
                  </a>
                  <hr className='border-white/20'/>
                </li>
              ))}
            </ul>
          }

        </div>
      </Container>
    </section>
  )
}

export default AllProjects
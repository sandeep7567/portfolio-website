"use client"
import React from 'react'
import SectionHeading from '@/components/SectionHeading'
import { projectsData } from '@/lib/data'
import ProjectDetail from '@/components/ProjectDetail';

import useSectionInView from '@/lib/hooks'

const Projects = () => {

  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id='projects' className='scroll-m-28 mb-28'>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectDetail {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

export default Projects
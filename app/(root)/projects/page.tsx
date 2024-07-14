import ProjectCard from '@/components/ProjectCard'
import SectionHeader from '@/components/SectionHeader'
import { projects } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <div className='flex flex-col py-8'>
      <SectionHeader text1='Collection of my projects' text2='Projects.'></SectionHeader>
      <div className='w-full grid grid-cols-1 xl:grid-cols-2 gap-6 mt-10 mx-auto place-items-center'>
        {
          projects.map((project) => (
            <ProjectCard
              key={project.id} 
              id={project.id} 
              iconLists={project.iconLists} 
              title={project.title}
              des={project.des}
              img={project.img}
              link={project.link}
            ></ProjectCard>
          ))
        }
      </div>
    </div>
  )
}

export default Page
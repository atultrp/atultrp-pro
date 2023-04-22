import React from 'react'
import ProjectItem from './ProjectItem'
import projects from '../data/projects.json'

const Projects = () => {
  console.log(projects)
  return (
    <div className="dark:bg-[#004c53] bg-white dark:text-white py-1 px-6 sm:px-20 font-medium pb-10">
      <h2 className="custom-font text-4xl sm:text-5xl uppercase font-semibold text-center pt-16">Projects</h2>
      <div className="flex flex-wrap justify-center mt-5 mb-10 mx-auto">
        {projects?.map(item => {
          return <ProjectItem
            projectInfo={item}
          />
        })}
      </div>
    </div>
  )
}

export default Projects
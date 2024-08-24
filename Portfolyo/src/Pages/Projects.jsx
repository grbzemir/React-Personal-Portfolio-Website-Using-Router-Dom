import React from 'react'
import ProjectItem from '../Components/ProjectItem'
import { ProjectList } from '../Helper/ProjectList'

function Projects() {
    return (
        <div className='projects'>
            <h1>My Personal Projects</h1>
            <div className='projectList'>
                {ProjectList.map((project, index) => (
                    <ProjectItem key={index} image={project.image} name={project.name} />
                ))}
            </div>
        </div>
    )
}

export default Projects

import React from 'react'
import projectDetails from '../../Data/projects.json' 
import Project from './Project'
import './index.scss'

const Projects = () => {
    const listOfProjects = projectDetails.map((item, i) => <Project {...item} key={i} />)
    return (
        <div className="container-fluid"    data-proj='component-proj-list'>
            <h1>My Projects</h1>
            {listOfProjects}
        </div>
    );
};

export default Projects
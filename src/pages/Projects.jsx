import React from 'react';
import "../pages/CSS/Projects.css";
import Navbar from "../components/Navbar/Navbar";
import SocialMedia from "../components/SocialMedia/SocialMedia";
import Card from '../components/Card/Card';
import projectsData from './projectsData';


const Projects = () => {
  return (
    <div className='projects'>
      <Navbar className="navbarAbout" />
      <SocialMedia className="socialmediaAbout" />
      <div className="project-card-container">
        {projectsData.map((project) => (
          <Card
            key={project.id}
            name={project.name}
            description={project.discription}
            image={project.image}
            tags={project.tags}
            link={project.link}
            gitlink={project.gitlink}
          />
        ))}
      </div>
      <h1 className='projects-work'>WORK</h1>
      <h1 className='projects-swipe'>swipe</h1>
    </div>
  );
};

export default Projects;

import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Import GitHub and external link icons
import '../assets/css/Project.css';
import projectsData from '../data/proyectos.json'; // Import JSON

function Project() {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="projects-grid">
                {projectsData.map((project) => (
                    <div key={project.id} className="project-card">
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className="project-overlay">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <div className="technologies">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="tech-badge">{tech}</span>
                                ))}
                            </div>
                            <div className="button-container">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="button">
                                    <FaGithub />
                                </a>
                                <a href={project.url} target="_blank" rel="noopener noreferrer" className="button">
                                    <FaExternalLinkAlt />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;

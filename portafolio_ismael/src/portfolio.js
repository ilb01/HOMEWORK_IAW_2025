import React, { useState, useEffect } from 'react';
import './assets/css/LandingPage.css';
import projectsData from './assets/data/proyectos.json'; // Importar JSON

function Portfolio() {
    const [projects, setProjects] = useState([]);

    // Cargar los proyectos al montar el componente
    useEffect(() => {
        setProjects(projectsData);
    }, []);

    return (
        <div className="portfolio">
            <h1>Mis Proyectos</h1>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <img src={project.image} alt={project.title} />
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <p><strong>Tecnologías:</strong> {project.technologies.join(", ")}</p>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;

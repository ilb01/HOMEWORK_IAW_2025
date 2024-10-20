import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaBootstrap, FaNodeJs, FaPython } from 'react-icons/fa'; // Iconos para tecnologías
import { SiMongodb, SiCanva, SiPostgresql, SiFlask } from 'react-icons/si'; // Iconos adicionales para MongoDB, PostgreSQL y Flask

import './assets/css/About.css';

function About() {
    return (
        <div className="about">
            <div className="about-section">
                <h2 className="about-title">About Me</h2>
                <p className="about-description">
                    Hi! I'm Ismael Lozano, a passionate frontend developer in training, with a strong foundation in modern web technologies like HTML5, CSS3, JavaScript, and React. I am dedicated to creating visually appealing, responsive, and user-friendly websites. I thrive in environments where creativity meets functionality, always aiming to craft seamless user experiences.
                </p>
                <p className="about-description">
                    My journey into web development started out of curiosity, and now it has become my full-fledged passion. I constantly seek to learn new tools and frameworks to stay ahead in this fast-evolving field.
                </p>
                <p className="about-description">
                    I specialize in applying best design practices to create attractive and functional web experiences. I believe in clean code, attention to detail, and the power of design to solve real-world problems.
                </p>
            </div>

            <div className="tech-section">
                <h2 className="tech-title">Technologies</h2>
                <ul className="tech-list">
                    <li><FaHtml5 className="icon" /></li>
                    <li><FaCss3Alt className="icon" /></li>
                    <li><FaJs className="icon" /></li>
                    <li><FaReact className="icon" /></li>
                    <li><FaGithub className="icon" /></li>
                    <li><FaBootstrap className="icon" /></li>
                    <li><SiCanva className="icon" /></li>
                    <li><FaNodeJs className="icon" /></li>
                    <li><SiMongodb className="icon" /></li>
                    <li><SiPostgresql className="icon" /></li>
                    <li><FaPython className="icon" /></li>
                    <li><SiFlask className="icon" /></li>
                </ul>
            </div>

            <p className="about-conclusion">
                I'm always excited to collaborate on new projects and push the boundaries of web development. If you're looking for a dedicated and enthusiastic frontend developer, feel free to reach out!
            </p>
        </div>

    );
}

export default About;

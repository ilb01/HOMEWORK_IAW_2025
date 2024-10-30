import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaBootstrap, FaNodeJs, FaPython } from 'react-icons/fa'; // Iconos para tecnologías
import { SiMongodb, SiCanva, SiPostgresql, SiFlask } from 'react-icons/si'; // Iconos adicionales para MongoDB, PostgreSQL y Flask
import experiences from '../data/experience.json';
import testimonials from '../data/testimonial.json';

import '../assets/css/About.css';

function About() {
    return (
        <div className="about">
            <div className="about-section">
                <h2 className="about-title">About Me</h2>
                <p className="about-description">
                    I'm <strong>Ismael Lozano</strong>, a passionate frontend developer in training with a strong foundation in modern web technologies like <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>JavaScript</strong>, and <strong>React</strong>. I love creating visually appealing, responsive, and user-friendly websites that blend creativity and functionality for seamless user experiences.
                </p>
                <br />
                <p className="about-description">
                    My journey into web development started from curiosity and has grown into a full-blown passion. I'm always on the lookout for new tools and frameworks to keep up with this fast-evolving field.
                </p>
                <br />
                <p className="about-description">
                    I focus on applying best design practices to craft attractive and functional web experiences. I believe in clean code, paying attention to details, and using design to tackle real-world problems through engaging and interactive websites.
                </p>
            </div>

            <div className="experience-section">
                <h2 className="experience-title">Experience</h2>
                <ul className="experience-list">
                    {experiences.map((experience, index) => (
                        <li key={index} className="experience-card">
                            <p className="experience-date">{experience.date}</p>
                            <strong>{experience.position}</strong>
                            <p>{experience.description}</p>
                            <div className="tech-tags">
                                {experience.techTags.map((tag, idx) => (
                                    <span key={idx} className="tech-tag">{tag}</span>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="tech-section">
                <h2 className="tech-title">Technologies</h2>
                <ul className="tech-list">
                    <li><FaHtml5 className="icon" title="HTML5" /></li>
                    <li><FaCss3Alt className="icon" title="CSS3" /></li>
                    <li><FaJs className="icon" title="JavaScript" /></li>
                    <li><FaReact className="icon" title="React" /></li>
                    <li><FaGithub className="icon" title="GitHub" /></li>
                    <li><FaBootstrap className="icon" title="Bootstrap" /></li>
                    <li><SiCanva className="icon" title="Canva" /></li>
                    <li><FaNodeJs className="icon" title="Node.js" /></li>
                    <li><SiMongodb className="icon" title="MongoDB" /></li>
                    <li><SiPostgresql className="icon" title="PostgreSQL" /></li>
                    <li><FaPython className="icon" title="Python" /></li>
                    <li><SiFlask className="icon" title="Flask" /></li>
                </ul>

            </div>

            <div className="testimonials-section">
                <h2 className="testimonials-title">Testimonials</h2>
                {testimonials.map((testi, index) => (
                    <div key={index} className="testimonial">
                        <p>{testi.text}</p>
                        <span>- {testi.author}</span>
                    </div>
                ))}
            </div>

            <p className="about-conclusion">
                I'm always excited to collaborate on new projects and push the boundaries of web development. If you're looking for a dedicated and enthusiastic frontend developer, feel free to reach out!
            </p>
        </div>
    );
}

export default About;

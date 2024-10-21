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

            <div className="experience-section">
                <h2 className="experience-title">Experience</h2>
                <ul className="experience-list">
                    <li className="experience-card">
                        <p className="experience-date">2023 - Present</p>
                        <strong>Frontend Developer at Company A</strong>
                        <p>Worked on building responsive user interfaces using React and CSS. Collaborated with designers to ensure high-quality design implementation.</p>
                        <div className="tech-tags">
                            <span className="tech-tag">React</span>
                            <span className="tech-tag">CSS</span>
                            <span className="tech-tag">JavaScript</span>
                        </div>
                    </li>
                    <li className="experience-card">
                        <p className="experience-date">2022 - 2023</p>
                        <strong>Junior Web Developer at Company B</strong>
                        <p>Assisted in the development of web applications, focusing on optimizing performance and improving user experience.</p>
                        <div className="tech-tags">
                            <span className="tech-tag">HTML</span>
                            <span className="tech-tag">JavaScript</span>
                            <span className="tech-tag">Bootstrap</span>
                        </div>
                    </li>
                    <li className="experience-card">
                        <p className="experience-date">2021 - 2022</p>
                        <strong>Intern at Company C</strong>
                        <p>Gained hands-on experience in HTML, CSS, and JavaScript while working on various projects, contributing to both frontend and backend development.</p>
                        <div className="tech-tags">
                            <span className="tech-tag">HTML</span>
                            <span className="tech-tag">CSS</span>
                            <span className="tech-tag">Node.js</span>
                        </div>
                    </li>
                    <li className="experience-card">
                        <p className="experience-date">2020 - 2021</p>
                        <strong>Freelance Developer</strong>
                        <p>Worked on multiple freelance projects, developing custom websites for small businesses and personal portfolios.</p>
                        <div className="tech-tags">
                            <span className="tech-tag">HTML</span>
                            <span className="tech-tag">CSS</span>
                            <span className="tech-tag">JavaScript</span>
                        </div>
                    </li>
                </ul>
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

            <div className="testimonials-section">
                <h2 className="testimonials-title">Testimonials</h2>
                <div className="testimonial">
                    <p>"Ismael is a highly skilled frontend developer with a keen eye for design. His ability to transform ideas into stunning user interfaces is impressive. Working with him has truly elevated our project!"</p>
                    <span>- John Doe</span>
                </div>
                <div className="testimonial">
                    <p>"I had the pleasure of collaborating with Ismael on several projects, and his dedication to delivering high-quality work is unmatched. He consistently goes above and beyond to ensure the best user experience."</p>
                    <span>- Jane Smith</span>
                </div>
                <div className="testimonial">
                    <p>"Ismael's passion for web development shines through in his work. He is always eager to learn new technologies and apply them creatively. I highly recommend him for any web development project!"</p>
                    <span>- Alice Johnson</span>
                </div>
                <div className="testimonial">
                    <p>"As a team member, Ismael brings not only technical skills but also a positive attitude and creativity to the table. His contributions have made a significant impact on our team's success!"</p>
                    <span>- Mark Lee</span>
                </div>
            </div>

            <p className="about-conclusion">
                I'm always excited to collaborate on new projects and push the boundaries of web development. If you're looking for a dedicated and enthusiastic frontend developer, feel free to reach out!
            </p>
        </div>
    );
}

export default About;


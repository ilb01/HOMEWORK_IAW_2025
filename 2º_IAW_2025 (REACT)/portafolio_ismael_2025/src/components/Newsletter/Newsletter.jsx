import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import '../../assets/css/Newsletter.css';

const Newsletter = () => {
    const [email, setEmail] = useState(''); // Estado para almacenar el email del usuario
    const [isSubscribed, setIsSubscribed] = useState(false); // Estado para verificar si el usuario está suscrito

    // Maneja la suscripción de correo al formulario
    const handleSubscribe = (e) => {
        e.preventDefault(); // Previene el comportamiento predeterminado del formulario
        setIsSubscribed(true); // Cambia el estado a suscrito
        setEmail(''); // Limpia el campo de email
    };

    return (
        <div className="newsletter-container">
            <h2>Subscribe to Our Newsletter!</h2>
            <div className="newsletter-description">
                <p>Get updates on my latest projects and publications related to frontend development, tool analysis, and more.</p>
                <ul>
                    <li>🔥 Tutorials on JavaScript, React, and other frameworks</li>
                    <li>🔥 Best practices in web development</li>
                    <li>🔥 Reviews of frontend tools and libraries</li>
                    <li>🔥 News about my projects on GitHub</li>
                </ul>
            </div>

            {isSubscribed ? (
                <p className="success-message">Thank you for subscribing! Check your email for more details.</p>
            ) : (
                <form onSubmit={handleSubscribe} className="form-animation">
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        required
                        className="input-animation"
                    />
                    <button type="submit" className="subscribe-button">Subscribe</button>
                </form>
            )}

            <div className="featured-articles">
                <h3>Featured Articles</h3>
                <div className="article">
                    <h4>🚀 Best Practices in React 2024</h4>
                    <p>Explore new trends and advanced techniques in React to optimize performance and user experience.</p>
                </div>
                <div className="article">
                    <h4>⚡ Web Performance: Key to Improving Speed</h4>
                    <p>Discover how to optimize your site's loading speed using the latest tools in the frontend ecosystem.</p>
                </div>
                <div className="article">
                    <h4>🎨 UI/UX: Tips for Attractive Interfaces</h4>
                    <p>How to design interfaces that captivate users by applying solid user-centered design principles.</p>
                </div>
            </div>

            <div className="testimonials">
                <h3>What Our Subscribers Are Saying</h3>
                <div className="testimonial">
                    <p>"The best frontend development newsletter I've found. Always up-to-date and useful."</p>
                    <span>- Juan Pérez, Web Developer</span>
                </div>
                <div className="testimonial">
                    <p>"Thanks to this newsletter, I learned techniques that helped me optimize my projects and improve my workflow."</p>
                    <span>- Ana García, UI/UX Designer</span>
                </div>
            </div>

            <div className="project-gallery">
                <h3>Recent Projects</h3>
                <div className="project">
                    <h4>🛠 Project: Interactive Portfolio Site</h4>
                    <p>An entirely interactive portfolio built with React, leveraging JavaScript and JSON for dynamic content rendering. It features a responsive design, smooth navigation, and JSON-based data storage for easy content updates.</p>
                </div>
                <div className="project">
                    <h4>🛠 Project: Task Management System in React</h4>
                    <p>A task management platform designed with React, including CRUD operations, priority sorting, and a clean user-centered interface for efficient task tracking.</p>
                </div>
                <div className="project">
                    <h4>🛠 Project: Interactive Quiz Application</h4>
                    <p>An advanced quiz application using HTML, CSS, JavaScript, and React, with dynamic question generation, real-time feedback, and a progress tracker for user engagement.</p>
                </div>
            </div>

            <div className="social-media-links">
                <h4>Connect with Me:</h4>
                <button
                    aria-label="LinkedIn"
                    onClick={() => window.open("https://www.linkedin.com/in/ismaellozanobosch/", "_blank")}
                >
                    <FaLinkedin />
                </button>
                <button
                    aria-label="GitHub"
                    onClick={() => window.open("https://github.com/ilb01", "_blank")}
                >
                    <FaGithub />
                </button>
                <button
                    aria-label="Email"
                    onClick={() => {
                        alert("The email is ilb01@iesemilidarder.com");
                    }}
                >
                    <FaEnvelope />
                </button>
            </div>
            <div className='copyright-footer'>© 2024 Ismael Lozano. All rights reserved.</div>

            <div className="links-container">
                <div className="visit-to-home">
                    <a href="/">Visit to Home</a>
                </div>
                <div className="unsubscribe">
                    <a href="/">Unsubscribe</a>
                </div>
                <div className="manage-preferences">
                    <a href="/">Manage Preferences</a>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;

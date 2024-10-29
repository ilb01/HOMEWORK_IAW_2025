import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './assets/css/Newsletter.css';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        setIsSubscribed(true);
        setEmail('');
    };

    return (
        <div className="newsletter-container" aria-live="polite">
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
                <Article title="🚀 Best Practices in React 2024" description="Explore new trends and advanced techniques in React to optimize performance and user experience." />
                <Article title="⚡ Web Performance: Key to Improve Speed" description="Discover how to optimize your site's loading speed using the most modern tools in the frontend ecosystem." />
                <Article title="🎨 UI/UX: Tips for Attractive Interfaces" description="How to design interfaces that captivate users by applying solid principles of user-centered design." />
            </div>

            <div className="testimonials">
                <h3>What Our Subscribers Say</h3>
                <Testimonial text="The best newsletter on frontend development I've found. Always updated and useful." author="Juan Pérez, Web Developer" />
                <Testimonial text="Thanks to this newsletter, I learned techniques that helped me optimize my projects and improve my workflow." author="Ana García, UI/UX Designer" />
            </div>

            <div className="project-gallery">
                <h3>Recent Projects</h3>
                <Project title="🛠 Project: Interactive Portfolio Site" description="A fully interactive portfolio built with React, leveraging JavaScript and JSON for dynamic content rendering. Features include a responsive design, seamless navigation, and JSON-based data storage for easy content updates." />
                <Project title="🛠 Project: Task Management System in React" description="A task management platform designed with React, including CRUD operations, priority sorting, and a clean, user-centric interface for efficient task tracking." />
                <Project title="🛠 Project: Interactive Quiz Application" description="An advanced quiz app using HTML, CSS, JavaScript, and React, with dynamic question generation, real-time feedback, and a progress tracker for user engagement." />
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
                        alert("El correo es este ilb01@iesemilidarder.com");
                    }}
                >
                    <FaEnvelope /> {/* Ícono de correo */}
                </button>

            </div>
            <div className='copyright-footer'>© 2024 Ismael Lozano. All rights reserved.</div>

            {/* Links container for Visit, Unsubscribe, and Manage Preferences */}
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

const Article = ({ title, description }) => (
    <div className="article">
        <h4>{title}</h4>
        <p>{description}</p>
    </div>
);

const Testimonial = ({ text, author }) => (
    <div className="testimonial">
        <p>"{text}"</p>
        <span>- {author}</span>
    </div>
);

const Project = ({ title, description }) => (
    <div className="project">
        <h4>{title}</h4>
        <p>{description}</p>
    </div>
);

export default Newsletter;

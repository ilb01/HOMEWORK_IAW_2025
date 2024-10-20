import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './assets/css/Newsletter.css';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [error, setError] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }
        setIsSubscribed(true);
        setEmail('');
        setError('');
    };

    return (
        <div className="newsletter-container" aria-live="polite">
            <h2>Subscribe to Our Newsletter!</h2>
            <div className="newsletter-description">
                <p>Get updates on my latest projects and publications related to frontend development, tool analysis, and more.</p>
                <ul>
                    <li>🔥 Tutorials on React, Vue, and other frameworks</li>
                    <li>🔥 Best practices in web development</li>
                    <li>🔥 Reviews of frontend tools and libraries</li>
                    <li>🔥 News about my projects on GitHub</li>
                </ul>
            </div>

            {isSubscribed ? (
                <p className="success-message">Thank you for subscribing! Check your email for more details.</p>
            ) : (
                <form onSubmit={handleSubscribe} className="form-animation">
                    <label htmlFor="email" className="visually-hidden">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setError('');
                        }}
                        placeholder="Enter your email address"
                        required
                        className="input-animation"
                    />
                    <button type="submit" className="subscribe-button">Subscribe</button>
                    {error && <p className="error-message">{error}</p>}
                </form>
            )}

            <div className="featured-articles">
                <h3>Featured Articles</h3>
                <Article title="🚀 Best Practices in React 2024" description="Explore new trends and advanced techniques in React to optimize performance and user experience."/>
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
                <Project title="🛠 Project: Dashboard in React" description="An interactive dashboard built with React and Redux for real-time data management." />
                <Project title="🛠 Project: SPA in Vue" description="Single-page application using Vue.js for inventory management with dynamic filters and charts." />
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
            </div>

            {/* Links container for Back, Unsubscribe, and Manage Preferences */}
            <div className="links-container">
                <div className="back-to-home">
                    <a href="/">Back to Home</a>
                </div>
                <div className="unsubscribe">
                    <a href="/unsubscribe">Unsubscribe</a>
                </div>
                <div className="manage-preferences">
                    <a href="/manage-preferences">Manage Preferences</a>
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

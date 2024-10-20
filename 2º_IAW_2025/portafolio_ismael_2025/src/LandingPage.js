import React from 'react';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import './assets/css/LandingPage.css';
import photo from './assets/images/foto.jpg';

function LandingPage() {
    const handleDownload = () => {
        const pdfUrl = require('./pdf/cv_ismael.pdf');
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'cv_ismael.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="landing-page">
            <div className="text-section">
                <h2>FRONT-END DEVELOPER</h2>
                <h1>ISMAEL LOZANO</h1>
                <p className="about-me">
                    Soy un desarrollador frontend apasionado por crear experiencias de usuario interactivas y atractivas. Me especializo en React, HTML, CSS y JavaScript.
                </p>
                <div className="social-container">
                    <div className="social-icons">
                        <button aria-label="GitHub" onClick={() => window.open("https://github.com/ilb01", "_blank")}>
                            <FaGithub />
                        </button>
                        <button aria-label="LinkedIn" onClick={() => window.open("https://www.linkedin.com/in/ismaellozanobosch/", "_blank")}>
                            <FaLinkedin />
                        </button>
                        <button onClick={handleDownload} style={{ cursor: 'pointer' }} aria-label="Download CV">
                            <FaDownload />
                        </button>
                    </div>
                </div>
            </div>
            <div className="image-section">
                <img src={photo} alt="Ismael Lozano" />
                <div className="overlay"></div>
                <div className="vertical-text">PORTFOLIO</div>
                <div className="copyright">© 2024 Ismael Lozano</div>
            </div>
        </div>
    );
}

export default LandingPage;

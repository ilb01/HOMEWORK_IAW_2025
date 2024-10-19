import React from 'react';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'; // Import desired icons
import './assets/css/LandingPage.css'; // Link to the CSS file
import photo from './assets/images/foto.jpg'; // Ensure the path is correct

function LandingPage() {
    const handleDownload = () => {
        const pdfUrl = require('./pdf/cv_ismael.pdf'); // Path to the PDF
        const link = document.createElement('a'); // Create an <a> element
        link.href = pdfUrl; // Set the PDF URL
        link.download = 'cv_ismael.pdf'; // Set the file name
        document.body.appendChild(link); // Append the <a> to the DOM
        link.click(); // Simulate a click on the link
        document.body.removeChild(link); // Remove the <a> from the DOM
    };

    return (
        <div className="landing-page">
            <div className="text-section">
                <h2>FRONTEND DESIGNER</h2>
                <h1>ISMAEL LOZANO</h1>
                <p className="about-me">
                    I am a frontend designer in training, specializing in HTML, CSS, and JavaScript. I am passionate about creating attractive and functional web experiences using modern technologies and best design practices. I always seek to learn and grow professionally.
                </p>
                <div className="social-container">
                    <div className="social-icons">
                        <button><a href="https://github.com/ilb01" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a></button>
                        <button><a href="https://www.linkedin.com/in/ismaellozanobosch/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a></button>

                        <button onClick={handleDownload} style={{ cursor: 'pointer' }}>
                            <FaDownload />
                        </button>
                    </div>
                </div>
            </div>

            <div className="image-section">
                <img src={photo} alt="Ismael Lozano" />
                <div className="overlay"></div> {/* Dark overlay */}
                <div className="vertical-text">PORTFOLIO</div>
                <div className="copyright">© 2024 Ismael Lozano</div> {/* Added copyright */}
            </div>
        </div>
    );
}

export default LandingPage;

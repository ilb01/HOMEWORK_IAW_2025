import React from 'react';
import { FaGithub, FaLinkedin, FaFileAlt, FaMapMarkerAlt } from 'react-icons/fa'; // Import location icon
import '../assets/css/LandingPage.css';
import photo from '../assets/img/foto.jpg';

function LandingPage() {
    // Método para descargar el CV (Curriculumn Vitae)
    const handleDownload = () => {
        const pdfUrl = require('../pdf/cv_ismael.pdf');
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
                    <FaMapMarkerAlt style={{ marginRight: '5px' }} /> Palma de Mallorca, España
                </p>
                <div className="social-container">
                    <div className="social-icons">
                        <button aria-label="LinkedIn" onClick={() => window.open("https://www.linkedin.com/in/ismaellozanobosch/", "_blank")}>
                            <FaLinkedin />
                        </button>
                        <button aria-label="GitHub" onClick={() => window.open("https://github.com/ilb01", "_blank")}>
                            <FaGithub />
                        </button>
                        {/* Curriculumn */}
                        <button onClick={handleDownload} style={{ cursor: 'pointer' }} aria-label="Download CV">
                            <FaFileAlt />
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

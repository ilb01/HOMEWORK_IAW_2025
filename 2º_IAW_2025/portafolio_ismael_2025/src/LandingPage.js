import React from 'react';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'; // Importa los íconos deseados
import './assets/css/LandingPage.css'; // Enlaza con el archivo CSS
import foto from './assets/images/foto.jpg'; // Asegúrate de que la ruta sea correcta

function LandingPage() {
    const handleDownload = () => {
        const pdfUrl = require('./pdf/cv_ismael.pdf'); // Ruta al PDF
        const link = document.createElement('a'); // Crear un elemento <a>
        link.href = pdfUrl; // Establecer la URL del PDF
        link.download = 'cv_ismael.pdf'; // Establecer el nombre del archivo
        document.body.appendChild(link); // Añadir el <a> al DOM
        link.click(); // Simular el clic en el enlace
        document.body.removeChild(link); // Remover el <a> del DOM
    };

    return (
        <div className="landing-page">
            <div className="text-section">
                <h2>DISEÑADOR FRONTEND EN FORMACIÓN</h2>
                <h1>ISMAEL LOZANO</h1>
                <p className="about-me">
                    Soy un diseñador frontend en formación, especializado en HTML, CSS y JavaScript. Me apasiona crear experiencias web atractivas y funcionales, utilizando tecnologías modernas y mejores prácticas de diseño. Siempre busco aprender y crecer profesionalmente.
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
                <img src={foto} alt="Ismael Lozano" />
                <div className="overlay"></div> {/* Superposición oscura */}
                <div className="vertical-text">PORTAFOLIO</div>
                <div className="copyright">© 2024 Ismael Lozano</div> {/* Añadido copyright */}
            </div>
        </div>
    );
}

export default LandingPage;

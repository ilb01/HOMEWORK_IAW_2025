import React from 'react';
import { FaGithub, FaLinkedin} from 'react-icons/fa'; // Importa los íconos deseados
import './assets/css/LandingPage.css'; // Enlaza con el archivo CSS
import foto from './assets/images/foto.jpg'; // Asegúrate de que la ruta sea correcta

function LandingPage() {
    return (
        <div className="landing-page">
            <div className="text-section">
                <h2>DISEÑADOR FRONTEND EN FORMACIÓN</h2>
                <h1>ISMAEL LOZANO</h1>
                <div className="social-icons">
                    <a href="https://github.com/ilb01" target="_blank" rel="noopener noreferrer">
                    <FaGithub />                    </a>
                    <a href="https://www.linkedin.com/in/ismaellozanobosch/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                    </a>
                </div>
            </div>
            <div className="image-section">
                <img src={foto} alt="Ismael Lozano" />
                <div className="overlay"></div> {/* Superposición oscura */}
                <div className="vertical-text">PORTAFOLIO</div>
            </div>
        </div>
    );
}

export default LandingPage;
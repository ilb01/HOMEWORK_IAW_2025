import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importa los íconos deseados
import './assets/css/LandingPage.css'; // Enlaza con el archivo CSS
import foto from './assets/images/foto.jpg'; // Asegúrate de que la ruta sea correcta
import Navbar from './Navbar'; // Importa el componente Navbar

function LandingPage() {
    return (
        <div className="landing-page">
            
            <div className="text-section">
                {/* Barra de navegaciones */}
                <Navbar/> 
                
                <h2>DISEÑADOR FRONTEND EN FORMACIÓN</h2>
                <h1>ISMAEL LOZANO</h1>
                <p className="about-me">
                    Soy un diseñador frontend en formación, especializado en HTML, CSS y JavaScript. Me apasiona crear experiencias web atractivas y funcionales, utilizando tecnologías modernas y mejores prácticas de diseño. Siempre busco aprender y crecer profesionalmente.
                </p>
                <div className="social-icons">
                    <a href="https://github.com/ilb01" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
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

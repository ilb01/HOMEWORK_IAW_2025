import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './assets/css/Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© 2024 Ismael Lozano. Todos los derechos reservados.</p>
                <div className="social-icons">
                    <a href="https://github.com/ilb01" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/ismaellozanobosch/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

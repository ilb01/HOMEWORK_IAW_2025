import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-logo">
                    <h2>Cine Inventado</h2>
                    <p>La mejor experiencia de cine, ¡siempre!</p>
                </div>
                <div className="footer-links">
                    <ul>
                        <li><a href="#">Películas</a></li>
                        <li><a href="#">Cartelera</a></li>
                        <li><a href="#">Promociones</a></li>
                        <li><a href="#">Contáctanos</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <h3>Síguenos</h3>
                    <ul>
                        <li><a href="https://facebook.com" target="_blank"><FaFacebook /></a></li>
                        <li><a href="https://twitter.com" target="_blank"><FaTwitter /></a></li>
                        <li><a href="https://instagram.com" target="_blank"><FaInstagram /></a></li>
                        <li><a href="https://youtube.com" target="_blank"><FaYoutube /></a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 Cine Inventado. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

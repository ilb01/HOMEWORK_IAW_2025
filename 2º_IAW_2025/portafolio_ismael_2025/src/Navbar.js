// src/Navbar.js
import React from 'react';
import './assets/css/Navbar.css'; // Asegúrate de crear este archivo CSS
import logo from './assets/images/icono.png'; // Asegúrate de que la ruta sea correcta

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <ul className="nav-links">
                <li><a href="#about">Sobre mí</a></li>
                <li><a href="#projects">Proyectos</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;


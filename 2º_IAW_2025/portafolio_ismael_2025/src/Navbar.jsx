import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './assets/css/Navbar.css';

function Navbar() {
    // Estado que controla si el menú está abierto o cerrado
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Función que alterna el estado del menú (abre o cierra el menú)
    const toggleMenu = () => {
        // Cambia el estado a lo opuesto (si está abierto lo cierra, si está cerrado lo abre)
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={`${process.env.PUBLIC_URL}/logo_ilb.png`} alt="Logo" />
            </div>
            {/* Botón hamburguesa */}
            <div className={`hamburger ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu} aria-label="Toggle menu">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            {/* Menú de enlaces */}
            <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                        HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
                        ABOUT ME
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>
                        PROJECTS
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/newsletter" className={({ isActive }) => (isActive ? "active" : "")}>
                        NEWSLETTER
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
                        CONTACT
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

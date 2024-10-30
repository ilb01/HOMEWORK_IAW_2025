import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../assets/css/Navbar.css';

function Navbar() {
    // Estado que controla si el menú está abierto o cerrado
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Función que alterna el estado del menú (abre o cierra el menú)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Función para cerrar el menú al hacer clic en un enlace en dispositivos móviles
    const closeMenu = () => setIsMenuOpen(false);

    // Clase activa para NavLink
    const activeClass = ({ isActive }) => (isActive ? "active" : "");

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={`${process.env.PUBLIC_URL}/logo_ilb.png`} alt="Logo" />
            </div>
            {/* Botón hamburguesa */}
            <div
                className={`hamburger ${isMenuOpen ? "open" : ""}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
            >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            {/* Menú de enlaces */}
            <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
                <li>
                    <NavLink to="/" className={activeClass} onClick={closeMenu}>
                        HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={activeClass} onClick={closeMenu}>
                        ABOUT ME
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projects" className={activeClass} onClick={closeMenu}>
                        PROJECTS
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/newsletter" className={activeClass} onClick={closeMenu}>
                        NEWSLETTER
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={activeClass} onClick={closeMenu}>
                        CONTACT
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

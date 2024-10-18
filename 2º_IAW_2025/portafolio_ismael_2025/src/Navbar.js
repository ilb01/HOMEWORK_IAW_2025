import React from 'react';
import { NavLink } from 'react-router-dom';
import './assets/css/Navbar.css'; // Asegúrate de tener el archivo CSS
import logo from './assets/images/logo_ilb.png'; // Asegúrate de que la ruta sea correcta

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <ul className="nav-links">
                <li>
                    <NavLink exact to="/" activeClassName="active">
                        Sobre mí
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projects" activeClassName="active">
                        Proyectos
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName="active">
                        Contacto
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

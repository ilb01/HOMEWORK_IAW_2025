import React from 'react';
import { NavLink } from 'react-router-dom';
import './assets/css/Navbar.css'; // Asegúrate de tener el archivo CSS

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={`${process.env.PUBLIC_URL}/logo_ilb.png`} alt="Logo" />
            </div>
            <ul className="nav-links">
                <li>
                    <NavLink exact to="/" activeClassName="active">
                        HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projects" activeClassName="active">
                        PROJECTS
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/newsletter" activeClassName="active">
                        NEWSLETTER
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName="active">
                        CONTACTO
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

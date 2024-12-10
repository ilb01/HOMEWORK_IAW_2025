import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li><NavLink to="/characters" activeClassName="active">Characters</NavLink></li>
          <li><NavLink to="/planets" activeClassName="active">Planets</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

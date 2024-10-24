import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className="contenedor-nav">
      <nav className="navegacion-principal contenedor">
        <Link to="/">Inicio</Link>
        <Link to="/nosotros">Nosotros</Link>
        <Link to="/blog">Blog</Link>
        <Link to="#">Tienda</Link>
        <Link to="/contact">Contacto</Link>
      </nav>
    </div>
  )
}

export default Navigation
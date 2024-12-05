import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header-container">
      <div className="header-logo">
        <h1>Movies and Series</h1>
      </div>
      <nav className="header-nav">
        <Link to="/">Home</Link>
      </nav>
    </header>
  )
}

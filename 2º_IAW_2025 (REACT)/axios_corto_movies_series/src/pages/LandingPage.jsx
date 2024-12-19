import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className="landing-page-container">
      <h1>Welcome to the World of Movies and Series</h1>
      <nav className="landing-nav">
        <ul>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/series">Series</Link></li>
        </ul>
      </nav>
    </div>
  )
}


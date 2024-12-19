// Install axios: npm install axios

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import LandingPage from './pages/LandingPage'
import Movies from './pages/Movies'
import Series from './pages/Series'
import Footer from './components/Footer'
import './App.css'
export default function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      <Footer />
    </Router>
  )
}


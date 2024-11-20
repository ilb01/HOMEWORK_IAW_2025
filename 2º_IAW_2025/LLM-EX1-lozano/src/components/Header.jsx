import React from 'react'
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header>
            <section className="top-header">
                <div className="logo-container">
                    <h1>DRESS</h1>
                </div>
                <select name="order" defaultValue="-1" aria-label="Sort products">
                    <option value="-1">-</option>
                    <option value="Aasc">Ordenar por nombre (A-Z)</option>
                    <option value="Adesc">Ordenar por nombre (Z-A)</option>
                    <option value="Pasc">Ordenar por precio de menor a mayor</option>
                    <option value="Pdesc">Ordenar por precio de mayor a menor</option>
                </select>
                <div className="icons-container">
                    <button className="icon-button" aria-label="Show favorites">
                        <i className="fa-regular fa-heart"></i>
                    </button>
                    <button className="icon-button" aria-label="Show liked items">
                        <i className="fa-solid fa-heart"></i>
                    </button>
                    <button className="icon-button" aria-label="Reset filters">
                        <i className="fa-solid fa-eraser"></i>
                    </button>
                </div>
            </section>
            <nav className="main-nav">
                <Link to="/">Home</Link>
            </nav>
        </header>
    )
}

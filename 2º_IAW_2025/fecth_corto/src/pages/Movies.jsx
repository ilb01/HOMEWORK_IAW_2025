import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function FetchData() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/data/movies.json')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            });
    }, []);

    return (
        <div className="fetch-data-container">
            <h1>Lista de Películas</h1>
            {loading && <p className="loading">Cargando películas...</p>}
            <div className="movies-list">
                {data.map(movie => (
                    <div key={movie.id} className="movie-item">
                        <h2 className="movie-title">{movie.title} <span className="movie-year">({movie.year})</span></h2>
                        <p className="movie-description">{movie.description}</p>
                    </div>
                ))}
            </div>

            {/* Enlaces debajo de la lista de películas */}
            <nav className="nav-links">
                <Link to="/">Volver al Inicio</Link>
                <Link to="/series">Ver Series</Link>
            </nav>
        </div>
    );
}

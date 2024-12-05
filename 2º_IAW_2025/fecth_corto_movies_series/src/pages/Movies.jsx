import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

export default function FetchData() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    // Filtrado de películas basado en el término de búsqueda
    const filteredMovies = data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        fetch('/data/movies.json')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            });
    }, []);

    return (
        <div className="fetch-data-container">
            <h1>Lista de Películas</h1>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            {loading && <p className="loading">Cargando películas...</p>}
            <div className="movies-list">
                {filteredMovies.map((movie) => (
                    <div key={movie.id} className="movie-item">
                        <h2 className="movie-title">
                            {movie.title}{' '}
                            <span className="movie-year">({movie.year})</span>
                        </h2>
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

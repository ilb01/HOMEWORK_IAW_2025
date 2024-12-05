import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

export default function Series() {
    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredSeries = series.filter((item) =>  item.title.toLowerCase().includes(searchTerm.toLowerCase()));


    useEffect(() => {
        fetch('/data/series.json')
            .then(response => response.json())
            .then(series => {
                setSeries(series);
                setLoading(false);
            });
    }, []);

    return (
        <div className="series-container">
            <h1>Lista de Series</h1>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            {loading && <p className="loading">Cargando series...</p>}

            <div className="series-list">
                {filteredSeries.map(serie => (
                    <div key={serie.id} className="serie-item">
                        <h2 className="serie-title">{serie.title} <span className="serie-year">({serie.year})</span></h2>
                        <p className="serie-description">{serie.description}</p>
                    </div>
                ))}
            </div>

            <nav className="nav-links">
                <Link to="/">Volver al Inicio</Link>
                <Link to="/movies">Ver Películas</Link>
            </nav>
        </div>
    );
}


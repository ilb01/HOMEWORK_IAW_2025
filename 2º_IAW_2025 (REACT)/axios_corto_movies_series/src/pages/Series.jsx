import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';  // Importa axios
import SearchBar from '../components/SearchBar';

export default function Series() {
    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredSeries = series.filter((item) =>  
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        // Usando axios para obtener los datos
        axios.get('/data/series.json')
            .then((response) => {
                setSeries(response.data); // La respuesta contiene la propiedad 'data' con los datos
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error al cargar las series:', error);
                setLoading(false); // De todas formas se marca como no cargando si hay error
            });
    }, []);

    return (
        <div className="series-container">
            <h1>Lista de Series</h1>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            {loading && <p className="loading">Cargando series...</p>}

            <div className="series-list">
                {filteredSeries.map((serie) => (
                    <div key={serie.id} className="serie-item">
                        <h2 className="serie-title">
                            {serie.title} <span className="serie-year">({serie.year})</span>
                        </h2>
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

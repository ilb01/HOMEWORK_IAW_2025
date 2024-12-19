import React, { useState } from 'react';
import FetchData from './components/FetchData';
import SearchBar from './components/SearchBar';
import Loading from './components/Loading';
import DataList from './components/DataList';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  // Filtrar datos según el término de búsqueda
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
<>
      <div style={{ padding: '1rem', fontFamily: 'Arial, sans-serif' }}>
        <h1>Chuleta React Movies</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        
        {/* Mostrar mensaje si no hay resultados */}
        {searchTerm && filteredData.length === 0 && (
          <p>No hay resultados</p>
        )}
        
        {/* Cargar datos o mostrar cargando */}
        {loading ? <Loading /> : <DataList data={filteredData} />}
        
        {/* Cargar los datos al inicio */}
        <FetchData setData={setData} setLoading={setLoading} />
      </div>
    </>
  );
};

export default App;

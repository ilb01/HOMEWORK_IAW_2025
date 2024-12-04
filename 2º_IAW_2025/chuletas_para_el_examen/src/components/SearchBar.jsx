import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          padding: '0.5rem 2rem 0.5rem 0.5rem', // Espacio para el icono
          fontSize: '1rem',
          borderRadius: '8px',
          border: '1px solid #ccc',
          outline: 'none',
        }}
      />
      <FaSearch
        style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          color: '#888',
        }}
      />
    </div>
  );
};

export default SearchBar;

// BARRA DE BÚSQUEDA !!!
export default function SearchBar({ searchTerm, setSearchTerm }) {
    return (
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
    );
}


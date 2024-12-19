// BARRA DE BÚSQUEDA !!!
export default function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <input id="textSearch" type="text" placeholder="Search by name or planet" value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} />
    );
}

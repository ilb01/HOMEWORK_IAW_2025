import { useState, useEffect } from 'react';

export default function UsersList(){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/data/...') //json
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            });
    }, []); // Se ejecuta al montar el componente

    if (loading) return <p>Cargando usuarios...</p>;

    return (
        <div>
            <h1>Lista de Usuarios</h1>
            {/* IMPRIMIR EL JSON */}
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

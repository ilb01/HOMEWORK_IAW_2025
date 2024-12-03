import { useState, useEffect } from "react";
import './App.css';

export default function App() {
  const [product, setProducts] = useState([]); // Estado inicial como array vacío
  const [loading, setLoading] = useState(true);
  // useState([]) array!
  

  useEffect(() => {
    fetch('/data/productos.json')
      .then(res => res.json())
      .then(data => {
        setProducts(data); // Aquí se asegura de que 'data' sea un array
        setLoading(false);
      })
      .catch(error => {
        console.error("Error al cargar los productos:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div>
      <h1>Productos</h1>
      {product.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

// ELIMINA EL COMENTARIO
//  Escribe rfc ==> 
//   import React from 'react'
  
//   export default function App() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
  


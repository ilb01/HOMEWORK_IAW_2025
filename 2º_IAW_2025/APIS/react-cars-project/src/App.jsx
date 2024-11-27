import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CarList from "./components/CarList";
import CarDetailWrapper from "./components/CarDetailWrapper";
import { useSpring, animated } from "react-spring";
import './App.css';

function App() {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    year: "",
    color: ""
  });

  // Cargar coches desde la API
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch("https://myfakeapi.com/api/cars");
        if (!response.ok) {
          throw new Error("No se pudieron cargar los coches.");
        }
        const data = await response.json();
        setCars(data.cars);
        setFilteredCars(data.cars); // Inicializamos el estado con todos los coches
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  // Animación con react-spring
  const props = useSpring({
    opacity: loading ? 0 : 1,
    transform: loading ? "scale(0.8)" : "scale(1)",
  });

  // Filtrado de coches basado en filtros
  const filterCars = () => {
    let filtered = cars;

    if (filters.year) {
      filtered = filtered.filter(car => car.year === Number(filters.year));
    }

    if (filters.color) {
      filtered = filtered.filter(car => (car.color?.toLowerCase() || "") === filters.color.toLowerCase());
    }

    setFilteredCars(filtered);
  };

  // Ejecutamos el filtro cuando cambian filters
  useEffect(() => {
    filterCars();
  }, [filters]); // Dependencia actualizada: solo filters

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Router>
      <div className="App">
        <animated.h1 style={props}>Lista de Coches</animated.h1>

        {/* Filtros directamente en App */}
        <div className="filters">
          <label>
            Año:
            <select
              value={filters.year}
              onChange={(e) => setFilters({ ...filters, year: e.target.value })}
            >
              <option value="">Seleccionar Año</option>
              {[...new Set(cars.map((car) => car.year))].map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </label>
          <label>
            Color:
            <select
              value={filters.color}
              onChange={(e) => setFilters({ ...filters, color: e.target.value })}
            >
              <option value="">Seleccionar Color</option>
              {[...new Set(cars.map((car) => car.color))].map((color) => (
                <option key={color} value={color}>{color}</option>
              ))}
            </select>
          </label>
        </div>

        <Routes>
          <Route path="/" element={<CarList cars={filteredCars} />} />
          <Route 
            path="/car-detail/:id" 
            element={<CarDetailWrapper cars={cars} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


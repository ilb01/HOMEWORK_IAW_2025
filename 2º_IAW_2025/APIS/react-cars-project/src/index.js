import React from "react";
import ReactDOM from "react-dom/client"; // Aquí estamos usando 'react-dom/client'
import App from "./App";
import "./index.css";

// Asegúrate de usar 'createRoot' desde 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza tu aplicación dentro del root
root.render(<App />);

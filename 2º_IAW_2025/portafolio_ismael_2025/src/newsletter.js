import React from 'react';
import './assets/css/Newsletter.css'; // Asegúrate de crear el archivo CSS para estilizar el formulario

function Newsletter() {
    return (
        <div className="contact-page">
            <h2>Contacto</h2>
            <p>Si tienes alguna pregunta o quieres ponerte en contacto conmigo, puedes enviarme un mensaje a través del siguiente formulario:</p>
            <form className="contact-form">
                <label htmlFor="name">Nombre:</label>
                <input type="text" id="name" name="name" required />
                
                <label htmlFor="email">Correo electrónico:</label>
                <input type="email" id="email" name="email" required />
                
                <label htmlFor="message">Mensaje:</label>
                <textarea id="message" name="message" required></textarea>
                
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Newsletter;

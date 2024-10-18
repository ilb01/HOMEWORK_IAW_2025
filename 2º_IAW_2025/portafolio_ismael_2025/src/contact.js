import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa'; // Importa los íconos
import './assets/css/Contact.css';

function Contact() {
    return (
        <div className="contact-page">
            <h2 className="contact-title">Contacto</h2>
            <p className="contact-description">
                Si tienes alguna pregunta, comentario o inquietud, no dudes en ponerte en contacto conmigo. Estoy aquí para ayudarte. Completa el siguiente formulario y haré todo lo posible para responderte en un plazo de 24-48 horas.
                Asegúrate de proporcionar información precisa, especialmente tu dirección de correo electrónico, para que pueda responderte sin problemas. ¡Gracias por tu interés!
            </p>
            <div className="contact-container">
                <form className="contact-form">
                    <div className="input-group">
                        <label htmlFor="name">Nombre completo*</label>
                        <input type="text" id="name" name="name" required placeholder='' />
                    </div>
                    
                    <div className="input-group">
                        <label htmlFor="email">Correo electrónico*</label>
                        <input type="email" id="email" name="email" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="subject">Asunto*</label>
                        <input type="text" id="subject" name="subject" required placeholder='' />
                    </div>

                    <div className="input-group">
                        <label htmlFor="message">Mensaje*</label>
                        <textarea id="message" name="message" rows="4" required></textarea>
                    </div>

                    <button type="submit">Enviar</button>
                </form>

                <div className="contact-info">
                    <h3>Contáctame directamente:</h3>
                    <div className="contact-details">
                        <div className="contact-item">
                            <FaPhone />
                            <a href="tel:699472826">699 47 28 26</a>
                        </div>
                        <div className="contact-item">
                            <FaEnvelope />
                            <a href="mailto:ilb01@iesemilidarder.com">ilb01@iesemilidarder.com</a>
                        </div>
                    </div>
                </div>
            </div>
            <p className="note">
                * Todos los campos son obligatorios. Agradezco tu comprensión y paciencia.
            </p>
        </div>
    );
}

export default Contact;



import React, { useState } from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import '../assets/css/Contact.css';

function Contact() {
    // Estado para el mensaje de confirmación y los datos del formulario
    const [formStatus, setFormStatus] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    // Actualiza el estado de formData al cambiar un campo
    const handleChange = (event) => {
        const { name, value } = event.target; // Obtiene el nombre y el valor del campo
        setFormData({ ...formData, [name]: value }); // Actualiza el estado correspondiente
    };

    // Maneja el envío del formulario
    const handleSubmit = (event) => {
        event.preventDefault(); // Evita que se recargue la página
        
        // Alerta con el contenido del mensaje
        alert(`Message sent:\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`);

        setFormStatus('Message sent. Thank you for contacting us!'); // Muestra el mensaje de confirmación


        // Limpia los campos del formulario
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    };

    return (
        <div className="contact-page">
            <h2 className="contact-title">Contact</h2>
            <div className="contact-container">
                <div className="contact-box">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        {/* Campos del formulario */}
                        <div className="input-group">
                            <label htmlFor="name" className="label">Full Name*</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder="What is your full name?"
                                value={formData.name} // Vincula el input al estado
                                onChange={handleChange} // Llama a handleChange en el cambio
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email" className="label">Email Address*</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="What is your email address?"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="subject" className="label">Subject*</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                required
                                placeholder="What would you like to discuss?"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="message" className="label">Message*</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                required
                                placeholder="What is your message?"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button className="message" type="submit">Send Message</button>
                    </form>

                    {/* Información de contacto */}
                    <div className="contact-info">
                        <div className="contact-details">
                            <div className="contact-item">
                                <FaPhone className="contact-icon" />
                                <a href="tel:699472826" aria-label="Phone number">699 47 28 26</a>
                            </div>
                            <div className="contact-item">
                                <FaEnvelope className="contact-icon" />
                                <a href="mailto:ilb01@iesemilidarder.com" aria-label="Email address">ilb01@iesemilidarder.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mensaje de confirmación */}
            {formStatus && <p className="form-status">{formStatus}</p>}

            <p className="note">
                * All fields are required. I appreciate your understanding and patience.
            </p>
        </div>
    );
}

export default Contact;

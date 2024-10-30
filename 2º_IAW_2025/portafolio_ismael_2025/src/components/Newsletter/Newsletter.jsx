import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import '../../assets/css/Newsletter.css';

const Newsletter = () => {
    const [email, setEmail] = useState(''); // Estado para almacenar el email del usuario
    const [isSubscribed, setIsSubscribed] = useState(false); // Estado para verificar si el usuario está suscrito

    // Maneja la suscripción al formulario
    const handleSubscribe = (e) => {
        e.preventDefault(); // Previene el comportamiento predeterminado del formulario
        setIsSubscribed(true); // Cambia el estado a suscrito
        setEmail(''); // Limpia el campo de email
    };

    return (
        <div className="newsletter-container" aria-live="polite">
            <h2>Subscribe to Our Newsletter!</h2>
            <div className="newsletter-description">
                <p>Obtén actualizaciones sobre mis últimos proyectos y publicaciones relacionadas con el desarrollo frontend, análisis de herramientas y más.</p>
                <ul>
                    <li>🔥 Tutoriales sobre JavaScript, React y otros frameworks</li>
                    <li>🔥 Mejores prácticas en desarrollo web</li>
                    <li>🔥 Reseñas de herramientas y librerías frontend</li>
                    <li>🔥 Noticias sobre mis proyectos en GitHub</li>
                </ul>
            </div>

            {isSubscribed ? (
                <p className="success-message">¡Gracias por suscribirte! Revisa tu correo para más detalles.</p>
            ) : (
                <form onSubmit={handleSubscribe} className="form-animation">
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // Actualiza el estado del email
                        placeholder="Introduce tu dirección de correo electrónico"
                        required
                        className="input-animation"
                    />
                    <button type="submit" className="subscribe-button">Suscribirse</button>
                </form>
            )}

            <div className="featured-articles">
                <h3>Artículos Destacados</h3>
                {/* Componentes de artículo en línea */}
                <div className="article">
                    <h4>🚀 Mejores Prácticas en React 2024</h4>
                    <p>Explora nuevas tendencias y técnicas avanzadas en React para optimizar el rendimiento y la experiencia del usuario.</p>
                </div>
                <div className="article">
                    <h4>⚡ Rendimiento Web: Clave para Mejorar la Velocidad</h4>
                    <p>Descubre cómo optimizar la velocidad de carga de tu sitio utilizando las herramientas más modernas en el ecosistema frontend.</p>
                </div>
                <div className="article">
                    <h4>🎨 UI/UX: Consejos para Interfaces Atractivas</h4>
                    <p>Cómo diseñar interfaces que cautiven a los usuarios aplicando sólidos principios de diseño centrado en el usuario.</p>
                </div>
            </div>

            <div className="testimonials">
                <h3>Lo que Dicen Nuestros Suscriptores</h3>
                {/* Componentes de testimonio en línea */}
                <div className="testimonial">
                    <p>"La mejor newsletter sobre desarrollo frontend que he encontrado. Siempre actualizada y útil."</p>
                    <span>- Juan Pérez, Desarrollador Web</span>
                </div>
                <div className="testimonial">
                    <p>"Gracias a esta newsletter, aprendí técnicas que me ayudaron a optimizar mis proyectos y mejorar mi flujo de trabajo."</p>
                    <span>- Ana García, Diseñadora UI/UX</span>
                </div>
            </div>

            <div className="project-gallery">
                <h3>Proyectos Recientes</h3>
                {/* Componentes de proyecto en línea */}
                <div className="project">
                    <h4>🛠 Proyecto: Sitio Interactivo de Portafolio</h4>
                    <p>Un portafolio totalmente interactivo construido con React, aprovechando JavaScript y JSON para el renderizado dinámico de contenido. Incluye un diseño responsivo, navegación fluida y almacenamiento de datos basado en JSON para actualizaciones fáciles de contenido.</p>
                </div>
                <div className="project">
                    <h4>🛠 Proyecto: Sistema de Gestión de Tareas en React</h4>
                    <p>Una plataforma de gestión de tareas diseñada con React, incluyendo operaciones CRUD, ordenación por prioridad y una interfaz limpia centrada en el usuario para un seguimiento eficiente de las tareas.</p>
                </div>
                <div className="project">
                    <h4>🛠 Proyecto: Aplicación de Cuestionarios Interactiva</h4>
                    <p>Una avanzada aplicación de cuestionarios utilizando HTML, CSS, JavaScript y React, con generación dinámica de preguntas, retroalimentación en tiempo real y un rastreador de progreso para el compromiso del usuario.</p>
                </div>
            </div>

            <div className="social-media-links">
                <h4>Conéctate Conmigo:</h4>
                <button
                    aria-label="LinkedIn"
                    onClick={() => window.open("https://www.linkedin.com/in/ismaellozanobosch/", "_blank")}
                >
                    <FaLinkedin />
                </button>
                <button
                    aria-label="GitHub"
                    onClick={() => window.open("https://github.com/ilb01", "_blank")}
                >
                    <FaGithub />
                </button>
                <button
                    aria-label="Email"
                    onClick={() => {
                        alert("El correo es este ilb01@iesemilidarder.com"); // Comentario del correo
                    }}
                >
                    <FaEnvelope />
                </button>
            </div>
            <div className='copyright-footer'>© 2024 Ismael Lozano. Todos los derechos reservados.</div>

            {/* Contenedor de enlaces para Visitar, Cancelar suscripción y Administrar preferencias */}
            <div className="links-container">
                <div className="visit-to-home">
                    <a href="/">Visit to Home</a>
                </div>
                <div className="unsubscribe">
                    <a href="/">Unsubscribe</a>
                </div>
                <div className="manage-preferences">
                    <a href="/">Manage Preferences</a>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;

import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa'; // Import icons
import './assets/css/Contact.css';

function Contact() {
    return (
        <div className="contact-page">
            <h2 className="contact-title">Contact</h2>
            <div className="contact-container">
                <form className="contact-form">
                    <div className="input-group">
                        <label htmlFor="name">Full Name*</label>
                        <input type="text" id="name" name="name" required placeholder='What is your full name?' />
                    </div>
                    
                    <div className="input-group">
                        <label htmlFor="email">Email Address*</label>
                        <input type="email" id="email" name="email" required placeholder='What is your email address?' />
                    </div>

                    <div className="input-group">
                        <label htmlFor="subject">Subject*</label>
                        <input type="text" id="subject" name="subject" required placeholder='What would you like to discuss?' />
                    </div>

                    <div className="input-group">
                        <label htmlFor="message">Message*</label>
                        <textarea id="message" name="message" rows="4" required placeholder='What is your message?' ></textarea>
                    </div>

                    <button className='message' type="submit">Send Message</button>
                </form>

                <div className="contact-info">
                    <h3>Contact me directly:</h3>
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
                * All fields are required. I appreciate your understanding and patience.
            </p>
        </div>
    );
}

export default Contact;

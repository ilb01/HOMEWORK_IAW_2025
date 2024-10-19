import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa'; // Import icons
import './assets/css/Contact.css';

function Contact() {
    return (
        <div className="contact-page">
            <h2 className="contact-title">Contact</h2>
            <p className="contact-description">
                If you have any questions, comments, or concerns, feel free to reach out to me. I'm here to assist you. Fill out the form below, and I'll do my best to get back to you within 24-48 hours.
                Please make sure to provide accurate information, especially your email address, so I can respond to you without issues. Thank you for your interest!
            </p>
            <div className="contact-container">
                <form className="contact-form">
                    <div className="input-group">
                        <label htmlFor="name">Full Name*</label>
                        <input type="text" id="name" name="name" required placeholder='' />
                    </div>
                    
                    <div className="input-group">
                        <label htmlFor="email">Email Address*</label>
                        <input type="email" id="email" name="email" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="subject">Subject*</label>
                        <input type="text" id="subject" name="subject" required placeholder='' />
                    </div>

                    <div className="input-group">
                        <label htmlFor="message">Message*</label>
                        <textarea id="message" name="message" rows="4" required></textarea>
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




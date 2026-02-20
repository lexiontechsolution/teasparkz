import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: 'General Inquiry',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const phoneNumber = "6380853637";
        const text = `*New Inquiry for Teasparkz*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Service:* ${formData.service}%0A*Message:* ${formData.message}`;

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form glass">
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="service">Service Interested In</label>
                    <select id="service" name="service" value={formData.service} onChange={handleChange}>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Video Production">Video Production</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Branding">Branding Services</option>
                        <option value="SaaS/Product">Product Development</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="message">How can we help you?</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Describe your project or inquiry..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '1.2rem' }}>
                    Connect via WhatsApp
                </button>
            </form>
        </div>
    );
};

export default ContactForm;

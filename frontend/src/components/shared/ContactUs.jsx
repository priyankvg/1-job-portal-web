import React, { useState } from 'react';
import './ContactUs.css';


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to a server)
    setFormStatus('Thank you for reaching out! We will get back to you soon.');
  };

  return (
    
    <div className="contact-us-container">
       
      <section className="contact-form-section">
     
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Please fill out the form below and we'll get in touch with you shortly.</p>
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Submit</button>
          {formStatus && <p className="form-status">{formStatus}</p>}
        </form>
      </section>

      <section className="contact-info-section">
        <h2>Our Contact Information</h2>
        <p>Email: info@careerhive.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Address: 123 Career Street, Job City, 45678</p>
      </section>
    </div>
  );
};

export default ContactUs;

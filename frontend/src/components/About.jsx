import React from 'react';
import './About.css';
// import styled from 'styled-components';
import Hero from './Backgroundlogin';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <section className="hero-section">
        <h1 className="hero-title">Welcome to CareerHive</h1>
        <p className="hero-subtitle">Connecting Talent with Opportunity</p>
      </section>

      <section className="mission-section">
        <div className="mission-content">
        
          <h2>Our Mission</h2>
          <p>
            At CareerHive, our mission is to empower job seekers and employers by providing a seamless platform that bridges the gap between talent and opportunity. We strive to innovate and continuously improve the job search experience.
          </p>
        </div>
        
        
      </section>

      <section className="values-section">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Innovation</h3>
            <p>We embrace change and strive to lead with innovative solutions.</p>
          </div>
          <div className="value-card">
            <h3>Integrity</h3>
            <p>Honesty and transparency are at the core of everything we do.</p>
          </div>
          <div className="value-card">
            <h3>Excellence</h3>
            <p>We aim for excellence in every aspect of our work.</p>
          </div>
          <div className="value-card">
            <h3>Collaboration</h3>
            <p>We believe in the power of teamwork and collaboration.</p>
          </div>
        </div>
      </section>
      <Hero/>
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
  <div className="team-member">
    <img src="https://i.pinimg.com/736x/4a/99/d4/4a99d4d855dbd7ee61caa0465be83eef.jpg" alt="Yash Kulshrestha" />
    <h3>Yash Kulshrestha</h3>
    <p>CEO & Founder</p>
  </div>
  <div className="team-member">
    <img src="https://i.pinimg.com/736x/f4/c5/84/f4c584c8bda47a065188d750de166307.jpg" alt="John Smith" />
    <h3>John Smith</h3>
    <p>CTO</p>
  </div>
  <div className="team-member">
    <img src="https://i.pinimg.com/736x/f4/c5/84/f4c584c8bda47a065188d750de166307.jpg" alt="Jane Doe" />
    <h3>Jane Doe</h3>
    <p>COO</p>
  </div>
  <div className="team-member">
    <img src="https://i.pinimg.com/736x/f4/c5/84/f4c584c8bda47a065188d750de166307.jpg" alt="Emily Davis" />
    <h3>Emily Davis</h3>
    <p>Head of Marketing</p>
  </div>
  {/* Add more team members as needed */}
</div>

      </section>

      <section className="cta-section">
        <h2>Join Us on Our Journey</h2>
        <p>
          Whether you’re looking for your next career opportunity or seeking to hire top talent, CareerHive is here to help. Let’s build the future of work together.
        </p>
        <button className="cta-button">Get in Touch</button>
      </section>
    </div>
  );
};

export default AboutUs;

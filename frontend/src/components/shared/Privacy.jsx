import React from 'react';
import './privacy.css';
import Navbar from './Navbar';
import Footer from './Footer';


const Privacy = () => {
  return (
    
    <div className="privacy-policy-container">
        <Navbar/>
      <section className="privacy-hero">
        <h1>Privacy Policy</h1>
        <p>Your privacy is important to us. This policy explains how we handle and use your personal information.</p>
      </section>

      <section className="privacy-content">
        <h2>Information We Collect</h2>
        <p>We collect information that you provide directly to us, such as when you create an account, fill out a form, or contact us for support.</p>

        <h2>How We Use Your Information</h2>
        <p>Your information is used to provide, maintain, and improve our services. We may also use your information to communicate with you and to comply with legal obligations.</p>

        <h2>Sharing Your Information</h2>
        <p>We do not share your personal information with third parties except as necessary to operate our services or as required by law.</p>

        <h2>Your Rights</h2>
        <p>You have the right to access, update, or delete your personal information at any time. Contact us if you have any questions about your rights.</p>

        <h2>Changes to This Policy</h2>
        <p>We may update this policy from time to time. We will notify you of any significant changes.</p>

        <h2>Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at privacy@careerhive.com.</p>
      </section>
      <Footer/>
    </div>
   
  );
};

export default Privacy;

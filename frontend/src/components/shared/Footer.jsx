import React from 'react';
import { Link } from 'react-router-dom';
import '../About.jsx'
import '../shared/Privacy.jsx'

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: '#0ed2f7',
        background: 'linear-gradient(135deg, #4A00E0, #00D2FF)',
        color: '#fff', // Dark blue text
        padding: '50px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',

      }}
    >
      <div style={{ width: '100%', maxWidth: '1200px', marginBottom: '30px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>

          {/* About Section */}
          <div style={{ flex: '1 1 200px', marginBottom: '20px' }}>
            <h5 style={{ color: 'yellow', fontSize: "25px" }}>Career<span className='text-[yellow]'>Hive</span></h5>
            <p style={{ margin: '0', fontSize: '20px' }}>
              Discover endless career opportunities with CareerHive. Connect with top employers and unlock your potential.
            </p>
          </div>

          {/* Important Links */}
          <div style={{ flex: '1 1 200px', marginBottom: '20px' }}>
            <h3 style={{ color: 'yellow', fontSize: "25px" }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', padding: '0', margin: '0', fontSize: '20px' }}>
              <li style={{ marginBottom: '10px' }}>
                <Link to="/aboutus" style={{ color: '#fff', textDecoration: 'none' }}>About Us</Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link to="/browse" style={{ color: '#fff', textDecoration: 'none' }}>Careers</Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link to="/contactus" style={{ color: '#fff', textDecoration: 'none' }}>Contact Us</Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link to="/privacy" style={{ color: '#fff', textDecoration: 'none' }}>Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div style={{ flex: '1 1 200px', marginBottom: '20px' }}>
            <h5 style={{ color: 'yellow', fontSize: "25px" }}>Stay Connected</h5>
            <ul style={{ listStyle: 'none', padding: '0', margin: '0', fontSize: '20px' }}>
              <li style={{ marginBottom: '10px' }}>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#fff', textDecoration: 'none' }}
                >
                  Facebook
                </a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#fff', textDecoration: 'none' }}
                >
                  Twitter
                </a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#fff', textDecoration: 'none' }}
                >
                  LinkedIn
                </a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#fff', textDecoration: 'none' }}
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div
        style={{
          paddingTop: '20px',
          width: '100%',
          textAlign: 'center',
          fontSize: '16px',
          color: '#fff',
        }}
      >
        <p style={{ marginBottom: '0' }}>
          &copy; {currentYear} CareerHive. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

import React from 'react';
import styled from 'styled-components';

// Styled component for the hero section
const HeroSection = styled.section`
  height: 100vh;
  background-image: url('https://i.pinimg.com/564x/2c/92/4c/2c924cb215bd34c9c99d3ac2fdb38464.jpg'); // Replace with your image URL
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1); 
    z-index: 1;
  }

  h1 {
    position: relative;
    z-index: 2;
    font-size: 64px;
    font-weight: 700;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    letter-spacing: 2px;
    line-height: 1.2;
    @media (max-width: 768px) {
      font-size: 48px;
    }
  }

  p {
    position: relative;
    z-index: 2;
    font-size: 24px;
    font-weight: 400;
    margin: 20px 0 0;
    max-width: 600px;
    line-height: 1.5;
    @media (max-width: 768px) {
      font-size: 18px;
      margin: 15px 0 0;
    }
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <h1>Welcome to CareerHive</h1>
      <p>Your journey to a dream job starts here!</p>
    </HeroSection>
  );
};

export default Hero;


import React from 'react';
import './style.css';
const HeroSection = () => {
  return (
    <div className="hero-section" style={{ textAlign: 'center', margin: '2rem 0' }}>
      <img
        src="https://fellowship.keploy.io/images/logo.png"  alt="Keploy Logo"
        style={{ maxWidth: '300px', height: 'auto' }}
      />
    </div>
  );
};

export default HeroSection;

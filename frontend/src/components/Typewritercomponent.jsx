import React from 'react';
import Typical from 'react-typical';

function TypewriterComponent() {
  return (
    <div style={{ fontSize: '40px', color: '#1A237E', fontWeight: 'bold' }}>
      <Typical
        steps={['Welcome to CareerHive!', 3000, 'Find Your Dream Job Today!', 3000]}
        loop={Infinity}
        wrapper="span"
      />
    </div>
  );
}

export default TypewriterComponent;

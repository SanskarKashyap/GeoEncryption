// NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav style={{ padding: '10px', background: '#333', color: 'white' }}>
      <Link to="/" style={{ marginRight: '20px', color: 'white', textDecoration: 'none' }}>Home</Link>
      <Link to="/encrypt" style={{ marginRight: '20px', color: 'white', textDecoration: 'none' }}>Encrypt</Link>
      <Link to="/decrypt" style={{ color: 'white', textDecoration: 'none' }}>Decrypt</Link>
    </nav>
  );
};

export default NavigationBar;


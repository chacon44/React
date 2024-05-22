import React from 'react';
import './Logo.css';
import logo from './logo.png';

const Logo = () => {
  return (
    <div className='entire-container'>
      <img
        src={logo}
        alt="Logo"
        className="logo"
      />
      <div className='banner'>
        <h2 className="banner-content">Courses</h2>
      </div>
    </div>
  );
};

export default Logo;
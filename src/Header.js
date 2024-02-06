import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from './images/logo.png';

const Header = () => {
  return (
    <nav className="navbar">
    <div className="logo-container">
    <Link to="/"><img className="logo1" src={logoImage} alt="Logo"/></Link>
    <Link to="/" className="logo-dec"><div className="logo">StellarScape Facility Services</div></Link>
    </div>
      <div className="buttons">
        <Link to="/about"><button>About</button></Link>
        <Link to="/services"><button>Services</button></Link>
        <Link to="/contact-form"><button>Contact Us</button></Link>
      </div>
    </nav>
  );
};

export default Header;

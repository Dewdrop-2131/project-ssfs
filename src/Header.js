import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase';

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [images, setImages] = useState([]);
  const [logoText, setLogoText] = useState("StellarScape Facility Services");

  const fetchImages = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "collection"));
      if (querySnapshot.size > 0) {
        const docData = querySnapshot.docs[2].data(); // Assuming you want the first document
        setImages(docData.logo);
      } else {
        console.log("Image not found");
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 325 || window.innerWidth <= 425) {
        setLogoText("StellarScape FS");
      } else {
        setLogoText("StellarScape Facility Services");
      }
    };

    handleResize(); // Initial check on component mount

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  const closeMenu = () => {
    setIsExpanded(false); // Close the menu when a navigation button is clicked
  };

  return (
    <nav className={`navbar${isExpanded ? ' expanded' : ''}`}>
      <div className="logo-container">
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Link to="/" className="logo-dec" onClick={() => window.scrollTo(0, 0)}>
          <img 
            className="logo1" 
            src={`https://drive.google.com/thumbnail?id=${images}`} 
            alt='logo' 
            loading="lazy"
          />
          <div className="logo">{logoText}</div>
        </Link>
      </div>
      <div className={`buttons${isExpanded ? ' expanded' : ''}`}>
        <Link to="/about" onClick={() => window.scrollTo(0, 0)}><button className='header-options' onClick={closeMenu}>About</button></Link>
        <Link to="/services" onClick={() => window.scrollTo(0, 0)}><button className='header-options' onClick={closeMenu}>Services</button></Link>
        <Link to="/contact-form" onClick={() => window.scrollTo(0, 0)}><button className='header-options' onClick={closeMenu}>Contact Us</button></Link>
      </div>
    </nav>
  );
};

export default Header;


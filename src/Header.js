import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase';
import logo from './logo.png';

const Header = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "collection"));
      if (querySnapshot.size > 0) {
        // Document found
        const docData = querySnapshot.docs[2].data(); // Assuming you want the first document
        setImages(docData.logo)
        // if (Array.isArray(docData.logo)) {
        //   setImages(docData.logo);
        // } else if (docData.logo) {
        //   setImages(docData.logo);
        // } else {
        //   console.log("No images found");
        // }
      } else {
        // Document not found
        console.log("Image not found");
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
            <img 
              className="logo1" 
              src={`https://drive.google.com/thumbnail?id=${images}`} 
              // src={logo}
              alt='logo' 
              loading="lazy"
            />
        </Link>
        <Link to="/" className="logo-dec"><div className="logo">StellarScape Facility Services</div></Link>
      </div>
      <div className="buttons">
        <Link to="/about"><button className='header-options'>About</button></Link>
        <Link to="/services"><button className='header-options'>Services</button></Link>
        <Link to="/contact-form"><button className='header-options'>Contact Us</button></Link>
      </div>
    </nav>
  );
};

export default Header;



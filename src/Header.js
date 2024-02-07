import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, where } from "firebase/firestore";
import { db } from './firebase';

const Header = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "collection"), where("name", "==", "header_footer"));
      if (querySnapshot.size > 0) {
        // Document found
        const docData = querySnapshot.docs[2].data(); // Assuming you want the first document
        if (Array.isArray(docData.logo)) {
          setImages(docData.logo);
        } else if (docData.logo) {
          setImages([docData.logo]);
        } else {
          console.log("No images found");
        }
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
          {images.map((image, index) => (
            <img key={index} className="logo1" src={`https://drive.google.com/thumbnail?id=${image}`} alt={`Image ${index}`} />
          ))}
        </Link>
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



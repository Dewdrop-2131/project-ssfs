import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import FormContact from './FormContact';
import About from './About';
import Services from './Services';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="main-container">
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-form" element={<FormContact />} />
        </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

// <div className="main-container"> </div>
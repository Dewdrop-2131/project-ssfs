import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { collection, getDocs, where } from "firebase/firestore";
import { db } from './firebase';

const Footer = () => {

  const[name, setName] = useState('');
  const[hod, setHod] = useState('');
  const[email, setEmail] = useState('');
  const[phone, setPhone] = useState('');

  const fetchPost = async () => {
    const querySnapshot = await getDocs(collection(db, "collection"), where("name", "==", "contact_us"));

if (querySnapshot.size > 0) {
    // Document found
    const docData = querySnapshot.docs[2].data();
    setName(docData.title);
    setHod(docData.address);
    setEmail(docData.email);
    setPhone(docData.phone);
    console.log("Document data:", docData);
} else {
    // Document not found
    console.log("Document 'about_us' not found"); 
}}

// Effect to fetch form fields on component mount
useEffect(() => {
fetchPost();
}, []); //data

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="left-text left" style={{lineHeight:"2", marginTop:"20px", marginBottom:"0"}}>
          <section>StellarScape Facility Services</section>
          <section>Head Office, Bangalore</section>
          <section>Email: stellarscape.fs@gmail.com</section>
          <section>Phone Number: +91-7829202312</section>
        </div>
        <div className="right-text right">
          <p>
            <Popup
              trigger={<u className="term">Terms & Conditions</u>}
              modal
              nested
              className="custom-popup"
            >
              {(close) => (
                <div className='modal'>
                  <div className='contentFooter'>
                  On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains
                  </div>
                  <div style={{textAlign:"end"}}>
                    <button onClick={close} className="custom-close-button">
                      Close
                    </button>
                  </div>
                </div>
              )}
            </Popup>
          </p>
          <p>
            <Popup
              trigger={<u className="privacy">Privacy Policies</u>}
              modal
              nested
              className="custom-popup"
            >
              {(close) => (
                <div className='modal'>
                  <div className='contentFooter'>
                  On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains
                  </div>
                  <div style={{textAlign:"end"}}>
                    <button onClick={close} className="custom-close-button">
                      Close
                    </button>
                  </div>
                </div>
              )}
            </Popup>
          </p>
        </div>
      </div>
      <p style={{fontSize:"10px", textAlign:"center", marginBottom:"5px", marginTop:"25px"}}>Developed by EIS</p>
    </footer>
  );
};

export default Footer;



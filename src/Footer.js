import React, { useState, useEffect } from 'react';
// import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase';

const Footer = () => {

  const[name, setName] = useState('');
  const[hod, setHod] = useState('');
  const[email, setEmail] = useState('');
  const[phone, setPhone] = useState('');
  // const[terms, setTerms] = useState('');
  // const[privacy,setPrivacy] = useState('');

  const fetchPost = async () => {
    const querySnapshot = await getDocs(collection(db, "collection"));

if (querySnapshot.size > 0) {
    // Document found
    const docData = querySnapshot.docs[2].data();
    setName(docData.title);
    setHod(docData.address);
    setEmail(docData.email);
    setPhone(docData.phone);
    // setTerms(docData.terms);
    // setPrivacy(docData.privacy);
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
          <section>{name}</section>
          <section>{hod}</section>
          <section>Email: {email}</section>
          <section>Phone Number: {phone}</section>
        </div>
        {/* <div className="right-text right">
          <p>
            <Popup
              trigger={<u className="term">Terms & Conditions</u>}
              modal
              nested
              className="custom-popup"
            >
              {(close) => (
                <div className='modal'>
                <div className="modal-header" style={{textAlign:"center", fontWeight:"bold", paddingTop:"20px", fontSize:"25px"}}>Terms & Conditions</div>
                  <div className='contentFooter'>{terms}
                  </div>
                  <div style={{textAlign:"center", paddingBottom: "15px"}}>
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
                <div className="modal-header" style={{textAlign:"center", fontWeight:"bold", paddingTop:"20px", fontSize:"25px"}}>Privacy Policies</div>
                  <div className='contentFooter'>{privacy}
                  </div>
                  <div style={{textAlign:"center", paddingBottom: "15px"}}>
                    <button onClick={close} className="custom-close-button">
                      Close
                    </button>
                  </div>
                </div>
              )}
            </Popup>
          </p>
        </div> */}
      </div>
      <p style={{fontSize:"15px", textAlign:"center", marginBottom:"5px", marginTop:"25px"}}>Developed by 
        <button style={{padding: '10px 5px'}}><u>EIS</u></button>
      </p>
    </footer>
  );
};

export default Footer;



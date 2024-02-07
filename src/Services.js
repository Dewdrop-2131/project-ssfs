import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc } from "firebase/firestore";
import {db} from './firebase';

const Services = () => {
  const [showBox, setShowBox] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [serviceList, setServiceList] = useState([]);
  const [serviceDetails, setServiceDetails] = useState([]);

  const fetchPost = async () => {
    const querySnapshot = await getDocs(collection(db, "services"));

    if (querySnapshot.size > 0) {
        // Document found
        const docData = querySnapshot.docs[0].data();
        setServiceList(docData.list);
        // setServiceDetails(docData.list[0]); // Set details for the first item
        handleItemClick(0);
        setSelectedItem(0); // Set selected item index to 0
        setShowBox(true); // Show the box for the first item
    } else {
        // Document not found
        console.log("Document 'services' not found");
      
    }}

// Effect to fetch form fields on component mount
  useEffect(() => {
  fetchPost();
  }, []); //data



  const handleItemClick = async (id) => {
    const querySnapshot = await getDocs(collection(doc(db, "services", "service"), "services"));
    if (querySnapshot.size > 0) {
      // Document found
      const docData = querySnapshot.docs[id].data();
      setServiceDetails(docData);
      setShowBox(true);
      setSelectedItem(id);
  } else {
      // Document not found
      console.log("Document 'about_us' not found");
    
  }
    
  };

  return (
    <div>
    <h1 style={{marginTop: '0', paddingTop: '8vh'}}><u>Services We Provide!</u></h1>
    <div style={{display: "flex", justifyContent: "space-between", marginTop: '10vh'}}>
      <ul className="styled-list">
      {serviceList.map((service, index) => (
        <li key={index} onClick={() => handleItemClick(index)} style={{color: selectedItem === index ? 'green' : 'black', fontSize: selectedItem === index ? '4vh' : '3vh', fontWeight: selectedItem === index ? 'bold' : '200'}}>
          {service}
        </li>
      ))}
      </ul>

      {showBox && (
        <div className="info-box" style={{borderRadius: '30vh 5vh'}}>
          <p style={{padding:"0 60px", fontWeight:"bold", fontSize:"20px"}}><u>{serviceDetails.title}</u></p>
          <br/>
          <img
            alt="testimonial"
            style={{width: '25rem', height: '15rem', borderRadius: '20px'}}
            className="mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
            src={`https://drive.google.com/thumbnail?id=${serviceDetails.image}`}
            loading="lazy"
          />
          <p style={{lineHeight: "2", padding: '0 15vh', textAlign: 'justify'}}>{serviceDetails.description}</p>
          {serviceDetails.benefit && 
          <h2>Benefits</h2>}
          {serviceDetails.benefit && serviceDetails.benefit.map((benefits, index) => (
            <p style={{padding:"0 10%"}}><li key={index}>{benefits}</li></p>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default Services;
import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc } from "firebase/firestore";
import { db } from './firebase';
import Popup from 'reactjs-popup';
import { Tooltip } from "react-tooltip";

const Services = () => {
  const [showBox, setShowBox] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [serviceList, setServiceList] = useState([]);
  const [serviceDetails, setServiceDetails] = useState([]);

  const fetchPost = async () => {
    const querySnapshot = await getDocs(collection(db, "services"));

    if (querySnapshot.size > 0) {
      const docData = querySnapshot.docs[0].data();
      setServiceList(docData.list);
      handleItemClick(0);
      if(window.innerWidth > 768) {
        setSelectedItem(0);
      } else {
        setSelectedItem(null);
      }
      setShowBox(true);
    } else {
      console.log("Document 'services' not found");
    }
  }

  useEffect(() => {
    fetchPost();
  }, []);

  const handleItemClick = async (id) => {
    const querySnapshot = await getDocs(collection(doc(db, "services", "service"), "services"));
    if (querySnapshot.size > 0) {
      const docData = querySnapshot.docs[id].data();
      setServiceDetails(docData);
      setShowBox(true);
      setSelectedItem(id);
    } else {
      console.log("Document 'about_us' not found");
    }
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return `${text.substring(0, maxLength)}...`;
    }
    return text;
  };

  return (
    <div>
      <h1 style={{ marginTop: '0', paddingTop: '3vh', textAlign: "center", fontSize: window.innerWidth >= 768 ? '7vh' : '6vh' }}><u>Services We Provide!</u></h1>
      {window.innerWidth > 768 ? (
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: '10vh' }}>
          <ul className="styled-list">
            {serviceList.map((service, index) => (
              <li key={index} onClick={() => handleItemClick(index)} style={{ color: selectedItem === index ? 'green' : 'black', fontSize: selectedItem === index ? '4vh' : '3vh', fontWeight: selectedItem === index ? 'bold' : '200' }}>
                {service}
              </li>
            ))}
          </ul>

          {showBox && (
            <div className="info-box" style={{ borderRadius: '30vh 5vh' }}>
              <p style={{ padding: "0 60px", fontWeight: "bold", fontSize: "20px" }}><u>{serviceDetails.title}</u></p>
              <br />
              <img
                alt="testimonial"
                style={{ width: '25rem', height: '15rem', borderRadius: '20px' }}
                className="mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src={`https://drive.google.com/thumbnail?id=${serviceDetails.image}`}
                loading="lazy"
              />
              <p style={{ lineHeight: "2", padding: '0 15vh', textAlign: 'justify' }}>{serviceDetails.description}</p>
              {serviceDetails.benefit &&
                (serviceDetails.title !== 'ADMINISTRATIVE SERVICES' && <h2>Benefits</h2>)}
              {serviceDetails.benefit && serviceDetails.benefit.map((benefits, index) => (
                <p style={{ padding: "0 10%" }}><li key={index}>{benefits}</li></p>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
          <p>
            <Popup
              trigger={
                <ul className="styled-list">
                {serviceList.map((service, index) => (
                  <div>
                    <li key={index} onClick={() => handleItemClick(index)} style={{ fontSize: '3vh', marginTop: '5vh' }}>
                      {service}
                    </li>
                  </div> 
                ))}
              </ul>
            }
              modal
              nested
              className="custom-popup"
            >
              {(close) => (
                <div className='modal'>
                  <div className="modal-header" style={{textAlign:"center", fontWeight:"bold", paddingTop:"20px", fontSize:"25px", paddingBottom: "20px"}}>{serviceDetails.title}</div>
                  <div className='contentFooter'>
                    <img
                      alt="testimonial"
                      style={{ width: '100%', height: '20vh', borderRadius: '20px' }}
                      className="object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                      src={`https://drive.google.com/thumbnail?id=${serviceDetails.image}`}
                      loading="lazy"
                    />
                    <p style={{ lineHeight: "1.5", padding: '0 10px', textAlign: 'justify' }}>{serviceDetails.description}</p>
                    {serviceDetails.benefit &&
                      (serviceDetails.title !== 'ADMINISTRATIVE SERVICES' && <h2>Benefits</h2>)}
                    {serviceDetails.benefit && serviceDetails.benefit.map((benefits, index) => (
                      <div>
                        <p style={{ padding: "10px", textAlign: 'justify', whiteSpace: "nowrap", textOverflow: "ellipsis" }} data-tip={benefits}><li key={index}>{truncateText(benefits, 40)}</li></p>
                        <Tooltip />
                      </div>
                    ))}
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
        </div>
      )}
    </div>
  );
};

export default Services;



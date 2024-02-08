import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { collection, getDocs, where } from "firebase/firestore";
import {db} from './firebase';
import vision from './Vision.png';
import mission from './mission.png';


const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 2.5,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust the speed of auto-sliding in milliseconds
  };

  const [website, setWebsite] = useState('');
  const [visionImg, setVisionImg] = useState('');
  const [visionText, setVisionText] = useState('');
  const [missionImg, setMissionImg] = useState('');
  const [missionText, setMissionText] = useState('');
  const [keyGoals, setKeyGoals] = useState([]);
  const [services, setServices] = useState([]);

  const fetchPost = async () => {
    const querySnapshot = await getDocs(collection(db, "collection"), where("name", "==", "contact_us"));

    if (querySnapshot.size > 0) {
        // Document found
        const docData = querySnapshot.docs[3].data();
        setWebsite(docData.description);
        setVisionImg(docData.vision_image);
        setVisionText(docData.vision);
        setMissionImg(docData.mission_image);
        setMissionText(docData.mission);
        setKeyGoals(docData.key_goals);
        setServices(docData.services);
        console.log("Document data:", docData);
    } else {
        // Document not found
        console.log("Document 'about_us' not found");
      
    }
  }

// Effect to fetch form fields on component mount
  useEffect(() => {
    fetchPost();
  }, []); //data

  function extractDriveId(url) {
    const match = url.match(/\/d\/([a-zA-Z0-9-_]+)\//);
    return match ? match[1] : null;
  }


  return (
    <section>
      <div>
        <Slider {...settings}>
          {services.map((service) => (
            <div key={service.id}>
              <img 
                src={`https://drive.google.com/thumbnail?id=${service}`} 
                alt="service" 
                style={{ padding: '20px 50px', width: '600px', height: '300px', borderRadius: '50px' }}
                loading="lazy"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div>
        <h2 className="above">{website}</h2>
      </div>

      <div className="containerF">
        <div className="leftDiv">
          <p style={{ textAlign:"center", fontSize:"25px", fontWeight: 'bold', fontFamily: 'math'}}><u>Vision</u></p>
          <img 
            className="imageVision"
            src={`https://drive.google.com/thumbnail?id=${visionImg}`}
            alt="Vision"
            loading="lazy"
          />
          <p style={{ textAlign:"center", fontWeight: 'bold', fontFamily: 'math'}}>{visionText}</p>
        </div>
        <div className="rightDiv">
          <p style={{ textAlign:"center", fontSize:"25px", fontWeight: 'bold', fontFamily: 'math'}}><u>Mission</u></p>
          <img
            className="imageMission"
            src={`https://drive.google.com/thumbnail?id=${missionImg}`}
            alt="Mission"
            loading="lazy"
          />
          <p style={{ textAlign:"center", fontWeight: 'bold', fontFamily: 'math'}}>{missionText}</p>
        </div>
      </div>

      <div className="containerC">
        <div className="centerDiv">
          <p><h1><u>Key Goals</u></h1></p>
          <div style={{lineHeight: '2'}}>
              {keyGoals.map((goal) => (
                <li key={goal.id}>{goal}</li>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default Home;
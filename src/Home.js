import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { collection, getDocs, where } from "firebase/firestore";
import {db} from './firebase';


const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
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
    const driveId = extractDriveId(docData.vision_image);
    let visionImgURl = "https://drive.google.com/thumbnail?id=" + driveId;
    setVisionImg(visionImgURl);
    setVisionText(docData.vision);
    const driveId2 = extractDriveId(docData.mission_image);
    let misionImgURl = "https://drive.google.com/thumbnail?id=" + driveId2;
    setMissionImg(misionImgURl);
    setMissionText(docData.mission);
    setKeyGoals(docData.key_goals);
    setServices(docData.services);
    console.log("Document data:", docData);
} else {
    // Document not found
    console.log("Document 'about_us' not found");
  
}}

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
    {services.map((service, index) => (
    <div>
       <img src={`https://drive.google.com/thumbnail?id=${service}`} alt="index" style={{ padding: '20px 50px', width: '600px', height: '300px' }}/>
    </div>
            ))}
        </Slider>
    </div>

    <div>
    <h2 className="above">
        {website}
    </h2>
    </div>

    <div className="containerF">
      <div className="leftDiv">
      <p style={{ textAlign:"center", fontSize:"25px"}}><u>Vision</u></p>
      <img className="imageVision" src={visionImg} alt="drive image"/>
      <p style={{ textAlign:"left"}}>{visionText}</p>
      </div>
      <div className="rightDiv">
      <p style={{ textAlign:"center", fontSize:"25px"}}><u>Mission</u></p>
      <img className="imageMission" src={missionImg} alt="drive image"/>
      <p style={{ textAlign:"center"}}>{missionText}</p>
      </div>
    </div>

    <div className="containerC">
      <div className="centerDiv">
      <p><h3><u>Key Goals</u></h3></p>
      <div>
      {keyGoals.map((goal, index) => (
        <p><li key={index}>{goal}</li></p>
      ))}
    </div>
      </div>
    </div>

    </section>
    
  );
};


export default Home;
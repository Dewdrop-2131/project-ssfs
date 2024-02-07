// // React Component
import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc } from "firebase/firestore";
import {db} from './firebase';

const About = () => {

  const[whatAreWe, setWhatAreWe] = useState('');
  const[whatAreWeDes, setWhatAreWeDes] = useState('');
  const[howAreWeBuilt, setHowAreWeBuilt] = useState('');
  const[howAreWeBuiltDes, setHowAreWeBuiltDes] = useState('');
  const[keyPersons, setKeyPersons] = useState([]);

  const fetchPost = async () => {
    const querySnapshot = await getDocs(collection(db, "collection"));

    if (querySnapshot.size > 0) {
      // Document found
      const docData = querySnapshot.docs[0].data();
      setWhatAreWe(docData.about_title);
      setWhatAreWeDes(docData.about);
      setHowAreWeBuilt(docData.history_title);
      setHowAreWeBuiltDes(docData.history);

      const subCollectionSnapshot = await getDocs(collection(doc(db, "collection", "about"), "key_persons"));
      const subCollectionData = subCollectionSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      console.log("sub", subCollectionData);

      // Set keyPersons state
        setKeyPersons(subCollectionData);
        console.log("keypersons", keyPersons);
  } else {
      // Document not found
      console.log("Document 'about_us' not found");
    
  }}

  // Effect to fetch form fields on component mount
useEffect(() => {
  fetchPost();
  }, []);


  useEffect(() => {
    console.log("keypersons", keyPersons);
  }, [keyPersons]);

  return (
    <section className="text-gray-600 body-font">
     <div className="outerDiv">
      <div className="row">
        <div className="leftDivAbout">
          <p style={{fontSize:"20px"}}><h3><u>{whatAreWe}</u></h3></p>
          <p>{whatAreWeDes}</p>
        </div>
      </div>
      <div className="row">
        <div className="rightDivAbout">
          <p className="rightDivAboutHeading" style={{fontSize:"20px"}}><h3><u>{howAreWeBuilt}</u></h3></p>
          <p>{howAreWeBuiltDes}</p>
        </div>
      </div>
    </div> 
    <div className="containerAbout px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4" style={{margin: '0 15%', justifyContent: 'center'}}>
          {keyPersons.map((testimonial, index) => (
            <div key={index} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  style={{width: '12rem', height: '15rem'}}
                  className="mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={`https://drive.google.com/thumbnail?id=${testimonial.image}`}
                />
                <h2 className="text-gray-900 font-bold title-font tracking-wider text-sm" style={{fontSize: '20px'}}>{testimonial.name}</h2>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default About;
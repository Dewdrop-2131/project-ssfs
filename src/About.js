// React Component
import React, { useState, useEffect } from 'react';
import { collection, getDocs, where } from "firebase/firestore";
import {db} from './firebase';

const About = () => {

  const[whatAreWe, setWhatAreWe] = useState('');
  const[whatAreWeDes, setWhatAreWeDes] = useState('');
  const[howAreWeBuilt, setHowAreWeBuilt] = useState('');
  const[howAreWeBuiltDes, setHowAreWeBuiltDes] = useState('');
  const[testimonials, setTestimonials] = useState([]);

  const fetchPost = async () => {
    const querySnapshot = await getDocs(collection(db, "collection"), where("name", "==", "about"));

    if (querySnapshot.size > 0) {
      // Document found
      const docData = querySnapshot.docs[0].data();
      setWhatAreWe(docData.about_title);
      setWhatAreWeDes(docData.about);
      setHowAreWeBuilt(docData.history_title);
      setHowAreWeBuiltDes(docData.history);
      setTestimonials(docData.key_persons || []); //need to work on this
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
    <section className="text-gray-600 body-font">
     <div className="outerDiv">
      <div className="row">
        <div className="leftDivAbout">
          <p><h3>{whatAreWe}</h3></p>
          <p>{whatAreWeDes}</p>
        </div>
      </div>
      <div className="row">
        <div className="rightDivAbout">
          <p className="rightDivAboutHeading"><h3>{howAreWeBuilt}</h3></p>
          <p>{howAreWeBuiltDes}</p>
        </div>
      </div>
    </div> 
    <div className="containerAbout px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={testimonial.imageUrl}
                />
                <p className="leading-relaxed">{testimonial.content}</p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">{testimonial.name}</h2>
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

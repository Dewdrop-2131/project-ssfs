// Import React and any necessary modules
import React from 'react';

// Functional component for the ContactForm
const FormContact = () => {
  return (
    <div className="container">
    <h2>Please fill the form</h2>
      <form action="">
        <div className="row">
          <div className="col-25">
            <label htmlFor="name">Name</label>
          </div>
          <div className="col-75">
            <input type="text" id="name" name="name" placeholder="Your name" />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="email">Email</label>
          </div>
          <div className="col-75">
            <input type="text" id="email" name="email" placeholder="Your Email" />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="services">Services</label>
          </div>
          <div className="col-75">
            <select id="services" name="services" placeholder="Chose...">
              <option value="A">Chose...</option>
              <option value="B">Bbbbb</option>
              <option value="C">Ccccc</option>
              <option value="A">Aaaaa</option>
              <option value="B">Bbbbb</option>
              <option value="C">Ccccc</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="contact">Contact</label>
          </div>
          <div className="col-75">
            <input type="text" id="contact" name="contact" placeholder="Your Mobile Number" />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="bttc">Best Time to Contact</label>
          </div>
          <div className="col-75">
            <input type="text" id="bttc" name="bttc" placeholder="Time to contact" />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="address">Address/Location</label>
          </div>
          <div className="col-75">
            <input type="text" id="address" name="address" placeholder="Your Location" />
          </div>
        </div>
        <div className="row">
        <div className="row row-submit">
        <input className="submit" type="submit" value="Submit" />
        </div>
        </div>
      </form>
    </div>
  );
};

// Export the ContactForm component for use in other files
export default FormContact;


// import React, { useState, useEffect } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/firestore';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDGJAikgLuyXsJOrDvoPTNXV5JuMpsPqXo",
//   authDomain: "stellarscape-195b9.firebaseapp.com",
//   projectId: "stellarscape-195b9",
//   storageBucket: "stellarscape-195b9.appspot.com",
//   messagingSenderId: "675073527842",
//   appId: "1:675073527842:web:0bb35a27435300fa5cba7b",
//   measurementId: "G-QVGR3BZ0J3"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// // Functional component for the ContactForm
// const FormContact = () => {
//   // State to store form field data
//   const [formData, setFormData] = useState({});
//   const [formFields, setFormFields] = useState([]);

//   // Function to fetch form fields from Firebase
//   const fetchFormFields = async () => {
//     try {
//       // Assuming you have a "formFields" collection in Firebase
//       const formFieldsSnapshot = await firebase.firestore().collection('formFields').get();

//       const fields = [];
//       formFieldsSnapshot.forEach((doc) => {
//         fields.push({ id: doc.id, ...doc.data() });
//       });

//       setFormFields(fields);
//       console.log("car",fields);
//     } catch (error) {
//       console.error('Error fetching form fields from Firebase', error);
//     }
//   };

//   // Effect to fetch form fields on component mount
//   useEffect(() => {
//     fetchFormFields();
//   }, []); //data

//   // Function to handle form field changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   return (
//     <div className="container">
//       <h2>Please fill the form</h2>
//       <form action="">
//         {/* Dynamically render form fields from Firebase data */}
//         {formFields.map((field) => (
//           <div className="row" key={field.id}>
//             <div className="col-25">
//               <label htmlFor={field.id}>{field.label}</label>
//             </div>
//             <div className="col-75">
//               {field.type === 'select' ? (
//                 <select id={field.id} name={field.id} value={formData[field.id] || ''} onChange={handleInputChange}>
//                   <option value="">{field.placeholder}</option>
//                   {field.options.map((option) => (
//                     <option key={option} value={option}>
//                       {option}
//                     </option>
//                   ))}
//                 </select>
//               ) : (
//                 <input
//                   type={field.type}
//                   id={field.id}
//                   name={field.id}
//                   placeholder={field.placeholder}
//                   value={formData[field.id] || ''}
//                   onChange={handleInputChange}
//                 />
//               )}
//             </div>
//           </div>
//         ))}
//         {/* Submit button */}
//         <div className="row row-submit">
//           <input className="submit" type="submit" value="Submit" />
//         </div>
//       </form>
//     </div>
//   );
// };

// // Export the ContactForm component for use in other files
// export default FormContact;



// import React, { useState, useEffect } from 'react';
// import { collection, getDocs, where, addDoc } from "firebase/firestore";
// import { db } from './firebase';

// const FormContact = () => {
//   // State to store form field data
//   const [formData, setFormData] = useState({});
//   const [formFields, setFormFields] = useState([]);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [showFailure, setShowFailure] = useState(false);

//   // Function to fetch form fields from Firebase
//   const fetchPost = async () => {
//     const querySnapshot = await getDocs(collection(db, "collection"), where("name", "==", "contact_us"));

//     if (querySnapshot.size > 0) {
//       // Document found
//       const docData = querySnapshot.docs[1].data(); // Use index 0 instead of 1
//       const mappedFields = [
//         { id: "name", label: docData["name"], type: 'text', placeholder: docData["name"] },
//         { id: "email", label: docData["email"], type: 'text', placeholder: docData["email"] },
//         { id: "mobile", label: docData["mobile"], type: 'text', placeholder: docData["mobile"] },
//         { id: "address", label: docData["address"], type: 'text', placeholder: docData["address"] },
//         { id: "contact_timings", label: docData["contact_timings"], type: 'text', placeholder: docData["contact_timings"] },
//         { id: "service_needed", label: "Services", type: 'options', services: docData["service_needed"] },
//       ];
//       setFormFields(mappedFields);
//       console.log("Document data:", mappedFields);
//     } else {
//       // Document not found
//       console.log("Document 'contact_us' not found");
//     }
//   };

//   // Effect to fetch form fields on component mount
//   useEffect(() => {
//     fetchPost();
//   }, []);

//   // Function to handle form field changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     formData.status = false;

//     try {
//       // Add a new document to the "Forms" collection with auto-generated ID
//       await addDoc(collection(db, "Forms"), formData);

//       // Clear the form data after submission
//       setFormData({});

//       // Clear the checkbox if it was checked
//       const checkbox = document.getElementById("directCallConsent");
//       if (checkbox.checked) {
//         checkbox.checked = false;
//       }

//       setShowSuccess(true);
//     } catch (error) {
//       console.error("Error adding document: ", error);
//       setShowFailure(true);
//     }
//   };

//   const handleClosePopup = () => {
//     setShowSuccess(false);
//     setShowFailure(false);
//   };

//   return (
//     <div className="container" style={{ lineHeight: "1.5" }}>
//       <h2>Please fill the form for Service Request</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Dynamically render form fields from Firebase data */}
//         {formFields.map((field) => (
//           <div className="row" key={field.id}>
//             <div className="col-25">
//               <label style={{ color: 'black' }} htmlFor={field.id}>{field.label}</label>
//             </div>
//             <div className="col-75">
//               {field.id === "service_needed" ? (
//                 <select
//                   id={field.id}
//                   name={field.id}
//                   value={formData[field.id] || ''}
//                   onChange={handleInputChange}
//                 >
//                   <option value="">Select a service</option>
//                   {field.services.map((service, index) => (
//                     <option key={index} value={service}>{service}</option>
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
//         <div className="col-75">
//           <input
//             type="checkbox"
//             id="directCallConsent"
//             name="directCallConsent"
//             onChange={handleInputChange}
//           />
//           <label htmlFor="directCallConsent">
//             By clicking this checkbox, you agree for a direct call consultation from our agents, if not consultation will be through email.
//           </label>
//         </div>
//         {/* Submit button */}
//         <div className="row row-submit" type="submit">
//           <input className="submit" type="submit" value="Submit" />
//         </div>
//       </form>
//       {/* Success popup */}
//       {showSuccess && (
//         <div className="popup success">
//           <span className="close" onClick={handleClosePopup}>&times;</span>
//           <p>Form submitted successfully!</p>
//         </div>
//       )}
//       {/* Failure popup */}
//       {showFailure && (
//         <div className="popup failure">
//           <span className="close" onClick={handleClosePopup}>&times;</span>
//           <p>Failed to submit form. Please try again.</p>
//         </div>
//       )}
//     </div>
//   );
// };

// // Export the ContactForm component for use in other files

// export default FormContact;

import React, { useState, useEffect } from 'react';
import { collection, getDocs, where, addDoc } from "firebase/firestore";
import { db } from './firebase';

const FormContact = () => {
  // State to store form field data
  const [formData, setFormData] = useState({});
  const [formFields, setFormFields] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailure, setShowFailure] = useState(false);

  // Function to fetch form fields from Firebase
  const fetchPost = async () => {
    const querySnapshot = await getDocs(collection(db, "collection"), where("name", "==", "contact_us"));

    if (querySnapshot.size > 0) {
      // Document found
      const docData = querySnapshot.docs[1].data(); // Use index 0 instead of 1
      const mappedFields = [
        { id: "name", label: docData["name"], type: 'text', placeholder: docData["name"], required: true },
        { id: "email", label: docData["email"], type: 'text', placeholder: docData["email"], required: true },
        { id: "mobile", label: docData["mobile"], type: 'text', placeholder: docData["mobile"], required: true },
        { id: "address", label: docData["address"], type: 'text', placeholder: docData["address"], required: true },
        { id: "contact_timings", label: docData["contact_timings"], type: 'text', placeholder: docData["contact_timings"], required: true },
        { id: "service_needed", label: "Services", type: 'options', services: docData["service_needed"], required: true },
      ];
      setFormFields(mappedFields);
      console.log("Document data:", mappedFields);
    } else {
      // Document not found
      console.log("Document 'contact_us' not found");
    }
  };

  // Effect to fetch form fields on component mount
  useEffect(() => {
    fetchPost();
  }, []);

  // Function to handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.status = false;

    // Check if all required fields are filled
    const isFormValid = formFields.every(field => field.required ? formData[field.id] : true);
    if (!isFormValid) {
      // Show error message and prevent form submission
      setShowFailure(true);
      return;
    }

    try {
      // Add a new document to the "Forms" collection with auto-generated ID
      await addDoc(collection(db, "Forms"), formData);

      // Clear the form data after submission
      setFormData({});

      // Clear the checkbox if it was checked
      const checkbox = document.getElementById("directCallConsent");
      if (checkbox.checked) {
        checkbox.checked = false;
      }

      setShowSuccess(true);
    } catch (error) {
      console.error("Error adding document: ", error);
      setShowFailure(true);
    }
  };

  const handleClosePopup = () => {
    setShowSuccess(false);
    setShowFailure(false);
  };

  return (
    <div className="container" style={{ lineHeight: "1.5" }}>
      <h2>Please fill the form for Service Request</h2>
      <form onSubmit={handleSubmit}>
        {/* Dynamically render form fields from Firebase data */}
        {formFields.map((field) => (
          <div className="row" key={field.id}>
            <div className="col-25">
              <label style={{ color: 'black' }} htmlFor={field.id}>
                {field.label} {field.required && <span style={{ color: 'red' }}>*</span>}
              </label>
            </div>
            <div className="col-75">
              {field.id === "service_needed" ? (
                <select
                  id={field.id}
                  name={field.id}
                  value={formData[field.id] || ''}
                  onChange={handleInputChange}
                  required={field.required}
                >
                  <option value="">Select a service</option>
                  {field.services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  placeholder={field.placeholder}
                  value={formData[field.id] || ''}
                  onChange={handleInputChange}
                  required={field.required}
                />
              )}
            </div>
          </div>
        ))}
        <div className="col-75">
          <input
            type="checkbox"
            id="directCallConsent"
            name="directCallConsent"
            onChange={handleInputChange}
          />
          <label htmlFor="directCallConsent">
            By clicking this checkbox, you agree for a direct call consultation from our agents, if not consultation will be through email.
          </label>
        </div>
        {/* Submit button */}
        <div className="row row-submit" type="submit">
          <input className="submit" type="submit" value="Submit" />
        </div>
      </form>
      {/* Success popup */}
      {showSuccess && (
        <div className="popup success">
          <span className="close" onClick={handleClosePopup}>&times;</span>
          <p>Form submitted successfully!</p>
        </div>
      )}
      {/* Failure popup */}
      {showFailure && (
        <div className="popup failure">
          <span className="close" onClick={handleClosePopup}>&times;</span>
          <p>Failed to submit form. Please fill all the required fields.</p>
        </div>
      )}
    </div>
  );
};

// Export the ContactForm component for use in other files

export default FormContact;


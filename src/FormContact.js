import React, { useState, useEffect } from 'react';
import { collection, getDocs, where, addDoc } from "firebase/firestore";
import { db } from './firebase';
import moment from 'moment';

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
    formData.timeStamp = moment(new Date()).format('DD-MM-YYYY');
    console.log("timestamp", formData.timeStamp);
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

      // Open default email client with pre-filled email
      window.open(`mailto:info.stellarscape@gmail.com.com?subject=Service Request&body=Dear Stellarscape,%0D%0A%0D%0AWe are interested in your services and would like to request more information. Please get in touch with us at your earliest convenience.%0D%0A%0D%0AName: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMobile: ${formData.mobile}%0D%0AAddress: ${formData.address}%0D%0AContact Timings: ${formData.contact_timings}%0D%0AService Needed: ${formData.service_needed}%0D%0A%0D%0AThank you.`);

      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 2000);
    } catch (error) {
      console.error("Error adding document: ", error);
      setShowFailure(true);
      setTimeout(() => {
        setShowFailure(false);
      }, 2000);
    }
  };


  
  return (
    <div className="container">
      <h2>Please fill the form for Service Request</h2>
      <form onSubmit={handleSubmit} className='form-design'>
        {/* Dynamically render form fields from Firebase data */}
        {formFields.map((field) => (
          <div className="row form-align" key={field.id}>
            <label htmlFor={field.id} className="col-25 form-label">
              {field.label} {field.required && <span style={{ color: 'red' }}>*</span>}
            </label>
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
        <div className="row checkbox-row" style={{ width: "70%", marginLeft: "auto"}}>
          <input
            type="checkbox"
            id="directCallConsent"
            name="directCallConsent"
            onChange={handleInputChange}
          />
          <label htmlFor="directCallConsent" className="col-70">
            By clicking this checkbox, you agree for a direct call consultation from our agents, if not consultation will be through email.
          </label>
        </div>
        {/* Submit button */}
        <div className="row row-submit">
          <input className="submit" type="submit" value="Submit"/>
        </div>
      </form>
      {showSuccess && (
        window.alert("Form submitted successfully!")
      )}
      {showFailure && (
        window.alert("Failed to submit form. Please fill all the required fields.")
      )}
    </div>
  );
};

export default FormContact;

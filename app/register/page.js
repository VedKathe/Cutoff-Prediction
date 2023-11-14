"use client"
import React,{ useState } from "react";
import styles from "./register.module.css";

export default function register() {

  const [formData, setFormData] = useState({
    collageName: '',
    university: '',
    zipCode: '',
    phoneNo: '',
    CS: '',
    Civil: '',
    mech: '',
    ENTC: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success (e.g., show a success message)
        console.log('Form submitted successfully');
      } else {
        // Handle errors (e.g., show an error message)
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    
    
    <div className={styles.container}>
      <div className={styles['title']}>
        Register your Collage
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <div>
          <label htmlFor="collageName">Collage Name</label>
          <input type="text" id="collageName" name="collageName" onChange={handleInputChange} placeholder="Enter Collage Name" />
        </div></div>

        <div className={styles.inputGroup}>
          <div>
            <label htmlFor="university">University</label>
            <input type="text" id="university" name="university" onChange={handleInputChange} placeholder="Enter Univerty" />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <div>
            <label htmlFor="zipCode">Zip Code</label>
            <input type="text" id="zipCode" name="zipCode" onChange={handleInputChange} placeholder="Enter Zip Code" />
          </div>
        </div>
        <div className={styles.inputGroup}>
          <div>
            <label htmlFor="phoneNo">Phone Number</label>
            <input type="tel" id="phoneNo" name="phoneNo" onChange={handleInputChange} placeholder="Enter Phone Number" />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <div>
            <label htmlFor="CS">CS</label>
            <input type="text" id="CS" name="CS" onChange={handleInputChange} placeholder="Enter CutOff..." />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <div>
            <label htmlFor="Civil">Civil</label>
            <input type="text" id="Civil" name="Civil" onChange={handleInputChange} placeholder="Enter CutOff..."/>
          </div>
        </div>
        <div className={styles.inputGroup}>
          <div>
            <label htmlFor="mech">Mech</label>
            <input type="text" id="mech" name="mech" onChange={handleInputChange} placeholder="Enter CutOff..." />
          </div>
        </div>
        <div className={styles.inputGroup}>
          <div>
            <label htmlFor="ENTC">ENTC</label>
            <input type="text" id="ENTC" name="ENTC" onChange={handleInputChange} placeholder="Enter CutOff..." />
          </div>
        </div>
       
        <button type="submit">Submit</button>
      </form>
    </div>
    
  );
}

// SubmitButton.js
import React from 'react';
import { sendEmail } from '../services/apiService';

const SubmitButton = ({ email, file, key, location, onReset }) => {
  const handleSubmit = async () => {
    try {
      // Assuming sendEmail function handles the actual submission
      await sendEmail(email, file, key, location);
      alert(`Email sent successfully!`);
      // Reset the form after successful submission
      onReset();
    } catch (error) {
      alert('An error occurred while sending the email.');
    }
  };

  return (
    <button onClick={handleSubmit}>Submit</button>
  );
};

export default SubmitButton;

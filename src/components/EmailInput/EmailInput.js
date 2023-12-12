
import React, { useState } from 'react';

const EmailInput = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const isEmailValid = () => {
    // Basic email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;

    // Check for illegal characters using a basic validation
    if (!isEmailValid()) {
      setError('Invalid email address');
    } else {
      setError('');
    }

    setEmail(newEmail);
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Recipient's Email"
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default EmailInput;

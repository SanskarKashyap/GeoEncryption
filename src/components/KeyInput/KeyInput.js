import React, { useState, useEffect } from 'react';

const KeyInput = () => {
  const [userInput, setUserInput] = useState('');
  const [encryptedKey, setEncryptedKey] = useState('');

  useEffect(() => {
    // Function to apply Base64 encryption
    const encryptKey = (word) => {
      return btoa(word); // Using btoa for Base64 encoding
    };

    // Update the encrypted key whenever the user input changes
    const updateEncryptedKey = () => {
      const encrypted = encryptKey(userInput);
      setEncryptedKey(encrypted);
    };

    updateEncryptedKey();
  }, [userInput]);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Enter a Random Word"
      />
      <p>Encrypted Key: {encryptedKey}</p>
    </div>
  );
};

export default KeyInput;

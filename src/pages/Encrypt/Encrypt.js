// Encrypt.js
import React, { useState } from 'react';
import FileUpload from './../../components/FileUpload/FileUpload';
import EmailInput from './../../components/EmailInput/EmailInput';
import KeyInput from './../../components/KeyInput/KeyInput';
import LocationInput from './../../components/HandleLocation/LocationInput';
import SubmitButton from './../../components/SubmitButton/SubmitButton';
import './Encrypt.css';

const Encrypt = () => {
  const [email, setEmail] = useState('');
  const [file, setFile] = useState(null);
  const [key, setKey] = useState('');
  const [location, setLocation] = useState('');

  const handleFileChange = (selectedFile) => {
    setFile(selectedFile);
  };

  const handleReset = () => {
    setEmail('');
    setFile(null);
    setKey('');
    setLocation('');
    window.location.reload(); // Reload the page
  };

  return (
    <div className="container">
      <h1 className="encryption-title">Encryption</h1>

      <div className="input-field">
        <div className="otherButton">
          <FileUpload onFileChange={handleFileChange} />
        </div>
      </div>

      <div className="input-field">
        <EmailInput onEmailChange={(value) => setEmail(value)} />
      </div>

      <div className="input-field">
        <KeyInput onKeyChange={(value) => setKey(value)} />
      </div>

      <div className="input-field">
        <LocationInput onLocationChange={(value) => setLocation(value)} />
      </div>

      <div className="input-field">
        <div className='otherButton'>
          <SubmitButton email={email} file={file} key={key} location={location} onReset={handleReset} />
        </div>
      </div>
    </div>
  );
};

export default Encrypt;

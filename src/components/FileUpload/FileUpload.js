// FileUpload.js

import React, { useState } from 'react';
import './FileUpload.css';
import { FaPaperclip } from 'react-icons/fa'; // Import the attachment icon from a popular icon library

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState('');

  const allowedFileTypes = ['application/pdf', 'image/jpeg', 'image/png'];

  const fileSelectedHandler = (event) => {
    const file = event.target.files[0];

    if (file && allowedFileTypes.includes(file.type)) {
      setSelectedFile(file);
      setError('');
    } else {
      setSelectedFile(null);
      setError('Invalid file type. Please select a PDF, JPEG, or PNG file.');
    }
  };

  const getShortenedFileName = (fileName, maxLength) => {
    const fileExtension = fileName.split('.').pop(); // Get the file extension
    const truncatedName = fileName.length > maxLength ? `${fileName.substring(0, maxLength)}...` : fileName;

    return `${truncatedName}.${fileExtension}`;
  };

  return (
    <div className="FileUpload">
      <input type="file" id="file" onChange={fileSelectedHandler} style={{ display: 'none' }} />
      <label htmlFor="file" className="button">
        {selectedFile ? (
          <span>
            <FaPaperclip style={{ marginRight: '5px' }} />
            {getShortenedFileName(selectedFile.name, 10)}
          </span>
        ) : (
          <span>
            <FaPaperclip style={{ marginRight: '5px' }} />
            Attach File
          </span>
        )}
      </label>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default FileUpload;

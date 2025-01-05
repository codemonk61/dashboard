import React, { useState } from "react";
import Upload from "./icons/Upload";

const FileUploader = ({ label = "Upload File", onFileChange }) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name); // Update the file name
      onFileChange && onFileChange(file); // Notify parent of the selected file
    }
  };

  return (
    <>
    <style>
        {
            `
            /* Container styling */
.upload-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

/* Button styling */
.upload-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 8px 20px;
  border: 1px solid #c6c6c6;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  color: #4a4a4a;
  background-color: #fff;
  cursor: pointer;
  position: relative;
}

.upload-button:hover {
  background-color: #f8f8f8;
  border-color: #b0b0b0;
}

/* Hidden input */
.upload-input {
  display: none;
}

/* Upload icon styling */
.upload-icon {
  font-size: 16px;
  color: #4a4a4a;
  pointer-events: none; /* Make the icon non-interactive */
}

/* File name display */
.file-name {
  font-size: 12px;
  color: #6c757d;
  margin-top: 5px;
}
            `
        }
    </style>
    <div className="upload-container">
      <label className="upload-button">
        {label}
        <input type="file" onChange={handleFileChange} className="upload-input" />
        <span className="upload-icon">
          <Upload/>
        </span>
      </label>
      {fileName && <div className="file-name">{fileName}</div>}
    </div>
    </>
  );
};

export default FileUploader;

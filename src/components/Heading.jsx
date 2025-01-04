import React from "react";


const Heading = ({ icon, text, iconBackground = "#EAF4FF", textColor = "#000" }) => {
  return (
    <>
    <style>
        {
            `
            .heading-container {
  display: flex;
  align-items: center;
  gap: 10px; /* Space between icon and text */
}

.heading-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.heading-text {
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}`
        }
    </style>
    <div className="heading-container">
      {icon && (
        <div
          className="heading-icon"
          style={{ backgroundColor: iconBackground }}
        >
          {icon}
        </div>
      )}
      <h1 className="heading-text" style={{ color: textColor }}>
        {text}
      </h1>
    </div>
    </>
  );
};

export default Heading;

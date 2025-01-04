import React, { useState } from "react";

const Tab = ({ tabs, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(0); // Index of the active tab

  const handleTabClick = (index) => {
    setActiveTab(index);
    onTabChange && onTabChange(index); // Notify parent component of the tab change
  };

  return (
    <>
    <style>
        {

            `
            /* Tab container styles */
.tab-container {
  display: flex;
  gap: 20px;
  border-bottom: 1px solid #e0e0e0;
}

/* Individual tab item styles */
.tab-item {
  font-size: 16px;
  font-weight: 500;
  color: #4a4a4a;
  cursor: pointer;
  padding-bottom: 5px;
  position: relative;
  transition: color 0.3s ease;
}

.tab-item:hover {
  color: #007bff;
}

/* Active tab styles */
.tab-item.active {
  color: #007bff;
  font-weight: 600;
}

.tab-item.active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #007bff;
}

            `
        }
    </style>
    <div className="tab-container">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`tab-item ${activeTab === index ? "active" : ""}`}
          onClick={() => handleTabClick(index)}
        >
          {tab}
        </div>
      ))}
    </div>
    </>
  );
};

export default Tab;

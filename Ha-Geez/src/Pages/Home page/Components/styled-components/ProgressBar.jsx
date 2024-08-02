// src/ProgressBar.js
import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ progress}) => {
    // const progress = 65;
  return (

    <div className="progress-bar-container">
        
      <div className="progress-bar" style={{ width: '${progress}%' }}>
        {progress}%
      </div>
      
    </div>
  );
};

export default ProgressBar;

/*import React from 'react'
import "../styles/setting.css"
const Setting = () => {
  return (
    <div className="setting">This page is for changing the preferences</div>
  )
}

export default Setting
*/

import React, { useState } from 'react';
import "../styles/setting.css";

const Setting = () => {
  // State to track the current theme
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  // Toggle function to switch between dark and light themes
  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  // Apply different classes based on the theme
  const themeClass = isDarkTheme ? "dark-theme" : "light-theme";

  return (
    <div className={`setting ${themeClass}`}>

      {/* Button to toggle between themes */}
      <button className="theme-btn" onClick={toggleTheme}>
        {isDarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"}
      </button>
    </div>
  );
}

export default Setting;

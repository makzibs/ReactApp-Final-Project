/*import React from 'react'
import "../styles/setting.css"
const Setting = () => {
  return (
    <div className="setting">This page is for changing the preferences</div>
  )
}

export default Setting


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

     //Button to toggle between themes 
      <button className="theme-btn" onClick={toggleTheme}>
        {isDarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"}
      </button>

    </div>
  );
}

export default Setting; 

//latest working code//
import "../styles/setting.css";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function Setting() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="setting" id={theme}>
        <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default Setting;

*/
import "../styles/setting.css";
import { createContext, useState, useEffect } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function Setting() {
  const [theme, setTheme] = useState(() => {
    // Check local storage for the saved theme, default to "dark" if not found
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "dark";
  });

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    // Save the selected theme to local storage
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="setting" id={theme}>
        <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default Setting;




import "../styles/setting.css";
import { createContext, useState, useEffect } from "react";
import ReactSwitch from "react-switch";
//ThemeContext has been used to enable the theme switching feature in the app and also to synchroniize across the components
export const ThemeContext = createContext(null);

function Setting() {
  // Use the initial state function to set the theme based on local storage
  const [theme, setTheme] = useState(() => {
    // Check local storage for the saved theme, default to "dark" if not found
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "dark";
  });

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  // UseEffect hook to save the selected theme to local storage whenever it changes
  useEffect(() => {
   
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



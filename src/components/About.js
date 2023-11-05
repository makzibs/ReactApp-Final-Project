import React, { useEffect, useState } from 'react'
import "../styles/about.css"
import { useNavigate } from "react-router-dom";

function About() {
  // Initialize the router navigation function
  const navigate = useNavigate();

  // Initialize the router navigation function
  const theme = localStorage.getItem("theme");

// Function to navigate to the "Tasks" page
  const handleGoToTasks = () => {
    navigate("/tasks"); 
  };

   // State to store and display the current time
  const[time, setTime] = useState(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`);

 // Use an effect to update the time every second
  useEffect(() => {
     setInterval(() => {
      const currentTime = new Date();
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const seconds = currentTime.getSeconds();
      const timeAsString = `${hours}:${minutes}:${seconds}`;
      setTime(timeAsString);
     }, 1000)
  }, []);


  return (
    <div className="about" id={theme}>
      <h1>{time}</h1>
      <button className="addTaskButton" onClick={handleGoToTasks}>Add Task</button>
      
      <div className='authorDetail'>
        <h2>Author: Anil Khanal</h2>
        <p>This is "About Me" page for this app "My Activity App".</p>
        <p>This app is a task monitoring application with a stopwatch feature. UI are very easy to understand where Users can add tasks, specifying their names and types, and track the time spent on that task. The app also displays the current time on the homepage and allows users to seamlessly navigate between different sections of the application.</p>
        <p> User also can toggle between two provided themes "light" and "dark" for better user experience</p>
        <p>All contents and images on this website are copyrighted and owned by Anil Khanal.</p>
        <p>Working Hours Spent on the Project is 52 hours.</p>

      </div>
      <footer>
        &copy; 2023 Anil Khanal - All Rights Reserved
      </footer>

      </div>
  )
}

export default About
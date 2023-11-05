import React, { useEffect, useState } from 'react'
import "../styles/about.css"
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const theme = localStorage.getItem("theme");

  const handleGoToTasks = () => {
    navigate("/tasks"); // Navigate to the /tasks route
  };
  const[time, setTime] = useState(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`);


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
        <p>This is the "About Me" page for this app "My Activity App".</p>
        <p>This app is a task monitoring application with a stopwatch feature. Users can add tasks, specifying their names and types, and track the time spent on that task. The app displays the current time on the homepage and allows users to seamlessly navigate between different sections of the application.</p>
        <p>All contents and images on this website are copyrighted and owned by Anil Khanal.</p>
        <p>Working Hours Spent on the Project is 42 hours.</p>

      </div>
      <footer>
        &copy; 2023 Anil Khanal - All Rights Reserved
      </footer>

      </div>
  )
}

export default About
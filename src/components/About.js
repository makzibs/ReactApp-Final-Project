import React, { useEffect, useState } from 'react'
import "../styles/about.css"
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

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
    <div className="about">
      <h1>Welcome to the homepage</h1>
      <button className="addTaskButton" onClick={handleGoToTasks}>Add Task</button>
      <h1>{time}</h1>

      </div>
  )
}

export default About
import React from 'react'
import "../styles/about.css"
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const handleGoToTasks = () => {
    navigate("/tasks"); // Navigate to the /tasks route
  };

  return (
    <div className="about">
      <h1>Welcome to the homepage</h1>
      <button className="addTaskButton" onClick={handleGoToTasks}>Add Task</button>

      </div>
  )
}

export default About
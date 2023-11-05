/*import { useState } from "react";

import "../styles/form.css";

export const Form = ({ addTask }) => {

  const [text, setText] = useState("");
  const [types, setTypes] = useState("");
  const [minutes, setMinutes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  
   // Create a task object
    const newTask = {
    text: text,
    type: types,
    minutes: minutes,
  };

   addTask(newTask);

    setText("");
    setTypes("Entertainment");
    setMinutes("");
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleTypesChange = (e) => {
    setTypes(e.target.value);
  };

  const handleMinutesChange = (e) => {
    setMinutes(e.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
    <label htmlFor="task">Task:</label>
      <input
        type="text"
        id="task"
        className="textfield"
        onChange={handleTextChange}
        value={text}
      />
        <label htmlFor="Option">Types:</label>
        <select
          id="Option"
          className="minutes_textfield"
          value={types}
          onChange={handleTypesChange}
        >
          <option value=""></option>
          <option value="Entertainment">Entertainment</option>
          <option value="Studies">Studies</option>
          <option value="Household">Househld</option>
        </select>
            

        <label htmlFor="minutes">Minutes Spent:</label>
        <input
          type="text"
          className="minutes_textfield"
          id="minutes"
          value={minutes}
          onChange={handleMinutesChange}
        />
      <input type="submit" value="Add" className="submit-btn" />
    </form>
  );
}; */


import { useState, useRef } from "react";

import "../styles/form.css";

export const Form = ({ addTask }) => {
  const [text, setText] = useState("");
  const [types, setTypes] = useState("");
  const [isTracking, setIsTracking] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const theme = localStorage.getItem("theme");

  const timerRef = useRef(null);

  const handleStartStop = () => {
    if (isTracking) {
      // Stop the timer
      clearInterval(timerRef.current);
    } else {
      // Start the timer
      const startTime = Date.now() - elapsedTime;
      timerRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 1000);
    }
    setIsTracking(!isTracking);
  };

  function formatElapsedTime(elapsedTimeInSeconds) {
    const hours = Math.floor(elapsedTimeInSeconds / 3600);
    const minutes = Math.floor((elapsedTimeInSeconds % 3600) / 60);
    const seconds = elapsedTimeInSeconds % 60;
  
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
    return formattedTime;
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a task object
    const newTask = {
      text: text,
      type: types,
      minutes: formatElapsedTime(Math.floor(elapsedTime / 1000)),
    };

    addTask(newTask);

    setText("");
    setTypes("");
    setElapsedTime(0);
    setIsTracking(false);

    // Clear the timer
    clearInterval(timerRef.current);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleTypesChange = (e) => {
    setTypes(e.target.value);
  };

  return (
   
    <form className="form" id={theme} onSubmit={handleSubmit}>
      <label htmlFor="task">Task:</label>
      <input
        type="text"
        id="task"
        className="textfield"
        onChange={handleTextChange}
        value={text}
      />
      <label htmlFor="Option">Types:</label>
      <select
        id="Option"
        className="minutes_textfield"
        value={types}
        onChange={handleTypesChange}
      >
        <option value=""></option>
        <option value="Entertainment">Entertainment</option>
        <option value="Studies">Studies</option>
        <option value="Household">Household</option>
      </select>

      {isTracking ? (
        <div className="stopWatch">
          <p>{Math.floor(elapsedTime / 1000)} seconds</p>
          <button className="stopWatchButton" onClick={handleStartStop}>Stop</button>
        </div>
      ) : (
        
        <button className="stopWatchButton" onClick={handleStartStop}>
          {elapsedTime > 0 ? "Resume" : "Start Tracking"}
        </button>
      )}

      <input type="submit" value="Add Task" className="submit-btn" />
    </form>
    
  
  );
}; 

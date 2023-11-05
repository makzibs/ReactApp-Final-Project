
import { useState, useRef } from "react";
import "../styles/form.css";
// State variables for task input, task type, tracking status, and elapsed time
export const Form = ({ addTask }) => {
  const [text, setText] = useState("");
  const [types, setTypes] = useState("");
  const [isTracking, setIsTracking] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const theme = localStorage.getItem("theme");
   // Reference to the timer interval
  const timerRef = useRef(null);

  // Function to start or stop tracking time
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

  // Function to format elapsed time into hh:mm:ss format
  function formatElapsedTime(elapsedTimeInSeconds) {
    const hours = Math.floor(elapsedTimeInSeconds / 3600);
    const minutes = Math.floor((elapsedTimeInSeconds % 3600) / 60);
    const seconds = elapsedTimeInSeconds % 60;
  
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
    return formattedTime;
  }
  
// Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a task object
    const newTask = {
      text: text,
      type: types,
      minutes: formatElapsedTime(Math.floor(elapsedTime / 1000)),
    };
   // Call the "addTask" function passed from the parent component
    addTask(newTask);

   // Call the "addTask" function passed from the parent component
    setText("");
    setTypes("");
    setElapsedTime(0);
    setIsTracking(false);

    // Clear the timer
    clearInterval(timerRef.current);
  };

 // Function to handle changes in the task input
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
// Function to handle changes in the task type
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
        className="option_textfield"
        value={types}
        onChange={handleTypesChange}
      >
        <option value=""></option>
        <option value="Entertainment">Entertainment</option>
        <option value="Studies">Studies</option>
        <option value="Household">Household</option>
        <option value="Hobby">Hobby</option>
        <option value="Sport">Sport</option>
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

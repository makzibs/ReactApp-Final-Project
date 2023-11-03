import { useState } from "react";

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
};

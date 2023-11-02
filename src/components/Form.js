import { useState } from "react";

import "../styles/form.css";

export const Form = ({ addTask, addTypes, addMinutes }) => {
  const [text, setText] = useState("");
  const [option, setOption] = useState("Entertainment");
  const [minutes, setMinutes] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(text);
    addTypes(option);
    addMinutes(minutes);
    setText("");
    setOption("");
    setMinutes("");
  };

  const handleOptionChange = (e) => {
    setOption(e.target.value);
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
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
        <label htmlFor="Option">Types:</label>
        <select
          id="Option"
          className="minutes_textfield"
          value={option}
          onChange={handleOptionChange}
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

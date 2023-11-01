import { useState } from "react";

import "../styles/form.css";

export const Form = ({ addTask, addTypes, addMinutes }) => {
  const [text, setText] = useState("");
  const [radio, setRadio] = useState("none");
  const [minutes, setMinutes] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(text);
    addTypes(radio);
    addMinutes(minutes);
    setText("");
    setRadio("");
    setMinutes("");
  };

  const handleGenreChange = (e) => {
    setRadio(e.target.value);
  };

  const handleMinutesChange = (e) => {
    setMinutes(e.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="textfield"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <p>Choose Types:</p>
        <label>
          <input
            type="radio"
            name="Types"
            value="Entertainment"
            //checked={Types === 'Entertainment'}
            onChange={handleGenreChange}
          />
          Entertainment
        </label>
        <label>
          <input
            type="radio"
            name="Types"
            value="Studies"
            //checked={Types === 'Studies'}
            onChange={handleGenreChange}
          />
          Studies
        </label>
        <label>
          <input
            type="radio"
            name="Types"
            value="Household"
            //checked={Types === 'Household'}
            onChange={handleGenreChange}
          />
          Household
        </label>

        <label htmlFor="minutes">Minutes Spent:</label>
        <input
          type="text"
          id="minutes"
          value={minutes}
          onChange={handleMinutesChange}
        />
      <input type="submit" value="Add" className="submit-btn" />
    </form>
  );
};

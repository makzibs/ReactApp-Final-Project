import "../styles/ListItem.css";

export const ListItem = ({ text, types, minutes, removeTask }) => {
  return (
    <div className="list-item">
      <p className="taskTitle">{text}</p>
      <p className="taskTypes">{types}</p>
      <p className="taskMinutes">{minutes}</p>
      <button className="checkbox" onClick={removeTask}></button>
    </div>
  );
};
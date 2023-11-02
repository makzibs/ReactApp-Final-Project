import "../styles/ListItem.css";

export const ListItem = ({ text, types, minutes, removeTask }) => {
  return (
    <div className="list-item">
      <p>{text}</p>
      <p>{types}</p>
      <p>{minutes}</p>
      <button className="checkbox" onClick={removeTask}></button>
    </div>
  );
};
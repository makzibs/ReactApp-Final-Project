import "../styles/ListItem.css";

export const ListItem = ({ text, removeTask }) => {
  return (
    <div className="list-item">
      <p>{text}</p>
    
      <button className="checkbox" onClick={removeTask}></button>
    </div>
  );
};
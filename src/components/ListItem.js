import "../styles/ListItem.css";

export const ListItem = ({ text, types, minutes, removeTask }) => {
  return (
    <div className="list-item">

      {/*display the title of task*/}
      <p className="taskTitle">{text}</p>

      {/*display the title of task types*/}
      <p className="taskTypes">{types}</p>

      {/*displays the time taken for that task in seconds*/}
      <p className="taskMinutes">{minutes}</p>
      
      {/*button that removes the task from tasklists*/}
      <button className="checkbox" onClick={removeTask}></button>
    </div>
  );
};
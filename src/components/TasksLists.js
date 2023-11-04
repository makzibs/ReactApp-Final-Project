

import { ListItem } from "./ListItem";
import "../styles/TasksList.css";

/*export const TasksLists = ({tasks, removeTask}) => {
    return <div className="todo-list">
         {tasks.map((task) => {
        return (
          <ListItem 
            key={task.id}
            text={task.text} 
            minutes={task.minutes} 
            types={task.type} 
            removeTask={() => removeTask(task.id)} 
          />
        );
      })}
    </div>
} 
import { ListItem } from "./ListItem";
import "../styles/TasksList.css";
export const TasksLists = ({ tasks, removeTask, filterText }) => {
  // Filter the tasks based on the filterText
  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="todo-list">
      {filteredTasks.map((task) => {
        return (
          <ListItem
            key={task.id}
            text={task.text}
            minutes={task.minutes}
            types={task.type}
            removeTask={() => removeTask(task.id)}
          />
        );
      })}
    </div>
  );
}; */

export const TasksLists = ({ tasks, removeTask, filterText, filterType }) => {
  // Filter the tasks based on both filterText and filterType
  const filteredTasks = tasks.filter((task) => {
    const textMatches = task.text.toLowerCase().includes(filterText.toLowerCase());
    const typeMatches = !filterType || task.type === filterType;
    return textMatches && typeMatches;
  });

  return (
    <div className="todo-list">
      {filteredTasks.map((task) => {
        return (
          <ListItem
            key={task.id}
            text={task.text}
            minutes={task.minutes}
            types={task.type}
            removeTask={() => removeTask(task.id)}
          />
        );
      })}
    </div>
  );
};


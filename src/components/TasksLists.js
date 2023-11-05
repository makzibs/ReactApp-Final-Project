import { ListItem } from "./ListItem";
import "../styles/TasksList.css";
export const TasksLists = ({ tasks, removeTask, filterText, filterType }) => {
  // Filter the tasks based on both filterText and filterType
  const filteredTasks = tasks.filter((task) => {

    // Check if the task's text matches the text from filter textfield(case-insensitive)
    const textMatches = task.text.toLowerCase().includes(filterText.toLowerCase());

    // Check if the task's type matches the selected filter type or it's set to "All"
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


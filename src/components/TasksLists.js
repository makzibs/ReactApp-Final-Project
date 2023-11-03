import { ListItem } from "./ListItem";
import "../styles/TasksList.css";

export const TasksLists = ({tasks, removeTask}) => {
    return <div className="todo-list">
         {tasks.map((task) => {
        return (
          <ListItem text={task.text} minutes={task.minutes} types={task.types} removeTask={() => removeTask(task.id)} />
        );
      })}
    </div>
}
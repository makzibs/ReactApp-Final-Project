import { ListItem } from "./ListItem";
import "../styles/TasksList.css";

export const TasksLists = ({tasks, removeTask}) => {
    return <div className="todo-list">
         {tasks.map((task, index) => {
        return (
          <ListItem text={task} removeTask={() => removeTask(index)} key={index} />
        );
      })}
    </div>
}
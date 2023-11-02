import { ListItem } from "./ListItem";
import "../styles/TasksList.css";

export const TasksLists = ({tasks, types, minutes, removeTask}) => {
    return <div className="todo-list">
         {tasks.map((task,  index) => {
        return (
          <ListItem text={task} minutes={minutes} types={types} removeTask={() => removeTask(index)} key={index} />
        );
      })}
    </div>
}



import { ListItem } from "./ListItem";
import "../styles/TasksList.css";

export const TasksLists = ({tasks, removeTask}) => {
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
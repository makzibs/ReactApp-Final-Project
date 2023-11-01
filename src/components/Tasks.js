import "../styles/tasks.css";
import { useState } from "react";

import { Form } from "./Form";
import { TasksLists } from "./TasksLists";



export default function Tasks ()  {
  const [tasks, setTasks] = useState([]);
  const [types, setTypes] = useState('none');
  const [minutes, setMinutes] = useState('');

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  const addTypes = (newTypes) => {
    setTypes([...types, newTypes]);
  };
  const addMinutes = (newMinutes) => {
    setMinutes([...minutes, newMinutes]);
  };

  const removeTask = (taskIndex) => {
    const tasksCopy = [...tasks];

    tasksCopy.splice(taskIndex, 1);

    setTasks(tasksCopy);
  };

  return (
    <div className="tasks">
      <Form addTask={addTask} addTypes={addTypes} addMinutes={addMinutes} />
      <TasksLists tasks = {tasks} removeTask = {removeTask}/>
    </div>
  );
}


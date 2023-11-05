/*import "../styles/tasks.css";
import { useState } from "react";

import { Form } from "./Form";
import { TasksLists } from "./TasksLists";



export default function Tasks ()  {
  const [tasks, setTasks] = useState([]);
  const [types, setTypes] = useState('');
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
      <TasksLists tasks = {tasks} types = {types} minutes = {minutes} removeTask = {removeTask}/>
    </div>
  );
}

import "../styles/tasks.css";
import { useState, useEffect } from "react";
import axios from "axios"; // Axios is used for making HTTP requests

import { Form } from "./Form";
import { TasksLists } from "./TasksLists";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  

  

  const handleTaskSubmit = async (newTask) => {
    

    try {
      // Send a POST request to add a new task to the database
      await axios.post("http://localhost:3010/tasks", newTask);

      // Update the tasks state with the new task
      setTasks([...tasks, newTask]);

      // Clear the form
      
    } catch (error) {
      console.error("Error adding task: ", error);
    }
  }

  const removeTask = async (taskId) => {
    console.log({taskId});
    try {
      // Send a DELETE request to remove the task from the database
      await axios.delete(`http://localhost:3010/tasks/${taskId}`);

      // Update the tasks state by filtering out the removed task
      const updatedTasks = tasks.filter(task => task.id !== taskId);
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Error removing task: ", error);
    }
  }

  useEffect(() => {
    // Fetch the tasks from the database when the component mounts
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:3010/tasks");
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks: ", error);
      }
    };

    fetchTasks();
  }, []);



  return (
    <div className="tasks">
      <Form  addTask={handleTaskSubmit} />         
      <TasksLists  tasks = {tasks}  removeTask = {removeTask}/>
    </div>
  );
} */



/*import "../styles/tasks.css";
import { useState } from "react";

import { Form } from "./Form";
import { TasksLists } from "./TasksLists";



export default function Tasks ()  {
  const [tasks, setTasks] = useState([]);
  const [types, setTypes] = useState('');
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
      <TasksLists tasks = {tasks} types = {types} minutes = {minutes} removeTask = {removeTask}/>
    </div>
  );
}
*/
import "../styles/tasks.css";
import { useState, useEffect } from "react";
import axios from "axios"; // Axios is used for making HTTP requests

import { Form } from "./Form";
import { TasksLists } from "./TasksLists";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [filterText, setFilterText] = useState(""); // State variable for filtering
  const [filterType, setFilterType] = useState(""); 
  const theme = localStorage.getItem("theme");

  const filterTypes = ["", "Entertainment", "Studies", "Household", "Hobby", "Sport"];

  const handleTaskSubmit = async (newTask) => {
    

    try {
      // Send a POST request to add a new task to the database
      await axios.post("http://localhost:3010/tasks", newTask);

      // Update the tasks state with the new task
      await axios.get("http://localhost:3010/tasks")
        .then(res => setTasks(res.data))
      // setTasks([...tasks, newTask]);
      // Clear the form
      
    } catch (error) {
      console.error("Error adding task: ", error);
    }
  }

  const removeTask = async (taskId) => {
    console.log({taskId});
    try {
      // Send a DELETE request to remove the task from the database
      await axios.delete(`http://localhost:3010/tasks/${taskId}`);

      // Update the tasks state by filtering out the removed task
      const updatedTasks = tasks.filter(task => task.id !== taskId);
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Error removing task: ", error);
    }
  }

  useEffect(() => {
    // Fetch the tasks from the database when the component mounts
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:3010/tasks");
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks: ", error);
      }
    };

    fetchTasks();
    
  }, []);



  return (
    <div className="tasks" id={theme}>
      <Form  addTask={handleTaskSubmit} />  
      <div className="searchBarTypes">
      <input
        className="textfield_filter"
        type="text"
        placeholder="Filter tasks..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      /> 
      <select
          className="types_textfield"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          {filterTypes.map((type) => (
            <option key={type} value={type}>
              {type || "All"}
            </option>
          ))}
        </select> 
        </div>     
      <TasksLists  tasks = {tasks}  removeTask = {removeTask} filterText={filterText} filterType={filterType}/>
    </div>
  );
}


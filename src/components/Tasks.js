
import "../styles/tasks.css";
import { useState, useEffect } from "react";
import axios from "axios"; // Axios is used for making HTTP requests

import { Form } from "./Form";
import { TasksLists } from "./TasksLists";

export default function Tasks() {

  //state variables
  const [tasks, setTasks] = useState([]);
  const [filterText, setFilterText] = useState(""); // State variable for filtering
  const [filterType, setFilterType] = useState(""); 
  const theme = localStorage.getItem("theme");

  //Available filter types
  const filterTypes = ["", "Entertainment", "Studies", "Household", "Hobby", "Sport"];

  // to handle the task submission and adds the task in the array of tasks
  const handleTaskSubmit = async (newTask) => {
    

    try {
      // Sends a POST request to add a new task to the database
      await axios.post("http://localhost:3010/tasks", newTask);

      // Update the tasks state with the new task
      await axios.get("http://localhost:3010/tasks")
        .then(res => setTasks(res.data))
      
      
    } catch (error) {
      console.error("Error adding task: ", error);
    }
  }
 //to delete a task from the array
  const removeTask = async (taskId) => {
    console.log({taskId});
    try {
      // Sends a DELETE request to remove the task from the database
      await axios.delete(`http://localhost:3010/tasks/${taskId}`);

      // Update the tasks state by filtering out the removed task
      const updatedTasks = tasks.filter(task => task.id !== taskId);
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Error removing task: ", error);
    }
  }

  useEffect(() => {
    // Fetchs the tasks from the database when the component mounts
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


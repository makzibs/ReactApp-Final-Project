import About from "./components/About";
import Tasks from "./components/Tasks";
import Setting from "./components/Setting";
import { Routes, Route } from "react-router-dom";

import { NavLink } from "react-router-dom";
import "./styles/App.css";



function App() {
  return (
    <div className="App">
      <nav className="nav-container">

        <h1>My Activity App</h1>
        
        <ul className="nav-items">

          <li >
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/tasks">Tasks</NavLink>
          </li>
          <li>
            <NavLink to="/setting">Settings</NavLink>
          </li>
        </ul>
       
      </nav>

      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/about" element={<About />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </div>
  );
}

export default App;

import About from "./components/About";
import Tasks from "./components/Tasks";
import Setting from "./components/Setting";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <nav className="nav-container">
        
        <ul className="nav-items">
          <li >
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/tasks">Tasks</Link>
          </li>
          <li>
            <Link to="/setting">Settings</Link>
          </li>
        </ul>
       
      </nav>

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </div>
  );
}

export default App;

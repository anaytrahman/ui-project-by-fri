import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Project from "./components/Project";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="main-container">
          <Project />
        </div>
      </div>
      
    </Router>
  );
}

export default App;

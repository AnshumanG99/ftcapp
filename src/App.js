import img from './assets/img.png';
import robot from './assets/robot.png';
import './App.css';
import './moveable.js';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      FTC Game Planner
      <p>
        <img src={img} className="FTCGameBoard" alt="board" draggable = "false"/>
      </p>
        <img src = {robot} className = "Robot" draggable = "true" />
        <img src="http://placehold.it/100x100" id="cursorImage" ondragstart="return false;"/>
        <div className = "left-box">
        Blue Alliance Settings
        <p>
        Blue Robots
        </p>
        <button type = "button"> Add Robots </button>
        <button type = "button"> Remove Robots </button>
        </div>



        <div className = "right-box">
        Red Alliance Settings
        <p>
        Red Robots
        </p>
        <button type = "button"> Add Robots </button>
        <button type = "button"> Remove Robots </button>
        </div>
      </header>
    </div>
  );
}

export default App;

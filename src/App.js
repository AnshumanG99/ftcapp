import React, { useEffect } from 'react';
import img from './assets/img.png';
import robot from './assets/robot.png';
import './App.css';
import { addListeners } from './moveable.js';
import { addRobots, removeRobots } from './addRobot.js'

function App() {
  useEffect(() => {
    addListeners(); // Call addListeners function when component mounts
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        FTC Game Planner

        <p>
          <img src={img} className="FTCGameBoard" alt="board" draggable="false" />

          <img src={robot} className="Robot" id="bluerobot1" draggable="false" />
          <img src={robot} className="Robot" id="bluerobot2" draggable="false" />
          <img src={robot} className="Robot" id="redrobot1" draggable="false" />
          <img src={robot} className="Robot" id="redrobot2" draggable="false" />
       </p>

          <div id="left-box" draggable = "false">
          Blue Alliance Settings
          <p>Blue Robots</p>
          <button type="button" className = "BlueButtons" id = "blueRemoveRobot" onClick = {() => removeRobots('blue')}> Remove Robots </button>
          <button type="button" className = "BlueButtons" id = "blueAddRobot" onClick = {() => addRobots('blue')}> Add Robots </button>
          <p>Blue Drawing Tool</p>
          <button type="button" className = "BlueButtons"> Blue Draw Tool </button>
          <p>Blue Moving Tool</p>
          <button type="button" className = "BlueButtons"> Move tool </button>
        </div>
        <div id="right-box">
          Red Alliance Settings
          <p>Red Robots</p>
          <button type="button" className = "RedButtons" id = "redRemoveRobot" onClick = {() => removeRobots('red')}> Remove Robots </button>
          <button type="button" className = "RedButtons" id = "redAddRobot" onClick = {() => addRobots('red')}> Add Robots </button>
          <p>Red Drawing Tool</p>
          <button type="button" className = "RedButtons"> Red Draw Tool </button>
          <p>Red Moving Tool</p>
          <button type="button" className = "RedButtons"> Move tool </button>
        </div>
      </header>
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import img from './assets/img.png';
import robot from './assets/robot.png';
import './App.css';
import { addListeners } from './moveable.js';
import { addRobots, removeRobots } from './addRobot.js';
import {addDrawListeners, deleteLine} from './draw.js';


function App() {
    useEffect(() => {
        addListeners();

    }, []);

  return (
    <div className="App">
      <header className="App-header"> FTC Game Planner </header>
        <img src={img} className="FTCGameBoard" alt="board" draggable="false"/>
        <img src={robot} className="Robot" id="bluerobot1" draggable="false" />
        <img src={robot} className="Robot" id="bluerobot2" draggable="false" />
        <img src={robot} className="Robot" id="redrobot1" draggable="false" />
        <img src={robot} className="Robot" id="redrobot2" draggable="false" />


        <div id="left-box" draggable = "false">
            <h4> Blue Alliance Settings </h4>
                <p>Blue Robots</p>
                    <button type="button" className = "BlueButtons" id = "blueRemoveRobot" onClick = {() => removeRobots('blue')}> Remove Robots </button>
                    <button type="button" className = "BlueButtons" id = "blueAddRobot" onClick = {() => addRobots('blue')}> Add Robots </button>
                <p>Blue Drawing Tool</p>
                    <button type="button" className = "BlueButtons" id = "" onClick = {() => addDrawListeners('blue')}> Blue Draw Tool </button>
                <p>Blue Remove Tool</p>
                    <button type="button" className = "BlueButtons" onClick = {() => deleteLine()}> Blue Remove tool </button>
        </div>

        <div id="right-box">
            <h4> Red Alliance Settings </h4>
                <p>Red Robots</p>
                    <button type="button" className = "RedButtons" id = "redRemoveRobot" onClick = {() => removeRobots('red')}> Remove Robots </button>
                    <button type="button" className = "RedButtons" id = "redAddRobot" onClick = {() => addRobots('red')}> Add Robots </button>
                <p>Red Drawing Tool</p>
                    <button type="button" className = "RedButtons" onClick = {() => addDrawListeners('red')}> Red Draw Tool </button>
                <p>Red Remove Tool</p>
                    <button type="button" className = "RedButtons" onClick = {() => deleteLine()}> Red Remove Tool </button>
        </div>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import ftcfield from './assets/FTCDecodeField2025.png';
import robot from './assets/robot.png';
import eraser from './assets/eraser.png';
import pencil from './assets/pencil.png'
import './App.css';
import {addListeners } from './moveable.js';
import {addRobots, removeRobots} from './addRobot.js';
import {addItem, deleteItem} from './addItems.js';
import {addDrawListeners, deleteLine, changeColor} from './draw.js';
import { Analytics } from "@vercel/analytics/react"

function App() {

    const [showHelp, setShowHelp] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);


    useEffect(() => {
        addListeners();
        orientationChange();
        window.addEventListener('resize', orientationChange);
        return () => {
            window.removeEventListener('resize', orientationChange);
        }
    }, []);


    const orientationChange = () => {
        const overlay = document.getElementById('orientation-overlay');
        if (window.innerHeight > window.innerWidth){
            overlay.style.display = 'flex';
        } else{
            overlay.style.display = 'none';
        }
    }

     const toggleHelpPopup = () => {
         setShowHelp(!showHelp);
     };

     const toggleAboutPopup = () => {
         setIsAboutOpen(!isAboutOpen);
     };

    return (
    <div className="App">
      <div id = "orientation-overlay">
        <div className = "content"> Please rotate your device to landscape mode. </div>
      </div>
      <header className="App-header"> FTC Game Planner 2025: Decode</header>
        <img src={ftcfield} className="FTCGameBoard" alt="board" draggable="false"/>
        <img src={robot} className="Robot" id="bluerobot1" alt="Blue Robot 1" draggable="false" />
        <img src={robot} className="Robot" id="bluerobot2" alt="Blue Robot 2" draggable="false" />
        <img src={robot} className="Robot" id="redrobot1" alt="Red Robot 1" draggable="false" />
        <img src={robot} className="Robot" id="redrobot2" alt="Red Robot 2" draggable="false" />


        <div id="settingsbox">

            <p><h4> Robot Settings </h4>
              Red Robots
              <button type="button" className = "RedButtons" id = "redRemoveRobot" onClick = {() => removeRobots('red')}> - </button>
              <button type="button" className = "RedButtons" id = "redAddRobot" onClick = {() => addRobots('red')}> + </button>
              <br></br>
              <br></br>

            Blue Robots
              <button type="button" className = "BlueButtons" id = "blueRemoveRobot" onClick = {() => removeRobots('blue')}> - </button>
              <button type="button" className = "BlueButtons" id = "blueAddRobot" onClick = {() => addRobots('blue')}> + </button>
              <br></br>


            <h4> Game Element Settings </h4>
            Red Sample
              <button type="button" className = "PurpleButtons" id = "purpleRemove" onClick = {() => deleteItem('purple')}> - </button>
              <button type="button" className = "PurpleButtons" id = "purpleAdd" onClick = {() => addItem('purple')}> + </button>
              <br></br>
              <br></br>

            Blue Sample
              <button type="button" className = "GreenButtons" id = "greenRemove" onClick = {() => deleteItem('green')}> - </button>
              <button type="button" className = "GreenButtons" id = "greenAdd" onClick = {() => addItem('green')}> + </button>
              <br></br>
              <br></br>


            </p>



            <p><h4> Tools </h4>
              Draw Tool
              <button type="button" className = "Tools" id = "draw" onClick = {() => addDrawListeners('white')}> <img src = {pencil} id = "pencil" alt ="" ></img> </button>
              <br></br>
              <br></br>

            Color Selection
              <button type="button" className = "Tools" id = "Cwhite" onClick = {() => changeColor('white')}>  </button>
              <button type="button" className = "BlueButtons" id = "Cblue" onClick = {() => changeColor('blue')}>  </button>
              <button type="button" className = "RedButtons" id = "Cred" onClick = {() => changeColor('red')}>  </button>
              <br></br>
              <br></br>

            Eraser
              <button type="button" className = "Tools" id = "delete" onClick = {() => deleteLine()}> <img src = {eraser} id = "eraser"  alt =""></img> </button>
            </p>
        </div>


      <button className="help-button" onClick={toggleHelpPopup}>?</button>
      <button className="about-button" onClick={toggleAboutPopup}>i</button>

      {showHelp && (
        <div className="help-popup">
          <div className="help-content">
            <h3>How to Use the FTC Game Planner</h3>
            <p>1. Use the Robot Settings to add or remove red and blue robots on the field.</p>
            <p>2. Use the Game Element Settings to add or remove game elements such as samples and clips.</p>
            <p>3. The Tools section allows you to use a pencil for drawing paths, select colors, and use the eraser to delete lines.</p>
            <p>4. Move and draw elements across the field to plan out games. </p>

            <p>If you find any issues or have suggestions, feel free to report them using the form linked in the information tab. Thanks!</p>

            <button onClick={toggleHelpPopup}>Close</button>
          </div>
        </div>
      )}

      {isAboutOpen && (
        <div className="help-popup">
          <div className="help-content">
            <h3>About This App</h3>
            <p>This FTC Game Planner app is designed to help teams strategize and prepare for competitions by simulating game layouts and scenarios.</p>
            <p>During competitions, teams can utilize this resource to plan their games and strategize with alliances</p>
            <p>If you find any issues with the app, feel free to fill out <a href="https://docs.google.com/forms/d/e/1FAIpQLSdp33OZ8TGAhM5JNLJoi-SYTjGm42ZYc6X7WOmrPG90YlEQKg/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer"> this </a> form to report it, or provide any feedback or suggestions you have for the app</p>
            <button onClick={() => setIsAboutOpen(false)}>Close</button>
          </div>
        </div>
      )}

      <Analytics />

    </div>
  );
}

export default App;

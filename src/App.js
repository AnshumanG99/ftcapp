import React, { useEffect, useState } from 'react';
import ftcfield from './assets/ftcfield.png';
import ftcbackdrop from './assets/ftcbackdrop.png';
import robot from './assets/robot.png';
import eraser from './assets/eraser.png';
import pencil from './assets/pencil.png'
import './App.css';
import {addListeners} from './moveable.js';
import {addRobots, removeRobots} from './addRobot.js';
import {addPixels, deletePixels} from './addPixels.js';
import {addDrawListeners, deleteLine, changeColor} from './draw.js';
import axios from 'axios';


function App() {
  const[userCount, setUserCount]  = useState(0);

  useEffect(() => {
      addListeners();
      incrementUserCount();
      orientationChange();
      window.addEventListener('resize', orientationChange);
      return () => {
        window.removeEventListener('resize', orientationChange);
      }
  }, []);

  const incrementUserCount = async () => {
      try{
          const response = await axios.get('http://localhost:5000/increment-user-count');
          setUserCount(response.data.count);
      } catch (error) {
          console.error('Error fetching user count:', error);
      }
  }

  const orientationChange = () => {
    const overlay = document.getElementById('orientation-overlay');
    if (window.innerHeight > window.innerWidth){
        overlay.style.display = 'flex';
    } else{
        overlay.style.display = 'none';
    }
  }

  return (
    <div className="App">
      <div id = "orientation-overlay">
        <div className = "content"> Please rotate your device to landscape mode. </div>
      </div>
      <header className="App-header"> FTC Game Planner </header>
        <img src={ftcfield} className="FTCGameBoard" alt="board" draggable="false"/>
        <img src={robot} className="Robot" id="bluerobot1" draggable="false" />
        <img src={robot} className="Robot" id="bluerobot2" draggable="false" />
        <img src={robot} className="Robot" id="redrobot1" draggable="false" />
        <img src={robot} className="Robot" id="redrobot2" draggable="false" />

        <img src={ftcbackdrop} className="FTCBackdrop" alt="backdrop" draggable="false"/>


        <div id="right-box">
          <h4> Robot Settings </h4>
            <p>Red Robots
              <button type="button" className = "RedButtons" id = "redRemoveRobot" onClick = {() => removeRobots('red')}> - </button>
              <button type="button" className = "RedButtons" id = "redAddRobot" onClick = {() => addRobots('red')}> + </button>
              <br></br>
              <br></br>

            Blue Robots
              <button type="button" className = "BlueButtons" id = "blueRemoveRobot" onClick = {() => removeRobots('blue')}> - </button>
              <button type="button" className = "BlueButtons" id = "blueAddRobot" onClick = {() => addRobots('blue')}> + </button>
              <br></br>


            <h4> Pixel Settings </h4>
            Purple Pixels
              <button type="button" className = "PurpleButtons" id = "purpleRemovePixel" onClick = {() => deletePixels('purple')}> - </button>
              <button type="button" className = "PurpleButtons" id = "purpleAddPixel" onClick = {() => addPixels('purple')}> + </button>
              <br></br>
              <br></br>

            Green Pixels
              <button type="button" className = "GreenButtons" id = "greenRemovePixel" onClick = {() => deletePixels('green')}> - </button>
              <button type="button" className = "GreenButtons" id = "greenAddPixel" onClick = {() => addPixels('green')}> + </button>
              <br></br>
              <br></br>

            Yellow Pixels
              <button type="button" className = "YellowButtons" id = "yellowRemovePixel" onClick = {() => deletePixels('yellow')}> - </button>
              <button type="button" className = "YellowButtons" id = "yellowAddPixel" onClick = {() => addPixels('yellow')}> + </button>
              <br></br>
              <br></br>

            White Pixels
              <button type="button" className = "Tools" id = "whiteRemovePixel" onClick = {() => deletePixels('white')}> - </button>
              <button type="button" className = "Tools" id = "whiteAddPixel" onClick = {() => addPixels('white')}> + </button>
              <br></br>

            </p>


            <h4> Tools </h4>
            <p> Draw Tool
              <button type="button" className = "Tools" id = "draw" onClick = {() => addDrawListeners('white')}> <img src = {pencil} id = "pencil" ></img> </button>
              <br></br>
              <br></br>

            Color Selection
              <button type="button" className = "Tools" id = "Cwhite" onClick = {() => changeColor('white')}>  </button>
              <button type="button" className = "BlueButtons" id = "Cblue" onClick = {() => changeColor('blue')}>  </button>
              <button type="button" className = "RedButtons" id = "Cred" onClick = {() => changeColor('red')}>  </button>
              <br></br>
              <br></br>

            Eraser
              <button type="button" className = "Tools" id = "delete" onClick = {() => deleteLine()}> <img src = {eraser} id = "eraser" ></img> </button>
            </p>
        </div>
    </div>
  );
}

export default App;

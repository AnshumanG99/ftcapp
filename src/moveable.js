export let gMouseDownX = 0;
export let gMouseDownY = 0;
export let gMouseDownOffsetX = 0;
export let gMouseDownOffsetY = 0;
let currentDraggedElementId = null;

export function addListeners() {
  function mouseUp() {
    window.removeEventListener('mousemove', divMove, true);
  }

  function mouseDown(e) {
    gMouseDownX = e.clientX;
    gMouseDownY = e.clientY;

    var div = e.target;

    if (div.classList.contains('Robot')) {
      e.preventDefault();
      e.stopPropagation();
      currentDraggedElementId = div.id;

      // Calculate  offset from the mouse position to the top-left corner of the robot
      var rect = div.getBoundingClientRect();
      gMouseDownOffsetX = gMouseDownX - rect.left;
      gMouseDownOffsetY = gMouseDownY - rect.top;

      window.addEventListener('mousemove', divMove, true);
    }
  }

  function divMove(e) {
    var div = document.getElementById(currentDraggedElementId);

    if (div) {
      div.style.position = 'absolute';
      let topAmount = e.clientY - gMouseDownOffsetY;
      div.style.top = topAmount + 'px';
      let leftAmount = e.clientX - gMouseDownOffsetX;
      div.style.left = leftAmount + 'px';
    }
  }

  /*
  console.log("test");
  console.log(document.getElementById('robot1'));
  document.getElementById('robot1').addEventListener('mousedown', mouseDown, false);
  */

  const robots = document.querySelectorAll('.Robot');
  robots.forEach(robot => {
    robot.addEventListener('mousedown', mouseDown, false);
  });

  window.addEventListener('mouseup', mouseUp, false);
}
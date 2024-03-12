export let gMouseDownX = 0;
export let gMouseDownY = 0;
export let gMouseDownOffsetX = 0;
export let gMouseDownOffsetY = 0;
let currentDraggedElementId = null;

export function addListeners() {
    function startMove(e){
        e.preventDefault();
        e.stopPropagation();

        const clientX = e.clientX || e.touches[0].clientX;
        const clientY = e.clientY || e.touches[0].clientY;

        const div = e.target;

        if (div.classList.contains('Robot')){
            currentDraggedElementId = div.id;

            const rect = div.getBoundingClientRect();
            gMouseDownOffsetX = clientX - rect.left;
            gMouseDownOffsetY = clientY - rect.top;

            window.addEventListener('mousemove', divMove, true);
            window.addEventListener('mouseup', endMove, true);
            window.addEventListener('touchmove', divMove, true);
            window.addEventListener('touchend', endMove, true);

        }
    }

    function endMove(e){
        window.removeEventListener('mousemove', divMove, true);
        window.removeEventListener('mouseup', endMove, true);
        window.removeEventListener('touchmove', divMove, true);
        window.removeEventListener('touchend', endMove, true);

    }

    function divMove(e){
        e.preventDefault();
        e.stopPropagation();

        const clientX = e.clientX || e.touches[0].clientX;
        const clientY = e.clientY || e.touches[0].clientY;

        const div = document.getElementById(currentDraggedElementId);

        if (div) {
            div.style.position = 'absolute';
            const topAmount = clientY - gMouseDownOffsetY;
            div.style.top = topAmount + 'px';
            const leftAmount = clientX - gMouseDownOffsetX;
            div.style.left = leftAmount + 'px';
        }
    }

    const robots = document.querySelectorAll(".Robot");
    robots.forEach(robot => {
        robot.addEventListener('mousedown', startMove, false);
        robot.addEventListener('touchstart', startMove, false);

    });
}

/*
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

      // Calculate  offset from mouse position to top-left corner of the robot
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
*/

  /*
  console.log("test");
  console.log(document.getElementById('robot1'));
  document.getElementById('robot1').addEventListener('mousedown', mouseDown, false);
  */


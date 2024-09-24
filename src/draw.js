let isDrawing = false;
let startX = 0;
let startY = 0;
let currentColor = '';
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

export function changeColor(color){
    currentColor = '';
    currentColor = color;
}

export function addDrawListeners(color){
    currentColor = color;
    const container = document.createElement('div');
    const gameBoard = document.querySelector('.FTCGameBoard');
    gameBoard.parentNode.insertBefore(container, gameBoard.nextSibling);

    canvas.width = gameBoard.offsetWidth;
    canvas.height = gameBoard.offsetHeight;
    canvas.style.position = 'absolute';
    canvas.style.top = '10vh';
    canvas.style.left = '40vw';
    container.appendChild(canvas);

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseleave', stopDrawing);

    canvas.addEventListener('touchstart', startDrawing, {passive:false});
    canvas.addEventListener('touchmove', draw, {passive:false});
    canvas.addEventListener('touchend', stopDrawing);
    canvas.addEventListener('touchcancel', stopDrawing);
}

function getPointerPosition(e){
    const rect = canvas.getBoundingClientRect();
    if (e.touches) {
        return {
            x: e.touches[0].clientX - rect.left,
            y: e.touches[0].clientY - rect.top
        };
    } else {
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
    }
}

function startDrawing(e){
    isDrawing = true;
    const position = getPointerPosition(e);
    startX = position.x;
    startY =  position.y;

    if (e.touches){
        e.preventDefault();
    }
}

function draw(e){

    if (!isDrawing){
        return;
    }

    e.stopPropagation();
    e.preventDefault();
    const position = getPointerPosition(e);
    ctx.strokeStyle = currentColor;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    startX = position.x;
    startY = position.y;
    ctx.lineTo(startX, startY);
    ctx.stroke();
}

function stopDrawing(e){
    isDrawing = false;
    if (e.touches){
        e.preventDefault();
    }
}

export function deleteLine(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

}



//
//export function addDrawListeners(color){
//    currentColor = color;
//
//    window.removeEventListener('mousedown', startDrawing);
//    window.removeEventListener('mousemove', draw);
//    window.removeEventListener('mouseup', stopDrawing);
//
//    console.log("current Color:", color);
//    window.addEventListener('mousedown', startDrawing);
//    window.addEventListener('mousemove', draw);
//    window.addEventListener('mouseup', stopDrawing);
//
//    function startDrawing(e){
//        isDrawing = true;
//        startX = e.clientX;
//        startY = e.clientY;
//
//    }
//
//    function draw(e){
//        if (!isDrawing){
//            return;
//        }
//        e.preventDefault();
//        e.stopPropagation();
//
//        drawLine(startX, startY, e.clientX, e.clientY);
//        startX = e.clientX;
//        startY = e.clientY
//
//    }
//
//    function drawLine(x1, y1, x2, y2){
//        let lineSegments = []
//        const line = document.createElement('div');
//        line.classList.add('line');
//        line.style.position = 'absolute';
//        line.style.width = '2px';
//        line.style.height = '2px';
//        console.log('Current Color:', currentColor);
//        line.style.background = currentColor;
//        line.style.top = `${y1}px`;
//        line.style.left = `${x1}px`;
//        line.style.zIndex = '9999';
//        line.style.pointerEvents = 'none';
//
//        const length = Math.hypot(x2 -x1, y2 -y1);
//        const angle = Math.atan2(y2-y1, x2-x1) * 180 / Math.PI;
//        line.style.transform = `rotate(${angle}deg)`;
//        line.style.width = `${length}px`;
//
//        document.body.appendChild(line);
//        lineHistory.push(line);
//    }
//
//    function stopDrawing(){
//        isDrawing = false;
//    }
//}
//
//export function deleteLine(){
//    if (lineHistory.length > 0){
//        const lastLine = lineHistory.pop();
//        lastLine.remove();
//    }
//}

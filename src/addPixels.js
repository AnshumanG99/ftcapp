import whitePixel from './assets/whitePixel.png';
import purplePixel from './assets/purplePixel.png';
import greenPixel from './assets/greenPixel.png';
import yellowPixel from './assets/yellowPixel.png';
import { addListeners } from './moveable.js';

let totalPixel = 0;
let purple = 0;
let yellow = 0;
let green = 0;
let white = 0;

export function addPixels(pixelColor){

    totalPixel++;
    const newPixel = document.createElement('img');
    newPixel.className = 'pixels';

    switch(pixelColor){
        case 'purple':
            newPixel.src = purplePixel;
            purple++;
            newPixel.id = `pixel.purple.${purple}`;
            break;
        case 'yellow':
            newPixel.src = yellowPixel;
            yellow++;
            newPixel.id = `pixel.yellow.${yellow}`;
            break
        case 'green':
            newPixel.src = greenPixel;
            green++;
            newPixel.id = `pixel.green.${green}`;
            break;
        case 'white':
            newPixel.src = whitePixel;
            white++;
            newPixel.id = `pixel.white.${white}`;
            break;
        default:
            return;
    }

    let totalPercentage = 25 + totalPixel * 4;


    if (totalPixel > 15){
        totalPercentage = totalPercentage - 60;
    }
    newPixel.style.position = 'absolute';
    newPixel.style.left = `${totalPercentage}%`;
    newPixel.style.top = '90%';
    newPixel.style.visibility = 'visible';
    newPixel.style.width = '6.5vmin';
    newPixel.style.height = '6.5vmin';
    newPixel.style.transform = 'rotate(90deg)';

    document.body.appendChild(newPixel);

    addListeners();
}


export function deletePixels(pixelColor){

    let pixelID = '';

    switch(pixelColor){
        case 'purple':
            if (purple <= 0){
                break;
            }
            pixelID = `pixel.purple.${purple}`;
            purple--;
            break;
        case 'yellow':
            if (yellow <=0){
                break;
            }
            pixelID = `pixel.yellow.${yellow}`;
            yellow--;
            break;
        case 'green':
            if (green <=0){
                break;
            }
            pixelID = `pixel.green.${green}`;
            green--;
            break;
        case 'white':
            if (white <=0){
                break;
            }
            pixelID = `pixel.white.${white}`;
            white--;
            break;
        default:
            return;
    }
    totalPixel--;
    if (totalPixel <= 0){
        totalPixel = 0;
    }

    const pixeltoDelete = document.getElementById(pixelID);

    if (pixeltoDelete == null){
        totalPixel++;
    }

    if (pixeltoDelete){
        pixeltoDelete.remove();
    }
}
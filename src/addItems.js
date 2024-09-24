import clip from './assets/clip.png';
import redItem from './assets/redspecimen.png';
import blueItem from './assets/bluespecimen.png';
import yellowItem from './assets/yellowspecimen.png';
import { addListeners } from './moveable.js';

let totalItem = 0;
let purple = 0;
let yellow = 0;
let green = 0;
let white = 0;

export function addItem(itemColor){

    totalItem++;
    const newItem = document.createElement('img');
    newItem.className = 'item';

    switch(itemColor){
        case 'purple':
            newItem.src = redItem;
            purple++;
            newItem.id = `item.purple.${purple}`;
            break;
        case 'yellow':
            newItem.src = yellowItem;
            yellow++;
            newItem.id = `item.yellow.${yellow}`;
            break
        case 'green':
            newItem.src = blueItem;
            green++;
            newItem.id = `item.green.${green}`;
            break;
        case 'white':
            newItem.src = clip;
            white++;
            newItem.id = `item.white.${white}`;
            break;
        default:
            return;
    }

    let totalPercentage =  totalItem * 6;
    let horizontalpercentage = 85;


    if (totalItem > 15){
        totalPercentage = totalPercentage - 90;
        horizontalpercentage += 5;

    }
    if (totalItem > 30){
        totalPercentage = totalPercentage - 90;
        horizontalpercentage += 5;
    }
    newItem.style.position = 'absolute';
    newItem.style.left = `${horizontalpercentage}%`;
    newItem.style.top = `${totalPercentage}%`;
    newItem.style.visibility = 'visible';
    newItem.style.width = '8vmin';
    newItem.style.height = '4.5vmin';

    document.body.appendChild(newItem);

    addListeners();
}


export function deleteItem(itemColor){

    let itemID = '';

    switch(itemColor){
        case 'purple':
            if (purple <= 0){
                break;
            }
            itemID = `item.purple.${purple}`;
            purple--;
            break;
        case 'yellow':
            if (yellow <=0){
                break;
            }
            itemID = `item.yellow.${yellow}`;
            yellow--;
            break;
        case 'green':
            if (green <=0){
                break;
            }
            itemID = `item.green.${green}`;
            green--;
            break;
        case 'white':
            if (white <=0){
                break;
            }
            itemID = `item.white.${white}`;
            white--;
            break;
        default:
            return;
    }
    totalItem--;
    if (totalItem <= 0){
        totalItem = -1;
    }

    const itemtoDelete = document.getElementById(itemID);

    if (itemtoDelete == null){
        totalItem++;
    }

    if (itemtoDelete){
        itemtoDelete.remove();
    }
}
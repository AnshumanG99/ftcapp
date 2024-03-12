//let i = 2;
let blue = 2;
let red = 2;

export function addRobots(alliancecolor){


    if (alliancecolor == 'blue'){
        if (blue < 2){
            blue++;
        }


        const robotID = alliancecolor + "robot" + blue;
        console.log(robotID);
        const robot = document.getElementById(robotID);

        robot.style.visibility = 'visible';
        robot.style.left = '30.5%';
        robot.style.top = '62%';

        if (blue == 1){
            robot.style.top = '35.5%';
        }

    }


    if (alliancecolor == 'red'){
        if (red < 2){
            red++;
        }
        const robotID = alliancecolor + "robot" + red;
        console.log(robotID);
        const robot = document.getElementById(robotID);

        robot.style.visibility = 'visible';
        robot.style.left = '63.5%';
        robot.style.top = '62%';

        if (red == 1){
            robot.style.top = '35.5%';
        }



    }

/*
    if (i < 2){
        i++;
    }

    const robotID = alliancecolor + "robot" + i;
    console.log(robotID);
    const robot = document.getElementById(robotID);

    robot.style.visibility = 'visible';

    robot.style.left = '30.5%';



    if (alliancecolor == 'red'){
        robot.style.left = '63.5%';
    }

    robot.style.top = '62%';

    if (i == 1){
        robot.style.top = '35.5%';
    }
*/
}

export function removeRobots(alliancecolor){


    if (alliancecolor == 'blue'){
        if (blue == 0){
            blue = 1;
        }
        const robotID = alliancecolor + "robot" + blue;
        console.log(robotID);
        const robot = document.getElementById(robotID);

        robot.style.visibility = 'hidden';
        if (blue > 0){
           blue--;
        }

    }

    if (alliancecolor == 'red'){
        if (red == 0){
            red = 1;
        }
        const robotID = alliancecolor + "robot" + red;
        console.log(robotID);
        const robot = document.getElementById(robotID);

        robot.style.visibility = 'hidden';
        if (red > 0){
           red--;
        }

    }
/*
    const robotID = alliancecolor + "robot" + i;
    console.log(robotID);
    const robot = document.getElementById(robotID);

    robot.style.visibility = 'hidden';
    if (i > 0){
       i--;
    }
*/
}
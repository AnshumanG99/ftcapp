let i = 2;

export function addRobots(alliancecolor){
    const robotID = alliancecolor + "robot" + i;
    console.log(robotID);
    const robot = document.getElementById(robotID);

    robot.style.visibility = 'visible';

    robot.style.left = '870px';
    if (alliancecolor == 'red'){
        robot.style.left = '1670px';
    }

    robot.style.top = '880px';

    if (i == 1){
        robot.style.top = '520px';
    }

    if (i < 2){
        i++;
    }
}

export function removeRobots(alliancecolor){
    const robotID = alliancecolor + "robot" + i;
    console.log(robotID);
    const robot = document.getElementById(robotID);

    robot.style.visibility = 'hidden';
    if (i > 1){
       i--;
    }
}
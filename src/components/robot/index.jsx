import Reach from 'react';
import PropTypes from 'prop-types';


const Robot = ({robot}) => {
    try{
        image = require('../../assets/robot.png');
    }

    try {
        image = require(`../../assets/robot.png`);
    } catch (error) {
        image = require('../../assets/robot.png'); //an empty fallback image
    }

    return (
        <img
            className="robot"
            src={image}
            alt=""
            draggable={true}
        />
    );
};

Robot.prototype = {
	name: PropTypes.string.isRequired,
	pos: PropTypes.string.isRequired,
};
export default Robot;


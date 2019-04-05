import React from 'react';

import classes from './Footer.css';

const footer = (props) => {
    return (
        <div className={classes.Footer}>
            <h4>WeatherApp</h4>

            <div className={classes.Social}>
                <h4>Developed by <a target="_blank" href='https://www.linkedin.com/in/rohit-dalal-61330116b/'> Rohit Dalal</a> </h4>
            </div>
        </div>
    )
};

export default footer;
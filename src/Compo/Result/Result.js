import React from 'react';

//css
import classes from './Result.css';

const result = (props) => {
    return (
        <div className={classes.Result}>
            <b> <i>{props.city} : {props.country} </i></b>
            <p>Temprature : {props.temp}</p>
            <p>Max/Min : {props.max}/{props.min}</p>
            <p>Humidity : {props.humidity}</p>
            <p>Pressure : {props.pressure}</p>

        </div>
    )
};

export default result;
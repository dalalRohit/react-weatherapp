import React, { Component } from 'react';

//css
import classes from './Main.css';
//Form
import Form from './../Form/Form'

class Main extends Component {

    render() {
        return (
            <div className={classes.Main}>
                <div className={classes.Form}>
                    <div style={{ textAlign: 'center' }}>
                        <h2>WeatherApplication</h2>

                        <p>Enter the city</p>
                    </div>
                    <Form />
                </div>

            </div>
        )
    }
};

export default Main;
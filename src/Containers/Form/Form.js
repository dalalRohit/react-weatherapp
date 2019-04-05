import React, { Component } from 'react';
import axios from 'axios';

//css
import classes from './Form.css';

//Spinner
import Spinner from './../../Compo/UI/Spinner/Spinner';
//Result
import Result from './../../Compo/Result/Result';
//Error
import Error from './../../Compo/Error/Error';
//Material UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
class Form extends Component {
    state = {
        city: '',
        result: null,
        error: '',
        spin: false
    }
    handleTextInput = (event) => {
        let city = event.target.value;

        this.setState({ city: city.trim() })
        this.setState({ result: null })
        this.setState({ error: '' })

    }

    handleForm = (event) => {

        let city = this.state.city;
        event.preventDefault();
        this.setState({ spin: true })

        if (city.length > 0) {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=49c88b8d7a7ddbbce3575460d8f1f5e5&units=metric`

            //fetch weather data
            axios.get(url)
                .then((res) => {
                    console.log(res.data)
                    if (res.status === 200) {
                        //clear error in state
                        this.setState({ error: '' })

                        //set fetched details
                        let result = { ...res.data.main }
                        result['country'] = res.data.sys.country
                        this.setState({ result })
                        this.setState({ spin: false })
                    }
                })
                .catch((err) => {
                    console.log(err);
                    this.setState({ error: `Weather for ${city} not found!` })
                    this.setState({ spin: false })
                })
        }
        else {
            alert('Empty city')
        }

    }
    render() {
        let error = null;
        if (this.state.error.length > 0) {
            error = <Error error={this.state.error} />;
        }

        let result = null;
        if (this.state.result) {
            let x = { ...this.state.result };
            result = <Result
                city={this.state.city}
                temp={x.temp}
                pressure={x.pressure}
                humidity={x.humidity}
                max={x.temp_max}
                min={x.temp_min}
                country={x.country} />
        }
        return (
            <div>
                <form
                    onSubmit={(event) => this.handleForm(event)}>
                    {error}
                    <div className={classes.MainForm}>
                        <TextField
                            id="input-city"
                            label="City"
                            type="text"
                            margin="normal"
                            autoFocus
                            autoComplete="off"
                            onChange={(event) => this.handleTextInput(event)}
                            value={this.state.city}
                        />

                        <Button variant="outlined" color="primary" >Submit</Button>
                    </div>


                </form>
                {result}
                <Spinner show={this.state.spin} />
            </div>
        );
    }
}

export default Form;
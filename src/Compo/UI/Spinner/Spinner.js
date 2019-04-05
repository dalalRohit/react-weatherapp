import React from 'react';

//css
import classes from './Spinner.css';

const spinner = (props) => {
    return (
        <div style={{
            display: props.show ? 'block' : 'none'
        }} className={classes.loader}>Loading...</div>
    )
}

export default spinner;
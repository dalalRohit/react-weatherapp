import React from 'react'

//css
import classes from './MenuButton.css';

// import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

const menuButton = (props) => {
    return (
        <div className={classes.menuButton} onClick={props.clicked}>
            <Icon>menu</Icon>
        </div>
    )
};

export default menuButton;
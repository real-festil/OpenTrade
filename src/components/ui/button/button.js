import React from 'react';
import classes from './button.module.css';

const button = ( props ) => (
    <button className={classes.Button} onClick={props.clicked} disabled={props.disabled}>
        {props.caption}
    </button>
);

export default button;
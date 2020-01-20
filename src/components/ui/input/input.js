import React from 'react';
import classes from './input.module.css';

const input = ( props ) => {
    return (
        <input className={classes.Input}
               name={props.name}
               placeholder={props.placeholder}
               defaultValue={props.defaultValue}
               value={props.value}
               onChange={props.changed}
               type={props.type}
               style={props.style}
               required></input>
    )
}

export default input;
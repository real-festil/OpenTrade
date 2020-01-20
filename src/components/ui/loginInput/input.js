import React from 'react';
import classes from './input.module.css';


const input = ( props ) => {
    return (
        <div className={classes.InputBox}>
            <img src={props.img} alt=''/>
            <input onChange={props.changed} value={props.value} className={classes.Input} placeholder={props.placeholder} type={props.type} />
        </div>
    )
}

export default input;
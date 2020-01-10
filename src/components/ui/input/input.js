import React from 'react';
import classes from './input.module.css';

const input = ( props ) => (
    <div className={classes.InputBox}>
        <img src="https://image.flaticon.com/icons/svg/44/44948.svg" />
        <input onChange={props.changed} value={props.value} className={classes.Input} placeholder={props.placeholder} type={props.type} />
    </div>
)

export default input;
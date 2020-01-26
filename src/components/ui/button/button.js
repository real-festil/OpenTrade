import React from 'react';
import classes from './button.module.css';

const button = ( props ) => {
        let btnSelector = props.btnSelector;
        if(btnSelector === 'btnDisabled') {
             btnSelector = (<button className={classes.ButtonDisabled}
                                    type={props.type}
                                    onClick={props.clicked}
                                    style={props.style}
                                    disabled={props.disabled}>
                                {props.caption}
                            </button>)
        } else btnSelector =  (<button className={classes.Button}
                                       onClick={props.clicked}
                                       style={props.style}
                                       disabled={props.disabled}
                                       onSubmit={props.submit}>
                                    {props.caption}
                              </button>)
            return (
                <>
                    {btnSelector}
                </>
        );
    }

export default button;
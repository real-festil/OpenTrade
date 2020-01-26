import React from 'react';
import classes from './treeview.module.css';

const treeview = ( props ) => {
    return (
        <>
            <p className={classes.Caption} onClick={props.clicked}>{props.caption}</p>
            <ul className={classes.List}>
                {props.children}
            </ul>
        </>
    )
}

export default treeview;
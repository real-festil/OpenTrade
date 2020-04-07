import React, { Component } from 'react';
import classes from './filterSelect.module.css';

const filterSelect = ( props ) => {
 console.log(props.show ? 'block' :  'none')
 return (
  <div className={classes.FilterWrapper} >
   <div className={classes.FilterSelect} style={{display: props.show ? "block" :  "none"}} >
     <div className={classes.FilterHeader}>{props.caption}</div>
     <div className={classes.FilterCheckbox}>
       {props.children}
     </div>
   </div>
  </div>
 )
};

export default filterSelect;
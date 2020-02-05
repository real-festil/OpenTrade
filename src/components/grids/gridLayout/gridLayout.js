import React from 'react';
import classes from './gridLayout.module.css';
import GridLayout from 'react-grid-layout';

const gridLayout = ( props ) => {
 return (
    <GridLayout
      width={1000}
      cols={12}
      layout={props.layout}>
        <div className={classes.Placeholder} key='a'>OrderDepth</div>
        <div className={classes.Placeholder} key='b'>Overview</div>
        <div className={classes.Placeholder} key='c'>MarketWatch</div>
        <div className={classes.Placeholder} key='d'>PL</div>
        <div className={classes.Placeholder} key='e'>lastGrid</div>
    </GridLayout>
 )
}

export default gridLayout;
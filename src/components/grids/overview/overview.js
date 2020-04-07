import React from 'react';
import DataGrid, {valueCellContentRenderer} from 'react-data-grid';
import Wrapper from '../Wrapper.js';
import classes from './overview.module.css';
import {connect} from "react-redux";
import {useEffect} from "react";
import gridStyle from "../grid.style";
import "../grid.css";

const defaultColumnProperties = {
 resizable: true,
 width: 140
};

const defaultRowProperties = {
 height: 57
}

const columns = [
 {key: 'Acc', name: 'Acc / Symbol / Algo'},
 {key: 'State', name: 'State'},
 {key: 'Time0', name: 'Time0'},
 {key: 'Time', name: 'Time'},
 {key: 'Bought', name: 'Bought'},
 {key: 'Working', name: 'Working'},
 {key: 'Position', name: 'Position'},
 {key: 'Sold', name: 'Sold'},
 {key: 'Desire', name: 'Desire'},
 {key: 'Desc', name: 'Desc'}
].map( c => ({ ...c, ...defaultColumnProperties}));

const rows = [
 {Acc: 'Some Data', State: 'Some Data', Time0: 'Some Data', Time: 'Some Data', Bought: 'Some Data', Working: 'Some Data', Position: 'Some Data', Sold: 'Some Data', Desire: 'Some Data', Desc: 'Some Data'},
 {Acc: 'Some Data', State: 'Some Data', Time0: 'Some Data', Time: 'Some Data', Bought: 'Some Data', Working: 'Some Data', Position: 'Some Data', Sold: 'Some Data', Desire: 'Some Data', Desc: 'Some Data'},
 {Acc: 'Some Data', State: 'Some Data', Time0: 'Some Data', Time: 'Some Data', Bought: 'Some Data', Working: 'Some Data', Position: 'Some Data', Sold: 'Some Data', Desire: 'Some Data', Desc: 'Some Data'},
 {Acc: 'Some Data', State: 'Some Data', Time0: 'Some Data', Time: 'Some Data', Bought: 'Some Data', Working: 'Some Data', Position: 'Some Data', Sold: 'Some Data', Desire: 'Some Data', Desc: 'Some Data'},
 {Acc: 'Some Data', State: 'Some Data', Time0: 'Some Data', Time: 'Some Data', Bought: 'Some Data', Working: 'Some Data', Position: 'Some Data', Sold: 'Some Data', Desire: 'Some Data', Desc: 'Some Data'},
 {Acc: 'Some Data', State: 'Some Data', Time0: 'Some Data', Time: 'Some Data', Bought: 'Some Data', Working: 'Some Data', Position: 'Some Data', Sold: 'Some Data', Desire: 'Some Data', Desc: 'Some Data'},
 {Acc: 'Some Data', State: 'Some Data', Time0: 'Some Data', Time: 'Some Data', Bought: 'Some Data', Working: 'Some Data', Position: 'Some Data', Sold: 'Some Data', Desire: 'Some Data', Desc: 'Some Data'},
 {Acc: 'Some Data', State: 'Some Data', Time0: 'Some Data', Time: 'Some Data', Bought: 'Some Data', Working: 'Some Data', Position: 'Some Data', Sold: 'Some Data', Desire: 'Some Data', Desc: 'Some Data'},
 {Acc: 'Some Data', State: 'Some Data', Time0: 'Some Data', Time: 'Some Data', Bought: 'Some Data', Working: 'Some Data', Position: 'Some Data', Sold: 'Some Data', Desire: 'Some Data', Desc: 'Some Data'},
 {Acc: 'Some Data', State: 'Some Data', Time0: 'Some Data', Time: 'Some Data', Bought: 'Some Data', Working: 'Some Data', Position: 'Some Data', Sold: 'Some Data', Desire: 'Some Data', Desc: 'Some Data'},
 {Acc: 'Some Data', State: 'Some Data', Time0: 'Some Data', Time: 'Some Data', Bought: 'Some Data', Working: 'Some Data', Position: 'Some Data', Sold: 'Some Data', Desire: 'Some Data', Desc: 'Some Data'},
 {Acc: 'Some Data', State: 'Some Data', Time0: 'Some Data', Time: 'Some Data', Bought: 'Some Data', Working: 'Some Data', Position: 'Some Data', Sold: 'Some Data', Desire: 'Some Data', Desc: 'Some Data'},
 {Acc: 'Some Data', State: 'Some Data', Time0: 'Some Data', Time: 'Some Data', Bought: 'Some Data', Working: 'Some Data', Position: 'Some Data', Sold: 'Some Data', Desire: 'Some Data', Desc: 'Some Data'},
 {Acc: 'Some Data', State: 'Some Data', Time0: 'Some Data', Time: 'Some Data', Bought: 'Some Data', Working: 'Some Data', Position: 'Some Data', Sold: 'Some Data', Desire: 'Some Data', Desc: 'Some Data'},
 {Acc: 'Some Data', State: 'Some Data', Time0: 'Some Data', Time: 'Some Data', Bought: 'Some Data', Working: 'Some Data', Position: 'Some Data', Sold: 'Some Data', Desire: 'Some Data', Desc: 'Some Data'},
 {Acc: 'Some Data', State: 'Some Data', Time0: 'Some Data', Time: 'Some Data', Bought: 'Some Data', Working: 'Some Data', Position: 'Some Data', Sold: 'Some Data', Desire: 'Some Data', Desc: 'Some Data'},
 {Acc: 'Some Data', State: 'Some Data', Time0: 'Some Data', Time: 'Some Data', Bought: 'Some Data', Working: 'Some Data', Position: 'Some Data', Sold: 'Some Data', Desire: 'Some Data', Desc: 'Some Data'},
 {Acc: 'Some Data', State: 'Some Data', Time0: 'Some Data', Time: 'Some Data', Bought: 'Some Data', Working: 'Some Data', Position: 'Some Data', Sold: 'Some Data', Desire: 'Some Data', Desc: 'Some Data'},
 {Acc: 'Some Data', State: 'Some Data', Time0: 'Some Data', Time: 'Some Data', Bought: 'Some Data', Working: 'Some Data', Position: 'Some Data', Sold: 'Some Data', Desire: 'Some Data', Desc: 'Some Data'},
 {Acc: 'Some Data', State: 'Some Data', Time0: 'Some Data', Time: 'Some Data', Bought: 'Some Data', Working: 'Some Data', Position: 'Some Data', Sold: 'Some Data', Desire: 'Some Data', Desc: 'Some Data'},
 {Acc: 'Some Data', State: 'Some Data', Time0: 'Some Data', Time: 'Some Data', Bought: 'Some Data', Working: 'Some Data', Position: 'Some Data', Sold: 'Some Data', Desire: 'Some Data', Desc: 'Some Data'},
 {Acc: 'Some Data', State: 'Some Data', Time0: 'Some Data', Time: 'Some Data', Bought: 'Some Data', Working: 'Some Data', Position: 'Some Data', Sold: 'Some Data', Desire: 'Some Data', Desc: 'Some Data'},
 {Acc: 'Some Data', State: 'Some Data', Time0: 'Some Data', Time: 'Some Data', Bought: 'Some Data', Working: 'Some Data', Position: 'Some Data', Sold: 'Some Data', Desire: 'Some Data', Desc: 'Some Data'},
 {Acc: 'Some Data', State: 'Some Data', Time0: 'Some Data', Time: 'Some Data', Bought: 'Some Data', Working: 'Some Data', Position: 'Some Data', Sold: 'Some Data', Desire: 'Some Data', Desc: 'Some Data'},
 {Acc: 'Some Data', State: 'Some Data', Time0: 'Some Data', Time: 'Some Data', Bought: 'Some Data', Working: 'Some Data', Position: 'Some Data', Sold: 'Some Data', Desire: 'Some Data', Desc: 'Some Data'},
].map( r => ({ ...r, ...defaultRowProperties}));



const cell = {
 height: 27
}

const onWidthChanged = () => {
 window.dispatchEvent(new Event('resize'));
}

const Overview = ( props ) => {

  return (
   <div className={props.isDark ? null : props.isBlue ? "BlueTheme" : "WhiteTheme"} style={{height: "100%"}}>
    <DataGrid
      style={gridStyle}
      columns={columns}
      onWidthChanged={onWidthChanged}
      rowGetter={i => rows[i]}
      rowsCount={15}
      rowHeight={27}
      minHeight={50}
      defaultCellContentRenderer={valueCellContentRenderer}
      ></DataGrid>
   </div>

);
}

const mapStateToProps = (state) => {
 return {
   isDark: state.theme === "dark" ? true : false,
   isBlue: state.theme === "blue" ? true : false
 }
}


export default connect(mapStateToProps)(Overview);
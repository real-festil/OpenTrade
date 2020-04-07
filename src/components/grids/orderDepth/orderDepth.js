import React from 'react';
import DataGrid, {valueCellContentRenderer} from 'react-data-grid';
import '../grid.css';
import {connect} from "react-redux";

const defaultColumnProperties = {
 resizable: true,
 width: 70
};

const defaultRowProperties = {
 height: 57
}

const columns = [
 {key: 'Num', name: '#'},
 {key: 'Qty', name: 'Qty'},
 {key: 'Bid', name: 'Bid'},
 {key: 'Ask', name: 'Ask'},
 {key: 'Qty2', name: 'Qty'},
].map( c => ({ ...c, ...defaultColumnProperties}));

const rows = [
 {Num: '1', Qty: 'Another Data', Bid: 'Another Data', Ask: 'Another Data', Qty2:'Another Data'}
];

const cell = {
 height: 27
}

const onWidthChanged = () => {
 window.dispatchEvent(new Event('resize'));
}

const orderDepth = ( props ) => {
 return (
  <div className={props.isDark ? null : props.isBlue ? "BlueTheme" : "WhiteTheme"} style={{height: "100%"}}>
   <DataGrid
     columns={columns}
     onWidthChanged={onWidthChanged}
     rowGetter={i => rows[i]}
     rowsCount={1}
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

export default connect(mapStateToProps)(orderDepth);

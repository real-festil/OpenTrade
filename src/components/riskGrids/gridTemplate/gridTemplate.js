import React from 'react';
import DataGrid, {valueCellContentRenderer} from 'react-data-grid';
import Chart from '../chartTemplate/chartTemplate';
import '../../grids/grid.css';
import {connect} from "react-redux";

const defaultColumnProperties = {
 resizable: true,
 width: 70
};

const columns = [
 {key: 'Name', name: ''},
 {key: 'Value', name: 'Value'}
].map( c => ({ ...c, ...defaultColumnProperties}));

const rows = [
 {Name: 'KGI', Value: '4 408'}
];

const onWidthChanged = () => {
 window.dispatchEvent(new Event('resize'));
}

const gridTemplate = ( props ) => {
 console.log(props.isBlue);
 return (
   props.isChart ? (
     <Chart/>
   ) : (
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
   )
);
}

const mapStateToProps = (state) => {
 return {
   isDark: state.theme === "dark" ? true : false,
   isBlue: state.theme === "blue" ? true : false
 }
}

export default connect(mapStateToProps)(gridTemplate);

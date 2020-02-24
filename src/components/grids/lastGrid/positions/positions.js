import React from 'react';
import DataGrid, {valueCellContentRenderer} from 'react-data-grid';
import '../../grid.css';

const num = 10;

const onWidthChanged = () => {
 window.dispatchEvent(new Event('resize'));
}

const positions = ( props ) => {
 const row = {};
 for(let i=0;i<props.columns.length;i++){
  row[props.columns[i].key] = 'Some data';
 }

 const createRows = ( num ) => {
  let arr = [];
  return arr.concat(row);

 }

 let rows = createRows(num);

 let columns = props.columns.filter(column => !column.selected)

 return (

   <DataGrid
     columns={columns}
     onWidthChanged={onWidthChanged}
     rowGetter={i => rows[i]}
     rowsCount={1}
     rowHeight={27}
     minHeight={50}
     defaultCellContentRenderer={valueCellContentRenderer}
     ></DataGrid>

);
}

export default positions;

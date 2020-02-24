import React, { Component } from 'react';
import DataGrid, {valueCellContentRenderer} from 'react-data-grid';
import '../grid.css';
import Select from '../../ui/select/select';
import FilterSelect from '../../ui/filterSelect/filterSelect';
import ColumnsImg from '../../../images/columns.svg';

const defaultColumnProperties = {
 resizable: true,
 width: 70,
 selected: false
};

const defaultRowProperties = {
 height: 57
}

const columns = [
 {key: 'Num', name: '#'},
 {key: 'Symbol', name: 'Symbol'},
 {key: 'Market', name: 'Market'},
 {key: 'Open', name: 'Open'},
 {key: 'High', name: 'High'},
 {key: 'Low', name: 'Low'},
 {key: 'Close', name: 'Close'},
 {key: 'Qty', name: 'Qty'},
 {key: 'Ask', name: 'Ask'},
 {key: 'AskSize', name: 'AskSize'},
 {key: 'Bid', name: 'Bid'},
 {key: 'BidSize', name: 'BidSize'},
 {key: 'VWAP', name: 'VWAP'},
 {key: 'Volumn', name: 'Volumn'},
 {key: 'Time', name: 'Time'},
 {key: 'LotSize', name: 'LotSize'},
 {key: 'Multiplier', name: 'Multiplier'},
 {key: 'Security', name: 'Security'},
 {key: 'Src', name: 'Src'},
].map( c => ({ ...c, ...defaultColumnProperties}));

const columnsOptions = [
 {value: 'Num', label: '#'},
 {value: 'Symbol', label: 'Symbol'},
 {value: 'Market', label: 'Market'},
 {value: 'Open', label: 'Open'},
 {value: 'High', label: 'High'},
 {value: 'Low', label: 'Low'},
 {value: 'Close', label: 'Close'},
 {value: 'Qty', label: 'Qty'},
 {value: 'Ask', label: 'Ask'},
 {value: 'AskSize', label: 'AskSize'},
 {value: 'Bid', label: 'Bid'},
 {value: 'BidSize', label: 'BidSize'},
 {value: 'VWAP', label: 'VWAP'},
 {value: 'Volumn', label: 'Volumn'},
 {value: 'Time', label: 'Time'},
 {value: 'LotSize', label: 'LotSize'},
 {value: 'Multiplier', label: 'Multiplier'},
 {value: 'Security', label: 'Security'},
 {value: 'Src', label: 'Src'},
]

const groupColumns = [
 {label: 'Columns', options: columnsOptions}
]

const rows = [
 {Num: '1', Symbol: '1000', Market: 'Data', Open: 'Data', High: 'Data', Low: 'Data', Close: 'Data', Qty: 'Data', Ask: 'Data', AskSize: 'Data', Bid: 'Data', BidSize: 'Data', VWAP: 'Data', Volumn: 'Data', Time: 'Data', LotSize: 'Data', Multiplier: 'Data', Security: 'Data', Src: 'Data'},
 {Num: '2', Symbol: '1000', Market: 'Data', Open: 'Data', High: 'Data', Low: 'Data', Close: 'Data', Qty: 'Data', Ask: 'Data', AskSize: 'Data', Bid: 'Data', BidSize: 'Data', VWAP: 'Data', Volumn: 'Data', Time: 'Data', LotSize: 'Data', Multiplier: 'Data', Security: 'Data', Src: 'Data'}
];

const cell = {
 height: 27
}

const onWidthChanged = () => {
 window.dispatchEvent(new Event('resize'));
}

const options = [
 {value: 'TF', label: 'TF'},
 {value: 'HG', label: 'HG'},
 {value: 'SIM', label: 'SIM'},
 {value: 'cpt_test', label: 'cpt_test'},
 {value: 'MS', label: 'MS'},
 {value: 'KGI', label: 'KGI'}
]

const sourceOptions = [
 {value: 'MS', label: 'ms'},
 {value: 'KGI', label: 'kgi'}
]

const securityOptions = [
 {value: 'none', label: 'server is unreachable'}
]



class MarketWatch extends Component{
 state = {
  show: false,
  columns: columns
 }

 checkBoxHandler = (col) => {
  const { columns } = this.state;
  this.setState({
   columns: columns.map(column => {
    if (col === column.name) {
     return { ...column, selected: !column.selected };
    }
   return column;
   })
 })
 }

 ColumnsHandler = () => {
  this.setState({show: !this.state.show})
 }

 render() {
  let arr = this.state.columns.filter(column => !column.selected)

  return (
   <>
    <div className='DragHandle'>
       <p style={{flex: '50%'}}>Market Watch</p>
       <Select
         options={sourceOptions}
         inputValue='source'
         width='92%'
         containerWidth='13%'/>
       <Select
         options={securityOptions}
         inputValue='add security to watch'
         width='96%'
         containerWidth='28%'/>
       <div className='DragHandle__img' style={{background: this.state.show ? 'linear-gradient(90deg, #00c9ff, #22adf6)' : null}}>
          <img src={ColumnsImg} alt='' onClick={this.ColumnsHandler}/>
          <FilterSelect caption='Columns' show={this.state.show}>
            {columns.map(column => (
             <div onClick={() => this.checkBoxHandler(column.name)}><input type='checkbox' on id={column.name}/><label for={column.name}>{column.name}</label></div>
            ))}
          </FilterSelect>
        </div>
    </div>
   <DataGrid
     columns={arr}
     onWidthChanged={onWidthChanged}
     rowGetter={i => rows[i]}
     rowsCount={2}
     rowHeight={27}
     minHeight={50}
     defaultCellContentRenderer={valueCellContentRenderer}
     />
   </>

  );
 }
}

export default MarketWatch;

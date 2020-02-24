import React, { Component } from 'react';
import DataGrid, {valueCellContentRenderer} from 'react-data-grid';
import '../grid.css';
import classes from './lastGrid.module.css';
import Select from '../../ui/select/select';
import FilterSelect from '../../ui/filterSelect/filterSelect';
import ColumnsImg from '../../../images/columns.svg';
import Rejects from './rejects/rejects';
import Positions from './positions/positions';
import Trades  from './trades/trades';
import Orders from './orders/orders';

const defaultColumnProperties = {
 resizable: true,
 width: 70,
 selected: false
};

const columnsReject = [
 {key: 'NumReject', name: '#'},
 {key: 'SymbolReject', name: 'Symbol'},
 {key: 'MarketReject', name: 'Market'},
 {key: 'AlgReject', name: 'Alg'},
 {key: 'AccReject', name: 'Acc'},
 {key: 'StatusReject', name: 'Status'},
 {key: 'ReasnReject', name: 'Reasn'},
 {key: 'QuantityReject', name: 'Quantity'},
 {key: 'PriceReject', name: 'Price'},
 {key: 'SideReject', name: 'Side'},
 {key: 'BrokerAccReject', name: 'BrokerAcc'},
 {key: 'TypeReject', name: 'Type'},
 {key: 'ClOrdIdReject', name: 'ClOrdId'},
 {key: 'OrderIdReject', name: 'OrderId'},
 {key: 'TIFReject', name: 'TIF'},
 {key: 'AidReject', name: 'Aid'},
 {key: 'Time0Reject', name: 'Time0'},
 {key: 'SecurityIDReject', name: 'SecurityID'},
 {key: 'UserIDReject', name: 'UserID'},
].map( c => ({ ...c, ...defaultColumnProperties}));

const columnsPositions = [
 {key: 'Num', name: '#'},
 {key: 'Symbol', name: 'Symbol'},
 {key: 'Market', name: 'Market'},
 {key: 'Acc', name: 'Acc'},
 {key: 'Positions', name: 'Positions'},
 {key: 'Bought', name: 'Bought'},
 {key: 'Sold', name: 'Sold'},
 {key: 'Working', name: 'Working'},
 {key: 'BrokerAcc', name: 'BrokerAcc'},
 {key: 'NetPNL', name: 'Net PNL'},
 {key: 'Realized PNL', name: 'Realized PNL'},
 {key: 'Commision', name: 'Commision'},
 {key: 'Unrealized PNL', name: 'Unrealized PNL'},
 {key: 'DateTime', name: 'DateTime'},
 {key: 'SecurityInfo', name: 'SecurityInfo'},
].map( c => ({ ...c, ...defaultColumnProperties}));

const columnsTrades = [
 {key: 'Num', name: '#'},
 {key: 'Symbol', name: 'Symbol'},
 {key: 'Market', name: 'Market'},
 {key: 'Time', name: 'Time'},
 {key: 'Algo', name: 'Algo'},
 {key: 'Acc', name: 'Acc'},
 {key: 'Status', name: 'Status'},
 {key: 'Quantity', name: 'Quantity'},
 {key: 'Price', name: 'Price'},
 {key: 'LastQty', name: 'LastQty'},
 {key: 'LastPx', name: 'LastPx'},
 {key: 'CumQty', name: 'CumQty'},
 {key: 'AvgPx', name: 'AvgPx'},
 {key: 'Side', name: 'Side'},
 {key: 'BrokerAcc', name: 'BrokerAcc'},
 {key: 'ExecId', name: 'ExecId'},
 {key: 'Type', name: 'Type'},
 {key: 'ClOrdId', name: 'ClOrdId'},
 {key: 'OrderId', name: 'OrderId'},
 {key: 'TIF', name: 'TIF'},
 {key: 'Aid', name: 'Aid'},
 {key: 'Time0', name: 'Time0'},
 {key: 'SecurityId', name: 'SecurityId'},
 {key: 'UserId', name: 'UserId'},
].map( c => ({ ...c, ...defaultColumnProperties}));

const columnsOrders = [
 {key: 'Num', name: '#'},
 {key: 'Market', name: 'Market'},
 {key: 'Time', name: 'Time'},
 {key: 'Algo', name: 'Algo'},
 {key: 'Acc', name: 'Acc'},
 {key: 'Status', name: 'Status'},
 {key: 'Quantity', name: 'Quantity'},
 {key: 'Price', name: 'Price'},
 {key: 'LastQty', name: 'LastQty'},
 {key: 'LastPx', name: 'LastPx'}
].map( c => ({ ...c, ...defaultColumnProperties}));

const selectOptions = [
 {value: 'server unreachable', label: 'server unreachable'},
]

const onWidthChanged = () => {
 window.dispatchEvent(new Event('resize'));
}

class LastGrid extends Component{
 state = {
  show: false,
  tab: 'Positions',
  columns: columnsPositions
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
  console.log(this.state)
 }

 ColumnsHandler = () => {
  this.setState({show: !this.state.show})
 }

 currentGrid = (<Rejects/>)

 changeTabHandler = (tab) => {
  switch(this.state.tab) {
   case 'Rejects': this.setState({tab: tab, columns: columnsReject, show: false}); break;
   case 'Positions': this.setState({tab: tab, columns: columnsPositions, show: false}); break;
   case 'Trades': this.setState({tab: tab, columns: columnsTrades, show: false}); break;
   case 'Orders': this.setState({tab: tab, columns: columnsOrders, show: false}); break;
  }
  console.log(this.state)
 }

 render() {
  let arr = this.state.columns.filter(column => !column.selected)
  switch(this.state.tab) {
   case 'Rejects': this.currentGrid = <Rejects columns={this.state.columns}/>; break;
   case 'Positions': this.currentGrid = <Positions columns={this.state.columns}/>; break;
   case 'Trades': this.currentGrid = <Trades columns={this.state.columns}/>; break;
   case 'Orders': this.currentGrid = <Orders columns={this.state.columns}/>; break;
  }
  return (
   <>
    <div className='DragHandle'>
       <div className={classes.Tabs}>
        <div className={classes.Tab}
             onClick={() => this.changeTabHandler('Rejects')}
             style={{background: this.state.tab === 'Rejects' ? '#434453' : null,
                     height: this.state.tab === 'Rejects' ? '102%' : null}}>
              Rejects</div>
        <div className={classes.Tab}
             onClick={() => this.changeTabHandler('Positions')}
             style={{background: this.state.tab === 'Positions' ? '#434453' : null,
                     height: this.state.tab === 'Positions' ? '102%' : null}}>
             Positions</div>
        <div className={classes.Tab}
             onClick={() => this.changeTabHandler('Trades')}
             style={{background: this.state.tab === 'Trades' ? '#434453' : null,
                     height: this.state.tab === 'Trades' ? '102%' : null}}
             >Trades</div>
        <div className={classes.Tab}
             onClick={() => this.changeTabHandler('Orders')}
             style={{background: this.state.tab === 'Orders' ? '#434453' : null,
                     height: this.state.tab === 'Orders' ? '102%' : null}}
             Orders>Orders</div>
       </div>
       <Select
         options={selectOptions}
         inputValue='add col to group'
         width='96%'
         containerWidth='28%'/>
       <div className='DragHandle__img' style={{background: this.state.show ? 'linear-gradient(90deg, #00c9ff, #22adf6)' : null}}>
          <img src={ColumnsImg} alt='' onClick={this.ColumnsHandler}/>
          <FilterSelect caption='Columns' show={this.state.show}>
            {this.state.columns.map(column => (
             <div onClick={() => this.checkBoxHandler(column.name)}><input type='checkbox' on id={column.name}/><label for={column.name}>{column.name}</label></div>
            ))}
          </FilterSelect>
        </div>
    </div>
   {this.currentGrid}
   </>

  );
 }
}

export default LastGrid;

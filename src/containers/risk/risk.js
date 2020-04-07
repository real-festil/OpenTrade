import React, { Component } from 'react';
import ChangePassword from '../../components/changePassword/changePassword';
import PlaceOrder from '../../components/placeOrder/placeOrder';
import AlgoEditor from '../../components/editors/algoEditor/algoEditor';
import RiskEditor from '../../components/editors/riskEditor/riskEditor';
import Button from '../../components/ui/button/button';
import Header from  '../../components/ui/header/header';
import Sidedrawer from '../../components/ui/sidedrawer/sidedrawer';
import RGL, { WidthProvider } from 'react-grid-layout';
import { Grid } from '@material-ui/core';
import classes from './risk.module.css';
import gridLayout from '../../components/grids/gridLayout/gridLayout';
import '../dashboard/Dragging.css';
import GridTemplate from '../../components/riskGrids/gridTemplate/gridTemplate';
import * as zoom from 'chartjs-plugin-zoom'
import FullScreen from 'react-full-screen';
import SizeMe from '../dashboard/sizeMe';
import Treeview from '../../components/ui/treeview/treeview.js';
import crossImage from '../../images/cross.svg';
import {connect} from "react-redux";

const GridLayout = SizeMe(RGL);


class Risk extends Component {
    state = {
        showPlaceOrder: false,
        showChangePassword: false,
        showAlgo: false,
        showRisk: false,
        showSidedrawer: true,
        layout: [],
        counter: 0,
        treeShow: true,
        subTreeShow: false,
        subTree2Show: false
    }

    grids = [];

    placeOrderHandler = () => {
        this.setState({showPlaceOrder: true})
    }

    changePasswordHandler = () => {
        this.setState({showChangePassword: true})
    }

    algoHandler = () => {
        this.setState({showAlgo: true})
    }

    riskHandler = () => {
        this.setState({showRisk: true})
    }

    addTableHandler = ( key, name, isChart ) => {
      console.log(this.state.counter)
      let arr = this.state.layout.filter(i => i.i === key);
      console.log(arr);
      if (arr.length !== 0) return;
      this.setState({
        layout: this.state.layout.concat({
          i: key,
          x: parseInt(this.state.counter),
          y: Infinity,
          w: 4,
          h: 3
        }),
        counter: this.state.counter === 8 ? 0 : this.state.counter + 4
      }, this.renderAddTableHandler(key, name, isChart))
    }

    deleteTableHandler = ( key, name ) => {
      console.log('onDelete')
      this.setState(
        prevState => ({
          layout: prevState.layout.filter(grid => grid.i !== key),
          counter: this.state.counter === 0 ? 8 : this.state.counter - 4
        }),
        this.renderDeleteTableHandler(key, name)
      );
    }

    renderDeleteTableHandler = ( key, name ) => {
      this.grids = this.grids.filter(grid => grid.key !== key)
    }

    renderAddTableHandler = ( key, name, isChart ) => {
      console.log(isChart);
      this.grids.push(
      <div className={classes.Placeholder} key={key}>
        <div className={this.props.isDark ? 'DragHandle' : this.props.isBlue ? "BlueDragHandle" : 'WhiteDragHandle'}>
          <p>{name}</p>
          <img src={crossImage}
               alt=""
               style={{cursor: "pointer", width: "15px", position: "relative", left: "-25px"}}
               onClick={() => this.deleteTableHandler(key,name)}/>
        </div>
        <GridTemplate key={key} caption={name} isChart={isChart ? true : false}/>
      </div>
      )
    }

    showSidedrawerHandler = () => {
        if (localStorage.getItem('SideDrawerOpen') === 'true') {
            return;
        } else {
            this.setState({showSidedrawer: !this.state.showSidedrawer});
            setTimeout(() => window.dispatchEvent(new Event('resize')),100);
            this.onWidthChanged();
        }
    }

    modalClosedHandler = () => {
        this.setState({showPlaceOrder: false, showChangePassword: false, showAlgo: false, showRisk: false})
    }

    alertClickedHandler = () => {
        alert('admin required')
    }

    onFullscreenHandler = () => {
      this.setState({isFullscreen: true})
    }

    onLogout = () => {
      let promise = new Promise(( resolve ) => {
        resolve(this.setState({isLogged: false}));
      });
      promise.then (
        result => {
          localStorage.setItem('isLogged', this.state.isLogged);
          window.location.reload();
        }
      )
    }

    onWidthChanged = () => {
        setTimeout(() => window.dispatchEvent(new Event('resize')), 0)
        setTimeout(() => window.dispatchEvent(new Event('resize')), 200)
    }

    onTreeClicked = () => {
        this.setState({treeShow: !this.state.treeShow})
    }

    onSubTreeClicked = () => {
      this.setState({subTreeShow: !this.state.subTreeShow})
    }

    onSubTree2Clicked = () => {
      this.setState({subTree2Show: !this.state.subTree2Show})
    }

    render() {

        return (
            <>
                <Header caption='Risk'
                    clicked={this.placeOrderHandler}
                    sidedrawerClicked={this.showSidedrawerHandler}
                    changeClicked={this.changePasswordHandler}
                    alertClicked={this.alertClickedHandler}
                    algoClicked={this.riskHandler}/>
                <div className='grid' style={{backgroundColor: this.props.isDark ? null : this.props.isBlue ? "rgb(44, 61, 99)" : "#e3e4e5"}}>
                    <Sidedrawer showSidedrawer={this.state.showSidedrawer} LogOut={this.onLogout}/>
                    <div className={classes.Tree}>
                      <Treeview clicked={this.onTreeClicked} caption='Template'>
                        {this.state.treeShow ?
                        <>
                          <div className={classes.SubTree}>
                            <Treeview clicked={this.onSubTreeClicked} caption='intraday pnls'>
                              {this.state.subTreeShow ?
                              <div>
                                <li onClick={() => this.addTableHandler("dayPnlsNet", "template|interday pnls|net")}>net</li>
                                <li onClick={() => this.addTableHandler("dayPnlsRealized", "template|interday pnls|realized")}>realized</li>
                                <li onClick={() => this.addTableHandler("dayPnlsUnrealized", "template|interday pnls|unrealized")}>unrealized</li>
                              </div>: null}
                            </Treeview>
                          </div>
                          <div className={classes.SubTree}>
                            <Treeview clicked={this.onSubTree2Clicked} caption='pnls'>
                              {this.state.subTree2Show ?
                              <div className={classes.SubTree}>
                                <li onClick={() => this.addTableHandler("pnlsNet", "template|pnls|net", true)}>net</li>
                                <li onClick={() => this.addTableHandler("pnlsRealized", "template|pnls|realized")}>realized</li>
                                <li onClick={() => this.addTableHandler("pnlsUnrealized", "template|pnls|unrealized")}>unrealized</li>
                              </div>: null}
                            </Treeview>
                          </div>
                          <li onClick={() => this.addTableHandler("topGross", "template|top gross value")}>top gross value</li>
                          <li onClick={() => this.addTableHandler("totalGross", "template|total gross value", true)}>total gross value</li>
                        </> :  null}
                      </Treeview>
                    </div>
                    <div className='tables' style={{transform: this.state.showSidedrawer ? 'translateX(0)' : 'translateX(-50px)',
                                                    transition: '0.3s ease-out',
                                                    height: this.state.showSidedrawer ? null : '100%',
                                                    position: this.state.showSidedrawer ? null : 'absolute',
                                                    left: this.state.showSidedrawer ? null : '50px',
                                                    width: this.state.showSidedrawer ? '100%' : 'calc(100% + 50px)'}}>
                        <GridLayout
                                cols={12}
                                rowHeight={81}
                                onResizeStop={this.onWidthChanged}
                                useCSSTransforms={false}
                                draggableHandle={this.props.isDark ? '.DragHandle' : this.props.isBlue ? ".BlueDragHandle" : '.WhiteDragHandle'}
                                layout={this.state.layout}>
                                  {this.grids}
                        </GridLayout>

                    </div>
                </div>

                {/* <Button caption='Change password' clicked={this.changePasswordHandler}/> <br/>
                <Button caption='Algo' clicked={this.algoHandler} />
                <Button caption='Risk' clicked={this.riskHandler} /> */}
                <PlaceOrder show={this.state.showPlaceOrder} modalClosed={this.modalClosedHandler}/>
                <ChangePassword show={this.state.showChangePassword} modalClosed={this.modalClosedHandler}/>
                <AlgoEditor show={this.state.showAlgo} modalClosed={this.modalClosedHandler}/>
                <RiskEditor show={this.state.showRisk} modalClosed={this.modalClosedHandler}/>
            </>
        );
    }
}

const mapStateToProps = (state) => {
 return {
   isDark: state.theme === "dark" ? true : false,
   isBlue: state.theme === "blue" ? true : false
 }
}

export default connect(mapStateToProps)(Risk);
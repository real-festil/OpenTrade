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
import classes from './dashboard.module.css';
import gridLayout from '../../components/grids/gridLayout/gridLayout';
import './Dragging.css';
import Overview from '../../components/grids/overview/overview';
import Select from '../../components/ui/select/select';
// import Pl from '../../components/grids//PL/PL';

const GridLayout = WidthProvider(RGL);


class Dashboard extends Component {
    state = {
        showPlaceOrder: false,
        showChangePassword: false,
        showAlgo: false,
        showRisk: false,
        showSidedrawer: true
    }

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

    showSidedrawerHandler = () => {
        if (localStorage.getItem('SideDrawerOpen') === 'true') {
            return;
        } else {
            this.setState({showSidedrawer: !this.state.showSidedrawer});
            setTimeout(() => window.dispatchEvent(new Event('resize')),100);
            this.onWidthChanged();
        }
    }

    kek = () => {
        alert('kek')
    }

    modalClosedHandler = () => {
        this.setState({showPlaceOrder: false, showChangePassword: false, showAlgo: false, showRisk: false})
    }

    alertClickedHandler = () => {
        alert('admin required')
    }

    layout = [
        {i: 'a', x: 0, y: 0, w: 5 , h: 4, minW: 1, maxW: Infinity, minH: 0.5, maxH: Infinity},
        {i: 'b', x: 5, y: 0, w: 7 , h: 4, minW: 1, maxW: Infinity, minH: 0.5, maxH: Infinity},
        {i: 'c', x: 0, y: 2, w: 2 , h: 4, minW: 1, maxW: Infinity, minH: 0.5, maxH: Infinity},
        {i: 'd', x: 2, y: 2, w: 4 , h: 4, minW: 1, maxW: Infinity, minH: 0.5, maxH: Infinity},
        {i: 'e', x: 6, y: 2, w: 6 , h: 4, minW: 1, maxW: Infinity, minH: 0.5, maxH: Infinity},
    ]

    onWidthChanged = () => {
        setTimeout(() => window.dispatchEvent(new Event('resize')), 0)
        setTimeout(() => window.dispatchEvent(new Event('resize')), 200)
    }

    options = [
     {value: 'TF', label: 'TF'},
     {value: 'HG', label: 'HG'},
     {value: 'SIM', label: 'SIM'},
     {value: 'cpt_test', label: 'cpt_test'},
     {value: 'MS', label: 'MS'},
     {value: 'KGI', label: 'KGI'}
    ]

    render() {
        return (
            <>
                <Header caption='Dashboard'
                    clicked={this.placeOrderHandler}
                    sidedrawerClicked={this.showSidedrawerHandler}
                    changeClicked={this.changePasswordHandler}
                    alertClicked={this.alertClickedHandler}
                    algoClicked={this.algoHandler}/>
                <div className='grid'>
                    <Sidedrawer showSidedrawer={this.state.showSidedrawer}/>
                    <div className='tables' style={{transform: this.state.showSidedrawer ? 'translateX(0)' : 'translateX(-50px)',
                                                    transition: '0.3s ease-out',
                                                    height: this.state.showSidedrawer ? null : '100%',
                                                    position: this.state.showSidedrawer ? null : 'absolute',
                                                    left: this.state.showSidedrawer ? null : '50px',
                                                    width: this.state.showSidedrawer ? '100%' : 'calc(100% + 50px)'}}>
                        <GridLayout
                                cols={12}
                                rowHeight={100}
                                onResizeStop={this.onWidthChanged}
                                useCSSTransforms={false}
                                draggableHandle='.DragHandle'
                                layout={this.layout}>
                                    <div className={classes.Placeholder} key='c'></div>
                                    <div className={classes.Placeholder} key='a'>
                                      <div className='DragHandle'>
                                        <p>Overview</p>
                                        <Select
                                         options={this.options}
                                         isMulti
                                         inputValue='choose interested accounts'
                                         width='100%'
                                         containerWidth='70%'/>
                                      </div>
                                       <Overview/>
                                     </div>
                                    <div className={classes.Placeholder} key='b'>MarketWatch</div>
                                    <div className={classes.Placeholder} key='d'>PL</div>
                                    <div className={classes.Placeholder} key='e'>lastGrid</div>
                        </GridLayout>

                    </div>
                </div>
                {/* <Pl/> */}
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

export default Dashboard;
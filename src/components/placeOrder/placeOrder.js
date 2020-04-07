import React, { Component } from 'react';
import Select from '../ui/select/select';
import classes from './placeOrder.module.css';
import GridLayout from 'react-grid-layout';
import Button from '../ui/button/button';
import Input from '../ui/input/input';
import Backdrop from '../ui/backdrop/backdrop';
import '../changePassword/changePassword.css';
import './Dragging.css';
import crossImage from '../../images/cross.svg';
import Manual from './Forms/Manual/manual';
import AlphaExample from './Forms/AplhaExample/alphaExample';
import Twap from './Forms/TWAP/twap';
import TwapPy from './Forms/TwapPy/twapPy';
import MACrossing from './Forms//MACrossing/macrossing';
import {connect} from "react-redux";

class PlaceOrder extends Component {
    state = {
        styles : {border: ''},
        errorMessage : '',
        option: 'Manual'
    }

    options = [
        { value: 'Manual', label: 'MANUAL' },
        { value: 'MACrossing', label: 'MACrossing' },
        { value: 'TWAP', label: 'TWAP' },
        { value: 'AlphaExample', label: 'AlphaExample' },
        { value: 'TwapPy', label: 'TwapPy' }
    ];

    layout = [
        {i: 'a', x: 4, y: 0, w: 6 , h: 3, minW: 3.3, maxW: Infinity, minH: 2.9, maxH: Infinity}
    ];

    onSelectedChange = (data) => {
        this.setState({option: data.value})
    }

    render() {
        let optionRender = this.state.option;
        if ( optionRender === 'Manual') {
            optionRender = (
                <Manual modalClosed={this.props.modalClosed}/>
            )
        }  else if ( optionRender === 'AlphaExample') {
            optionRender = (
                <AlphaExample modalClosed={this.props.modalClosed}/>
            )
        }  else if ( optionRender === 'TWAP') {
            optionRender = (
                <Twap modalClosed={this.props.modalClosed}/>
            )
        }  else if ( optionRender === 'TwapPy') {
            optionRender = (
                <TwapPy modalClosed={this.props.modalClosed}/>
            )
        } else if ( optionRender === 'MACrossing') {
            optionRender = (
                <MACrossing modalClosed={this.props.modalClosed}/>
            )
        }
        return (
            <>
            <Backdrop show={this.props.show} />
            <GridLayout className={classes.placeOrder}
                        draggableHandle='.Handler'
                        layout={this.layout}
                        width={1200}
                        verticalCompact={false}
                        style={{
                            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                            opacity: this.props.show ? '1' : '0',
                            zIndex: '101'
                        }}
                        isResizable={true}>
                <div key="a" className={this.props.isDark ? classes.Draggable : this.props.isBlue ? classes.Draggable : classes.WhiteDraggable}>
                    <div className='Handler'>
                        <div className={classes.Header}>
                            <div className={classes.HeaderGroup}>
                                <p>Algo: </p>
                                    <Select options={this.options}
                                            value={this.options}
                                            changed={(data) => this.onSelectedChange(data)}
                                            width='145%'
                                            containerWidth='30%'/>
                            </div>
                            <img src={crossImage} alt='' onClick={this.props.modalClosed}/>
                        </div>
                    </div>
                    {optionRender}
                </div>
            </GridLayout>
            </>
        )
    }
}

const mapStateToProps = (state) => {
 return {
   isDark: state.theme === "dark" ? true : false,
   isBlue: state.theme === "blue" ? true : false
 }
}

export default connect(mapStateToProps)(PlaceOrder);
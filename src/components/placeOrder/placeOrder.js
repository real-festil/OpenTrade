import React, { Component } from 'react';
import Select from '../ui/select/select';
import classes from './placeOrder.module.css';
import GridLayout from 'react-grid-layout';
import Button from '../ui/button/button';
import Input from '../ui/input/input';
import '../changePassword/changePassword.css';
import crossImage from '../../images/cross.svg';
import Manual from './Forms/Manual/manual';
import AlphaExample from './Forms/AplhaExample/alphaExample';
import Twap from './Forms/TWAP/twap';
import TwapPy from './Forms/TwapPy/twapPy';
import MACrossing from './Forms//MACrossing/macrossing';

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
        {i: 'a', x: 1, y: 0, w: 6 , h: 3, minW: 3.3, maxW: Infinity, minH: 2.9, maxH: Infinity}
    ];

    onSelectedChange = (data) => {
        this.setState({option: data.value})
    }

    render() {
        let optionRender = this.state.option;
        if ( optionRender === 'Manual') {
            optionRender = (
                <Manual/>
            )
        }  else if ( optionRender === 'AlphaExample') {
            optionRender = (
                <AlphaExample/>
            )
        }  else if ( optionRender === 'TWAP') {
            optionRender = (
                <Twap/>
            )
        }  else if ( optionRender === 'TwapPy') {
            optionRender = (
                <TwapPy/>
            )
        } else if ( optionRender === 'MACrossing') {
            optionRender = (
                <MACrossing/>
            )
        }
        return (
            <GridLayout className={classes.placeOrder}
                        draggableHandle='.Handler'
                        layout={this.layout}
                        width={1200}
                        isResizable={true}>
                <div key="a" className={classes.Draggable}>
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
                            <img src={crossImage} alt=''/>
                        </div>
                    </div>
                    {optionRender}
                </div>

            </GridLayout>
        )
    }
}

export default PlaceOrder;
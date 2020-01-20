import React, { Component } from 'react';
import classes from './changePassword.module.css';
import GridLayout from 'react-grid-layout';
import Button from '../ui/button/button';
import './changePassword.css';
import crossImage from '../../images/cross.svg';

class changePassword extends Component {
    state = {
        styles : {border: ''},
        errorMessage : ''
    }

    layout = [
        {i: 'a', x: 5, y: 0, w: 3, h: 2.2, minW: 2.8, maxW: Infinity, minH: 2.1, maxH: Infinity}
    ];



    onChangePassword = () => {
        this.setState({styles:{border: '1px solid red'}, errorMessage: 'Server unreachable'});
        console.log(this.state)
    }

    render() {
        return (
            <GridLayout className={classes.changePassword} layout={this.layout} width={1200} isResizable={true}>
                <div key="a" className={classes.Draggable}>
                    <div className={classes.DraggablePart}>
                        <p>Change Password</p>
                        <img src={crossImage} alt=''/>
                    </div>
                    <p className={classes.Error}>{this.state.errorMessage}</p>
                    <div className={classes.InputPart}>

                        <input className={classes.Input} style={this.state.styles} placeholder="Change password"></input>
                        <input className={classes.Input} style={this.state.styles} placeholder="New password"></input>
                        <input className={classes.Input} style={this.state.styles} placeholder="New password confirmation"></input>
                    </div>

                    <div className={classes.ButtonPart}>

                        <Button caption="Submit" clicked={this.onChangePassword}/>
                        <Button caption="Cancel" btnSelector="btnDisabled"/>
                    </div>
                </div>

            </GridLayout>
        )
    }
}

export default changePassword;
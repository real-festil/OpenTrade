import React, { Component } from 'react';
import classes from './sidedrawer.module.css';
import crossImage from '../../../images/cross.svg';
import dashImage from '../../../images/dash.svg';
import shieldImage from '../../../images/shield.svg';
import arrowImage from '../../../images/arrow.svg';
import wandImage from '../../../images/wand.svg';
import manImage from '../../../images/man.svg';
import { Link } from "react-router-dom";

class Sidedrawer extends Component {
    state = {
        opened: false,
        visible: this.props.showSidedrawer,
        userClicked: false,
        themeClicked: false
    }

    openHandler = () => {
        this.setState({opened: !this.state.opened, userClicked: false, themeClicked: false});
        setTimeout(() => localStorage.setItem('SideDrawerOpen', this.state.opened), 0);
        setTimeout(() => window.dispatchEvent(new Event('resize')), 200);

    }

    userHandler = () => {
        this.setState({userClicked: !this.state.userClicked})
    }

    themeHandler = () => {
        this.setState({themeClicked: !this.state.themeClicked})
    }

    visibleHandler = () => {
        this.setState({visible: !this.state.visible})
    }

    render() {

        return (
            <>
                <div className={classes.Sidedrawer} style={{width: this.state.opened ? '200px' : '50px', transform: this.props.showSidedrawer ? 'translateX(0)' : 'translateX(-50px)'}}>
                    <Link to='/dashboard' style={{textDecoration: 'none'}}>
                        <div className={this.state.opened ? classes.ButtonWrapperOpen : classes.ButtonWrapper} style={{width: this.state.opened ? '200px' : '50px'}}>
                            <img src={dashImage} alt=''/>
                            <div >Dashboard</div>
                        </div>
                    </Link>
                    <Link to='/risk' style={{textDecoration: 'none'}}>
                        <div className={this.state.opened ? classes.ButtonWrapperOpen : classes.ButtonWrapper} style={{width: this.state.opened ? '200px' : '50px'}} >
                            <img src={shieldImage} alt=''/>
                            <div>Risk</div>
                        </div>
                    </Link>
                    <div className={classes.ControlWrapper}>
                        <div className={this.state.opened ? classes.ButtonWrapperOpen : classes.ButtonWrapper}
                            style={{width: this.state.opened ? '200px' : '50px'}}
                            onClick={this.userHandler}>
                            <img src={manImage} alt='' style={{marginTop : this.state.userClicked ? '-50px' : null}}/>
                            <div>
                                <p className={classes.Caption} style={{margin: this.state.userClicked ? '10px 0' : null}}>User</p>
                                <div className={classes.Control} style={{display: this.state.opened ? 'none' : 'block',
                                                                        display: this.state.userClicked ? 'block' : 'none',
                                                                        position: this.state.userClicked ? 'static' : null,
                                                                        margin: this.state.userClicked ? '0' : null,
                                                                        height: this.state.userClicked ? '45px' : null,
                                                                        paddingTop : this.state.userClicked ? '10px': null
                                                                            }}>
                                    <p>Log-out</p>
                                </div>
                            </div>
                        </div>
                        <div className={this.state.opened ? classes.ButtonWrapperOpen : classes.ButtonWrapper}
                            style={{width: this.state.opened ? '200px' : '50px'}}
                            onClick={this.themeHandler}>
                            <img src={wandImage} alt='' style={{marginTop : this.state.themeClicked ? '-50px' : null}}/>
                            <div style={{height: this.state.themeClicked ? '90px' : null}}>
                                <p className={classes.Caption} style={{margin: this.state.themeClicked ? '10px 0' : null}}>Theme</p>
                                <div className={classes.Control} style={{display: this.state.opened ? 'none' : 'block',
                                                                        display: this.state.themeClicked ? 'block' : null,
                                                                        position: this.state.themeClicked ? 'static' : null,
                                                                        margin: this.state.themeClicked ? '0' : null,
                                                                        height: this.state.themeClicked ? '45px' : null,
                                                                        paddingTop : this.state.themeClicked ? '10px': null
                                                                            }}>
                                    <p>Light Dark</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.Expand} onClick={this.openHandler} style={{width: this.state.opened ? '200px' : '50px'}}>
                            <img src={arrowImage} alt='' style={{transition: '0.3s ease-in', transform: this.state.opened ? 'rotate(180deg)' : 'rotate(0deg)'}}/>
                        </div>
                </div>
            </>
        )
    }
}

export default Sidedrawer;
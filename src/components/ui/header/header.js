import React, { Component } from 'react';
import classes from './header.module.css'
import bellImage from '../../../images/bell.svg';
import settingsImage from '../../../images/settings.svg';
import editorImage from '../../../images/editor.svg';
import Button from '../button/button';
import Select from '../iconSelect/iconSelect';

class Header extends Component{
    state = {
        value: ''
    }

    options = [
        {value: 'ChangePassword', label: 'Change My Password'},
        {value: 'Users', label: 'Users'},
        {value: 'Broker accounts', label: 'Broker accounts'},
        {value: 'Sub accounts', label: 'Sub accounts'},
        {value: 'Exchanges', label: 'Exchanges'},
        {value: 'Sub accounts of user', label: 'Sub accounts of user'},
        {value: 'Broker accounts of sub account', label: 'Broker accounts of sub account'},
    ]

    exchanges = [
        {value: 'ecms', label: 'ec_ms'},
        {value: 'ecsim', label: 'ec_sim'},
        {value: 'eckgi', label: 'ec_kgi'},
    ]

    datas = [
        {value: 'CONS', label: 'CONS'},
        {value: 'mdms', label: 'md_ms'},
        {value: 'mdsim', label: 'md_sim'},
        {value: 'mdkgi', label: 'md_kgi'},
    ]

    groupedOptions = [
        {
            label: 'Exchanges',
            options: this.exchanges
        },
        {
            label: 'Datas',
            options: this.datas
        }
    ]

    onSelectedChange = (data) => {
        let promise = new Promise((resolve) => {
            resolve(this.setState({value: data.value}));
        });
        promise.then (
            result => {
                if (this.state.value === 'ChangePassword') {
                    this.props.changeClicked()
                } else this.props.alertClicked()
            }
        )
    }

    render () {
        return (
            <div className={classes.Header}>
                <div className={classes.Left}>
                    <div className={classes.Sandwich} onClick={this.props.sidedrawerClicked}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <h1>{this.props.caption}</h1>
                </div>
                <div className={classes.Right}>
                    <div className={classes.Settings}>
                        <img src={settingsImage} alt=''/>
                        <div className={classes.Select}>
                            <Select
                                background={settingsImage}
                                width='0px'
                                menuWidth='240px'
                                options={this.options}
                                changed={(data)=>this.onSelectedChange(data)} />
                        </div>
                    </div>
                    <Button caption='Place Order' clicked={this.props.clicked} style={{width: '100px'}}/>
                    <img src={editorImage} alt='' onClick={this.props.algoClicked}/>
                    <div className={classes.Settings}>
                        <img src={bellImage} alt=''/>
                        <div className={classes.Select}>
                            <Select
                                background={bellImage}
                                width='0px'
                                menuWidth='240px'
                                options={this.groupedOptions}
                                changed={(data)=>this.onSelectedChange(data)} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
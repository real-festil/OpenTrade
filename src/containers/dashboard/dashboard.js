import React, { Component } from 'react';
import ChangePassword from '../../components/changePassword/changePassword';
import PlaceOrder from '../../components/placeOrder/placeOrder';
import Button from '../../components/ui/button/button';

class Dashboard extends Component {
    state = {
        showPlaceOrder: false,
        showChangePassword: false
    }

    placeOrderHandler = () => {
        this.setState({showPlaceOrder: true})
    }

    changePasswordHandler = () => {
        this.setState({showChangePassword: true})
    }

    modalClosedHandler = () => {
        this.setState({showPlaceOrder: false, showChangePassword: false})
    }

    render() {
        return (
            <>
                <p>dashboard</p>
                <Button caption='Place order' clicked={this.placeOrderHandler}/>  <br/>
                <Button caption='Change password' clicked={this.changePasswordHandler}/> <br/>
                <PlaceOrder show={this.state.showPlaceOrder} modalClosed={this.modalClosedHandler}/>
                <ChangePassword show={this.state.showChangePassword} modalClosed={this.modalClosedHandler}/>
            </>
        );
    }
}

export default Dashboard;
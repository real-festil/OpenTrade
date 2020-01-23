import React, { Component } from 'react';
import ChangePassword from '../../components/changePassword/changePassword';
import PlaceOrder from '../../components/placeOrder/placeOrder';
import AlgoEditor from '../../components/editors/algoEditor/algoEditor';
import Button from '../../components/ui/button/button';


class Dashboard extends Component {
    state = {
        showPlaceOrder: false,
        showChangePassword: false,
        showAlgo: true
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

    modalClosedHandler = () => {
        this.setState({showPlaceOrder: false, showChangePassword: false, showAlgo: false})
    }

    render() {
        return (
            <>
                <p>dashboard</p>
                <Button caption='Place order' clicked={this.placeOrderHandler}/>  <br/>
                <Button caption='Change password' clicked={this.changePasswordHandler}/> <br/>
                <Button caption='Algo' clicked={this.algoHandler} />
                <PlaceOrder show={this.state.showPlaceOrder} modalClosed={this.modalClosedHandler}/>
                <ChangePassword show={this.state.showChangePassword} modalClosed={this.modalClosedHandler}/>
                <AlgoEditor show={this.state.showAlgo} modalClosed={this.modalClosedHandler}/>
            </>
        );
    }
}

export default Dashboard;
import React, { Component } from 'react';
import ChangePassword from '../../components/changePassword/changePassword';
import PlaceOrder from '../../components/placeOrder/placeOrder';

class Dashboard extends Component {
    render() {
        return (
            <>
                <p>dashboard</p>
                <PlaceOrder/>
                <ChangePassword/>
            </>
        );
    }
}

export default Dashboard;
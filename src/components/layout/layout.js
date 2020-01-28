import React, { Component } from 'react';
import LoginClasses from '../../containers/login/login.module.css';

class Layout extends Component {
    render() {
        return (
            <div>
                {/* <ThemeSwitcher
                    cssSelector={arr}
                    darkColor="#282c34"
                    lightColor="#ffffff"
                    lightTextColor="#272b33"
                    darkTextColor="#ffffff"/> */}
                {this.props.children}
            </div>
        );
    }
}

export default Layout;
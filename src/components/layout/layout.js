import React, { Component } from 'react';
import ThemeSwitcher from 'react-theme-switcher';
import LoginClasses from '../../containers/login/login.module.css';
import classes from './layout.module.css';

class Layout extends Component {
    render() {
        let classe = LoginClasses.Login;
        classe = '.' + classe;

        let arr = ['body', classe];
        console.log(arr);
        return (
            <div>
                {/* <ThemeSwitcher
                    cssSelector={arr}
                    darkColor="#282c34"
                    lightColor="#ffffff"
                    lightTextColor="#272b33"
                    darkTextColor="#ffffff"/> */}
                <p>Layout</p>
                {this.props.children}
            </div>
        );
    }
}

export default Layout;
import React, { Component } from 'react';
import ThemeSwitcher from 'react-theme-switcher';

class Layout extends Component {
    render() {
        return (
            <div>
                <ThemeSwitcher/>
                <p>Layout</p>
                {this.props.children}
            </div>
        );
    }
}

export default Layout;
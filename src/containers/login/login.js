import React, { Component } from 'react';
import Input from '../../components/ui/loginInput/input';
import Button from '../../components/ui/button/button';
import classes from './login.module.css';
import manImage from '../../images/man.svg';
import lockImage from '../../images/lock.svg';

class Login extends Component {
    state = {
        username: '',
        password: '',
        valid: false,
        errormessage: 'Server unreachable'
    }

    userInputHandler = (event) => {
        this.setState({username : event.target.value});
        this.buttonClicked();
    }

    passwordInputHandler = (event) => {
        this.setState({password : event.target.value});
        this.buttonClicked();
    }

    buttonClicked = () => {
        setTimeout(() => {
            if(this.state.username === 'test' && this.state.password === 'test')
                this.setState({valid: true});
            else {
                this.setState({valid: false});
            }
            }, 0);
    }

    errorHandler = () => {
        setTimeout(() => {
                this.setState({errormessage: 'Unknown username or password'})
            }, 0);
    }

    render() {
        let button = this.state.username === '' || this.state.password === '' ? true : false;
        let pass = this.state.valid ? (<Button clicked={this.props.clicked} caption="Login" disabled={button}/>)
                                    : (<Button clicked={this.errorHandler} caption="Login" disabled={button}/>)
        return (
            <div data-theme={this.props.dataTheme} className={classes.Login} >
                <h1>Login</h1>
                <p>Sing in to your account</p>
                <p>Username/password: <span className={classes.YellowText}>test/test</span></p>
                <Input changed={this.userInputHandler} img={manImage} placeholder='Username' type='text' value={this.state.value}/>
                <Input changed={this.passwordInputHandler} img={lockImage} value={this.state.value} placeholder='Password' type='password'/>
                {pass}
                <p>{this.state.errormessage}</p>
            </div>
        );
    }
}

export default Login;
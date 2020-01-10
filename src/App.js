import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/layout/layout';
import Dashboard from './containers/dashboard/dashboard';
import Login from './containers/login/login';
import Risk from './containers/risk/risk';

class App extends Component {
  state = {
    isLogged: false
  }

  componentDidMount() {
    const isLogged = JSON.parse(localStorage.getItem('isLogged'));
    console.log(isLogged)
    this.setState({isLogged : isLogged});
  }

  onLoginPass = () => {
    let promise = new Promise(( resolve ) => {
      resolve(this.setState({isLogged: true}));
    });
    promise.then (
      result => localStorage.setItem('isLogged', this.state.isLogged)
    )
  }

  onLogout = () => {
    let promise = new Promise(( resolve ) => {
      resolve(this.setState({isLogged: false}));
    });
    promise.then (
      result => localStorage.setItem('isLogged', this.state.isLogged)
    )
  }

  render () {
    let login = (<Login clicked={this.onLoginPass}/>);
    let redirect = this.state.isLogged ?
        (
          <>
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/login'><Redirect to='/dashboard'/></Route>
            <Route path='/risk' component={Risk}/>
            <Route path='/' exact>
              <Redirect to='/dashboard'/>
            </Route>
            <button onClick={this.onLogout}>Log Out</button>
          </>
        )
      : (
          <>
            <Route path='/login'>{login}</Route>
            <Route path='/dashboard'>
              <Redirect to='/login'/>
            </Route>
            <Route path='/risk'>
              <Redirect to='/login'/>
            </Route>
            <Route path='/' exact>
              <Redirect to='/login'/>
            </Route>
          </>
        )
      ;
    return (
      <Layout>
        <BrowserRouter>
          <Switch>
            {redirect}
          </Switch>
        </BrowserRouter>
      </Layout>
    );
  }
}

export default App;

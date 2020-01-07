import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/layout/layout';
import Dashboard from './containers/dashboard/dashboard';
import Login from './containers/login/login';
import Risk from './containers/risk/risk';
import ReactAux from './hoc/ReactAux';

class App extends Component {
  state = {
    isLogged: false
  }

  onLoginPass = () => {
    this.setState({isLogged: true});
    console.log(this.state);
  }

  render () {
    let login = (<Login clicked={this.onLoginPass}/>);
    let redirect = this.state.isLogged ?
        (
          <ReactAux>
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/login'><Redirect to='/dashboard'/></Route>
            <Route path='/risk' component={Risk}/>
            <Route path='/' exact>
              <Redirect to='/dashboard'/>
            </Route>
          </ReactAux>
        )
      : (
          <ReactAux>
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
          </ReactAux>
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

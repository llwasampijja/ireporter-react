import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SecureRoute from '../../routers';
import SignupForm from '../SignupForm';
import GetAllRedflags from '../Redflags/GetRedflags';
import CreateARedflag from '../Redflags/CreateRedflag';
import './App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <SecureRoute path="/incidents" component={CreateARedflag} />
          <SecureRoute exact path="/" component={GetAllRedflags} />
          <Route path="/sign-up" render={props => <SignupForm {...props} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
